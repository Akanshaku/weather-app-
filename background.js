// Array of background images
const backgrounds = [
    'url("india.jpeg")',
    'url("canada.jpeg")',
    'url("america.jpeg")',
    'url("japan.jpeg")',
    'url("london.jpeg")'
];
function setRandomBackground() {
    const randomIndex1 = Math.floor(Math.random() * backgrounds.length);
    let randomIndex2 = Math.floor(Math.random() * backgrounds.length);
    
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * backgrounds.length);
    }

    const backgroundImage = `${backgrounds[randomIndex1]}, ${backgrounds[randomIndex2]}`;
    document.body.style.backgroundImage = backgroundImage;
}

window.onload = () => {
    setRandomBackground();
    setInterval(setRandomBackground, 3000); 
};
