module ApiHelper # :nodoc:
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
  def authenticated_header(payload = {}, exp = 48.hours.from_now)
    playload = {:exp=> exp.to_i}
    JWT.encode(payload, SECRET_KEY)
  end
end