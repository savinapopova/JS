function attachGradientEvents() {
    let element = document.getElementById("gradient");
    let result = document.getElementById("result");

    element.addEventListener('mousemove', showPercent);
    element.addEventListener('mouseout', hidePercent);

    function showPercent(event) {
        let width = element.clientWidth;
        let offset = event.offsetX;
        let part = offset / (width);
        let percent = Math.trunc(part * 100);

        result.textContent = `${percent}%`;
    }

    function hidePercent() {
        result.textContent = '';
    }


}
