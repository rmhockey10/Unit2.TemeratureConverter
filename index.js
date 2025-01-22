const CurrentTempF = prompt("What's the temperature in Fahrenheit?");

function convertToCelcius(CurrentTempF1){
    const CurrentTempC = (CurrentTempF1 - 32) / 1.8;
    return CurrentTempC;
}

const CurrentTempC = convertToCelcius(CurrentTempF);

alert(`The temperature in Celcius is ${CurrentTempC}`);


function describeTemperature(CurrentTempC1){
    let description;
    if (CurrentTempC1 < 0){
        description = "very cold";
    }else if (CurrentTempC1 < 20){
        description = "cold";
    }else if (CurrentTempC1 < 30){
        description = "warm";
    }else if (CurrentTempC1 < 40){
        description = "hot";
    }else {
        description = "very hot";
    }
    return description;
}

const description = describeTemperature(CurrentTempC);

alert(`The temperature in Celcius is ${CurrentTempC} which feels ${description}`);