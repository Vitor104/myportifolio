let figuraWord = document.getElementById('word-figura');
let figura = document.getElementById('figura');

function myFunction() {
    if (figuraWord.style.display === "none") {
      figuraWord.style.display = "block";
    } else {
      figuraWord.style.display = "none";
    }
}


figura.addEventListener('mouseover', myFunction());