console.log("***************************************")
console.log("Sistema petshop ***********************")
console.log("***************************************")

let pets = [
    {
      "nome": "Isis",
      "raca": "Sem raca definida",
      "peso": 2,
      "idade": 1,
      "cor": "cinza",
      "sexo": "Feminino",
      "dono": "Rafael",
      "castrado": true
   },
    {
      "nome": "Churros",
      "raca": "Sem raca",
      "peso": 4,
      "idade": 8,
      "cor": "Marrom",
      "sexo": "Masculino",
      "dono": "João",
      "castrado": true
   },
    {
      "nome": "Meg",
      "raca": "Yorkshire",
      "peso": 4,
      "idade": 4,
      "cor": "Preto e Caramelo",
      "sexo": "Feminino",
      "dono": "Marcelo",
      "castrado": true
   },
    {
      "nome": "Mel",
      "raca": "Poodle",
      "peso": 7,
      "idade": 12,
      "cor": "branco",
      "sexo": "Feminino",
      "dono": "Everton",
      "castrado": true
   },
    {
      "nome": "Vincent",
      "raca": "Vira-latas",
      "peso": 7,
      "idade": 6,
      "cor": "amarelo",
      "sexo": "Masculino",
      "dono": "Carol",
      "castrado": true
   },
    {
      "nome": "Papagaio",
      "raca": "Loro",
      "peso": 1,
      "idade": 15,
      "cor": "Verde",
      "sexo": "Masculino",
      "dono": "Ricardo",
      "castrado": false
   },
    {
      "nome": "Buddah",
      "raca": "Dalmatas",
      "peso": 16,
      "idade": 0.3,
      "cor": "Branco e preto",
      "sexo": "Masculino",
      "dono": "Kaike",
      "castrado": false
   },
    {
      "nome": "Thor",
      "raca": "Pastor Alemão",
      "peso": 19,
      "idade": 5,
      "cor": "Caramelo ",
      "sexo": "Masculino",
      "dono": "Eu ",
      "castrado": true
   },
    {
      "nome": "Rex",
      "raca": "labrador",
      "peso": 12,
      "idade": 6,
      "cor": "preto",
      "sexo": "Masculino",
      "dono": "Allan",
      "castrado": false
   },
    {
      "nome": "Zara",
      "raca": "husky ",
      "peso": 4,
      "idade": 2,
      "cor": "branco com preto",
      "sexo": "Feminino",
      "dono": "Bianca",
      "castrado": true
   },
    {
      "nome": "Alexandre Ignacio",
      "raca": "Generica",
      "peso": 15,
      "idade": 4,
      "cor": "Marron e Preto",
      "sexo": "Masculino",
      "dono": "Alexandre",
      "castrado": false
   },
    {
      "nome": "Zara",
      "raca": "husky ",
      "peso": 4,
      "idade": 2,
      "cor": "branco com preto",
      "sexo": "Feminino",
      "dono": "Bianca",
      "castrado": true
   },
    {
      "nome": "Bisteca",
      "raca": "vira lata",
      "peso": 12,
      "idade": 1,
      "cor": "marrom",
      "sexo": "Feminino",
      "dono": "Ana",
      "castrado": false
   },
    {
      "nome": "Astor",
      "raca": "Pastor Alemão",
      "peso": 40,
      "idade": 2,
      "cor": "preto e caramelo",
      "sexo": "Masculino",
      "dono": "Rafael ",
      "castrado": true
   },
    {
      "nome": "Happy",
      "raca": "North Terrier",
      "peso": 5,
      "idade": 1,
      "cor": "Marrom",
      "sexo": "Masculino",
      "dono": "Jeong Yoon Lee",
      "castrado": true
   },
    {
      "nome": "Dengosa",
      "raca": "Vira Lata",
      "peso": 3.5,
      "idade": 4,
      "cor": "Preta",
      "sexo": "Feminino",
      "dono": "Tamires",
      "castrado": true
   },
    {
      "nome": "Tita",
      "raca": "Pintcher",
      "peso": 1,
      "idade": 15,
      "cor": "Marrom",
      "sexo": "Feminino",
      "dono": "Vinicius",
      "castrado": false
   },
    {
      "nome": "Mingau",
      "raca": "Vira Lata",
      "peso": 7.5,
      "idade": 2,
      "cor": "Branco",
      "sexo": "Masculino",
      "dono": "Tamires",
      "castrado": true
   },
    {
      "nome": "Scoob",
      "raca": "Poodle e shtisel",
      "peso": 20,
      "idade": 3,
      "cor": "Misto amarelo e branco",
      "sexo": "Masculino",
      "dono": "Daniele",
      "castrado": true
   },
    {
      "nome": "Maria Victória",
      "raca": "Vira Lata",
      "peso": 2.5,
      "idade": 4,
      "cor": "Cinza, amarela e branca",
      "sexo": "Feminino",
      "dono": "Tamires",
      "castrado": true
   }
   ]


/** Através de um nome de um pet, ele vai retornar o primeiro objeto que possui este nome.
 * 
 * Caso o pet não seja encontrado ele retorna false.
 * 
 * @param nome Nome do Pet que vai procurar.
 * @return Object pet
 */
function encontrarPet(nome) {
    // for (let pet of pets) {
    //     if (pet.nome === nome) {
    //         return pet;
    //     }
    // }
    // return false;
    let pet_encontrado = pets.find(pet => pet.nome === nome);
    
    /**
     * O JS entende os seguintes valores como false 
     * null === false
     * "" === false
     * undefined === false
     */
    if (!pet_encontrado) return false;

    return pet_encontrado;
}

/** Através de um nome de um pet, ele vai exibir no terminal o pet e suas caracteristicas.
 * Caso não encontre ele exibe a mensagem "PET não encontrado."
 * 
 * @param nome Nome do pet que vai procurar
 * @return undefined
 */
function exibePet(nome) {
    let pet_encontrado = encontrarPet(nome);
    if (pet_encontrado === false) {
        console.log("PET não encontrado.");
    } else {
        for(let caracteristica in pet_encontrado) {
            console.log(caracteristica, pet_encontrado[caracteristica]);
        }
    }
}


/** Castra um pet não castrado.
 * Caso o pet já seja cadastrado exibe, "o pet já esta castrado" no console
 * 
 * @param number Posição do pet que vai ser vacinado
 */
function castrar() {

}

/**
 * Adicionar a propriedade de vacina em todos pet da variável petss,
 * Vacina tem como valor padrão um array vazio.
 */
function adicionaVacinaNosPets() {

}

/** Vacina um pet com a vacina passada como parametro
 * Se a vacina existir ele exibe "Vacina já foi aplicada."
 * Se a vacina não existir ele vacina o pet, e adiciona o nome da vacina no array.
 * @param posicao posicao do pet que vai ser vacinado
 * @param nome_vacina Nome da vacina a ser dada.
 */
function vacinaPet() {

}

// console.log(encontrarPet("Churros"));
exibePet("Isis");