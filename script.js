var userInput = document.querySelector('.month_name').value; //iegūstu ievadīto vērtību - bet realitātē par to nevaru pārliecināties
var months = ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris'];
var form = document.querySelector('.month_name');
var indicator = document.querySelector('.circle_validation');

function validation(){
    for(i=0; i<= months.length; i++){
        if(userInput == months[i]){
            form.classList.add('valid');
            form.classList.remove('invalid');
            indicator.style.background = '#00ff00';
        }
        else {
            form.classList.remove('valid');
            form.classList.add('invalid');
            indicator.style.background = '#ff0000';
        }
    }
    }
