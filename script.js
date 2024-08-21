document.addEventListener("DOMContentLoaded", function() {

    // Modal element
    var modal = document.getElementById("aboutModal");

    // Open modal btn
    var btn = document.getElementById("openModalBtn");

    // Close modal btn
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

// Link the next page
function init() {
    window.location.href = "sea/sea.html";
}
