class MessagesController < ApplicationController

  def index
    @message = Message.find(params[:group_id])
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to group_messages_path
    else
      render :index, notice: 'メッセージを入力してください'
    end
  end

  private

  def message_params
    params.permit(:content, :image, :group_id, :user_id)
  end
end
