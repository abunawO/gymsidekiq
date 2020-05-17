class Api::V1:: KlassesController < ApplicationController
  before_action :set_klass, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /klasses
  # GET /klasses.json
  def index
    @klasses = Klass.where(profile_id: params[:where][:profileId][:value])
    render json: @klasses, each_serializer: KlassSerializer, status: :ok
  end

  # GET /klasses/1
  # GET /klasses/1.json
  def show
    @klass = Klass.find(params[:id])

    if stale?(last_modified: @klass.updated_at, public: true)
      render json: @klass
    end
  end

  # GET /klasses/new
  def new
    @klass = Klass.new

    if stale?(last_modified: @klass.updated_at, public: true)
      render json: @klass
    end
  end

  # GET /klasses/1/edit
  def edit
    @klass = Klass.find(params[:id])

    if stale?(last_modified: @klass.updated_at, public: true)
      render json: @klass
    end
  end

  # POST /klasses
  # POST /klasses.json
  def create
    @klass = Klass.new(klass_params)
    if  @klass.save
      render json: @klass, status: :ok
    else
      render json: { errors: @klass.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /klasses/1
  # PATCH/PUT /klasses/1.json
  def update
    @klass = Klass.find(params[:id])
    if @klass.update_attribute(:title, params[:klass][:title])
      render json: { klass: @klass }, message:'Klass was successfully updated.', status: :ok
    else
      render json: { errors: @klass.errors }, message:'Klass not successfully updated.', status: :unprocessable_entity
    end
  end

  # DELETE /klasses/1
  # DELETE /klasses/1.json
  def destroy
    if @klass.destroy
      render json: { message: 'Klass was successfully destroyed.' }, status: :ok
    else
      render json: { errors: @klass.errors }, message:'Klass not successfully destroyed.', status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_klass
      @klass = Klass.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def klass_params
      params.fetch(:klass, {}).permit(:id, :title, :profile_id, :schedule)
    end
end
