function myHNav() {
    let hiddenNav = document.getElementById('hidden-nav');

    if (hiddenNav.style.display === 'none') {
        hiddenNav.style.display = 'block';
    } else {
        hiddenNav.style.display = 'none';
    }
}


let listClick = document.getElementById('list').addEventListener('click', myHNav);

