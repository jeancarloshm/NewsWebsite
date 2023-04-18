let ul = document.querySelector(".links-container");

auth.onAuthStateChanged((user) => {
    if (user) {
        // user in loggin
        ul.innerHTML += `
        <li><a href="/admin">dashboard</a></li>
        <li><a href="#" onclick="logoutUser()" class="link">Logout</a></li>
        `
    }else {
        // no one is logged in
        ul.innerHTML += `
        <li><a href="/admin">Login</a></li>
        `
    }
})