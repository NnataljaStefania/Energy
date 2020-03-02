function compute() {
		var devise = document.getElementById('devise').value;
		var nameDevise = document.getElementById('nameDevise');
		nameDevise.textContent = devise;
		nameDevise.innerText = devise; /* For ie */
		var power =  parseInt(document.getElementById('power').value);
		var namePower = document.getElementById('namePower');
		namePower.textContent = power;
		namePower.innerText = power;
		var tariff =  parseInt(document.getElementById('tariff').value);
		var nameTariff = document.getElementById('nameTariff');
		nameTariff.textContent = tariff;
		nameTariff.innerText = tariff;
		var cost = power * tariff;
		var nameCost = document.getElementById('nameCost');
		nameCost.textContent =  cost;
		nameCost.innerText =  cost;
		var powerDay =  parseInt(document.getElementById('powerDay').value);
		
		
		var tariffeDay =  parseInt(document.getElementById('tariffeDay').value);
		var tariffNight =  parseInt(document.getElementById('tariffNight').value);
		
		var costtariffeDay = powerDay *  tariffeDay; /* compute cost */
		var nameCosttariffeDay = document.getElementById('nameCosttariffeDay');
		nameCosttariffeDay.textContent = costtariffeDay;
		nameCosttariffeDay.innerText = costtariffeDay;
		
		var costtariffeNight = powerDay *  tariffNight; /* compute cost */
		var nameCosttariffeNight = document.getElementById('nameCosttariffeNight');
		nameCosttariffeNight.textContent = costtariffeNight;
		nameCosttariffeNight.innerText = costtariffeNight;
		
		var costBoth = costtariffeDay + costtariffeNight; /* compute cost */
		var nameCostBoth = document.getElementById('nameCostBoth');
		nameCostBoth.textContent = costBoth;
		nameCostBoth.innerText = costBoth;
		
	} /* and compute */
onload = () => {
	var form = document.getElementById('formId');
form.noValidate = true;
form.addEventListener('submit', function(event){
	if (!event.target.checkValidity()) {
		event.preventDefault();
		alert('Пожалуйста, заполните поле. Please, fill the form.');
	}	event.preventDefault();
		compute();
}, form.noValidate =  false);


}  /* and for  noValidate */ 
