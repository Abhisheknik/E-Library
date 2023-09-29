window.addEventListener('DOMContentLoaded', () => {
    const navbarDiv = document.getElementById('navbar');
    const nav = document.createElement('nav');
    nav.style.backgroundColor = '#aa5040';
    nav.style.padding = '10px';

    nav.innerHTML = `
        <ul style="display: flex; justify-content: space-between; align-items: center;">
            <li>
                <strong style="font-weight: bold;">E-library</strong>
            </li>
            <li style="display: inline; margin-left: auto;">
                <a href="../index.html" class="nav-link">Home</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
                <a href="books.html" class="nav-link">Books</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
            <a href="about-us.html" class="nav-link">About Us</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
            <a href="contact.html" class="nav-link">Contact</a>
            </li>
            <li style="display: inline; margin-left: 10px;">
                <a href="login.html" class="nav-link">Log In</a>
            </li>
        </ul>
    `;

    navbarDiv.appendChild(nav);
});
