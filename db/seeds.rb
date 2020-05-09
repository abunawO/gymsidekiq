# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Profile.create(profile_name: 'Gwinnett Training Acedemy', email: 'gta@gmail.com' , phone: '404-768-7745', address: '446 suwanne drive', state: 'GA', city: 'Suwannee', zip: '30044', user_id: 1)

#Member.create(first_name: 'Erica', last_name: 'Martin', email: 'erica@gmail.com' , phone: '404-768-7745', address: '446 suwanne drive', state: 'GA', city: 'Suwannee', zip: '30044', profile_id: 1)
#Member.create(first_name: 'John', last_name: 'Doe', email: 'Doe@gmail.com' , phone: '404-768-7745', address: '446 dacula drive', state: 'GA', city: 'Dacula', zip: '30044', profile_id: 1)
#Member.create(first_name: 'Faris', last_name: 'Lens', email: 'Lens@gmail.com' , phone: '404-768-7745', address: '446 duluth drive', state: 'GA', city: 'Duluth', zip: '30044', profile_id: 1)
#Member.create(first_name: 'Armina', last_name: 'Jakupovic', email: 'Jakupovic@gmail.com' , phone: '404-768-7745', address: '446 atlanta drive', state: 'GA', city: 'atlanta', zip: '30044', profile_id: 1)
##Member.create(first_name: 'Fejzic', last_name: 'Euro', email: 'Euro@gmail.com' , phone: '404-768-7745', address: '446 alpharetta drive', state: 'GA', city: 'alpharetta', zip: '30044', profile_id: 1)
#Member.create(first_name: 'Valencia', last_name: 'Holland', email: 'Holland@gmail.com' , phone: '404-768-7745', address: '446 marietta drive', state: 'GA', city: 'marietta', zip: '30044', profile_id: 1)

#Trainer.create(first_name: 'Amir', last_name: 'Dadovic', email: 'amir@gta.com' , phone: '404-768-7745', address: '446 suwanne drive', state: 'GA', city: 'Suwannee', zip: '30044', profile_id: 1)
#Trainer.create(first_name: 'Ose', last_name: 'Abunaw', email: 'ose@gta.com' , phone: '404-768-7745', address: '446 dacula drive', state: 'GA', city: 'Dacula', zip: '30044', profile_id: 1)
#Trainer.create(first_name: 'Brently', last_name: 'Fur', email: 'brently@gta.com' , phone: '404-768-7745', address: '446 duluth drive', state: 'GA', city: 'Duluth', zip: '30044', profile_id: 1)
#Trainer.create(first_name: 'Asim', last_name: 'Njovic', email: 'asim@gta.com' , phone: '404-768-7745', address: '446 atlanta drive', state: 'GA', city: 'atlanta', zip: '30044', profile_id: 1)
#Trainer.create(first_name: 'Jacob', last_name: 'Gibson', email: 'jacob@gta.com' , phone: '404-768-7745', address: '446 alpharetta drive', state: 'GA', city: 'alpharetta', zip: '30044', profile_id: 1)
#Trainer.create(first_name: 'Cole', last_name: 'Miller', email: 'cole@gta.com' , phone: '404-768-7745', address: '446 marietta drive', state: 'GA', city: 'marietta', zip: '30044', profile_id: 1)
#[20, 21, 22, 23, 24, 25] m
#[46, 47, 48, 49, 50, 51, 52] k
#["Boxing", "MMA", "Mauy Thai", "Kickboxing", "Crossfit", "Hardcore", "Jui Jitsu"]
#[15, 16, 17, 18, 19, 20] T
#["Amir", "Ose", "Brently", "Asim", "Jacob", "Cole"]

#Member.find(20).klasses.create(title: Klass.find(49).title, profile_id: Klass.find(49).profile_id)
#jit coaches
#Trainer.find(20).klasses.create(title: Klass.find(52).title, profile_id: Klass.find(52).profile_id)
#Trainer.find(17).klasses.create(title: Klass.find(52).title, profile_id: Klass.find(52).profile_id)
#Trainer.find(19).klasses.create(title: Klass.find(52).title, profile_id: Klass.find(52).profile_id)
#Trainer.find(15).klasses.create(title: Klass.find(52).title, profile_id: Klass.find(52).profile_id)

#mma coaches
#Trainer.find(17).klasses.create(title: Klass.find(47).title, profile_id: Klass.find(47).profile_id)
#Trainer.find(15).klasses.create(title: Klass.find(47).title, profile_id: Klass.find(47).profile_id)

#Boxing coaches
#Trainer.find(15).klasses.create(title: Klass.find(46).title, profile_id: Klass.find(46).profile_id)
#Trainer.find(18).klasses.create(title: Klass.find(46).title, profile_id: Klass.find(46).profile_id)

#Mauy Thai coaches
#Trainer.find(16).klasses.create(title: Klass.find(48).title, profile_id: Klass.find(48).profile_id)
#Trainer.find(15).klasses.create(title: Klass.find(48).title, profile_id: Klass.find(48).profile_id)

#Kickboxing coaches
#Trainer.find(17).klasses.create(title: Klass.find(49).title, profile_id: Klass.find(49).profile_id)
#Trainer.find(18).klasses.create(title: Klass.find(49).title, profile_id: Klass.find(49).profile_id)

#Crossfit coaches
#Trainer.find(20).klasses.create(title: Klass.find(50).title, profile_id: Klass.find(50).profile_id)
#Trainer.find(17).klasses.create(title: Klass.find(50).title, profile_id: Klass.find(50).profile_id)

#Hardcore coaches
#Trainer.find(17).klasses.create(title: Klass.find(51).title, profile_id: Klass.find(51).profile_id)
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
