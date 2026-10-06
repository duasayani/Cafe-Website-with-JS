swal("☕ Welcome to Café Shop!",
  "🎉 Flat 20% OFF on Your First Order");


let button = document.querySelectorAll(".order-btn");

function showalert()  {
  swal("Successfully Added! ☕🤎", "Your item has been added to the cart.", "success");
}

button.forEach(function(singlebtn) {
    singlebtn.addEventListener('click' , showalert);
})

