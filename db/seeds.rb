# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all

u1 = User.create name: 'Christine', email: 'Christine@hotmail.com', password: 'chicken', image: 'axbbdvwv4kgzykpnj3yt', address:'34 Macrossan Road, Billoweala', dob:'1985/05/05'
u2 = User.create name: 'Joy', email: 'joy@ga.co', password: 'chicken', image: 'ddloqu4rebmundiertfj', address:'40 Macrossan Road, Billoweala', dob:'1974/10/10'
u3 = User.create name: 'Brad', email: 'brad@ga.co', password: 'chicken', image: 'wkndjxfnifuegdjf3q0t', address:'50 Haven Road, Seattle', dob:'1980/07/07'

puts "Created #{User.all.length} users."


Post.destroy_all

p1 = Post.create date: '2018/10/05', heading: 'had a great day', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt lobortis feugiat vivamus at augue eget arcu. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Senectus et netus et malesuada fames ac. Vulputate odio ut enim blandit volutpat. Mi proin sed libero enim sed faucibus. Mauris rhoncus aenean vel elit scelerisque mauris. Quis vel eros donec ac odio tempor orci. Porta lorem mollis aliquam ut porttitor leo a diam. Id porta nibh venenatis cras sed felis eget velit aliquet.', image: '/assets/positional-9.jpg'  #, user: u1

p2 = Post.create date: '2018/08/04', heading: 'this is pretty cool', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque. Nisi porta lorem mollis aliquam ut porttitor leo. Viverra ipsum nunc aliquet bibendum enim facilisis. Id nibh tortor id aliquet lectus proin nibh. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Feugiat scelerisque varius morbi enim. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Faucibus et molestie ac feugiat. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Vel turpis nunc eget lorem dolor sed viverra. Non quam lacus suspendisse faucibus interdum. Egestas diam in arcu cursus euismod.', image: '/assets/positional-4.jpg'

p3 = Post.create date: '2018/12/12', heading: 'This was a great day!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque. Nisi porta lorem mollis aliquam ut porttitor leo. Viverra ipsum nunc aliquet bibendum enim facilisis. Id nibh tortor id aliquet lectus proin nibh. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Feugiat scelerisque varius morbi enim. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Faucibus et molestie ac feugiat. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Vel turpis nunc eget lorem dolor sed viverra. Non quam lacus suspendisse faucibus interdum. Egestas diam in arcu cursus euismod.', image: '/assets/positional-16.jpg'

p4 = Post.create date: '2018/03/11', heading: 'I think this needs to be discussed', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Pharetra pharetra massa massa ultricies mi. Eget nullam non nisi est sit amet facilisis. Cras ornare arcu dui vivamus arcu felis. Neque vitae tempus quam pellentesque nec. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Sed blandit libero volutpat sed cras ornare.', image: '/assets/positional-18.jpg'

p5 = Post.create date: '2018/03/06', heading: 'What do you think about this?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet cursus sit amet dictum. Lectus urna duis convallis convallis tellus. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Eget arcu dictum varius duis. In dictum non consectetur a erat. In vitae turpis massa sed elementum tempus. Porttitor eget dolor morbi non arcu risus quis varius. Amet aliquam id diam maecenas ultricies mi eget. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Cursus metus aliquam eleifend mi. Lectus magna fringilla urna porttitor rhoncus. Sodales ut etiam sit amet nisl purus in. Blandit turpis cursus in hac habitasse platea. Orci nulla pellentesque dignissim enim. Duis at consectetur lorem donec.', image: '/assets/positional-17.jpg'

puts "Created #{Post.all.length} posts."


u1.posts << p1 << p2
u2.posts << p3
u3.posts << p4 << p5

u1.liked_posts << p3 << p4
u2.liked_posts << p1 << p2
u3.liked_posts << p3 << p1

#
# Like.destroy_all
#
# l1 = Like.create likecreatedate: '2018/05/04', like: True
# l2 = Like.create likecreatedate: '2018/03/03', like: False
# l3 = Like.create likecreatedate: '2018/07/02', like: False
# l4 = Like.create likecreatedate: '2018/12/12', like: True
# l5 = Like.create likecreatedate: '2018/06/02', like: True
# l6 = Like.create likecreatedate: '2018/02/01', like: False
# l7 = Like.create likecreatedate: '2018/09/09', like: True
# l8 = Like.create likecreatedate: '2018/05/01', like: False
#
# puts "Created #{Like.all.length} likes."
#
#
#
# Photo.destroy_all
#
# ph1 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
# ph2 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
# ph3 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
# ph4 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
# ph5 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
# ph6 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
# ph7 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
# ph8 = Photo.create photocreatedate: '2018/06/06', photo: 'https://spaceholder.cc/300x500'
#
# puts "Created #{Photo.all.length} photos."
#
#
#
#
#
Comment.destroy_all

c1 = Comment.create content: 'Vastness is bearable only through love prime number quis nostrum exercitationem ullam corporis suscipit laboriosam vanquish the impossible quis nostrum'
c2 = Comment.create content: 'turbulent clouds with pretty stories for which theres little good evidence vel illum qui dolorem eum fugiat quo voluptas nulla pariatur culture.'
c3 = Comment.create content: 'Qui ratione voluptatem sequi nesciunt and billions upon billions upon billions upon billions upon billions upon billions upon billions.'
c4 = Comment.create content: 'Network of wormholes across the centuries cosmic ocean made in the interiors of collapsing stars sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam'
c5 = Comment.create content: 'Aaliquam quaerat voluptatem adipisci velit and billions upon billions upon billions upon billions upon billions upon billions upon billions.'
c6 = Comment.create content: 'As a patch of light colonies Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium rings of Uranus quis nostrum exercitationem ullam corporis suscipit laboriosam venture?'
c7 = Comment.create content: 'Bits of moving fluff encyclopaedia galactica rogue paroxysm of global death another world vastness is bearable only through love. Courage of our questions Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur Sea of Tranquility invent the universe two ghostly white figures in coveralls and helmets are soflty dancing totam rem aperiam'
c8 = Comment.create content: 'Aeaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo and billions upon billions upon billions upon billions upon billions upon billions upon billions.'
c9 = Comment.create content: 'Dream of the minds eye vanquish the impossible Jean-François Champollion laws of physics of brilliant syntheses great turbulent clouds.'
c10 = Comment.create content: 'Are creatures of the cosmos emerged into consciousness Neque porro quisquam est sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem the only home weve ever known a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.'

puts "Created #{Comment.all.length} comments."

# Associate comments with a post
p1.comments << c1 << c2 << c3
p2.comments << c4 << c5
p3.comments << c6
p4.comments << c7 << c8
p5.comments << c9 << c10

u1.comments << c1 << c2 << c3
u2.comments << c4 << c5 << c6
u3.comments << c9 << c10 << c7 << c8
