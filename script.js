

var months = ['janvāris', 'februāris', 'marts', 'aprīlis', 'maijs', 'jūnijs', 'jūlijs', 'augusts', 'septembris', 'oktobris', 'novembris', 'decembris'];
var indicator = document.querySelector('.circle_validation');

function validation(){
    var Input = document.querySelector('.month_name').value;
    var userInput = Input.toLowerCase();
    if (months.includes(userInput)){
        indicator.style.background = '#00ff00';
    }
    else{
        indicator.style.background = '#ff0000';
    }

}
