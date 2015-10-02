(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function (jQuery){
  $.fn.pane = function (){

    var changePane = function (){

      var $this = $(this)
        , pane = $this.data('pane')
        , panes = $this.data('pane-group')
        , $tabs = $('[data-pane-group="' + panes + '"]')
        , $panes = $('.' + panes)
        ;

      $tabs
        .removeClass('active')
        .filter(this)
        .addClass('active');

      $panes
        .removeClass('active')
        .filter('.' + pane)
        .addClass('active');
    };
    $(this).bind('click', changePane);

    return this;
  };

}));
