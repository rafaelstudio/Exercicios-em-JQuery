
var NumBolas = 0;
var placar = 0;

function addBola(){
    var x = Math.floor(Math.random()*800);
    var y = Math.floor(Math.random()*500);
    var cor = Math.floor(Math.random()*4);

    var bola = $('<div class="bola"> </div>');
    bola.css('left',x+'px');
    bola.css('top',y+'px');

    switch(cor){
        case 0:
            bola.css('background-color','blue');
            break;
        case 1:
            bola.css('background-color','red');
            break;
        case 2:
            bola.css('background-color','yellow');
             break;
         case 3:
            bola.css('background-color','black');
            break;
         case 4:
            bola.css('background-color','green');
            break;   
    }

    NumBolas++

        if(NumBolas > 6 ){
            alert("Voce Perdeu");
            placar = 0;
            NumBolas = 0;
            addBola.stop();
            location.reload();
        }

    bola.bind('click',function(){
        $(this).fadeOut('fast');
        placar++;
        NumBolas--;
        updatePlacar();
    })

    $(document.body).append(bola);


}



function updatePlacar(){
    $('#placar').html(placar);
}

$(function(){

    $('#comecar').bind('click',function(){
        setInterval(addBola,500);
        


    })
  

}); 