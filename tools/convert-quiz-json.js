#!/usr/bin/env node
// Convert a flat quiz JSON (topic_number/question_number/answers/...) into
// this project's public/data/examtopics/**/*.js format, split into parts
// of N questions each.
//
// Usage:
//   node tools/convert-quiz-json.js <input.json> --outDir=public/data/examtopics/SAP-C02 [--perPart=100] [--prefix=Part]
//
// Output: <outDir>/<prefix>1.js, <outDir>/<prefix>2.js, ...
// Each file declares `var Part1 = { msg, data }` (var name = file prefix,
// capitalized to match the project's convention) — rename both the
// variable and file manually afterwards if you want a different name
// (e.g. SAP_C02_Part3), and wire it into index.html / public/data/index.js
// yourself.

const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const inputPath = argv[2];
  let outDir = null;
  let perPart = 100;
  let prefix = "Part";

  for (const arg of argv.slice(3)) {
    let match;
    if ((match = arg.match(/^--outDir=(.+)$/))) {
      outDir = match[1];
    } else if ((match = arg.match(/^--perPart=(\d+)$/))) {
      perPart = parseInt(match[1], 10);
    } else if ((match = arg.match(/^--prefix=(.+)$/))) {
      prefix = match[1];
    }
  }

  return { inputPath, outDir, perPart, prefix };
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function textToHtmlParagraph(text) {
  if (!text) return "<p></p>";
  const withBreaks = escapeHtml(text).replace(/\n/g, "<br>");
  return `<p>${withBreaks}</p>`;
}

const ANSWER_KEYS = ["A", "B", "C", "D", "E", "F", "G", "H"];

function convertQuestion(source, index) {
  const questionId = `#${index + 1}`;
  const topicId = source.topic_number != null ? source.topic_number : 1;

  // source.answer is a run of letters with no separator, e.g. "A" or "CD"
  // for a multi-select question (not comma-separated).
  const correctAnswers = new Set(
    String(source.answer || "")
      .trim()
      .toUpperCase()
      .split("")
  );

  const answers = ANSWER_KEYS
    .filter((key) => source.answers && source.answers[key] !== undefined)
    .map((key) => ({
      choice: textToHtmlParagraph(`${key}. ${source.answers[key]}`),
      correct: correctAnswers.has(key),
      feedback: "",
    }));

  let generalFeedback = `<p>Correct Answer: ${Array.from(correctAnswers).join(", ")}</p>`;
  if (source.explanation) {
    generalFeedback += textToHtmlParagraph(source.explanation);
  }

  return {
    question_id: questionId,
    topic_id: topicId,
    course_id: 1,
    case_study_id: null,
    lab_id: 0,
    question_text: textToHtmlParagraph(source.question_text),
    mark: 1,
    is_partially_correct: Boolean(source.multiple_choice),
    question_type: "1",
    difficulty_level: "0",
    general_feedback: generalFeedback,
    is_active: true,
    answer_list: [
      {
        question_answer_id: 1,
        question_id: questionId,
        answers: answers,
      },
    ],
    topic_name: "",
    discusstion: [],
  };
}

function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

function main() {
  const { inputPath, outDir, perPart, prefix } = parseArgs(process.argv);

  if (!inputPath || !outDir) {
    console.error("Usage: node tools/convert-quiz-json.js <input.json> --outDir=<dir> [--perPart=100] [--prefix=Part]");
    process.exit(1);
  }

  const sourceData = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  if (!Array.isArray(sourceData)) {
    console.error("Input JSON must be an array of questions.");
    process.exit(1);
  }

  const converted = sourceData.map(convertQuestion);
  const parts = chunk(converted, perPart);

  fs.mkdirSync(outDir, { recursive: true });

  parts.forEach((partQuestions, i) => {
    const partNumber = i + 1;
    const varName = `${prefix}${partNumber}`;
    const fileName = `${prefix.toLowerCase()}${partNumber}.js`;
    const filePath = path.join(outDir, fileName);

    const fileContent = `var ${varName} = \n${JSON.stringify(
      { msg: "Quiz Questions", data: partQuestions },
      null,
      2
    )};\n`;

    fs.writeFileSync(filePath, fileContent, "utf8");
    console.log(`Wrote ${filePath} (${partQuestions.length} questions, var ${varName})`);
  });

  console.log(`\nTotal: ${converted.length} questions -> ${parts.length} part(s).`);
  console.log("Reminder: rename variables/files as needed, then wire them into index.html (<script> tag) and public/data/index.js (listExamGroup entry).");
}

main();
