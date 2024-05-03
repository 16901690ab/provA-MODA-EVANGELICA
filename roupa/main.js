const botao =document.querySelectorAll(".botao");
const textos =document.querySelectorAll(".imagens");


for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function () {

     for(let j=0; j<botoes,length;j++){
        botao[j].classList.remove("ativo");
     }
     botao[i].classList.add("ativo");
     textos[i].classList.add("ativo");
     
        
    }
    botao[i].classList.add("ativo");
    textos[i].classList.add("ativo");

}