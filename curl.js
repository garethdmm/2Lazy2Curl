function textInput(name, value) {
  return "<input type='text' name='" + name + "' value='" + value + "'/>";
}

$(document).ready(function() {
  $('#submit').click(function() {
    url = $('#url-input').val();
    method = $('#method-input').val();

    $('#post-form').attr('method', method);
    $('#post-form').attr('action', url);
    
    $('.key-val-pair').each(function(index, element) {
      name = $('.param', element).val();
      value = $('.value', element).val();

      $('#post-form').append(textInput(name, value));
    });

    $('#post-submit').click()
  });

  $('#new-param').click(
    function() {
      $('#input-form').append("<p class='key-val-pair'><input type='text' class='param' value='param'/> <input type='text' class='value' value='value'/></p>");
  });
});
