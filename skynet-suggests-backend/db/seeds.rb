# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
u1 = User.create(name: "Allen")
u2 = User.create(name: "Eli")

r1 = Repo.create(nickname: "TestRepo1", url: "https://github.com/azhang9328/skynet-suggests", analyzed: false, user_id: u1.id)
r2 = Repo.create(nickname: "TestRepo2", url: "https://github.com/azhang9328/skynet-suggests", analyzed: false, user_id: u1.id)