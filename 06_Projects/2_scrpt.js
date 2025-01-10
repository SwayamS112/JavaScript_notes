const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector("#weight").value)
const result =document.querySelector("#result")
if(height <= 0||isNaN(height)){
result.innerHTML = "Please give a valid height"
}

else if(weight <= 0 || isNaN(weight)){
    result.innerHTML = "Please give a valid weight"

}

const bmi = (weight/(height*height/10000)).toFixed(2)
result.innerHTML = `<span>Your BMI:${bmi}</span>`;

const p = document.createElement("p")
if(bmi<18.6){
    p.innerHTML=`You are underWeight`
} 
else if(bmi>=18.9 && bmi<=24.9){
    p.innerHTML=`You have Normal bmi`
}
else{
    p.innerHTML=`You are overWeight`
}

result.appendChild(p)
});