const btn = document.querySelector(".roll");
const dev = document.querySelector(".name");

const names = ["Słoniczyk", "Sloniczyszek", "Słunik", "Słoneczko", "Słoniczynka"];


const showName = () => {
    const index = Math.floor(Math.random() * 5);
    dev.textContent = `This name is ${names[index]}`;
}




btn.addEventListener("click", showName)
