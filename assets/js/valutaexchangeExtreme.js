const calculateButton = document.getElementById('calculateButt');

calculateButton.addEventListener('click', (e) =>{
    e.preventDefault();
    gatherInputData();
});

function gatherInputData(){
    const myEuroRate = document.getElementById('euroRate').value;
    const myDollarRate = document.getElementById('dollarRate').value;
    const myDanishAmount = document.getElementById('danishAmount').value;

    makeExchange(myEuroRate, myDollarRate, myDanishAmount)
}

function makeExchange(myEuroRate, myDollarRate, myDanishAmount){
    let Dollars = calculateExchange(myDanishAmount, myDollarRate);
    let Euros = calculateExchange(myDanishAmount, myEuroRate);

    showResult(Euros, Dollars, myDanishAmount);
}

function showResult(myEuroResult, myDollarResult, myDanishAmount){
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + ' danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars ';
}

function calculateExchange(dkAmount, rate){
    let result = dkAmount * rate;
    return result;
}






