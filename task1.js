const paragraph = document.getElementById('p2');

function changeCSS() {
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
}

const button = document.getElementById('your-button-id'); /
button.addEventListener('click', changeCSS);
