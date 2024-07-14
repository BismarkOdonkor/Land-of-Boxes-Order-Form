// script.js
const form = document.getElementById('orderForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(form);

  // Process form data
  const orderDetails = {};
  for (const [key, value] of formData.entries()) {
    orderDetails[key] = value;
  }

  // Calculate total cost
  const products = [
    { price: 5, quantity: orderDetails.product1 },
    { price: 10, quantity: orderDetails.product2 },
    { price: 15, quantity: orderDetails.product3 },
    { price: 20, quantity: orderDetails.product4 },
    { price: 30, quantity: orderDetails.product5 }
  ];

  let totalCost = 0;
  products.forEach(product => {
    totalCost += product.price * product.quantity;
  });

  // Display order summary
  const orderSummary = `
    Name: ${orderDetails.name}
    Address: ${orderDetails.address}
    Phone: ${orderDetails.phone}
    Email: ${orderDetails.email}

    Products:
    1. The EconoBox: ${orderDetails.product1} x R5 = R${orderDetails.product1 * 5}
    2. The Standard Box: ${orderDetails.product2} x R10 = R${orderDetails.product2 * 10}
    3. The Premium Box: ${orderDetails.product3} x R15 = R${orderDetails.product3 * 15}
    4. The Deluxe Box: ${orderDetails.product4} x R20 = R${orderDetails.product4 * 20}
    5. The Super Deluxe Box: ${orderDetails.product5} x R30 = R${orderDetails.product5 * 30}

    Total Cost: R${totalCost}

    Payment Method:
    Card Type: ${orderDetails.cardType}
    Card Number: ${orderDetails.cardNumber}
    Expiry Date: ${orderDetails.expiryDate}

    Billing Address: ${orderDetails.billingAddress}
    Delivery Address: ${orderDetails.deliveryAddress || 'Same as Billing Address'}
  `;

  alert(orderSummary);
});
