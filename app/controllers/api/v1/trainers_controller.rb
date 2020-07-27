class Api::V1:: TrainersController < ApplicationController
  before_action :set_trainer, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /trainers
  # GET /trainers.json
  def index
    @trainers = Trainer.where(:profile_id => params[:where][:profileId][:value])
    render json: @trainers, each_serializer: TrainerSerializer, status: :ok
  end

  # GET /trainers/1
  # GET /trainers/1.json
  def show
    @trainer = Trainer.find(params[:id])

    if stale?(last_modified: @trainer.updated_at, public: true)
      render json: @trainer
    end
  end

  # GET /trainers/new
  def new
    @trainer = Trainer.new

    if stale?(last_modified: @trainer.updated_at, public: true)
      render json: @trainer
    end
  end

  # GET /trainers/1/edit
  def edit
    @trainer = Trainer.find(params[:id])

    if stale?(last_modified: @trainer.updated_at, public: true)
      render json: @trainer
    end
  end

  # POST /trainers
  # POST /trainers.json
  def create
    klass_ids  = params[:trainer][:klass_ids]
    @trainer = Trainer.new(trainer_params)
    @trainer.klasses = Klass.where(id: klass_ids)
    if @trainer.save
      render json: @trainer, status: :ok
    else
      render json: { errors: @trainer.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /trainers/1
  # PATCH/PUT /trainers/1.json
  def update
    @trainer = Trainer.find(params[:id])
    klass_ids = params[:trainer][:klass_ids].split(',')

    if  @trainer.update_attributes(trainer_params)
      @trainer.klasses = Klass.where(id: klass_ids)
      @trainer.save!
      render json: { trainer:  @trainer }, message:'Trainer was successfully updated.', status: :ok
    else
      render json: { errors:  @trainer.errors }, message:'Trainer not successfully updated.', status: :unprocessable_entity
    end
  end

  # DELETE /trainers/1
  # DELETE /trainers/1.json
  def destroy
    if @trainer.destroy
      render json: { message: 'Trainer was successfully destroyed.' }, status: :ok
    else
      render json: { errors: @trainer.errors }, message:'Trainer not successfully destroyed.', status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_trainer
      @trainer = Trainer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def trainer_params
      params.require(:trainer).permit(:first_name, :last_name, :email, :address, :city, :state, :zip, :phone, :profile_id, :image)
    end
end
