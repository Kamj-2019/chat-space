$(function(){
  function buildHTML(message){

    var addImage = message.image? `<img class="lower-message__image" src=${message.image}>` : "";

    var html = `<div class='subheading'>
    <h1>${ message.name }</h1>
    <p>${ message.date }</p>
    </div>
    <p class='message'>${ message.content }</p>
    ${addImage}`;
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.wrapper__main__cont').append(html);
      $('#message_content').val('');
      $('input').prop('disabled', false);
      $('.wrapper__main__cont').animate({scrollTop: $('.wrapper__main__cont')[0].scrollHeight}, 'fast');
    })
    .fail(function(data){
      alert('エラーが発生しました');
      $('input').prop('disabled', false);
    })
  });
});