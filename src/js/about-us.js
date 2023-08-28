function animateValue(element, start, end, duration, symbol = "") {
  var range = end - start;
  var startTime = new Date().getTime();
  function updateValue() {
    var currentTime = new Date().getTime();
    var elapsed = currentTime - startTime;
    var progress = elapsed / duration;
    if (progress > 1) progress = 1;
    var value = start + range * progress;
    element.textContent = Math.round(value) + symbol;
    if (progress < 1) {
      requestAnimationFrame(updateValue);
    }
  }
  updateValue();
}
function startAnimation() {
  var elementsToAnimate = document.querySelectorAll(".animate-number");
  elementsToAnimate.forEach(function (element) {
    var startNumber = parseInt(element.textContent);
    var endNumber = parseInt(element.getAttribute("data-end"));
    var symbol = element.getAttribute("data-symbol");
    animateValue(element, startNumber, endNumber, 2000, symbol);
  });
}
function handleScroll() {
  var section = document.querySelector(".about-us");
  var sectionTop = section.getBoundingClientRect().top;
  var viewportHeight = window.innerHeight;
  if (sectionTop < viewportHeight / 2) {
    startAnimation();
    window.removeEventListener("scroll", handleScroll);
  }
}
function handleHashChange() {
  var hash = window.location.hash;
  if (hash === "#about") {
    startAnimation();
  }
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("hashchange", handleHashChange);