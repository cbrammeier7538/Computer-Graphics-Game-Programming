function getCanvas() {
    let canvas = document.querySelector("#canv");
    let ctx = canvas.getContext("2d");

    canvas.width = windown.innerWidth;
    canvas.height = window.innerHeight;
    return { canvas, ctx };
}