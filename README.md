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
|email|string|null: false|

### Association
- has_many :members
- has_many :groups, through: :members

## groupテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false|

### Association
- has_many :members
- has_many :users, through: :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group, dependent: :delete_all
- belongs_to :user, dependent: :nullify


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|string|null: true|
|image|string|null: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group, dependent: :delete_all
- belongs_to :user, dependent: :delete_all