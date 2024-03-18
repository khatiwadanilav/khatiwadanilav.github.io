function redirectToPage(destination) {
    window.location.href = destination
}

function goToHome() {
    console.info("inside the function")
    window.history.back()
}

function goToHomePage() {
    window.location.href = "index.html"
}

function showPopup() {
    var popup = document.getElementById('popup');
    if (popup) {
        popup.classList.add('show-popup');
    }
}

setTimeout(showPopup, 1100);
  
function closePopup() {
    var popup = document.getElementById('popup');
    if (popup) {
        popup.classList.remove('show-popup');
    }   
}
