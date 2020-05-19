if Rails.env.production?
  CarrierWave.configure do |config|
    config.fog_credentials = {
      # Configuration for Amazon S3
      :provider              => 'AWS',
      :aws_access_key_id     => 'AKIAJUNY3LOR3UNSOPVA',
      :aws_secret_access_key => '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'

    }
    config.fog_directory     =  'gymsidekiqproject'

  end
end
