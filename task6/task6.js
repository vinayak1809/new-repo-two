// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// thirditem.textContent = "";

var odditems = document.querySelectorAll('li:nth-child(odd)');

for (i=0;i<odditems.length ; i++){
    odditems[i].style.backgroundColor = 'green';
}
