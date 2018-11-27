let higgsField = document.getElementsByClassName('higgsField')[0];
var doodle = document.getElementsByClassName('doodle')[0]

doodle.addEventListener("mousemove", e => {
    let x = e.clientX - doodle.offsetLeft + (doodle.offsetWidth / 2),
        y = e.clientY - doodle.offsetTop;
    higgsField.style.left = x + 'px';
    higgsField.style.top = y + 'px';
})
