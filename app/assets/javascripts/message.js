$(function(){
  function buildHTML(message){

    var addImage = message.image? `<img class="lower-message__image" src=${message.image}>` : "";

    var html = `<div class='subheading' data-message-id=${message.message_id}>
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
      $('input').prop('disabled', false);
      $('.wrapper__main__cont').animate({scrollTop: $('.wrapper__main__cont')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(data){
      alert('エラーが発生しました');
      $('input').prop('disabled', false);
    })
  });

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      var last_message_id = $('.subheading').last().data('message-id');
      var group_id = $('.wrapper__main__cont').data('group-id');
      $.ajax({
        //ルーティングで設定した通りのURLを指定
        url: '/groups/' + group_id + '/api/messages',
        //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'get',
        dataType: 'json',
        //dataオプションでリクエストに値を含める
        data: {id: last_message_id}
      })
      .done(function(messages) {
        messages.forEach(function(message){
          var insertHTML = buildHTML(message);
          $('.wrapper__main__cont').append(insertHTML);
          $('.wrapper__main__cont').animate({scrollTop: $('.wrapper__main__cont')[0].scrollHeight}, 'fast');
        });
      })
      .fail(function(data){
        alert('エラーが発生しました');
      })
    }
  };
  setInterval(reloadMessages, 5000);
});