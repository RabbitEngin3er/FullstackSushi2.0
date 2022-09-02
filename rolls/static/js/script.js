document.addEventListener("DOMContentLoaded", function() {
    let variabile1 = "yeah";
    let variabile2 = "yo";
    let variabile3 = "yah";
    let character = variabile1[0];
    let elemento = `${variabile1} ${variabile2} ${variabile3}`;
    let testo = "Javascript è un linguaggio difficile da imparare";
    let indice = testo.indexOf("linguaggio");
    let stringa = testo.slice(indice);
    console.log(indice);
    console.log(elemento);
    console.log(character);
    console.log(stringa);

    let idCounter = "counter1, counter2, counter3, counter4, counter5, counter6";
    let arrIdCounter = idCounter.split(", ");
    console.log(arrIdCounter);
    let id = "counter1";

    switch(id)
    {
        case "counter1":
            console.log(id);
            break;
        case "counter2":
            console.log(id);
            break;
        case "counter3":
            console.log(id);
            break;
        case "counter4":
            console.log(id);
            break;
        case "counter5":
            console.log(id);
            break;
        case "counter6":
            console.log(id);
            break;
        default:
            console.log("Unknown id");
            break;
    }

    for(let i=0; i<arrIdCounter.length; i++)
    {
        console.log(arrIdCounter[i]);
    }
    
    
    let valueCounters = document.querySelectorAll('[id^=counter]');
    let incrementBTNs = document.querySelectorAll('[id^=incrementBtn]');
    let decrementBTNs = document.querySelectorAll('[id^=decrementBtn]');

    for (let i=0; i<valueCounters.length; i++)
    {
        console.log(valueCounters[i].innerHTML);
        incrementBTNs[i].addEventListener('click', ()=>{
            valueCounters[i].innerHTML = parseInt(valueCounters[i].innerHTML)+1;
        });

        decrementBTNs[i].addEventListener('click', ()=>{
            if(valueCounters[i].innerHTML > 0) {
                valueCounters[i].innerHTML = parseInt(valueCounters[i].innerHTML) - 1;
            }
        })

        
    }
    // for(i=0; i<arrIdCounter.length; i++)
    // {
    //     document.getElementById('counter').id = arrIdCounter[i];
    // }
    // valueCounter = parseInt(valueCounter);


    // incrementBtn.addEventListener('click', function increment() {
    //     valueCounter++;
    //     document.getElementById('counter').value = valueCounter;
    // });

    // incrementBtn.addEventListener('click', () => {
    //     console.log(valueCounter);
    //     valueCounter++;
    //     document.getElementById('counter').innerHTML = valueCounter;
    //     console.log(valueCounter);
    // });

    // decrementBtn.addEventListener('click', () => {
    //     if (valueCounter > 0) 
    //     {
    //         valueCounter--;
    //     }
    //     document.getElementById('counter').innerHTML = valueCounter;
    // })
});
