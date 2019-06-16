json.array! @messages do |message|
  json.content message.content
  json.image message.image.url
  json.date message.created_at
  json.name message.user.name
  #json.id message.id
  json.message_id message.id
  json.group_id message.group.id
end