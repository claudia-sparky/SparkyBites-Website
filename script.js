// ----------------------
// SIMPLE MOCK LOGIN
// ----------------------
function login() {
    const email = document.getElementById("email").value;

    if (email.trim() === "") {
        alert("Enter email or phone!");
        return;
    }

    showScreen("menu-screen");
}

// ----------------------
// MENU DATA
// ----------------------
const menu = [
    { id: 1, name: "Burger", price: 250 },
    { id: 2, name: "Pizza Slice", price: 180 },
    { id: 3, name: "Fries", price: 120 },
    { id: 4, name: "Soda", price: 60 }
];

let cart = [];

// Render menu
window.onload = () => {
    const list = document.getElementById("menu-list");

    menu.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>KES ${item.price}</p>
            <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        list.appendChild(div);
    });
};

// ----------------------
// CART FUNCTIONS
// ----------------------
function addToCart(id) {
    const item = menu.find(m => m.id === id);
    cart.push(item);

    document.getElementById("cart-count").textContent = cart.length;
}

function openCart() {
    document.getElementById("cart-modal").style.display = "block";
    renderCart();
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function renderCart() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        container.innerHTML += `<p>${item.name} — KES ${item.price}</p>`;
    });

    document.getElementById("cart-total").textContent = "KES " + total;
}

// ----------------------
// CHECKOUT + ORDER STATUS
// ----------------------
function checkout() {
    closeCart();
    showScreen("order-screen");

    document.getElementById("order-status-text").textContent = "Preparing your meal...";

    setTimeout(() => {
        document.getElementById("order-status-text").textContent = "Cooking 🔥";
    }, 2000);

    setTimeout(() => {
        document.getElementById("order-status-text").textContent = "Ready for pickup 😋";
    }, 4000);
}

function backToMenu() {
    showScreen("menu-screen");
}

// ----------------------
// GLOBAL SCREEN SWITCHER
// ----------------------
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function logout() {
    cart = [];
    document.getElementById("cart-count").textContent = 0;
    showScreen("login-screen");
}