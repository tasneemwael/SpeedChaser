document.querySelector('.read-more').addEventListener('click', function() {
    document.querySelector('#choose-destination').scrollIntoView({ behavior: 'smooth' });
});

function showForm(role) {
document.getElementById("form-modal").style.display = "flex";
document.getElementById("form-title").innerText = role === "viewer" ? "Join as a Viewer" : "Join as a Racer";
document.getElementById("user-form").dataset.role = role;
}

function closeForm() {
document.getElementById("form-modal").style.display = "none";
}

function redirectToPage(event) {
event.preventDefault();
const role = document.getElementById("user-form").dataset.role;
window.location.href = role === "viewer" ? "../html files/cairo.html" : "../html files/Hurghada.html";
}
