const controller = new ScrollMagic.Controller();

document.querySelectorAll('#box').forEach((el) => {
    new ScrollMagic.Scene({
        triggerElement: el,
        triggerHool: 0.8,
        reverse: false
    })
    .on("enter", () => {
        el.classList.add('visible')
    })
    .addTo(controller);
})