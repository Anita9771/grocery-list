const text = document.querySelector('#item');
const btn = document.getElementsByTagName('button');
const list = document.getElementsByTagName('ul');
const grocery = document.getElementsByTagName('li');

btn.addEventListener('click', () => {
    alert('clicked')
    const addedItem = text.value;
    const li = document.createElement('li');
    li.innerHTML = addedItem;
    text.value = ' ';
});