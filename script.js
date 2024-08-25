// script.js

document.addEventListener('DOMContentLoaded', function() {
  const increaseButtons = document.querySelectorAll('.increase');
  const decreaseButtons = document.querySelectorAll('.decrease');
  const removeButtons = document.querySelectorAll('.remove-item');
  const totalElement = document.querySelector('.cart-total h3');

  increaseButtons.forEach(button => {
      button.addEventListener('click', function() {
          const countElement = this.previousElementSibling;
          let count = parseInt(countElement.textContent);
          count++;
          countElement.textContent = count;
          updateTotal();
      });
  });

  decreaseButtons.forEach(button => {
      button.addEventListener('click', function() {
          const countElement = this.nextElementSibling;
          let count = parseInt(countElement.textContent);
          if (count > 1) {
              count--;
              countElement.textContent = count;
              updateTotal();
          }
      });
  });

  removeButtons.forEach(button => {
      button.addEventListener('click', function() {
          const cartItem = this.parentElement;
          cartItem.remove();
          updateTotal();
      });
  });

  function updateTotal() {
      let total = 0;
      const cartItems = document.querySelectorAll('.cart-item');
      cartItems.forEach(item => {
          const priceElement = item.querySelector('.item-details p');
          const quantityElement = item.querySelector('.quantity .count');
          const price = parseFloat(priceElement.textContent.replace('$', ''));
          const quantity = parseInt(quantityElement.textContent);
          total += price * quantity;
      });
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }
});