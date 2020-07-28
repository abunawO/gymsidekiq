# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200727190034) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.integer  "profile_id"
    t.integer  "klass_id"
    t.integer  "member_id"
    t.datetime "check_in_date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["klass_id"], name: "index_attendances_on_klass_id", using: :btree
    t.index ["member_id"], name: "index_attendances_on_member_id", using: :btree
    t.index ["profile_id"], name: "index_attendances_on_profile_id", using: :btree
  end

  create_table "klasses", force: :cascade do |t|
    t.integer  "profile_id"
    t.text     "plan_ids"
    t.string   "title"
    t.text     "schedule"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "klasses_plans", force: :cascade do |t|
    t.integer  "plan_id"
    t.integer  "klass_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["klass_id"], name: "index_klasses_plans_on_klass_id", using: :btree
    t.index ["plan_id"], name: "index_klasses_plans_on_plan_id", using: :btree
  end

  create_table "klasses_trainers", force: :cascade do |t|
    t.integer  "trainer_id"
    t.integer  "klass_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["klass_id"], name: "index_klasses_trainers_on_klass_id", using: :btree
    t.index ["trainer_id"], name: "index_klasses_trainers_on_trainer_id", using: :btree
  end

  create_table "members", force: :cascade do |t|
    t.integer  "profile_id"
    t.integer  "plan_id"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone"
    t.string   "address"
    t.string   "state"
    t.string   "city"
    t.string   "zip"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image"
    t.integer  "contract_length"
  end

  create_table "plans", force: :cascade do |t|
    t.string   "title"
    t.text     "klass_ids"
    t.integer  "profile_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.decimal  "price",      default: "0.0"
  end

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "profile_name"
    t.string   "email"
    t.string   "phone"
    t.string   "address"
    t.string   "state"
    t.string   "city"
    t.string   "zip"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "image"
    t.index ["user_id"], name: "index_profiles_on_user_id", unique: true, using: :btree
  end

  create_table "trainers", force: :cascade do |t|
    t.integer  "profile_id"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone"
    t.string   "address"
    t.string   "state"
    t.string   "city"
    t.string   "zip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password"
    t.integer  "profile_id"
    t.string   "password_hash"
    t.string   "password_salt"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "email_confirmed", default: false
    t.string   "confirm_token"
  end

  add_foreign_key "profiles", "users"
end
