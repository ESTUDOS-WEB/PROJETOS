function calcImc(peso, altura){
    let resultado = 0;
    if(altura !=0){
        resultado= peso/(Math.pow(altura, 2))
    }

    return resultado;
}

function classificaImc(imc){
    let clasificacao;

    if(imc < 18.5){
        clasificacao = "Baixo peso";
    }
    else if(imc >= 18.5 && imc < 25){
        clasificacao = "Adequado";
    }
    else if(imc >= 25 && imc < 30){
        clasificacao = "Sobrepeso";
    }
    else{
        clasificacao = "Obesidade";
    }

    return clasificacao;
}

function atualizar(){
    const altura= document.getElementById("altura").value;
    const peso= document.getElementById("peso").value;
    const imc= document.getElementById("imc");
    const classeficacao = document.getElementById("classe");

    imc.innerHTML= calcImc(peso, altura);
    classeficacao.innerHTML= classificaImc(Number(imc.innerHTML))

}

btnCalcular= document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", atualizar);