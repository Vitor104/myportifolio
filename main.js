function myNav () {
    let nav = document.getElementById('menu-nav');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

function myBoxes () {
    let hiddenBox = document.getElementById('hidden-detail-one')
    let firstBox = document.getElementById('first-box');

    if (hiddenBox.style.display === 'none' && firstBox.style.display === 'block') {
        firstBox.style.display = 'none';
        hiddenBox.style.display = 'block';
    } else {
        hiddenBox.style.display = 'none';
        firstBox.style.display = 'block';
    }
}

let botao = document.getElementById('detail-one');

botao.addEventListener('click', myBoxes());