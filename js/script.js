// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const eleSelect = document.querySelector('#difficulty') // bottone scelta
const eleGrid = document.querySelector('.grid')



eleSelect.addEventListener('change', function(){

    // const eleList = document.querySelector('option')

    eleGrid.innerHTML='';

        if (eleSelect.value === 'easy'){
            for(let i=1; i <= 100; i++){

                const eleCell = document.createElement('div');
                eleCell.classList.add('cell100');
                eleCell.innerHTML += `${i}`;
                eleGrid.append(eleCell);
                
                eleCell.addEventListener('click', function(){
                    this.classList.toggle('active');
                });
            }
        }   else if (eleSelect.value === 'medium'){
            eleGrid.innerHTML='';
            for(let i=1; i <= 81; i++){
                
                const eleCell = document.createElement('div');
                eleCell.classList.add('cell81');
                eleCell.innerHTML += `${i}`;
                eleGrid.append(eleCell);                
            
                eleCell.addEventListener('click', function(){
                    this.classList.toggle('active');
                    });
            }
        } else if (eleSelect.value === 'hard'){
            eleGrid.innerHTML='';
            for(let i=1; i <= 49; i++){

                const eleCell = document.createElement('div');
                eleCell.classList.add('cell49');
                eleCell.innerHTML += `${i}`;
                eleGrid.append(eleCell);
            
            
                eleCell.addEventListener('click', function(){
                    this.classList.toggle('active');
                    });
            }
        } 
    })
// for(let i=1; i <= 100; i++){

//     const eleCell = document.createElement('div');
//     eleCell.classList.add('cell');
//     eleCell.innerHTML += `${i}`;
//     eleGrid.append(eleCell);


//     eleCell.addEventListener('click', function(){
//         this.classList.toggle('active');
//     })
// }