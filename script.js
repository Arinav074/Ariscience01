let dark = false;

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const logo = document.getElementById('logo');
  dark = !dark;
  logo.innerHTML = dark
    ? '🌙 <span class="logo-text">Ari</span>'
    : '☀️ <span class="logo-text">Ari</span>';
}

function loadFact() {
  const facts = [
    "Water expands when it freezes, unlike most substances.",
    "The human body contains about 37.2 trillion cells.",
    "The sun is a nearly perfect sphere of hot plasma.",
    "Light from the Sun takes 8 minutes and 20 seconds to reach Earth.",
    "Carbon is the basis for all known life on Earth.",
    "The universe is approximately 13.8 billion years old.",
    "A single lightning bolt is five times hotter than the surface of the Sun.",
    "Bananas are radioactive due to potassium-40.",
    "The Earth’s magnetic field protects us from solar wind.",
    "DNA stores genetic information in all living things.",
    "Saturn could float in water because it’s mostly gas.",
    "Sound travels four times faster in water than in air.",
    "Octopuses have three hearts and blue blood.",
    "An adult human skeleton has 206 bones.",
    "Plants release oxygen through photosynthesis.",
    "Neurons transmit signals at up to 120 m/s.",
    "Black holes warp space and time around them.",
    "The speed of light is about 299,792 km per second.",
    "Most of the universe is made up of dark energy.",
    "Butterflies can see ultraviolet light."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const factElement = document.getElementById('fact');
  factElement.textContent = randomFact;
}

// Load a random fact on first page load
window.onload = loadFact;

function toggleText(button) {
  const parent = button.parentElement;
  const shortText = parent.querySelector('.short-text');
  const fullText = parent.querySelector('.full-text');

  if (fullText.style.display === 'none' || fullText.style.display === '') {
    fullText.style.display = 'block';
    shortText.style.display = 'none';
    button.textContent = 'Show Less';
  } else {
    fullText.style.display = 'none';
    shortText.style.display = 'block';
    button.textContent = 'Show More';
  }
}
