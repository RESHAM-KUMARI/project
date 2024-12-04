document.addEventListener("DOMContentLoaded", () => {
    const bundleOptions = document.querySelectorAll("input[name='bundle']");
    const totalPrice = document.getElementById("totalPrice");
  
    bundleOptions.forEach(option => {
      option.addEventListener("change", () => {
        const price = option.value;
        totalPrice.textContent = `DKK ${price}.00`;
      });
    });
  
    document.getElementById("addToCart").addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
  


  function displaySelections() {
    const size1 = document.getElementById('size1').value;
    const color1 = document.getElementById('color1').value;
    const size2 = document.getElementById('size2').value;
    const color2 = document.getElementById('color2').value;

    const output = `
      Item 1: Size - ${size1}, Colour - ${color1} <br>
      Item 2: Size - ${size2}, Colour - ${color2}
    `;

    document.getElementById('output').innerHTML = output;
  }