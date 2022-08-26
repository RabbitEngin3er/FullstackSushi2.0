document.addEventListener("DOMContentLoaded", function() {
    console.log("yeah yo yah");
    let valueCounter = document.getElementById('counter').value;
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');

    // incrementBtn.addEventListener('click', function increment() {
    //     valueCounter++;
    //     document.getElementById('counter').value = valueCounter;
    // });

    incrementBtn.addEventListener('click', () => {
        valueCounter++;
    });
});
