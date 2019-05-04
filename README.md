# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


## userテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :members, dependent: :nullify
- has_many :groups, through: :members
- has_many :messages, dependent: :delete_all

## groupテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :members, dependent: :delete_all
- has_many :users, through: :members
- has_many :messages, dependent: :delete_all

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|string|null: false|
|image|string|null: true|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user