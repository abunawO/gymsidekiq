class Api::V1::MembersController < ApplicationController
  before_action :set_member, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /members
  # GET /members.json
  def index
    # binding.pry
    @members = Member.where(:profile_id => params[:where][:profileId][:value])
    render json: @members, each_serializer: MemberSerializer, status: :ok
  end

  # GET /members/1para
  # GET /members/1.json
  def show
    @member = Member.find(params[:id])

    if stale?(last_modified: @member.updated_at, public: true)
      render json: @member
    end
  end

  # GET /members/new
  def new
    #binding.pry
    @member = Member.new

    if stale?(last_modified: @member.updated_at, public: true)
      render json: @member
    end
  end

  # GET /members/1/edit
  def edit
    @member = Member.find(params[:id])

    if stale?(last_modified: @member.updated_at, public: true)
      render json: @member
    end
  end

  # POST /members
  # POST /members.json
  def create
    #binding.pry
    @member = Member.new(member_params)

    if @member.save
      render json: @member, each_serializer: MemberSerializer, status: :ok
    else
      render json: { errors: @member.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /members/1
  # PATCH/PUT /members/1.json
  def update
    if @member.update(profile_params)
      render json: { member: @member }, message:'Member was successfully updated.', status: :ok
    else
      render json: { errors: @member.errors }, message:'Member not successfully updated.', status: :unprocessable_entity
    end
  end

  # DELETE /members/1
  # DELETE /members/1.json
  def destroy
    if @member.destroy
      render json: { message: 'Member was successfully destroyed.' }, status: :ok
    else
      render json: { errors: @member.errors }, message:'Member not successfully destroyed.', status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def member_params
      #binding.pry
      params.require(:member).permit(:membership_type, :first_name, :last_name, :email, :profile_id, :address, :city, :state, :zip, :phone, :plan_id)
    end
end
