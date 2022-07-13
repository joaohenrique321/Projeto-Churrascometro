let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

    let adultos= inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;

    let quantidadeTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
   let quantidadeTotalcerveja =  cervejaPP(duracao) * adultos;
   let quantidadeTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas); 

    resultado.innerHTML = `<p>${quantidadeTotalCarne/1000} kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalcerveja/355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalBebidas/2000)}garrafa de Bebida</p>`
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650;
    }
        else{
            return 400;
        }
    }
    function cervejaPP(duracao){
        if (duracao >= 6){
            return 2000;
        }
            else{
                return 1200;
            }
        }
        function bebidasPP(duracao){
            if (duracao >= 6){
                return 1500;
            }
                else{
                    return 1000;
                }
            }
        
