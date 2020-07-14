let doguinho = {
    quantidade_patas: 4,
    raca: "buldog",
    cor: "caramelo",
    idade: 2,
    nome: "Caramelo"
}

// console.log("VAR DOGUINHO INICIAL:", doguinho);

/**
 * Stringfy é usado para envio do dado com array
 */
let json_do_doguinho = JSON.stringify(doguinho);
console.log("VAR DOGUINHO STRINGFY:", json_do_doguinho);

/**
 * Parse é usado para receber os dados da internet que vem como string.
 */
let doguinho_parse = JSON.parse(json_do_doguinho);
console.log("VAR DOGUINHO PARSE:", doguinho_parse);

// Exemplo String Methods

let frase = "Fiquem em casa! ";


// indexOf

frase.indexOf("e"); // 4

// slice

frase.slice(10, 13);
// Quem tem preguiça de contar
// frase.slice(frase.indexOf("casa"), frase.indexOf("casa")+3);

// trim
frase.trim(); // retorna "Fiquem em casa!" sem o espaço no final

fase.replace("Fiquem", "Saiam"); // retorna "Saiam em casa! "

// toLowerCase

let cidade = "SÃo Paulo";
"São Paulo" === cidade // retorna Falso!
"são paulo" === cidade.toLowerCase() // retorna Verdadeiro!

// split

frase.split(" "); // retorna ["Fiquem", "em", "casa" ]