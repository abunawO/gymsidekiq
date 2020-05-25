require 'test_helper'

class KlassSchedulesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @klass_schedule = klass_schedules(:one)
  end

  test "should get index" do
    get klass_schedules_url, as: :json
    assert_response :success
  end

  test "should create klass_schedule" do
    assert_difference('KlassSchedule.count') do
      post klass_schedules_url, params: { klass_schedule: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show klass_schedule" do
    get klass_schedule_url(@klass_schedule), as: :json
    assert_response :success
  end

  test "should update klass_schedule" do
    patch klass_schedule_url(@klass_schedule), params: { klass_schedule: {  } }, as: :json
    assert_response 200
  end

  test "should destroy klass_schedule" do
    assert_difference('KlassSchedule.count', -1) do
      delete klass_schedule_url(@klass_schedule), as: :json
    end

    assert_response 204
  end
end
