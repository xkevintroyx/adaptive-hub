function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(div => div.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

// Synesthesia Mapper
function submitSynesthesia() {
  const word = document.getElementById("wordInput").value;
  const color = document.getElementById("colorInput").value;
  const result = `You mapped "${word}" to the color ${color}.`;
  document.getElementById("synesthesiaResult").innerText = result;

  logData("synesthesia", { word, color });
}

// Micro‑Prediction Market
function submitPrediction(choice) {
  const result = `You predicted: ${choice}`;
  document.getElementById("predictionResult").innerText = result;

  logData("prediction", { choice });
}

// Curiosity Cloud
function submitCuriosity() {
  const curiosity = document.getElementById("curiosityInput").value;
  const result = `You are curious about: ${curiosity}`;
  document.getElementById("curiosityResult").innerText = result;

  logData("curiosity", { curiosity });
}

// Logging function
function logData(type, payload) {
  const entry = {
    type,
    payload,
    timestamp: new Date().toISOString()
  };

  // Save locally in browser (for demo)
  console.log("Captured data:", entry);

  // Send to your backend API (example)
  fetch("https://your-data-collector.example.com/collect", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entry)
  });
}
