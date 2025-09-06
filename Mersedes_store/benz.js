
  const buttons = document.querySelectorAll(".view-details");
  const customAlert = document.getElementById("customAlert");
  const alertTitle = document.getElementById("alertTitle");
  const alertPrice = document.getElementById("alertPrice");
  const closeAlert = document.getElementById("closeAlert");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const card = this.closest(".card");
      const carName = card.querySelector(".card-title").innerText;
      const carPrice = card.querySelector(".price").innerText;

      // نعرض التفاصيل
      alertTitle.innerText = carName;
      alertPrice.innerText = "Price: " + carPrice;
      customAlert.style.display = "block";
    });
  });

  closeAlert.addEventListener("click", function() {
    customAlert.style.display = "none";
  });

  

