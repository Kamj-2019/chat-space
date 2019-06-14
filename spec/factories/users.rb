# 「rails s」でサーバー起動する際に下記のエラーが出るのでコメントアウトしておく。
# /Users/kamatajun/projects/chat-space/spec/factories/users.rb:3:in `block (2 levels) in <top (required)>': uninitialized constant Faker (NameError)

#FactoryBot.define do
#  factory :user do
#    password = Faker::Internet.password(8)
#    name  {Faker::Name.last_name}
#    email  {Faker::Internet.free_email}
#    password  {password}
#    password_confirmation  {password}
#  end
#end
