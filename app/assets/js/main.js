$(document).ready(function(){
        var $window=$(window);  // JUST DECLARE ONCE TIME HERE FOR GLOBAL VARIABLE
        $('section[data-type="background"]').each(function(){
            var $this=$(this);
            var $window=$(window);      // update varibalbe
            $window.scroll(function(){  // should use: $window.on('scroll', function() {...})
                var y=-($window.scrollTop()/($this.data('speed')/2));
                var position="100% "+y+"px";
                $this.css({backgroundPosition:position});
                
            });
        });
        $('#horse').each(function(){
            var $window=$(window); //update varibalbe
            var $this=$(this);  
            $window.scroll(function(){
                var y=-($window.scrollTop()/($this.data('speed')/2));   // Should declare variable out of Each function, .scroll function
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
