/** 
 * O que é a arrow function?
 * 
 * Ela serve para encurtar a forma de escrever uma função anonima
 */

/**
 * Função anonima: É uma função que não tem nome
 */

/**
 * Estrutura função normal:
 */
function nome_da_funcao() {
    //... código da função
    return
}
/**
 * função anônima:
 */
function() {
    //... código da função
    return
}

function clickSalvar(callback) {
    var button;
    /**
     * FAZ código de efeito do botão salvar
     */
    callback(button);
}


clickSalvar(function (button) { /* SALVA OS DADOS... */ })
clickSalvar(function (button) { /* SALVA OS DADOS... */ })

clickSalvar(function() { /* SALVA OS DADOS DE OUTRA FORMA... */ })

/**
 * Arrow com mais de uma linha, precisa utilizar a palavra return
 */
() => {
    return;
}

/**
 * Sem o bigodinho não precisa utilizar a palavra return e o código tem que estar em uma linha
 */
() => "Olá mundo!"

/**
 * Em caso de ter apenas um parametro, o parenteses não é obrigatório.
 */
x => "O dobro do valor informado é: " + x*2;

/**
 * Closures
 */
function Treas() {
    function Salvar() {

    }

    Salvar();
}
