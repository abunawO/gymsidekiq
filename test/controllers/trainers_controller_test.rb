require 'test_helper'

class TrainersControllerTest < ActionController::TestCase
  setup do
    @trainer = trainers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:trainers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create trainer" do
    assert_difference('Trainer.count') do
      post :create, trainer: { email: @trainer.email, first_name: @trainer.first_name, last_name: @trainer.last_name, section_id: @trainer.section_id, user_id: @trainer.user_id }
    end

    assert_redirected_to trainer_path(assigns(:trainer))
  end

  test "should show trainer" do
    get :show, id: @trainer
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @trainer
    assert_response :success
  end

  test "should update trainer" do
    patch :update, id: @trainer, trainer: { email: @trainer.email, first_name: @trainer.first_name, last_name: @trainer.last_name, section_id: @trainer.section_id, user_id: @trainer.user_id }
    assert_redirected_to trainer_path(assigns(:trainer))
  end

  test "should destroy trainer" do
    assert_difference('Trainer.count', -1) do
      delete :destroy, id: @trainer
    end

    assert_redirected_to trainers_path
  end
end
