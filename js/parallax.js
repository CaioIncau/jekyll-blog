$(document).ready(function(){
    
    function scrollTo($div){
     var yPos = -($(window).scrollTop() / $div.data('speed')); 
            var bgpos = '50% '+ yPos + 'px'; 
           $div.css('background-position', bgpos );
    };
 
   $('section.bgParallax').each(function(){
    	var $obj = $(this);
       	$(window).scroll(function() {
            scrollTo($obj);
        }); 
 
   });	
});