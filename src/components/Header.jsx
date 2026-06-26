function Header({ title }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Left — Title + Date */}
      <div>
        <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>
        <p className="text-sm text-zinc-400 mt-0.5">{today}</p>
      </div>

      {/* Right — Search + Export */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-2 text-sm border border-zinc-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition bg-white"
          />
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-zinc-600 border border-zinc-200 bg-white px-4 py-2 rounded-lg hover:bg-zinc-50 transition">
          📤 Export CSV
        </button>
      </div>
    </div>
  )
}

export default Header
