class KlassSchedulesController < ApplicationController
  before_action :set_klass_schedule, only: [:show, :update, :destroy]

  # GET /klass_schedules
  # GET /klass_schedules.json
  def index
    @klass_schedules = KlassSchedule.all
  end

  # GET /klass_schedules/1
  # GET /klass_schedules/1.json
  def show
  end

  # POST /klass_schedules
  # POST /klass_schedules.json
  def create
    @klass_schedule = KlassSchedule.new(klass_schedule_params)

    if @klass_schedule.save
      render :show, status: :created, location: @klass_schedule
    else
      render json: @klass_schedule.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /klass_schedules/1
  # PATCH/PUT /klass_schedules/1.json
  def update
    if @klass_schedule.update(klass_schedule_params)
      render :show, status: :ok, location: @klass_schedule
    else
      render json: @klass_schedule.errors, status: :unprocessable_entity
    end
  end

  # DELETE /klass_schedules/1
  # DELETE /klass_schedules/1.json
  def destroy
    @klass_schedule.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_klass_schedule
      @klass_schedule = KlassSchedule.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def klass_schedule_params
      binding.pry
      params.fetch(:klass_schedule, {})
    end
end
