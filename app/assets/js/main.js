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
        $('#contact-form').validate({
            rules:{
                name:{
                    required:true,
                    minlength:5,
                },
                email:{
                    required:true,
                    email:true,
                },
                subject:{
                    required:true,
                }
            },
            messages:{
                name:{
                    required:"Please Enter Your Name",
                    minlength:"You Need Enter More 5 Characters",
                },
                email:{
                    required:"Please Enter Your Email",
                    email:"You Need Enter Type Email ",
                },
                subject:{
                    required:"Please Enter Your Subject",
                }
            }
        });
});