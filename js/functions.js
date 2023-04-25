$(document).ready(function(){

    //Função que pega o que está sendo escrito em TEXTAREA e envia para a div com ID #div-texto
    $('textarea').keyup(function () {                                          //A atualização é feita sempre que o usuário digita algum caractere (keyup)
        $('#div-texto').text($(this).val());                                   //Envia para a div em formato html
        $('#quant-caracteres').text($(this).val().length + " caracteres");     //Exibe a quantidade de caracteres num span
    });

});

