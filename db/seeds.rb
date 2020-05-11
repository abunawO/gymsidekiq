# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Profile.create(profile_name: 'Gwinnett Training Acedemy', email: 'gta@gmail.com' , phone: '404-768-7745', address: '446 suwanne drive', state: 'GA', city: 'Suwannee', zip: '30044', user_id: 1)

# Klass.create(title: 'Boxing', profile_id: 1, is_parent: true);
# Klass.create(title: 'MMA', profile_id: 1, is_parent: true);
# Klass.create(title: 'Mauy Thai', profile_id: 1, is_parent: true);
# Klass.create(title: 'Kickboxing', profile_id: 1, is_parent: true);
# Klass.create(title: 'Crossfit', profile_id: 1, is_parent: true);
# Klass.create(title: 'Hardcore', profile_id: 1, is_parent: true);
# Klass.create(title: 'Jui Jitsu', profile_id: 1, is_parent: true);



# Member.create(first_name: 'Erica', last_name: 'Martin', email: 'erica@gmail.com' , phone: '404-768-7745', address: '446 suwanne drive', state: 'GA', city: 'Suwannee', zip: '30044', profile_id: 1)
# Member.create(first_name: 'John', last_name: 'Doe', email: 'Doe@gmail.com' , phone: '404-768-7745', address: '446 dacula drive', state: 'GA', city: 'Dacula', zip: '30044', profile_id: 1)
# Member.create(first_name: 'Faris', last_name: 'Lens', email: 'Lens@gmail.com' , phone: '404-768-7745', address: '446 duluth drive', state: 'GA', city: 'Duluth', zip: '30044', profile_id: 1)
# Member.create(first_name: 'Armina', last_name: 'Jakupovic', email: 'Jakupovic@gmail.com' , phone: '404-768-7745', address: '446 atlanta drive', state: 'GA', city: 'atlanta', zip: '30044', profile_id: 1)
# Member.create(first_name: 'Fejzic', last_name: 'Euro', email: 'Euro@gmail.com' , phone: '404-768-7745', address: '446 alpharetta drive', state: 'GA', city: 'alpharetta', zip: '30044', profile_id: 1)
# Member.create(first_name: 'Valencia', last_name: 'Holland', email: 'Holland@gmail.com' , phone: '404-768-7745', address: '446 marietta drive', state: 'GA', city: 'marietta', zip: '30044', profile_id: 1)

# Trainer.create(first_name: 'Amir', last_name: 'Dadovic', email: 'amir@gta.com' , phone: '404-768-7745', address: '446 suwanne drive', state: 'GA', city: 'Suwannee', zip: '30044', profile_id: 1)
# Trainer.create(first_name: 'Ose', last_name: 'Abunaw', email: 'ose@gta.com' , phone: '404-768-7745', address: '446 dacula drive', state: 'GA', city: 'Dacula', zip: '30044', profile_id: 1)
# Trainer.create(first_name: 'Brently', last_name: 'Fur', email: 'brently@gta.com' , phone: '404-768-7745', address: '446 duluth drive', state: 'GA', city: 'Duluth', zip: '30044', profile_id: 1)
# Trainer.create(first_name: 'Asim', last_name: 'Njovic', email: 'asim@gta.com' , phone: '404-768-7745', address: '446 atlanta drive', state: 'GA', city: 'atlanta', zip: '30044', profile_id: 1)
# Trainer.create(first_name: 'Jacob', last_name: 'Gibson', email: 'jacob@gta.com' , phone: '404-768-7745', address: '446 alpharetta drive', state: 'GA', city: 'alpharetta', zip: '30044', profile_id: 1)
# Trainer.create(first_name: 'Cole', last_name: 'Miller', email: 'cole@gta.com' , phone: '404-768-7745', address: '446 marietta drive', state: 'GA', city: 'marietta', zip: '30044', profile_id: 1)

#[2, 4, 5, 6, 7, 3] plan ids
#["Basic", "Basic-pro-plus", "Pro", "Pro-plus", "Full", "Basic-pro"]
#[20, 21, 22, 23, 24, 25, 35] member ids

#member = Member.find(20)
#member.plan_id = 2
#member.save!

#member = Member.find(21)
#member.plan_id = 4
#member.save!

#member = Member.find(22)
#member.plan_id = 5
#member.save!

#member = Member.find(23)
#member.plan_id = 6
#member.save!

#member = Member.find(24)
#member.plan_id = 7
#member.save!

#member = Member.find(25)
#member.plan_id = 5
#member.save!

#member = Member.find(35)
#member.plan_id = 4
#member.save!

#[15, 16, 17, 18, 19, 20] trainer ids
#["Amir", "Ose", "Brently", "Asim", "Jacob", "Cole"]
#[46, 47, 48, 49, 50, 51, 52] klass ids
#["Boxing", "MMA", "Mauy Thai", "Kickboxing", "Crossfit", "Hardcore", "Jui Jitsu"]

#Trainer.find(20).update_column(:klass_ids, "48")
#Trainer.find(17).update_column(:klass_ids, "47,48,49,52")
#Trainer.find(18).update_column(:klass_ids, "49")
#Trainer.find(19).update_column(:klass_ids, "52,51")
Trainer.find(20).update_column(:klass_ids, "46,52,50")

# Member.find(20).klasses.create(title: Klass.find(49).title, profile_id: Klass.find(49).profile_id)
# jit coaches
#Trainer.find(1).klasses.create(title: Klass.find(1).title, profile_id: Klass.find(1).profile_id)
#Trainer.find(2).klasses.create(title: Klass.find(2).title, profile_id: Klass.find(2).profile_id)
#Trainer.find(3).klasses.create(title: Klass.find(3).title, profile_id: Klass.find(3).profile_id)
#Trainer.find(4).klasses.create(title: Klass.find(4).title, profile_id: Klass.find(4).profile_id)

#mma coaches
#Trainer.find(5).klasses.create(title: Klass.find(5).title, profile_id: Klass.find(5).profile_id)
#Trainer.find(6).klasses.create(title: Klass.find(6).title, profile_id: Klass.find(6).profile_id)

#Boxing coaches
#Trainer.find(7).klasses.create(title: Klass.find(7).title, profile_id: Klass.find(7).profile_id)
#Trainer.find(8).klasses.create(title: Klass.find(1).title, profile_id: Klass.find(1).profile_id)

#Mauy Thai coaches
#Trainer.find(9).klasses.create(title: Klass.find(2).title, profile_id: Klass.find(2).profile_id)
#Trainer.find(10).klasses.create(title: Klass.find(3).title, profile_id: Klass.find(3).profile_id)

#Kickboxing coaches
#Trainer.find(11).klasses.create(title: Klass.find(4).title, profile_id: Klass.find(4).profile_id)
#Trainer.find(12).klasses.create(title: Klass.find(5).title, profile_id: Klass.find(5).profile_id)

#Crossfit coaches
#Trainer.find(11).klasses.create(title: Klass.find(6).title, profile_id: Klass.find(6).profile_id)
#Trainer.find(10).klasses.create(title: Klass.find(7).title, profile_id: Klass.find(7).profile_id)

#Hardcore coaches
#Trainer.find(9).klasses.create(title: Klass.find(1).title, profile_id: Klass.find(1).profile_id)
#10.times { Category.create!(name: Faker::Lorem.word) }

# Create sources
#10.times { Source.create!(name: Faker::Company.name) }

# Create Articles
#50.times {
  #category = Category.all.sample
  #source = Source.all.sample
  #Article.create!(
    #title: Faker::Lorem.sentence,
    #url: Faker::Internet.url,
    #category: category,
    #source: source
  #)
