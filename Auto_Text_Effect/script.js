let i = 0;
const text = "A Professional Web Developer";
function textAnimation() {
    if (i == text.length) {
        i = 0;
    }
    if (i < text.length) {
        document.getElementById('fancy').innerText = text.slice(0, i + 1) + '_';
        i++;
        setTimeout(textAnimation,200)
    }
}

textAnimation();