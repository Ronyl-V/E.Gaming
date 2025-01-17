// Get modal, button, and close elements
const contactModal = document.getElementById("contactModal");
const contactButton = document.querySelector(".click");
const closeModal = document.querySelector(".close");

// Function to open the modal
contactButton.addEventListener("click", () => {
    contactModal.style.display = "block";
});

// Function to close the modal when clicking the close button
closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
});

// Function to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
});

// Add event listener to the send button
const sendButton = document.querySelector("form button[type='submit']");
sendButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name && email && message) {
        alert("Your message has been sent!");
        // Optionally, clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        contactModal.style.display = "none"; // Close the modal
    } else {
        alert("Please fill out all fields before sending.");
    }
});