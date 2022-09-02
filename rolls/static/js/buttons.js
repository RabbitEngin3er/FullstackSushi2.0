const incrementBtn = document.querySelector('#incrementBtn');
const decrementBtn = document.querySelector('#decrementBtn');
let counter = document.querySelector('.counter');

incrementBtn.addEventListener('click', () => {
    counter.value = parseInt(counter.value) + 1;
});

decrementBtn.addEventListener('click', () => {
    if (parseInt(counter.value) > 0) {
        counter.value = parseInt(counter.value) - 1;
    }
});


