const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const scrollAmount = 220; // Adjust this based on item width

nextBtn.addEventListener("click", () => {
    carousel.scrollLeft += scrollAmount;
});

prevBtn.addEventListener("click", () => {
    carousel.scrollLeft -= scrollAmount;
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }