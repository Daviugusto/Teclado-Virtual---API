const input = document.querySelector(".searchi")

function clickLetter(keycap){
    input.value +=keycap;
}

function backspace() {
    input.value = input.value.slice(0, -1);
}

function addSpace() {
    input.value += " ";
}

function enter() {
    alert("Você digitou: " + input.value);
}

async function buscar() {
    const texto = document.querySelector(".searchi").value;

    const resposta = await fetch(
        `https://pt.wikipedia.org/api/rest_v1/page/summary/${texto}`
    );

    const dados = await resposta.json();

    document.querySelector(".Results").innerHTML = `
        <h2>${dados.title}</h2>
        <p>${dados.extract}</p>
    `;
}
