// sidebar activation
let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
    sidebar.classList.toggle('active');
};

// darkmode button
document.getElementById('toggle-button').addEventListener('click', () => {
    const targetDiv = document.getElementById('toggle-target');
    targetDiv.classList.toggle('dark-mode');
    targetDiv.classList.toggle('main-content');

    // #Toggle the darkmode button's background color
    const button = document.getElementById('toggle-button');
    const isBlue = button.style.backgroundColor === 'darkblue'; // Check current state
    button.style.backgroundColor = isBlue ? 'white' : 'darkblue'; // Toggle background if current state is the same

    // Toggle the button's icon (using Boxicons)
    const icon = button.querySelector('i');
    icon.classList.toggle('bxs-sun');  // Sun icon
    icon.classList.toggle('bxs-moon'); // Moon icon

    // Icon color for each one
    if (icon.classList.contains('bxs-sun')) {
    icon.style.color = '#dab700'; // sun
    } else if (icon.classList.contains('bxs-moon')) {
    icon.style.color = '#87CEEB'; // moon
    }
});

// icon animation duration
const icon = document.querySelector('.bxs-sun');

setTimeout(() => {
    icon.classList.remove('bx-tada');
}, 4500); // 4.5 seconds