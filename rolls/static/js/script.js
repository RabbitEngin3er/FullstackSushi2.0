document.addEventListener("DOMContentLoaded", function() {
    console.log("yeah yo yah");
    let valueCounter = document.getElementById('counter').innerHTML;
    // valueCounter = parseInt(valueCounter);
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');

    // incrementBtn.addEventListener('click', function increment() {
    //     valueCounter++;
    //     document.getElementById('counter').value = valueCounter;
    // });

    incrementBtn.addEventListener('click', () => {
        console.log(valueCounter);
        valueCounter++;
        document.getElementById('counter').innerHTML = valueCounter;
        console.log(valueCounter);
    });

    decrementBtn.addEventListener('click', () => {
        if (valueCounter > 0) 
        {
            valueCounter--;
        }
        document.getElementById('counter').innerHTML = valueCounter;
    })
});
