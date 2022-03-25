
function enter(){
    var userInput = document.querySelector('.month_name').value;
   return userInput;
}

var months = ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris'];
var indicator = document.querySelector('.circle_validation');

function validation(){
    var userInput = enter();
    if (months.includes(userInput)){
        indicator.style.background = '#00ff00';
    }
    else{
        indicator.style.background = '#ff0000';
    }

}
