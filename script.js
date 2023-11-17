function generateRandomColor() {
    // Generate random values for RGB
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // Convert RGB to hexadecimal
    var hexColor = rgbToHex(red, green, blue);

    // Apply the color to the display
    document.getElementById('colorDisplay').style.backgroundColor = hexColor;
}

function rgbToHex(r, g, b) {
    var componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    };
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}