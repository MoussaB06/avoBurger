import { NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: '⊞' },
  { path: '/orders', label: 'Orders', icon: '🛍', badge: 100 },
  { path: '/restaurants', label: 'Restaurant', icon: '📍' },
  { path: '/products', label: 'Products', icon: '☰' },
  { path: '/drivers', label: 'Drivers', icon: '👤' },
]

function Sidebar() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  return (
    <aside className="w-64 h-screen bg-zinc-800 flex flex-col py-6 px-3 fixed left-0 top-0">
      <div className="flex items-center gap-2 px-3 mb-8">
        <span className="text-xl">🥑</span>
        <span className="text-white font-semibold">AvoBurger</span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition w-full
              ${
                isActive
                  ? 'bg-white text-zinc-900 font-medium'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`
            }
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 mt-auto">
        <p className="text-xs text-zinc-500 mb-3">Done for the day?</p>
        <button className="w-full flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition">
          → Send daily report
        </button>
        {/* <div className="flex items-center gap-2 mt-4">
          <img
            src="https://i.pravatar.cc/32?img=5"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-zinc-400 text-sm">Chikha Yamina</span>
          <button
            onClick={handleLogout}
            className="ml-auto text-zinc-500 text-lg cursor-pointer"
          >
            ⋯
          </button>
        </div> */}
        <div className="flex items-center gap-2 mt-4">
          <img
            src="https://i.pravatar.cc/32?img=5"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-zinc-400 text-sm">Chikha Yamina</span>
          <button
            onClick={handleLogout}
            className="ml-auto text-xs text-zinc-500 hover:text-red-400 transition"
          >
            Sign out
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
