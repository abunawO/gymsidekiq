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

ActiveRecord::Schema.define(version: 20200515215254) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "klasses", force: :cascade do |t|
    t.string   "title"
    t.text     "schedule"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "profile_id"
    t.index ["profile_id"], name: "index_klasses_on_profile_id", using: :btree
  end

  create_table "members", force: :cascade do |t|
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
    t.integer  "profile_id"
    t.integer  "plan_id"
    t.string   "image"
    t.index ["profile_id"], name: "index_members_on_profile_id", using: :btree
  end

  create_table "plans", force: :cascade do |t|
    t.string   "title"
    t.string   "klass_ids"
    t.integer  "profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_plans_on_profile_id", using: :btree
  end

  create_table "profiles", force: :cascade do |t|
    t.string   "profile_name"
    t.string   "email"
    t.string   "phone"
    t.string   "address"
    t.string   "state"
    t.string   "city"
    t.string   "zip"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "user_id"
    t.string   "image"
    t.index ["user_id"], name: "index_profiles_on_user_id", using: :btree
  end

  create_table "trainers", force: :cascade do |t|
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
    t.integer  "profile_id"
    t.string   "klass_ids"
    t.string   "image"
    t.string   "avatar"
    t.index ["profile_id"], name: "index_trainers_on_profile_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password"
    t.string   "password_hash"
    t.string   "password_salt"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "profile_id"
  end

  add_foreign_key "klasses", "profiles"
  add_foreign_key "members", "profiles"
  add_foreign_key "plans", "profiles"
  add_foreign_key "profiles", "users"
  add_foreign_key "trainers", "profiles"
end
