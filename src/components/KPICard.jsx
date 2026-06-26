function KPICard({ title, value, trend, trendUp }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-zinc-100 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-zinc-500">{title}</span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            trendUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
          }`}
        >
          {trendUp ? '↑' : '↓'} {trend}
        </span>
      </div>
      <p className="text-2xl font-semibold text-zinc-900">{value}</p>
    </div>
  )
}

export default KPICard
