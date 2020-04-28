# обрабочики событий

```html
<div class="wrapper">
    <button id='btn'>PRESS ME</button>
</div>
<button>нажми на меня. 1</button>
<button>нажми на меня. 2</button>
<button>нажми на меня. 3</button>
```
#### получил элементы со страницы с которыми буду работать

```javascript
let btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.wrapper'),
    link = document.querySelector('a');
```
#### пример всплытие событий: 
##### сначала отрабатывается событие на самом вложенном елементе

```javascript
btns[0].addEventListener('click', function(event){
        console.log('произошло событие: ' + event.type + ' на елементе ' + event.target);
});
```
##### затем на родителе

```javascript
wrapper.addEventListener('click', function(){
    console.log('произошло событие: ' + event.type + ' на елементе ' + event.target);
});
```
##### отмена стандартных событий браузера при помощи метода forEach действием preventDefault.

```javascript
link.addEventListener('click', function(event) {
    event.preventDefault();
    });
```

##### Правильное назначение обработчика событий на множество елеметов при помощи метода forEach

```javascript
btns.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log('вышли за пределы!!!');
    });
```

