const {$} = require('jquery');
$(document).ready(function () {
  $('body').tooltip({ selector: '[data-toggle=tooltip]' });
  $('[data-toggle="popover"]').popover();
  $('.popover-dismiss').popover({
    trigger: 'focus',
  });
});