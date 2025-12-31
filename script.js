function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

// Keywords (static list for now)
const keywords = ["modular SaaS","adaptive funnels","boho florals","retro Americana","color therapy"];
const keywordList = document.getElementById("keywordList");
keywords.forEach(k => {
  const li = document.createElement("li");
  li.innerText = k;
  keywordList.appendChild(li);
});

// Quotes
const quotes = [
  "Simplicity is the ultimate sophistication.",
  "Design is intelligence made visible.",
  "Innovation distinguishes between a leader and a follower."
];
document.getElementById("quoteText").innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Calculator
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = num1 + num2;
}

// Color Palette
function generateColors() {
  const colorsDiv = document.getElementById("colors");
  colorsDiv.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = "#" + Math.floor(Math.random()*16777215).toString(16);
    const box = document.createElement("div");
    box.style.background = color;
    box.style.width = "60px";
    box.style.height = "60px";
    box.style.display = "inline-block";
    box.style.margin = "5px";
    colorsDiv.appendChild(box);
  }
}
generateColors();
