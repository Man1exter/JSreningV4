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
                     div.style.lineHeight ="50px";

                      
        }
}

clicks.addEventListener("click", functionMoves );


//---------------------------------
//------------------------------------------
// new function add name on input and show them below after to click add name
//-------------------------------------------------
//preventDefault - zatrzymuje dzialanie odswiezenia po wpisanoiu i dodanu


const users = [];
const element = document.querySelector(".user");


const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector(".info")
    const newUser = input.value;

if(input.value.length){
    
    for(user of users){
        
        if(user === newUser){
            alert("Don't write this name AGAIN!")
            return
        }
    
}
    users.push(newUser);
    element.textContent += newUser + ", "
    input.value = "";
}
}
const pushButton = document.querySelector(".namee").addEventListener("click", addName);