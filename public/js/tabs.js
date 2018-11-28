(function($) {
$(function() {
  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs2').find('div.tabs__content').removeClass('active-tab').eq($(this).index()).addClass('active-tab');
  });
});
})(jQuery);