#!/usr/bin/env node
// Add (or renew) an email or access-code entry in public/data/access-list.json.
// Usage: node tools/add-access.js <email-or-code> [--months=3]
// node tools/add-access.js ten-email@example.com              # hạn 3 tháng mặc định
// node tools/add-access.js ten-email@example.com --months=6   # tuỳ chỉnh số tháng
// node tools/add-access.js team-abc123                        # mã dùng chung, không phải email


const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ACCESS_LIST_PATH = path.join(__dirname, "..", "public", "data", "access-list.json");

function parseArgs(argv) {
  const value = argv[2];
  let months = 3;
  for (const arg of argv.slice(3)) {
    const match = arg.match(/^--months=(-?\d+)$/);
    if (match) {
      months = parseInt(match[1], 10);
    }
  }
  return { value, months };
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function hashValue(normalized) {
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function maskEmail(normalizedEmail) {
  const [local, domain] = normalizedEmail.split("@");
  if (!domain) return normalizedEmail;
  const visible = local.slice(0, Math.min(4, Math.max(3, local.length > 4 ? 4 : 3)));
  return `${local.slice(0, visible.length)}***@${domain}`;
}

function maskCode(normalizedCode) {
  const visible = normalizedCode.slice(0, Math.min(4, Math.max(3, normalizedCode.length > 4 ? 4 : 3)));
  return `${normalizedCode.slice(0, visible.length)}***`;
}

function addMonths(date, months) {
  const result = new Date(date.getTime());
  result.setMonth(result.getMonth() + months);
  return result;
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function loadAccessList() {
  if (!fs.existsSync(ACCESS_LIST_PATH)) {
    return { users: [] };
  }
  const raw = fs.readFileSync(ACCESS_LIST_PATH, "utf8");
  return JSON.parse(raw);
}

function saveAccessList(data) {
  fs.mkdirSync(path.dirname(ACCESS_LIST_PATH), { recursive: true });
  fs.writeFileSync(ACCESS_LIST_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function main() {
  const { value, months } = parseArgs(process.argv);

  if (!value) {
    console.error("Usage: node tools/add-access.js <email-or-code> [--months=3]");
    process.exit(1);
  }

  const isEmail = value.includes("@");
  const normalized = normalize(value);
  const hash = hashValue(normalized);
  const mask = isEmail ? maskEmail(normalized) : maskCode(normalized);
  const expiresAt = formatDate(addMonths(new Date(), months));
  const type = isEmail ? "email" : "code";

  const data = loadAccessList();
  const existingIndex = data.users.findIndex((u) => u.hash === hash);
  const entry = { type, mask, hash, expiresAt };

  if (existingIndex >= 0) {
    data.users[existingIndex] = entry;
    console.log(`Updated (${type}): ${mask} -> expires ${expiresAt}`);
  } else {
    data.users.push(entry);
    console.log(`Added (${type}): ${mask} -> expires ${expiresAt}`);
  }

  saveAccessList(data);
}

main();
