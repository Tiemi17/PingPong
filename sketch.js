let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let velocidadexbolinha = 10;
let velocidadeybolinha = 10;



function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);



    circle(xBolinha, yBolinha, diametro);

    
    xBolinha += xBolinha;


    if(xBolinha > width) {
        vxBolinha *= -1;

    }
console.log(xBolinha)


}