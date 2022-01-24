// const request = new XMLHttpRequest();
// request.addEventListener(`readystatechange`, () => {
//     console.log(request.responseText);
// });
// request.open(`GET`,`https://jsonplaceholder.typicode.com/todos` );
// request.send();

// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//     //console.log(request, request.readyState);
//     if(request.readyState === 4) {
//         console.log(request.responseText);
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();


// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);
//     }
//     else if(request.readyState === 4) {
//         console.log('could not fetch the data');
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();

// let request = new XMLHttpRequest();

// request.addEventListener(`readystatechange`, () => {
//     if (request.readyState == 1) {
//         console.log("Uspostavljena konekcija");
        
//     }
//     else if (request.readyState == 2) {
//         console.log("Poslat je zahtev serveru");
       
//     }
//     else if (request.readyState == 3) {
//         console.log("Prihvata se odgovor - u statusu preuzimanja");
       
//     }
//     else if (request.readyState == 4) {
//         console.log("Odgovor je preuzet", request.responseText);
       
//     }
// });

request.addEventListener(`readystatechange`, function() {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data", this.responseText);
    }
});

request.open(`GET`, `https://jsonplaceholder.typicode.com/todos`);
request.send();


const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        console.log(data);
    }
    else if(request.readyState === 4) {
        console.log('could not fetch the data');
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();
