// Get all payment buttons
const paymentButtons = document.querySelectorAll(".payment-button");


// paypal.Buttons({
//   style: {
//     layout: 'vertical',
//     color:  'blue',
//     shape:  'rect',
//     label:  'paypal'
//   }
// }).render('#paypal-button-container');



// Add event listeners to each payment button
paymentButtons.forEach(button => {
  button.addEventListener("click", function() {
    const target = button.getAttribute("data-target");
    const paymentWindow = document.getElementById(target);

    // Hide all payment windows
    document.querySelectorAll(".payment-window").forEach(window => {
      window.style.display = "none";
    });

    // Show the selected payment window
    paymentWindow.style.display = "block";

  });

});
