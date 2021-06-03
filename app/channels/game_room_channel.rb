# frozen_string_literal: true

class GameRoomChannel < ApplicationCable::Channel # :nodoc:
  def subscribed
    stream_from 'live_game_channel'
  end

  def unsubscribed
    stop_all_streams
  end

  def speak(data)
    ActionCable.server.broadcast 'live_game_channel', data
  end
end
