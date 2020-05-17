# require 'test_helper'
#
# module ActionController
#   module Serialization
#     class ImplicitSerializerTest < ActionController::TestCase
#       class PostWithoutSerializer < ActiveRecord::Base
#         self.table_name = :posts
#       end
#       class ImplicitSerializationTestController < ActionController::Base
#         def render_record_without_serializer
#           @post = PostWithoutSerializer.new(title: 'Title', body: 'Body')
#           render json: @post
#         end
#       end
#
#       tests ImplicitSerializationTestController
#
#       def test_record_without_serializer
#         with_adapter :json do
#           get :render_record_without_serializer
#         end
#
#         expected = {}
#         PostWithoutSerializer.column_names.each { |field| expected[field] ||= nil }
#         expected.update(
#           title: 'Title',
#           body: 'Body'
#         )
#
#         assert_equal 'application/json', @response.content_type
#         assert_equal expected.to_json, @response.body
#       end
#     end
#   end
# end
