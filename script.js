document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#fechadura-1").addEventListener("change", atualizarPreco)
document.querySelector("#fechadura-2").addEventListener("change", atualizarPreco)
document.querySelector("#fechadura-3").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#fechadura-1").checked
    const incluiLayout2 = document.querySelector("#fechadura-2").checked
    const incluiLayout3 = document.querySelector("#fechadura-3").checked
    const prazo = document.querySelector("#prazo").value
  
    let preco = qtde * 100;
    if (temJS) preco  += 300
    if (incluiLayout) preco += 650
    if (incluiLayout2) preco += 600
    if (incluiLayout3) preco += 590
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia
   
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}