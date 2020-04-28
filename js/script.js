let btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.wrapper'),
    link = document.querySelector('a');

wrapper.addEventListener('click', function(){
    console.log('произошло событие: ' + event.type + ' на елементе ' + event.target);
});

btns[0].addEventListener('click', function(event){
        console.log('произошло событие: ' + event.type + ' на елементе ' + event.target);
        let target = event.target;
        target.style.background = 'red'; 
        target.style.color = 'black';
        target.style.fontSize = '20px';
});



link.addEventListener('click', function(event) {
    event.preventDefault();
    });

btns.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('вышли за пределы!!!');
    });
});

