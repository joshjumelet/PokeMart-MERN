const db = require('../db')
const Product = require('../models/Product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      title: 'Poké Ball',
      description:
        'A device for catching wild Pokémon. It is thrown like a ball at the target. It is designed as a capsule system',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sideshow.com%2Fstorage%2Fproduct-images%2F907125%2Fpoke-ball_pokemon_gallery_5fbbfd263bd2a.jpg&f=1&nofb=1&ipt=b88eb91b417dbf0967085acd00a1fe366ca1002def7153cf311920e0650d9bfe&ipo=images',
      categories: 'Ball',
      price: '200'
    }
  ]

  await Product.insertMany(products)
  console.log('Create Products!')
}

const run = async () => {
  await main()
  db.close()
}

run()
