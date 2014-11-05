'use strict';

define(['jquery'], function($){

  $.fn.panez = function(){

    function changePane(){
      var $this  = $(this)
        , pane   = $this.data('panez')
        , panes  = $this.data('panez-group')
        , $tabs  = $('[data-panez-group="'+panes+'"]')
        , $panes = $('.'+panes)
        ;

      $tabs
        .removeClass('active')
        .filter(this)
        .addClass('active');

      $panes
        .removeClass('active')
        .filter('#'+pane)
        .addClass('active');
    }
    $(this).bind('click', changePane);

    return this;
  };

});
