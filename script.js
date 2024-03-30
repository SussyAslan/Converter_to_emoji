let dcLetter = {
  a: "🇦",
  b: "🇧",
  c: "🇨",
  d: "🇩",
  e: "🇪",
  f: "🇫",
  g: "🇬",
  h: "🇭",
  i: "🇮",
  j: "🇯",
  k: "🇰",
  l: "🇱",
  m: "🇲",
  n: "🇳",
  o: "🇴",
  p: "🇵",
  q: "🇶",
  r: "🇷",
  s: "🇸",
  t: "🇹",
  u: "🇺",
  v: "🇻",
  w: "🇼",
  x: "🇽",
  y: "🇾",
  z: "🇿",
  1: "1️⃣",
  2: "2️⃣",
  3: "3️⃣",
  4: "4️⃣",
  5: "5️⃣",
  6: "6️⃣",
  7: "7️⃣",
  8: "8️⃣",
  9: "9️⃣",
  0: "0️⃣",
};
let outputValueArr = [];

const dcLetterEntries = Object.entries(dcLetter);
console.log(dcLetterEntries);

let inputValue = null;
const inputTextArea = document.getElementById("inputTextArea");

const outputTextArea = document.getElementById("outputTextArea");

inputTextArea.addEventListener("input", function (event) {
  inputValue = event.target.value;
});
function copyToClipboard() {
  outputTextArea.select();
  document.execCommand("Copy");
}
function onClickConvert() {
  outputValueArr = [];
  outputTextArea.innerHTML = inputValue;
  let splitValue = inputValue.toLowerCase().split("");

  for (let i = 0; i < splitValue.length; i++) {
    const element1 = splitValue[i];
    if (element1 == " ") {
      outputValueArr.push("󠀠󠀠󠀠");
      outputValueArr.push("󠀠󠀠󠀠");
      outputValueArr.push("󠀠󠀠󠀠");
    } else if (element1 == ",") outputValueArr.push(",");
    else if (element1 == ".") outputValueArr.push(".");
    else if (element1 == "-") outputValueArr.push("-");
    else if (element1 == "!" && splitValue[i + 1] == "!") {
      outputValueArr.push("‼️");
      i++;
    } else if (element1 == "!" && splitValue[i + 1] == "?") {
      outputValueArr.push("⁉️");
      i++;
    } else if (element1 == "!") outputValueArr.push("❗");
    else if (element1 == "?") outputValueArr.push("❓");
    else {
      for (let j = 0; j < dcLetterEntries.length; j++) {
        const element2 = dcLetterEntries[j][0];

        if (element1 == element2) {
          outputValueArr.push(dcLetterEntries[j][1]);
        }
      }
    }
  }
  outputValueArr = outputValueArr.join(" ");
  outputTextArea.innerHTML = outputValueArr;
}
