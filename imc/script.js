$(function(){
///////Funcao para calculadora de IMC\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
    $('button').bind('click',function(){

        var altura = $('#altura').val();
        var peso =  $('#peso').val();

        altura = altura.replace(',','.');
        peso = peso.replace(',','.');

        var imc = peso / (altura*altura).toFixed(2);    

        if(imc < 16){
            var traducao = 'Baixo peso muito grave';
        }else if(imc >= 16 && imc < 16.99){
            var traducao = 'Baixo peso grave';
        }else if(imc >= 17 && imc < 18.49){
            var traducao = 'Peso Baixo';
        }else if(imc >= 18.50 && imc < 24.99){
            var traducao = 'Peso Normal';
        }else if(imc >= 25 && imc < 29.99){
            var traducao = 'SobrePeso';
        }else if(imc >= 30 && imc < 34.49){
            var traducao = 'Obesidade Grau I';
        }else if(imc >= 35 && imc < 39.99){
            var traducao = 'Obesidade Grau II';
        }else if(imc >= 40){
            var traducao = 'Obesidade Grau III';
        }
            

        $('#resultado').html(" Seu imc eh " + imc.toFixed(2) + " kg/m e seu status eh "+traducao);
        ///\/\/\/\/\/\/\/Funcao para calculadora de IMC/\/\/\/\/\/\
    });
//\/\/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/\/DROP DOWN MENU\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/
      
    $('li').hover(function(){
        //Ao passar o mauser
        //Encontra o menu dois e faz ele aparecer
        $(this).find('.menu2').slideDown('slow');
    },function(){
        //Ao tirar o mouse
        //faz o menu desaparecer
        $(this).find('.menu2').slideUp(1000,function(){
            $(this).find('.menu2').stop();
        });
    })
  ///\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ DROP DOWN MENU/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


  //\/\/ \/ \/ \/ \/ \/ \/ \/ \/ \/ Selecao de Horas\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/
        ///Faz aparecer o calendario
        var horaEscolhaCampo;
    $('.hora').bind('focus',function(){

        
        //pega a possicao do elemento selecionado
        var pos = $(this).offset();
        //pega a largura do elemento selecionado
        var width = $(this).width();

        $('.horaEscolha').css('left', pos.left + width + 10);    
        $('.horaEscolha').css('top', pos.top);
        $('.horaEscolha').fadeIn();

        horaEscolhaCampo = $(this);
    });
 ///Faz o calendario Sumir ao tirar o foco do input
    $('.hora').bind('blur',function(){
        setTimeout(function(){
            $('.horaEscolha').hide();
        },200);
        
    });

    $('.horaEscolha button').bind('click',function(){

        var horas = $(this).html();
        if(horas == ''||horas == null){
            $('p').html('Sem Horarios Disponiveis');
        }
        horaEscolhaCampo.val(horas);
        $(this).hide();

    });



  ///\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ SELECAO DE HORAS/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


}); 