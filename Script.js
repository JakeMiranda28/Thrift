document.querySelectorAll(".SHOP NOW-button").forEach(button => {
  button.addEventListener("click", function(e) {
    e.preventDefault();

    const link = this.getAttribute("data-link");
    if (link) {
      // Redirect to the link in the same tab if data-link exists
      window.location.href = link;
      return;
    }

    // Otherwise, show product SHOP NOW modal

    // Get the parent product card of the clicked button
    const productCard = this.closest('.product-card');
    if (!productCard) return;

    // Extract product info from the card
    const title = productCard.querySelector('h4').innerText;
    const price = productCard.querySelector('.price').innerText;
    const imgSrc = productCard.querySelector('img').src;

    // Fill the modal content dynamically
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalPrice").innerText = price;
    document.getElementById("modalImage").src = imgSrc;

    // Show the modal
    document.getElementById("productModal").style.display = "flex";
  });
});

// Close product SHOP NOW modal when clicking the close button
document.getElementById("closeModal").addEventListener("click", function() {
  document.getElementById("productModal").style.display = "none";
});

// Optional: Close modal if clicking outside modal content
document.getElementById("productModal").addEventListener("click", function(e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
