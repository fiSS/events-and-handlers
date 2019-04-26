let btn = document.getElementsByTagName('button'),
    btn1 = document.querySelectorAll('button'),
    wrapper = document.querySelector('.wrapper'),
    link = document.querySelector('a');

btn[0].onclick = function() {
    console.log('нажали на первую кнопку');
}

btn[0].addEventListener('click', function() { //1 то событие что должно произойти 2.функция которая активируется после клика
    alert('нажали на первую кнопку');
    
}); 

btn[0].addEventListener('click', function() { //1 то событие что должно произойти 2.функция которая активируется после клика
    alert('опять нажали на первую кнопку');
    
}); 

btn[0].addEventListener('mouseenter', function() {
    console.log('навели на первую кнопку');
});

btn[1].addEventListener('click', function(event){
    // console.log('произошло событие: ' + event.type + ' на елементе ' + event.target);
    let target = event.target;
    target.style.display = 'none'; //скрываем кнопку
});

// wrapper.addEventListener('click', function(){
//     console.log('произошло событие: ' + event.type + ' на елементе ' + event.target);
// });

// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('произошло событие: ' + event.type + ' на елементе ' + event.target);
// });

btn1.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('вышли за пределы!!!');
    });
});
