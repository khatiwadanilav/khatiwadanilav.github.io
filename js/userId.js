window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-NH0N0MRJNX')

function generateUniqueUserId() {
    var usernameValue = document.getElementById('username').value;
    return usernameValue
}

function processUserId(user_id) {
    appendUserId(user_id)
    sessionStoreUserId(user_id)

    var userIdPopup = document.getElementById('user-id-popup');
    if (userIdPopup) {
        const toBeContent = `<strong style="color: red;">${user_id}</strong>`
        const updatedContent = userIdPopup.dataset.originalContent.replace('{{user_id}}', toBeContent)

        userIdPopup.innerHTML = updatedContent
        userIdPopup.classList.add('show-popup');
    }
}

function appendUserId(user_id) {
    gtag('set', {
        'user_id': user_id
    });
}

function sessionStoreUserId(user_id) {
    if (user_id) {
        window.sessionStorage.setItem('userId', user_id);
    }
}

function closePopup() {
    var userIdPopup = document.getElementById('user-id-popup');
    if (userIdPopup) {
        userIdPopup.classList.remove('show-popup');
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const userIdPopup = document.getElementById('user-id-popup')
    if (userIdPopup) {
        userIdPopup.dataset.originalContent = userIdPopup.innerHTML
    }

    var userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', function (event) {
            event.preventDefault()
            const user_id = generateUniqueUserId()
            // appendUserId(user_id)
            processUserId(user_id);
            userForm.reset()
        });
    }
});

function goToHomePage() {
    window.location.href = "index.html"
}
