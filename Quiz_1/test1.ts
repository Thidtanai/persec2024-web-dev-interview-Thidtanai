import hexToRgb from "./quiz1";

let testCases = [
  { input: "#FF9933", expected: "r:255, g:153, b:51" },
  { input: "#ff9933", expected: "r:255, g:153, b:51" },
  { input: "#FFF", expected: "r:255, g:255, b:255" },
  { input: "#000", expected: "r:0, g:0, b:0" },
];

testCases.forEach(({ input, expected }) => {
  const result = hexToRgb(input);
  console.log(`${input} = ${result}; Expected: ${expected}`);
});
