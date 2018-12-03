let higgsField = document.getElementsByClassName('higgsField')[0],
    legend = document.getElementsByClassName('legend')[0],
    play = document.getElementsByClassName('play')[0],
    banner = document.getElementsByClassName('banner')[0],
    legendOpen = false;

var doodle = document.getElementsByClassName('doodle')[0]

doodle.addEventListener("mousemove", e => {
    let x = e.clientX - doodle.offsetLeft + (doodle.offsetWidth / 2),
        y = e.clientY - doodle.offsetTop;
    higgsField.style.left = x + 'px';
    higgsField.style.top = y + 'px';
})

const openLegend = () => {
    legendOpen ? (legend.classList.remove('openLegend'), legendOpen = false) : (legend.classList.add('openLegend'), legendOpen = true);
}
