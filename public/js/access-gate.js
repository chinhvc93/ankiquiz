// ACCESS GATE - simple client-side screen to keep accidental visitors out.
// NOTE: this is NOT real security. Anyone who inspects this file, the
// access list JSON, or the Network tab can still read the hashes and
// all quiz data.
(function () {
  var LEGACY_PASSWORD_HASH = "1603bdd84d50d66881abf1a866d637708e6dfc4f59fb1d8fb3b94c12ed1ff63f"; // sunny5868
  var ACCESS_LIST_URL = "./public/data/access-list.json";
  var SESSION_STORAGE_KEY = "ACCESS_GATE_SESSION";
  var SESSION_DURATION_MS = 2 * 60 * 60 * 1000;
  var TIME_CODE_TOLERANCE_MIN = 1;

  var accessListPromise = null;
  var logoutTimerId = null;
  var accessListLoadFailed = false;

  function getOverlay() {
    return document.getElementById("accessGateOverlay");
  }

  function hideOverlay() {
    var overlay = getOverlay();
    if (overlay) {
      overlay.classList.add("d-none");
    }
  }

  function showOverlay() {
    var overlay = getOverlay();
    if (overlay) {
      overlay.classList.remove("d-none");
    }
  }

  function showError(message) {
    var errorEl = document.getElementById("accessGateError");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove("d-none");
    }
  }

  function clearError() {
    var errorEl = document.getElementById("accessGateError");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.add("d-none");
    }
  }

  async function sha256Hex(text) {
    var data = new TextEncoder().encode(text);
    var digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map(function (b) { return b.toString(16).padStart(2, "0"); })
      .join("");
  }

  function loadAccessList() {
    if (!accessListPromise) {
      accessListPromise = fetch(ACCESS_LIST_URL)
        .then(function (res) { return res.ok ? res.json() : { users: [] }; })
        .catch(function () {
          accessListLoadFailed = true;
          return { users: [] };
        });
    }
    return accessListPromise;
  }

  function pad2(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function getValidTimeCodes(now) {
    var codes = [];
    for (var offset = -TIME_CODE_TOLERANCE_MIN; offset <= TIME_CODE_TOLERANCE_MIN; offset++) {
      var t = new Date(now.getTime() + offset * 60 * 1000);
      codes.push(pad2(t.getHours()) + pad2(t.getMinutes()));
    }
    return codes;
  }

  async function matchesListEntry(value, expectedType) {
    var normalized = value.trim().toLowerCase();
    var hash = await sha256Hex(normalized);
    var list = await loadAccessList();
    var users = (list && list.users) || [];

    var entry = users.find(function (u) { return u.hash === hash && u.type === expectedType; });
    if (!entry) return false;

    var expiresAt = new Date(entry.expiresAt + "T23:59:59");
    return expiresAt.getTime() >= Date.now();
  }

  async function matchesPasswordOrTimeCode(value) {
    var hash = await sha256Hex(value);
    if (hash === LEGACY_PASSWORD_HASH) return true;

    var validCodes = getValidTimeCodes(new Date());
    if (validCodes.indexOf(value) !== -1) return true;

    return matchesListEntry(value, "code");
  }

  function scheduleAutoLogout(expiresAt) {
    if (logoutTimerId) {
      clearTimeout(logoutTimerId);
    }
    var delay = expiresAt - Date.now();
    if (delay <= 0) {
      forceLogout();
      return;
    }
    logoutTimerId = setTimeout(forceLogout, delay);
  }

  function startSession() {
    var expiresAt = Date.now() + SESSION_DURATION_MS;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({ expiresAt: expiresAt }));
    hideOverlay();
    scheduleAutoLogout(expiresAt);
  }

  function forceLogout() {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    if (logoutTimerId) {
      clearTimeout(logoutTimerId);
      logoutTimerId = null;
    }
    var input = document.getElementById("accessGateInput");
    if (input) input.value = "";
    clearError();
    showOverlay();
  }

  async function trySubmit() {
    var input = document.getElementById("accessGateInput");
    if (!input) return;
    var value = input.value.trim();
    if (!value) {
      showError("Vui lòng nhập email hoặc mã truy cập.");
      return;
    }

    clearError();

    var isEmail = value.indexOf("@") !== -1;
    var ok = isEmail
      ? await matchesListEntry(value, "email")
      : await matchesPasswordOrTimeCode(value);

    if (ok) {
      startSession();
    } else if (isEmail && accessListLoadFailed) {
      showError("Không tải được danh sách truy cập (có thể do mở trang bằng file:// thay vì qua server/http). Hãy thử mã giờ hiện tại hoặc mở trang qua http://.");
    } else {
      showError("Không hợp lệ hoặc đã hết hạn. Vui lòng thử lại.");
    }
  }

  function checkExistingSession() {
    var raw = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return false;

    var session;
    try {
      session = JSON.parse(raw);
    } catch (e) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return false;
    }

    if (!session.expiresAt || session.expiresAt <= Date.now()) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return false;
    }

    hideOverlay();
    scheduleAutoLogout(session.expiresAt);
    return true;
  }

  function init() {
    loadAccessList();

    if (checkExistingSession()) {
      return;
    }

    var button = document.getElementById("accessGateSubmit");
    var input = document.getElementById("accessGateInput");
    var showToggle = document.getElementById("accessGateShowInput");

    if (button) {
      button.addEventListener("click", trySubmit);
    }
    if (input) {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          trySubmit();
        }
      });
      input.focus();
    }
    if (showToggle && input) {
      showToggle.addEventListener("change", function () {
        input.type = showToggle.checked ? "text" : "password";
      });
    }
  }

  window.AccessGate = { logout: forceLogout };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
