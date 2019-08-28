$(function(){

    $('#Objeto').bind('mousedown', function(){
        $('#Objeto').css('cursor','grabbing')
        $('#Objeto').css('background-color','red')
        $('#Objeto').bind('mousemove',function(e){
            var x = e.originalEvent.pageX;
            var y = e.originalEvent.pageY;

            var width = $(this).width();
            var height = $(this).height();

            $(this).css('left',(x - (width/2))+'px');
            $(this).css('top',(y - (height/2))+'px');
        });
        

    });

    $('#Objeto').bind('mouseup',function(){
        $('#Objeto').css('background-color','black')
        $('#Objeto').css('cursor','grab')
        $('#Objeto').unbind('mousemove')
    })
  

}); 