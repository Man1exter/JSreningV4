const btn = document.querySelector(".roll");
const dev = document.querySelector(".name");

const names = ["SŁONICZYK", "SŁONISZEK", "SŁUNIK", "SŁONIACZKO", "SŁONICZYNKA"];
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

const chars = 'ABCDEFG0123456789';

const clicks = document.querySelector(".click");
const section = document.querySelector("section");



