function textInput(name, value) {
  return "<input type='text' name='" + name + "' value='" + value + "'/>";
}

$(document).ready(function() {
  $("#credits-container").tooltip({
    delay: 500,
    effect: 'fade',
    position: 'top left',
    events: {
      def: 'click, mouseout'
    }
  });

  $('#submit').click(function() {
    url = $('#url-input').val();

  $('#post-form').attr('method', $('input.method:checked').attr('id'));

    $('#post-form').attr('action', url);
    
    $('.key-val-pair').each(function(index, element) {
      name = $('.param', element).val();
      value = $('.value', element).val();

      $('#post-form').append(textInput(name, value));
    });

    mpq.track("Submission");
    $('#post-submit').click();
  });

  $('#new-param').click(
    function() {
      $('#input-form').append("<p class='key-val-pair'><input type='text' class='param' value='param'/> <input type='text' class='value' value='value'/></p>");
  });

  $('input').keyup(function(event) {
    if (event.keyCode == 13) {
      $('#submit').click();
    }
  });

  $('input').focus(function() {
    if ($(this).attr('type') == 'text' && $(this).attr('class') == $(this).val()) {
      $(this).val('');
    }
  });
});
