class Api::V1::SectionsController < ApplicationController
  before_action :set_section, only: [:show, :edit, :update, :destroy]

  # GET /sections
  # GET /sections.json
  def index
    @sections = Section.where(:user_id => params[:where][:userId][:value])
    render json: @sections, each_serializer: SectionSerializer, status: :ok
  end

  # GET /sections/1
  # GET /sections/1.json
  def show
  end

  # GET /sections/new
  def new
    @section = Section.new
  end

  # GET /sections/1/edit
  def edit
  end

  # POST /sections
  # POST /sections.json
  def create
    @section = Section.new(section_params)
    if @section.save
      render json: { section: @section }, status: :ok
    else
      render json: { errors: @section.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sections/1
  # PATCH/PUT /sections/1.json
  def update
    if @section.update(profile_params)
      render json: { section: @section }, message:'Section was successfully updated.', status: :ok
    else
      render json: { errors: @section.errors }, message:'Section not successfully updated.', status: :unprocessable_entity
    end
  end

  # DELETE /sections/1
  # DELETE /sections/1.json
  def destroy
    if @section.destroy
      render json: { message: 'Section was successfully destroyed.' }, status: :ok
    else
      render json: { errors: @section.errors }, message:'Section not successfully destroyed.', status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_section
      @section = Section.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def section_params
      params.require(:section).permit(:title, :profile_id, :user_id)
    end
end
