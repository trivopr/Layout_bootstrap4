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
        $('#horse').each(function(){
            var $window=$(window);
            var $this=$(this);
            $window.scroll(function(){
                var y=-($window.scrollTop()/($this.data('speed')/2));
                var position="100% "+y+"px";
                $this.css({backgroundPosition:position});

            })
        });
});