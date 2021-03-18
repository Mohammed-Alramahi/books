
var favBook = prompt('Enter your favourite book name: ');
var favColor = prompt('Enter your favourite color: ');


if (favBook != '' && favColor != '') {
    document.getElementById('favbook').style = 'color:' + favColor + ';font-size: 25px;';
    document.getElementById('favbook').innerHTML = 'You picked ' + favBook + ' as your favorite book and ' + favColor + ' as your favourite color!';
}
else {
    var confirmation = confirm('you didn\'t enter some fields, are you sure you want to proceed?');
    if (confirmation == true) {
        document.getElementById('favbook').style = 'color:red'+';font-size: 25px;';
        document.getElementById('favbook').innerHTML = 'You didn\'t fill all fields :(';
    }
    else {
        alert('please refresh your page');
    }
}


