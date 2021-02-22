const imageWidth = document.getElementById('first').offsetWidth;
const windowWidth = window.innerWidth;

const sb = new ScrollBooster({
    viewport: document.querySelector('.container'),
    content: document.querySelector('.imagesSlider'),
    scrollMode: 'transform',
    direction: 'horizontal',
    friction: 0.02,
    bounceForce: 0.01
});

sb.scrollTo({
    x: (imageWidth * 2) + (windowWidth * .1)
})