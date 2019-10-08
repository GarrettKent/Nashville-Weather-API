var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var button= document.querySelector('.submit');


button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];

  main.innerHTML = nameValue;
  temp.innerHTML = "The temperature in "+ nameValue + " is "+tempValue + " degrees Farenheit";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})