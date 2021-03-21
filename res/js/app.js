alert('Enter one of the following book names: php, html, js');
var res = '';
var bookName = prompt("Enter you favourite book");
var img = '';
while (bookName != 'php' && bookName != 'html' && bookName != 'js') {
    bookName = prompt('You gave wrong book name please enter one of those:php, html, js');
}
if (bookName == 'php') {
    img = ' <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxFblIYgqChZZnN6Iw8kaSk9bTkh36LI1ug&usqp=CAU" alt="php">';
}
else if (bookName == 'html') {
    img = '<img src="https://commandlinetechnologies.com/wp-content/uploads/2021/02/All-about-HTML-Full-form-of-HTML-Structure-of-HTML-Application-of-HTML-Online-HTML-course-CommandLine-Technologies.png" alt="html">';
}
else if (bookName == 'js') {
    img = '<img src="https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png" alt="js"></img>';
}
var bookCount = prompt('How many books you want to order?');
while (bookCount >= 11) {
alert('You can buy 10 books at maximum pls Enter 10 or less');
var bookCount = prompt('How many books you want to order?');
}

document.getElementById('count').innerHTML = '<h3>' + 'no. of ordered books : ' + bookCount + '</h3>';
for (var i = 0; i < bookCount; i++) {
    res += img;
}
document.getElementById('order').innerHTML = res;
