function enviado(){ //função de envio para o contato.html
    alert("Mensagem enviada! Em breve nossa equipe irá retornar a sua mensagem, obrigado!"); //Alert que invoca uma caixa de mensagem indicando que a mensagem foi enviada
}

function mostrarCategoria(categoria) { 
//função que mostra as categorias do menu.html ao clicar, ou seja, essa função ao apertar botões dentro de 'mostrarCategoria' abrirá a classe 'categoria')
    
    var categorias = document.getElementsByClassName('categoria');//Obtém todos os elementos com a classe "categoria" e os armazena na variável 'categorias'. Esses elementos representam os botões do menu.

    for (var i = 0; i < categorias.length; i++) { //inicia um loop que percorre cada elemento das categorias. Se inicia o loop com i = 0 e continuará enquanto i for menor que o número total de categorias.
    categorias[i].style.display = 'none'; //Esconde a categoria definindo display para 'none'
    }
    document.getElementById(categoria).style.display = 'block'; //Exibe a categoria que corresponde ao ID passado como parâmetro
}

