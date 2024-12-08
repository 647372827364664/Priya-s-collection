// Load products dynamically
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const products = await response.json();

    const productGrid = document.getElementById("featured-products");
    productGrid.innerHTML = products
        .map(
            (product) => `
        <div>
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <a href="product-details.html?id=${product.id}">View Details</a>
        </div>
    `
        )
        .join("");
});
