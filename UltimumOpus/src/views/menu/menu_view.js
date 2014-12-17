define([
    'signals/page_dom_added_signal',
    'utils/jquery-ui',
    'backbone',
    'underscore',
    'config',
    'text!templates/menu/menu.html',
    'css!templates/menu/menu.css'
], function(pageDomAddedSignal, UI, Backbone, _, Config, tpl, css)
{
    return Backbone.View.extend({
        className: "aside-menu",
        events: {},
        
        initialize: function(options) {

            pageDomAddedSignal.add(this.panel, this);
            pageDomAddedSignal.add(this.scroll, this);
            pageDomAddedSignal.add(this.drag, this);
            
           
        },
        
        comparing:function(win, pos){
            if(win.scrollTop() > pos[1].position){
                console.log(pos[0].element)
            }else if(win.scrollTop() > pos[2].position && win.scrollTop() < pos[0].position){
                console.log(pos[1].element)
            }else if(win.scrollTop() > pos[3].position && win.scrollTop() < pos[1].position){
                console.log(pos[2].element)
            }else if(win.scrollTop() > pos[4].position && win.scrollTop() < pos[2].position){
                console.log(pos[3].element)
            }else if(win.scrollTop() > pos[5].position && win.scrollTop() < pos[3].position){
                console.log(pos[4].element)
            }else if(win.scrollTop() > pos[6].position && win.scrollTop() < pos[4].position){
                console.log(pos[5].element)
            }else if(win.scrollTop() > pos[7].position && win.scrollTop() < pos[5].position){
                console.log(pos[6].element)
            }else if(win.scrollTop() > pos[8].position && win.scrollTop() < pos[6].position){
                console.log(pos[7].element)
            }else if(win.scrollTop() < pos[7].position){
                console.log(pos[7].element)
            };
        },
        drag:function(){
            var grid = Math.floor(document.querySelector('#limitation').clientHeight/9);
            $('.draggable').draggable({
                axis:'y',
                containment:'#limitation',
                grid:[0, grid],
                start:function(){
                    $('section').css({
                        'display':'block',
                    });
                    setTimeout(function(){
                        $('section').css({
                            'opacity':'0.8'
                        });
                    },200)
                },
                stop:function(){
                    $('section').css({
                        'opacity':'0'
                    });
                    setTimeout(function(){
                        $('section').css({
                            'display':'none',
                        });
                    },500)
                }

            })
        },
        positions:[],
        panel:function(){
            var panels = document.getElementsByClassName('panel');
            var positions = [];
            for(var i=panels.length - 1; i >= 0; i--){
                this.positions.push({element:panels[i].id, position:panels[i].offsetTop}); 
            };
            console.log(this.positions);
            
        },
        scroll:function(){
            var self = this,
            pos = this.positions;
            win = $(window);

            win.scroll(function(){
                self.comparing(win, pos);
            });
        },
        render: function(){
            this.$el.html(_.template( tpl ));
        }
    });

});