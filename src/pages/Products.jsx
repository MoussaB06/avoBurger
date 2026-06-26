import { useState } from 'react'

const categories = ['Main courses', 'Side dishes', 'Drinks', 'Other']

const products = [
  {
    id: 1,
    name: 'Shrimp Burger',
    weight: '350g',
    price: 17.99,
    category: 'Main courses',
    desc: 'Wheat bun, crispy shrimps, pickles, seafood sauce',
    img: '/images/shrimp-burger.jpeg',
  },
  {
    id: 2,
    name: 'Red beets Burger',
    weight: '250g',
    price: 14.99,
    category: 'Main courses',
    desc: 'Wheat bun, beetroot patty, cheddar, greens, pickles',
    img: '/images/red-beets-burger.jpeg',
  },
  {
    id: 3,
    name: 'Avocrazy Burger',
    weight: '300g',
    price: 19.99,
    category: 'Main courses',
    desc: 'Double beef, cheddar, bacon, fresh avocado, lettuce',
    img: '/images/avocrazy-burger.jpeg',
  },
  {
    id: 4,
    name: 'Teriyaki Burger',
    weight: '350g',
    price: 21.99,
    category: 'Main courses',
    desc: 'Brioche bun, teriyaki beef, grilled pineapple, lettuce',
    img: '/images/teriyaki-burger.jpeg',
  },
  {
    id: 5,
    name: 'Peanut Burger',
    weight: '350g',
    price: 19.99,
    category: 'Main courses',
    desc: 'Beef patty, peanut satay sauce, crushed peanuts, onions',
    img: '/images/peanut-burger.jpeg',
  },
  {
    id: 6,
    name: 'Kimshi fries',
    weight: '200g',
    price: 17.99,
    category: 'Side dishes',
    desc: 'Crispy fries, spicy kimchi, melted cheese, green onions',
    img: '/images/kimshi-fries.jpeg',
  },
  {
    id: 7,
    name: 'Royal pancakes',
    weight: '380g',
    price: 14.99,
    category: 'Other',
    desc: 'Fluffy pancakes, butter, maple syrup, fresh berries',
    img: '/images/royal-pancakes.jpeg',
  },
  {
    id: 8,
    name: 'Avo Lemonade',
    weight: '500ml',
    price: 6.99,
    category: 'Drinks',
    desc: 'Fresh avocado, lemon, mint, sparkling water',
    img: '/images/avo-lemonade.jpeg',
  },
]

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-sm font-semibold text-zinc-900">
            {product.name}
          </h3>
          <span className="text-xs text-zinc-400">{product.weight}</span>
        </div>
        <p className="text-xs text-zinc-400 mt-1 leading-snug">
          {product.desc}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm font-semibold text-zinc-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1.5">
            <button className="w-7 h-7 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-500 hover:bg-zinc-50 transition">
              👁
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-md border border-zinc-200 text-zinc-500 hover:bg-zinc-50 transition">
              ⚙
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function AddProductCard() {
  return (
    <button className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-zinc-200 text-zinc-400 hover:border-green-500 hover:text-green-500 transition min-h-[220px]">
      <span className="text-3xl leading-none">+</span>
      <span className="text-sm font-medium">Add New Product</span>
    </button>
  )
}

function Products() {
  const [activeCategory, setActiveCategory] = useState('Main courses')
  const [search, setSearch] = useState('')

  const filtered = products.filter(
    (p) =>
      p.category === activeCategory &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
          🔍
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-zinc-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition"
        />
      </div>

      {/* Category tabs */}
      <div className="flex items-center gap-6 border-b border-zinc-200 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-3 text-sm font-medium transition border-b-2 -mb-px ${
              activeCategory === cat
                ? 'text-zinc-900 border-zinc-900'
                : 'text-zinc-400 border-transparent hover:text-zinc-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
        <AddProductCard />
      </div>
    </div>
  )
}

export default Products
