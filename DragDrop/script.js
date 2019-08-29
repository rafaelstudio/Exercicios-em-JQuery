$(function(){

    $('#Objeto').bind('mousedown', function(){
        $(this).css('cursor','grabbing')
        $(this).css('background-color','red')
        $(this).bind('mousemove',function(e){
            var x = e.originalEvent.pageX;
            var y = e.originalEvent.pageY;

            var width = $(this).width();
            var height = $(this).height();

            $(this).css('left',(x - (width/2))+'px');
            $(this).css('top',(y - (height/2))+'px');
        });
        

    });

    $('#Objeto').bind('mouseup',function(){
        $(this).css('background-color','black')
        $(this).css('cursor','grab')
        $(this).unbind('mousemove')
    })
  

}); 