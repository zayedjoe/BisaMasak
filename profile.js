function editProfile() {
    document.querySelector('.profile-view').style.display = 'none';
    document.querySelector('.profile-edit').style.display = 'block';
}

function saveProfile() {
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    const gender = document.getElementById('edit-gender').value;

    document.getElementById('username').innerText = name;
    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-email').innerText = email;
    document.getElementById('profile-phone').innerText = phone;
    document.getElementById('profile-gender').innerText = gender;

    

    document.querySelector('.profile-view').style.display = 'block';
    document.querySelector('.profile-edit').style.display = 'none';
}

function cancelEdit() {
    document.querySelector('.profile-view').style.display = 'block';
    document.querySelector('.profile-edit').style.display = 'none';
}

function viewRecipes() {
    alert("View my own recipes button clicked!");
}

function logout() {
    alert("Log out button clicked!");
}

function home() {
    window.location.href = 'index.html';
}