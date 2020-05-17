class Api::V1::PlansController < ApplicationController
  before_action :set_plan, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /plans
  # GET /plans.json
  def index
    @plans = Plan.where(profile_id: params[:where][:profileId][:value])
    render json: @plans, each_serializer: PlanSerializer, status: :ok
  end

  # GET /plans/1
  # GET /plans/1.json
  def show
    @plan = Plan.find(params[:id])

    if stale?(last_modified: @plan.updated_at, public: true)
      render json: @plan
    end
  end

  # GET /plans/new
  def new
    @plan = Plan.new

    if stale?(last_modified: @plan.updated_at, public: true)
      render json: @plan
    end
  end

  # GET /plans/1/edit
  def edit
    @plan = Plan.find(params[:id])

    if stale?(last_modified: @plan.updated_at, public: true)
      render json: @plan
    end
  end

  # POST /plans
  # POST /plans.json
  def create
    @plan = Plan.new(plan_params)
    if @plan.save
      render json: @plan, each_serializer: PlanSerializer, status: :ok
    else
      render json: { errors: @plan.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plans/1
  # PATCH/PUT /plans/1.json
  def update
    @plan = Plan.find(params[:id])
    if @plan.update_attributes(plan_params)
      render json: { klass: @plan }, message:'Plan was successfully updated.', status: :ok
    else
      render json: { errors: @plan.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /plans/1
  # DELETE /plans/1.json
  def destroy
    if @plan.destroy
      render json: { message: 'Plan was successfully destroyed.' }, status: :ok
    else
      render json: { errors: @klass.errors }, message:'Plan not successfully destroyed.', status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plan
      @plan = Plan.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def plan_params
      params.fetch(:plan, {}).permit(:title, :profile_id, :klass_ids, :price)
    end
end
