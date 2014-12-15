define([
    'backbone',
    'underscore',
    'config',
    'text!templates/myADN/myADN.html',
    'css!templates/myADN/myADN.css'
], function(Backbone, _, Config, tpl, css)
{
    return Backbone.View.extend({
        className: "LContentADN leftData",
        events: {
            'click #leftDiADN':'leftSidebarADN'
        },
        
        initialize: function(options) {
        },

        leftSidebarADN: function(){
            $('body').css({'overflow-x':'hidden','overflow-y':'hidden'});
            this.getADN();
            $('.leftData').addClass('leftActive');
            TweenMax.to($("#leftSidebar"), 0.75, { "left": '0px', ease: Expo.easeInOut });
            TweenMax.to($(".LContentADN"), 0.75, { "right": '-50%', ease: Expo.easeInOut });
            TweenMax.to($("#car_title"), 0.75, { "left": '42.5%', ease: Expo.easeInOut });
        },

        getADN: function(){

            var scrollToElement = function(el, ms){
                var speed = (ms) ? ms : 600;
                $('html,body').animate({scrollTop: $(el).offset().top}, speed);
            }

            scrollToElement('.LContentADN', 600);
        },
            
        render: function(){
            this.$el.html(_.template( tpl ));
        }
    });

});