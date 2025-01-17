var latest = document.querySelector('.latest');
var upcoming = document.querySelector('.upcoming');
var see = document.querySelector('.new'); //Visible content
var hidden = document.querySelector('.new.hidden'); // Hidden content
var leftbtn = document.getElementById('left');
var rightbtn = document.getElementById('right');

//Show contents
latest.addEventListener('click', ()=>{
    const saleSection = document.querySelector('.sale');
    saleSection.scrollIntoView({ behavior: 'smooth' });
    hidden.classList.add('hidden'); // Hide hidden content
    see.classList.remove('hidden'); //Show visible content 
});
upcoming.addEventListener('click', ()=>{
    const saleSection = document.querySelector('.sale');
    saleSection.scrollIntoView({ behavior: 'smooth' }); 
    see.classList.add('hidden'); //Hide Visible content
    hidden.classList.remove('hidden'); // Show hidden content
});

//for left and right buttons
leftbtn.addEventListener('click', ()=>{
    const saleSection = document.querySelector('.sale');
    saleSection.scrollIntoView({ behavior: 'smooth' });
    hidden.classList.add('hidden'); // Hide hidden content
    see.classList.remove('hidden'); //Show visible content 
});

rightbtn.addEventListener('click', ()=>{
    const saleSection = document.querySelector('.sale');
    saleSection.scrollIntoView({ behavior: 'smooth' }); 
    see.classList.add('hidden'); //Hide Visible content
    hidden.classList.remove('hidden'); // Show hidden content
});

//==========MODAL========//
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  const Card = document.querySelectorAll(".card");
  const closeModal = document.querySelectorAll(".close");

  // Variable to track whether listeners are active
  let modalListenersActive = false;

  // Function to attach event listeners for modals
  function addModalListeners() {
    if (!modalListenersActive) {
      Card.forEach((box, index) => {
        box.addEventListener("click", openModalHandler(index));
      });

      closeModal.forEach((button) => {
        button.addEventListener("click", closeModalHandler);
      });
      modalListenersActive = true; // Mark listeners as active
      console.log("Modal functionality enabled for screens > 768px.");
    }
  }

  // Function to remove event listeners for modals
  function removeModalListeners() {
    if (modalListenersActive) {
      Card.forEach((box) => {
        box.replaceWith(box.cloneNode(true)); // Replace cards to remove listeners
      });

      closeModal.forEach((button) => {
        button.replaceWith(button.cloneNode(true)); // Replace buttons to remove listeners
      });

      modalListenersActive = false; // Mark listeners as inactive
      console.log("Modal functionality disabled for screens <= 768px.");
    }
  }

  // Helper function to handle modal opening
  function openModalHandler(index) {
    return () => {
      const modal = document.querySelector(`#modal${index + 1}`);
      if (modal) {
        modal.style.display = "flex";
      }
    };
  }

  // Helper function to handle modal closing
  function closeModalHandler(event) {
    const button = event.target;
    const modalId = button.getAttribute("data-close");
    const modal = document.querySelector(`#${modalId}`);
    if (modal) {
      modal.style.display = "none";
    }
  }

  // Function to check screen width and manage listeners
  function manageModalListeners() {
    if (window.innerWidth > 768) {
      addModalListeners();
    } else {
      removeModalListeners();
    }
  }

  // Initialize modal functionality on page load
  manageModalListeners();

  // Re-check screen width on resize
  window.addEventListener("resize", manageModalListeners);
});

//FOR BUY BUTTON TO APPEAR
document.addEventListener("DOMContentLoaded", () => {
  const infoButtons = document.querySelectorAll(".info .btn");

  // Function to show or hide buttons based on screen width
  function toggleInfoButtons() {
    if (window.innerWidth <= 767) {
      infoButtons.forEach((button) => {
        button.style.display = "inline-block"; // Make buttons visible
      });
      console.log("Info buttons are visible for screens <= 767px.");
    } else {
      infoButtons.forEach((button) => {
        button.style.display = "none"; // Hide buttons
      });
      console.log("Info buttons are hidden for screens > 767px.");
    }
  }

  // Initialize on page load
  toggleInfoButtons();

  // Update on window resize
  window.addEventListener("resize", toggleInfoButtons);
});

// Select all "More info" buttons
const moreInfo1 = document.getElementById('info1');
const more1 = document.getElementById('more1');
const closeinfo1 = document.getElementById('closeinfo1');

//OPEN MODALS FOOR MORE INFO
moreInfo1.addEventListener('click', ()=>{
  more1.style.display = "block";
});

closeinfo1.addEventListener('click', ()=>{
  more1.style.display = "none";
});

//--------------FOR ADD TO CART-----------------------//
const products = [
  { id: 1, name: "Sonic X Shadows", image: "../images/Home/image/sonic.avif", price: 49.99 },
  { id: 2, name: "Call of Duty Black Ops 6", image: "../images/Home/image/PS5_COD6_02.jpg", price: 79.99 },
  { id: 3, name: "Ratchet and Clank", image: "../images/Home/image/clank.avif", price: 37.99 },
  { id: 4, name: "Mortal Kombat 11", image: "../images/Home/image/mortal.avif", price: 63.99 },
  { id: 5, name: "Last of Us 2", image: "../images/Home/image/lastofus.avif", price: 60.99 },
  { id: 6, name: "Spiderman 2", image: "../images/Home/image/sonic.avif", price: 59.99 },
  { id: 7, name: "God of War Ragnarok", image: "../images/Home/image/god.jpg", price: 47.99 },
  { id: 8, name: "Gran Tourismo 7", image: "../images/Home/image/tourismo.webp", price: 68.99 },
  { id: 9, name: "EA FC 25", image: "../images/Home/image/fc.webp", price: 79.99 },
  { id: 10, name: "GTA VI", image: "../images/Home/image/gta.jpeg", price: 78.99 },
  { id: 11, name: "Uncharted", image: "../images/Home/image/uncharted.jpg", price: 71.99 },
  { id: 12, name: "Street Fighter 6", image: "../images/Home/image/street-fighter.jpg", price: 69.99 },
  { id: 13, name: "Astro Bot", image: "../images/Home/image/astro.avif", price: 52.99 },
  { id: 14, name: "LEGO Horizon Adventures", image: "../images/Home/image/lego.jpg", price: 55.99 }
];

const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (cart.some(item => item.id === productId)) return;

    cart.push({ ...product, quantity: 1 });
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

function toggleModal() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    renderCartItems();
}

function renderCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');

    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>€${item.price}</p>
            </div>
            <div>
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalPriceDiv.innerText = `Total: €${total}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        const index = cart.indexOf(item);
        cart.splice(index, 1);
    }

    updateCartCount();
    renderCartItems();
}

function buyItems() {
    alert('Thank you for your purchase!');
    cart.length = 0;
    updateCartCount();
    toggleModal();
}

renderProducts();