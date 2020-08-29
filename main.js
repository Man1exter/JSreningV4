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
