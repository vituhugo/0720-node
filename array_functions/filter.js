// let numeros = [
//     1, 4, 5, 6, 7, 10, 30, 35
// ];

// let numeros_filtrados = numeros.filter((valor) => {
//     return valor%2;
//     // 0 = false ; 1 = true;
// });

// let numeros_filtrados = numeros.filter(valor => valor > 10);
// // let numeros_filtrados = numeros.filter(function (valor) {
// //     return valor > 10;
// // });

// let nomes = ["sara", "tob", "pitucha"]
// for (let nome of nomes) {
//     console.log ("O nome do dog é:", nome);
// }

// let caracteristicas = {
//     cor_olhos: "azuis", 
//     usa_oculos: true, 
//     sexo: "masculino"
// };

// for (let prop in caracteristicas) {
//     let valor_caracteristica = caracteristicas[prop]
//     console.log("A caracterista do momento é:", prop);
//     console.log("O valor do momento é:", valor_caracteristica);
// }

let bart = { 
    mae: "Marge", 
    pai: "Homer", 
    hobbie: "Skate", 
    corCamiseta: "Laranja" 
}

for(let valores in bart){ 
    console.log(bart[valores]) 
}
