class Api::V1::AttendancesController < ApplicationController
  before_action :set_attendance, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /attendances
  # GET /attendances.json
  def index
    @attendances  = Attendance.where(profile_id: params[:where][:profileId][:value])
    render json: @attendances
  end

  # GET /attendances/1
  # GET /attendances/1.json
  def show
    @attendance = Attendance.find(params[:id])

    if stale?(last_modified: @attendance.updated_at, public: true)
      render json: @attendance
    end
  end

  # GET /attendances/new
  def new
    @attendance = Attendance.new

    if stale?(last_modified: @attendance.updated_at, public: true)
      render json: @attendance
    end
  end

  # POST /attendances
  # POST /attendances.json
  def create
    @attendance = Attendance.new(attendance_params)
    if  @attendance.save
      render json: @attendance, status: :ok
    else
      render json: { errors: @attendance.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /attendances/1
  # PATCH/PUT /attendances/1.json
  def update
    @attendance = Attendance.find(params[:id])

    if @attendance.update_attributes(attendance_params)
      render json: { attendance: @attendance }, message:'Attendance was successfully updated.', status: :ok
    else
      render json: { errors: @attendance.errors }, message:'Attendance not successfully updated.', status: :unprocessable_entity
    end
  end

  # DELETE /attendances/1
  # DELETE /attendances/1.json
  def destroy
    if @attendance.destroy
      render json: { message: 'Attendance was successfully destroyed.' }, status: :ok
    else
      render json: { errors: @attendance.errors }, message:'Attendance not successfully destroyed.', status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_attendance
      @attendance = Attendance.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def attendance_params
      params.fetch(:attendance, {}).permit(:id, :profile_id, :member_id, :klass_id)
    end
end
