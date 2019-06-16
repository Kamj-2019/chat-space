$(function(){
  var user_list = $("#user-search-result");
  function appendUserToList(user) {
    var html = `<div class="chat-group-user clearfix" id='delete'>
                  <p class="chat-group-user__name">${ user.name }</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" id="user_info" user-id="${ user.id }" user-name="${ user.name }">追加</div>
                </div>`;
    user_list.append(html);
  }

  function appendErrMsg(msg) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ msg }</p>
                </div>`;
    user_list.append(html);
  }

  var group_users = $("#chat-group-users");
  function appendUserToGroup(user_id, user_name){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
    <input name='group[user_ids][]' type='hidden' value='${ user_id }'>
    <p class='chat-group-user__name'>${ user_name }</p>
    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
  </div>`;
  group_users.append(html);
  }

  $('#user-search-field').on('keyup', function(){
    var input = $(this).val();
    if (input != '') {
      $.ajax({
        url: '/users', //users#index
        type: 'GET',
        data: { name : input },
        dataType: 'json'
      })
      .done(function(data){
        if (data.length !== 0) {
          $('#user-search-result').empty();
          data.forEach(function(user){
            appendUserToList(user);
          });
        }
        else {
          $('#user-search-result').empty();
          appendErrMsg("一致する名前はありません");
        };
      })
      .fail(function(){
        alert('ユーザー検索に失敗しました');
      })
      return false;
    }
  })

  $(document).on('click', '.user-search-add', function(){
    var user_id = $(this).attr('user-id');
    var user_name = $(this).attr('user-name');
    $(this).parent().remove();
    appendUserToGroup(user_id, user_name);
  })

  $(document).on('click', '.user-search-remove', function() {
    $(this).parent().remove();
  });
})