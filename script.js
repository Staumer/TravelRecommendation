// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Example: Show an alert when the recommendation button is clicked
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    alert("Your Dream Miles recommendations are being imagined!");
  });
}

// Example: Smooth scroll for internal links (if you add a nav later)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// --- Navigation Search Bar Functionality ---

// Select the search input (make sure your HTML has an input with id="nav-search")
const searchInput = document.getElementById("nav-search");

// Select all destination cards
const destinationCards = document.querySelectorAll(".card");

// Listen for typing in the search bar
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    destinationCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector(".tagline").textContent.toLowerCase();

      // Show card if it matches search text
      if (title.includes(query) || description.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}
