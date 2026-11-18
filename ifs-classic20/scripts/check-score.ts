import { scoreTrick, trickByCode } from "../src/lib/score";

const shift = trickByCode("SHI");
if (!shift) throw new Error("missing shift");

const result = scoreTrick({
  trick: shift,
  execution: "base",
  distance: "80cm",
  attributes: ["Toe", "Sit"],
  qoe: ["2", "2", "1"],
  overtime: true,
});

if (result.total !== 5.39) {
  throw new Error(`expected 5.39, got ${result.total}`);
}

const footgun = trickByCode("FOO");
if (!footgun) throw new Error("missing footgun");
const combo = scoreTrick({
  trick: footgun,
  execution: "combo",
  distance: "80cm",
  attributes: ["Toe"],
  qoe: ["2", "2", "2"],
  overtime: false,
});
if (combo.total !== 6.3) {
  throw new Error(`expected 6.30, got ${combo.total}`);
}

console.log("score checks ok", result.total, combo.total);
