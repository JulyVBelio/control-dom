// Botón del elemento shift right
var shiftRightButton = document.querySelector('#shiftRightButton');
// Input del elemento shift right
var shiftRightInput = document.querySelector('#shiftRightInput');

// Botón del elemento shift down
var shiftDownButton = document.querySelector('#shiftDownButton');
// Input del elemento shift down
var shiftDownInput = document.querySelector('#shiftDownInput');

// Botón del elemento blur
var blurButton = document.querySelector('#blurButton');
// Input del elemento blur
var blurInput = document.querySelector('#blurInput');

// Botón del elemento spread
var spreadButton = document.querySelector('#spreadButton');
// Input del elemento spread
var spreadInput = document.querySelector('#spreadInput');

// Botón del elemento opacity
var opacityButton = document.querySelector('#opacityButton');
// Input del elemento opacity
var opacityInput = document.querySelector('#opacityInput');

// Elemento checkbox
var inset = document.querySelector('#inset');

// Picker color
var pickerColor = document.querySelector('#pickerColor');

// Elemento preview
var preview = document.querySelector('#preview');

// Elemento text area
var textArea = document.querySelector('#textArea');


// Inicializar el valor de los input range
shiftRightButton.addEventListener('click', function(){
    shiftRightInput.value = 0;
    changeBoxShadow();
});

shiftDownButton.addEventListener('click', function(){
   shiftDownInput.value = 0;
   changeBoxShadow();
});

spreadButton.addEventListener('click', function(){
    spreadInput.value = 0;
    changeBoxShadow();
});

blurButton.addEventListener('click', function(){
    blurInput.value = 0;
    changeBoxShadow();
});

opacityButton.addEventListener('click', function(){
    opacityInput.value = 1;
    changeBoxShadow();
});

// Añadir estilo al elemento preview de acuerdo con el valor de los inputs
shiftRightInput.addEventListener('input', function(){
    changeBoxShadow();
});

shiftDownInput.addEventListener('input', function(){
    changeBoxShadow();
});

blurInput.addEventListener('input', function(){
    changeBoxShadow();
});

spreadInput.addEventListener('input', function(){
    changeBoxShadow();
});

opacityInput.addEventListener('input', function(){
    // if(opacityInput.value == 0){
    //     opacityButton.style.background = rgb(255, 167, 167);
    // }
    // else{
    //     opacityButton.style.background = 'red';
    // }
});

// Variable para comprobar el si checkbox esta seleccionado o no
var valueInset;

inset.addEventListener('click', function(){
    // Si el checkbox esta seleccionado se asigna a valueColor true
    if(inset.checked){
        valueInset = true;
    }
    else{
        valueInset = false;
    }
});

pickerColor.addEventListener('input', function(){
    changeBoxShadow();
});

function changeBoxShadow(){
    // Valores de las variables de las diferentes opciones
    var valueShiftRight = shiftRightInput.value;
    var valueShiftDown = shiftDownInput.value;
    var valueBlur = blurInput.value;
    var valueSpread = spreadInput.value;
    var valueOpacity = opacityInput.value;
    var valueColor = pickerColor.value;

    console.log(valueShiftRight);
    console.log(valueShiftDown);
    console.log(valueBlur);
    console.log(valueSpread);
    console.log(valueOpacity);
    console.log(valueColor);
    console.log(valueInset);

    // Si el checkbox está seleccionado...
    if(valueInset){
        preview.style.boxShadow = `${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor} inset`;
        changeTextProperty();
    }
    // Si el checkbos no está seleccionado...
    else{
        preview.style.boxShadow = `${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor}`;
        changeTextProperty();
    }
}

function changeTextProperty(){
    // Valores de las variables de las diferentes opciones
    var valueShiftRight = shiftRightInput.value;
    var valueShiftDown = shiftDownInput.value;
    var valueBlur = blurInput.value;
    var valueSpread = spreadInput.value;
    var valueOpacity = opacityInput.value;
    var valueColor = pickerColor.value;

    // Si el checkbox está seleccionado...
    if(valueInset){
        textArea.value = `box-shadow: ${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor} inset`;
    }
    // Si el checkbos no está seleccionado...
    else{
        textArea.value = `box-shadow: ${valueShiftRight}px ${valueShiftDown}px ${valueBlur}px ${valueSpread}px ${valueColor}`;
    }
}

// Variables para almacenar los ejemplos
var hoverEffect = document.querySelector('.hover-effect');
var sidesEffect = document.querySelector('.sides-effect');
var buttonEffect = document.querySelector('.button-effect');
var mirrorsEffect = document.querySelector('.mirrors-effect');
var inOutEffect = document.querySelector('.inOut-effect');
var gradientEffect = document.querySelector('.gradient-effect');
var pileEffect = document.querySelector('.pile-effect');
var checkerEffect = document.querySelector('.checker-effect');
var bordersEffect = document.querySelector('.borders-effect');
var rainbowEffect = document.querySelector('.rainbow-effect');
var candyEffect = document.querySelector('.candy-effect');
var flamesEffect = document.querySelector('.flames-effect');
var candleEffect = document.querySelector('.candle-effect');
var wellEffect = document.querySelector('.well-effect');
var pyramidEffect = document.querySelector('.pyramid-effect');
var targetEffect = document.querySelector('.target-effect');

hoverEffect.addEventListener('click', function(){
    preview.style.boxShadow = "0px 10px 13px -7px #000000";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 10px 13px -7px #000000";
});

sidesEffect.addEventListener('click', function(){
    preview.style.boxShadow = "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000";
});

buttonEffect.addEventListener('click', function(){
    preview.style.boxShadow = "inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E";
});

mirrorsEffect.addEventListener('click', function(){
    preview.style.boxShadow = "inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: inset 2px 2px 2px 2px #1C6EA4, inset 11px 11px 2px 0px #2285C7, inset 20px 20px 2px 1px #289DEA, inset 29px 29px 2px 1px #57BBEA";
});

inOutEffect.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000";
});

gradientEffect.addEventListener('click', function(){
    preview.style.boxShadow = "0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 0px 0px 5px #A0A0A0, inset 0px 10px 27px -8px #141414, inset 0px -10px 27px -8px #A31925";
});

pileEffect.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 0px 0px #289FED, 10px 10px 0px 0px #5FB8FF, 15px 15px 0px 0px #A1D8FF, 20px 20px 0px 0px #CAE6FF, 25px 25px 0px 0px #E1EEFF";
});

checkerEffect.addEventListener('click', function(){
    preview.style.boxShadow = "10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000"; 
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000";
});

bordersEffect.addEventListener('click', function(){
    preview.style.boxShadow = "8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D"; 
    preview.style.background = "white";
    preview.style.color = "#1C6EA4";
    preview.style.color = "black";

    textArea.value = "box-shadow: 8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D";
});

rainbowEffect.addEventListener('click', function(){
    preview.style.boxShadow = "7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000"; 
    preview.style.background = "#9400D3";
    preview.style.color = "white";

    textArea.value = "box-shadow: 7px -5px 10px 0px #4B0082, 11px -9px 10px 0px #0000FF, 16px -14px 10px 0px #00FF00, 20px -17px 10px 0px #FFFF00, 24px -19px 10px 0px #FF7F00, 27px -23px 10px 0px #FF0000";
});

candyEffect.addEventListener('click', function(){
    preview.style.boxShadow = "5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF";
});

flamesEffect.addEventListener('click', function(){
    preview.style.boxShadow = "4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17";
    preview.style.background = "#1C6EA4";
    preview.style.color = "white";

    textArea.value = "box-shadow: 4px -4px 15px 0px #FF1F1F, 12px -11px 7px 0px #FF9376, 20px -5px 7px 0px #FFE264, 20px 6px 7px 0px #F6FF33, 13px 12px 17px 0px #FF9527, 2px 17px 17px 0px #FF0000, -9px 21px 18px 0px #FFF212, -9px 6px 11px 0px #FF0808, -11px -9px 11px 0px #FFFA17, -11px -9px 11px 0px #FFFA17";
});

candleEffect.addEventListener('click', function(){
    preview.style.boxShadow = "#FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px"; 
    preview.style.background = "white";
    preview.style.color = "#1C6EA4";
    preview.style.color = "black";

    textArea.value = "box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px";
});

wellEffect.addEventListener('click', function(){
    preview.style.boxShadow = "0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA";  
    preview.style.background = "#000000";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 0px 0px 8px #000000, 0px 0px 0px 16px #4B4C4B, 0px 0px 0px 24px #828482, 0px 0px 0px 31px #B2B5B2, 0px 0px 0px 39px #DADDDA";
});

pyramidEffect.addEventListener('click', function(){
    preview.style.boxShadow = "0px 3px 0px 2px rgba(0,0,0,0.1), 0px 6px 0px 4px rgba(0,0,0,0.1), 0px 9px 0px 6px rgba(0,0,0,0.1), 0px 12px 0px 8px rgba(0,0,0,0.1), 0px 15px 0px 10px rgba(0,0,0,0.1), 0px 18px 0px 12px rgba(0,0,0,0.1), 0px 21px 0px 14px rgba(0,0,0,0.1), 0px 24px 0px 16px rgba(0,0,0,0.1), 0px 27px 0px 18px rgba(0,0,0,0.1), 0px 30px 0px 20px rgba(0,0,0,0.1)"; 
    preview.style.background = "#444444";
    preview.style.color = "white";

    textArea.value = "box-shadow: 0px 3px 0px 2px rgba(0,0,0,0.1), 0px 6px 0px 4px rgba(0,0,0,0.1), 0px 9px 0px 6px rgba(0,0,0,0.1), 0px 12px 0px 8px rgba(0,0,0,0.1), 0px 15px 0px 10px rgba(0,0,0,0.1), 0px 18px 0px 12px rgba(0,0,0,0.1), 0px 21px 0px 14px rgba(0,0,0,0.1), 0px 24px 0px 16px rgba(0,0,0,0.1), 0px 27px 0px 18px rgba(0,0,0,0.1), 0px 30px 0px 20px rgba(0,0,0,0.1)"; 
});

targetEffect.addEventListener('click', function(){
    preview.style.boxShadow = "0px 20px 0px -10px #FFFFFF, 0px -20px 0px -10px #FFFFFF, 20px 0px 0px -10px #FFFFFF, -20px 0px 0px -10px #FFFFFF, 0px 0px 0px 10px #FF0000"; 
    preview.style.background = "white";
    preview.style.color = "#F00";

    textArea.value = "box-shadow: 0px 20px 0px -10px #FFFFFF, 0px -20px 0px -10px #FFFFFF, 20px 0px 0px -10px #FFFFFF, -20px 0px 0px -10px #FFFFFF, 0px 0px 0px 10px #FF0000";
});