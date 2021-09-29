var ContagemeClassificação = window.prompt ("Digite a Quantidade de pecas");
for (let lupe = 0; lupe <= ContagemeClassificação; lupe = lupe + 1 ) {
    if (lupe % 2 === 0 && lupe != 0){
        console.log (lupe + "  Numero é Par")
     } else if(lupe % 2 !=0){
console.log (lupe + "  O numero é Impar")
    } 
    else {
        console.log (lupe + "  Numero é ZERO 0")
    }

    }
