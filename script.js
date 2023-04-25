function generateColor(){
    let background = document.getElementById('background');
    let hex = document.getElementById('hex');

    let hexColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    background.style.background = hexColor;
    hex.innerHTML = hexColor;

    // If You want to Copy Generated Code to Clipboard 
    // navigator.clipboard.writeText(hexColor); 
}