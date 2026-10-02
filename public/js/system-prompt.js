// SYSTEM PROMPT PANEL - lets each exam group keep its own instructions
// for Chrome's "Ask Gemini" sidebar, which reads the page's visible
// content. The panel stays in the DOM (collapsed by default) so Gemini
// can still read it even when it's visually hidden.
(function () {
  function currentGroupId() {
    return getUserStorage("group_id") || groupId || "";
  }

  function renderForCurrentGroup() {
    var textarea = document.getElementById("systemPromptText");
    if (!textarea) return;
    textarea.value = getSystemPrompt(currentGroupId());
  }

  function showSavedMessage() {
    var msg = document.getElementById("systemPromptSavedMsg");
    if (!msg) return;
    msg.classList.remove("d-none");
    setTimeout(function () {
      msg.classList.add("d-none");
    }, 2000);
  }

  function init() {
    var toggleBtn = document.getElementById("btnToggleSystemPrompt");
    var panel = document.getElementById("systemPromptPanel");
    var saveBtn = document.getElementById("btnSaveSystemPrompt");
    var resetBtn = document.getElementById("btnResetSystemPrompt");
    var textarea = document.getElementById("systemPromptText");
    var groupSelect = document.getElementById("groupList");

    if (toggleBtn && panel) {
      toggleBtn.addEventListener("click", function () {
        panel.classList.toggle("d-none");
      });
    }

    if (saveBtn && textarea) {
      saveBtn.addEventListener("click", function () {
        setSystemPrompt(currentGroupId(), textarea.value);
        showSavedMessage();
      });
    }

    if (resetBtn && textarea) {
      resetBtn.addEventListener("click", function () {
        textarea.value = DEFAULT_SYSTEM_PROMPTS[currentGroupId()] || "";
      });
    }

    if (groupSelect) {
      groupSelect.addEventListener("change", renderForCurrentGroup);
    }

    renderForCurrentGroup();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
