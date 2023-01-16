const keys = document.querySelectorAll(".key");

keys.forEach(function(key) {
  key.addEventListener("click", function() {
    key.classList.add("active");
    setTimeout(function() {
      key.classList.remove("active");
    }, 150);
  });
});
