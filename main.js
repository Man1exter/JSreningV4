const btn = document.querySelector(".roll");
const dev = document.querySelector(".name");

const names = ["SŁONICZYK", "SŁONISZEK", "SŁUNIK", "SŁONIACZKO", "SŁONICZYNKA","SŁOWIANECZKO"];
const prefixs = ["Im sure that", "I think", "In my opinion", "I wish"]


const showName = () => {
    const index = Math.floor(Math.random() * names.length);
    const prefix = Math.floor(Math.random() * prefixs.length);
    dev.textContent = ` ${prefixs[prefix]}, this name is ${names[index]}`;
}

btn.addEventListener("click", showName)


//------------------------------------
////RANDOM CODE WITH 10 CHArS :))
//-----//------------------------------------------------

const chars = 'ABCDEFGHIJ0123456789';

const clicks = document.querySelector(".click");
const section = document.querySelector("section");

const codeNumbers  = 10; //ilosc numerow
const chartsWidth = 10; //dlugosc numerow


const functionMoves = () => {
 for(let i = 0; i < codeNumbers; i++) {
       let code = '';
           for(let i = 0; i < chartsWidth; i++) {
               const index = Math.floor(  Math.random()  *  20);
               code += chars[index];
           }
          const div = document.createElement('div');
                  div.textContent = code;
                      section.appendChild(div);
                      
        }
}

clicks.addEventListener("click", functionMoves );


