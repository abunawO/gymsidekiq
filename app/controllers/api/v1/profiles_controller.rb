class Api::V1::ProfilesController < ApplicationController
  before_action :set_profile, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /profiles
  # GET /profiles.json
  def index
    if params[:where][:userId]
      @profiles = Profile.where(:user_id => params[:where][:userId][:value])
    else
      @profiles = Profile.where(:id => params[:where][:profileId][:value])
    end
    render json: @profiles, status: :ok
  end

  # GET /profiles/1
  # GET /profiles/1.json
  def show
    @profile = Profile.find(params[:id])

    if stale?(last_modified: @profile.updated_at, public: true)
      render json: @profile
    end
  end

  # GET /profiles/new
  def new
    @profile = Profile.new

    if stale?(last_modified: @profile.updated_at, public: true)
      render json: @profile
    end
  end

  # GET /profiles/1/edit
  def edit
    @profile = Profile.find(params[:id])

    if stale?(last_modified: @profile.updated_at, public: true)
      render json: @profile
    end
  end

  # POST /profiles
  # POST /profiles.json
  def create
    #binding.pry
    @profile = Profile.new(profile_params)
    if @profile.save
      _update_user @profile
      render json: @profile, status: :ok
    else
      render json: { errors: @profile.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /profiles/1
  # PATCH/PUT /profiles/1.json
  def update
    if @profile.update(profile_params)
      render json: { profile: @profile }, message:'Profile was successfully updated.', status: :ok
    else
      render json: { errors: @profile.errors }, message:'Profile not successfully updated.', status: :unprocessable_entity
    end
  end

  # DELETE /profiles/1
  # DELETE /profiles/1.json
  def destroy
    @profile.destroy
    if @profile.destroy
      render json: { message: 'Profile was successfully destroyed.' }, status: :ok
    else
      render json: { errors: @profile.errors }, message:'Profile not successfully destroyed.', status: :unprocessable_entity
    end
  end

  private
    def _update_user profile
      profile.user.update_column(:profile_id, profile.id)
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = Profile.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def profile_params
      #binding.pry
      params.require(:profile).permit(:profile_name, :email, :address, :city, :state, :zip, :phone, :user_id)
    end
end
