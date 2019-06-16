json.content @message.content
json.image @message.image.url
json.name @message.user.name
json.date @message.created_at
json.id @message.user_id
#idもデータとして渡す
json.message_id @message.id