// JavaScript example
window.addEventListener('load', function() {
  var loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.style.opacity = '0';
  setTimeout(function() {
    loadingOverlay.style.display = 'none';
  }, 1000); // Delay before hiding the loading overlay, adjust as needed
});
const typewriters = document.querySelectorAll('.typewriter');

document.getElementById("DES").addEventListener("click", function() {
  this.textContent = "Data Entry Specialist";
});

document.getElementById("WD").addEventListener("click", function() {
  this.textContent = "Website Developer";
});

document.getElementById("MOE").addEventListener("click", function() {
  this.textContent = "Microsoft Office Expert";
});

document.getElementById("PD").addEventListener("click", function() {
  this.textContent = "Presentation Designer";
});

document.getElementById("PC").addEventListener("click", function() {
  this.textContent = "Project Creator";
});

document.getElementById("A").addEventListener("click", function() {
  this.textContent = "Animation";
});

document.getElementById("VE").addEventListener("click", function() {
  this.textContent = "Video Editing";
});

document.getElementById("RW").addEventListener("click", function() {
  this.textContent = "Resume Writing";
});

document.getElementById("AD").addEventListener("click", function() {
  this.textContent = "Ad Design";
});
