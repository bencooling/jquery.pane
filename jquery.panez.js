'use strict';

// support stand alone jquery plugin, requirejs or npm module 
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

// jQuery plugin 
}(function(jQuery) {

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

}));
