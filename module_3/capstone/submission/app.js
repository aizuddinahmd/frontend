// Helper function to fetch data from the API
async function fetchColorSchemes() {
  try {
    const response = await fetch("https://colr.org/json/schemes/random/7");
    const data = await response.json();
    return data.schemes;
  } catch (error) {
    console.error("Error fetching color schemes:", error);
    return [];
  }
}

// Helper function to create color scheme cards
function createColorSchemeCard(scheme) {
  const card = document.createElement("div");
  card.className = "color-scheme-card";

  // Loop through each color in the scheme and create a colored box
  scheme.colors.forEach((color) => {
    const colorBox = document.createElement("div");
    colorBox.className = "color-box";
    colorBox.style.backgroundColor = `#${color}`;
    card.appendChild(colorBox);
  });

  return card;
}

// Function to populate color schemes
async function populateColorSchemes() {
  const colorSchemesContainer = document.getElementById(
    "colorSchemesContainer"
  );

  const colorSchemes = await fetchColorSchemes();

  colorSchemes.forEach((scheme) => {
    const card = createColorSchemeCard(scheme);
    colorSchemesContainer.appendChild(card);
  });
}

// Call the populateColorSchemes function when the page loads
window.addEventListener("load", populateColorSchemes);
