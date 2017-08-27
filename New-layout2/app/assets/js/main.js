$(document).ready(function(){

        $('section[data-type="background"]').each(function(){
            var $this=$(this);
            var $window=$(window);
            $window.scroll(function(){
                var y=-($window.scrollTop()/($this.data('speed')/2));
                var position="100% "+y+"px";
                $this.css({backgroundPosition:position});
                
            });
        });
        $(".image-member").hover(function(){
                $(this).children( ".personal" ).slideDown(500);                
            }, function(){
                $(this).children( ".personal" ).slideUp(500);
        });
        
       
        
});