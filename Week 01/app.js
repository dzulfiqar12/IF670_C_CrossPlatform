const calculateBtn = document.getElementById('calc-btn');
const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const resetBtn = document.getElementById('reset-btn');
const calculateBMI = () =>{

    const enteredHeight = +heightInput.value/100;
    const enteredWeight = +weightInput.value;
    var status;

    var bmi = enteredWeight/(enteredHeight*enteredHeight);

    if(bmi >= 30){
        status = "Obesitas";
    }else if(bmi > 24.9){
        status = "Gemuk";
    }else if(bmi >= 18.5){
        status = "Normal";
    }else if( bmi < 18.5){
        status = "Kurus";
    }

    document.getElementById("result-bmi").innerHTML = 
    '<center> <ion-card style="width: 30%;"><ion-card-header >'+bmi+'</ion-card-header><ion-card-content style="font-size:large">'+status+'</ion-card-content></ion-card></center>';

}
const resetBMI = () =>{
    document.getElementById("result-bmi").innerHTML=' ';
}

calculateBtn.addEventListener('click',calculateBMI);
resetBtn.addEventListener('click',resetBMI);
