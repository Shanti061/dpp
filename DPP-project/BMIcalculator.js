


var BMI ;
var calculate;
var text1 ;

document.getElementById("info").innerHTML = "Please enter the information below to know your BMI Calculation. ";

var ButtonClick = document.getElementById("Calculate").addEventListener("click", calculateBMI, false);


var ButtonClick1 = document.getElementById("changeUnit").addEventListener("click", changeBMI, false);

document.getElementById("info1").innerHTML = "Normal BMI range: 18.5kg/m2 - 25 kg/m2 ";




function calculateBMI () {
var height1 = parseFloat(document.getElementById("userHeight").value);
var weight1 = parseFloat(document.getElementById("userWeight").value);
    //metric calculation, height in meter, weight in kg
  var BMI = (weight1 / (height1 * height1) );
      //to show the value inside the textbox for the result
   document.getElementById("result").value= BMI;
  
    if(BMI<16)
        {
            document.getElementById("BMIResult").innerHTML = "You are severly thin!";
        }
    else if(BMI >16 && BMI <17)
        {
            document.getElementById("BMIResult").innerHTML = "Moderate thinness!";
        }
    
    else if(BMI >17 && BMI <18.5)
        {
            document.getElementById("BMIResult").innerHTML = "Mild thinness!";
        }
    else if(BMI >18.5 && BMI <25)
        {
            document.getElementById("BMIResult").innerHTML = "Moderate thinness!";
        }
    else if(BMI >25 && BMI <30)
        {
            document.getElementById("BMIResult").innerHTML = "Over Weight!";
        }
    else if(BMI >30 && BMI <35)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class I";
        }
    else if(BMI >35 && BMI <40)
        {
            document.getElementById("BMIResult").innerHTML = "Obese Class II";
        }
    
    else
        {
            document.getElementById("BMIResult").innerHTML = "Obsese Class III";
        }
}


function changeBMI(){
    
    
    
    
}

//Severe Thinness	< 16
//Moderate Thinness	16 - 17
//Mild Thinness	17 - 18.5
//Normal	18.5 - 25
//Overweight	25 - 30
//Obese Class I	30 - 35
//Obese Class II	35 - 40
//Obese Class III	> 40

//
//Normal BMI weight range for the height: 128.9lbs - 174.2 lbs
//Ponderal Index: 12.91 kg/m3