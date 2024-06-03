function solve(width, height, color) {
    color = color[0].toUpperCase() + color.slice(1);

    let rectangle = {
        width,
        height,
        color,
        calcArea: () => width * height
    };
    return rectangle;
}
