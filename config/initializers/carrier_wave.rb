if Rails.env.production?
  CarrierWave.configure do |config|
    config.fog_credentials = {
      # Configuration for Amazon S3
      :provider              => 'AWS',
      :aws_access_key_id     => 'AKIA2OBOIKEPX4TQJHPJ',
      :aws_secret_access_key => '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'
    }
    config.fog_directory     =  'gymsidekiqproject'

  end
end
