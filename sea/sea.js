document.addEventListener("DOMContentLoaded", function() {

    // Get modal
    var modal = document.getElementById("myModal");

    // Open modal btn
    var btn = document.getElementById("openModalBtn");

    // Close btn
    var span = document.getElementsByClassName("close")[0];

    // Open modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
});

function init() {
    window.location.href = "../microorganism/microorganism.html";
}

function home() {
    window.location.href = "../index.html";
}