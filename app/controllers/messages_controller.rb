class MessagesController < ApplicationController

  def index

  end

  def create
    @message = Message.create(message_params) if user_signed_in?
  end

  private

  def message_params
    params.permit()
  end
end
