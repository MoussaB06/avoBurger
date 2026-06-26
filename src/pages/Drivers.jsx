import { useState } from 'react'

const statusStyles = {
  'in-delivery': 'text-green-500',
  Delivered: 'text-blue-500',
  Idle: 'text-zinc-400',
}

const drivers = [
  {
    id: 1,
    name: 'Sedda Chaba',
    status: 'in-delivery',
    deliveryId: 'JK2389',
    orders: '2 orders being delivered',
    avatar: 'https://i.pravatar.cc/40?img=1',
    joined: 'March 23rd 2021',
    total: 150,
    vehicle: 'Vespa SE',
    plate: 'NY 2389',
    from: 'Avoburger, Mackay street 7',
    to: 'Bayside village 20, South Beach',
  },
  {
    id: 2,
    name: 'Nadia diana',
    status: 'Delivered',
    deliveryId: 'OP3419',
    orders: '5 orders being delivered',
    avatar: 'https://i.pravatar.cc/40?img=5',
    joined: 'Jan 12th 2022',
    total: 98,
    vehicle: 'Honda PCX',
    plate: 'NY 3419',
    from: 'Avoburger, Greenside St',
    to: 'Houston Ave 14',
  },
  {
    id: 3,
    name: 'Salah bourwayeh',
    status: 'Idle',
    deliveryId: 'ML9875',
    orders: 'on a break',
    avatar: 'https://i.pravatar.cc/40?img=12',
    joined: 'Aug 2nd 2023',
    total: 42,
    vehicle: 'Yamaha NMAX',
    plate: 'NY 9875',
    from: '—',
    to: '—',
  },
  {
    id: 4,
    name: 'Anastasia hood',
    status: 'Delivered',
    deliveryId: 'ML9875',
    orders: '1 order being delivered',
    avatar: 'https://i.pravatar.cc/40?img=20',
    joined: 'Feb 18th 2022',
    total: 110,
    vehicle: 'Vespa SE',
    plate: 'NY 1122',
    from: 'Avoburger, King James St',
    to: 'Mackay St 7',
  },
]

function StatusBadge({ status }) {
  return (
    <span className="flex items-center gap-1.5 text-sm">
      <span className={`text-lg leading-none ${statusStyles[status]}`}>•</span>
      <span className="text-zinc-600">{status}</span>
    </span>
  )
}

function DriverDetails({ driver }) {
  if (!driver) {
    return (
      <div className="bg-white rounded-xl border border-zinc-100 shadow-sm p-6 text-center text-sm text-zinc-400">
        Select a driver to see details
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-sm p-5">
      <h2 className="text-base font-semibold text-zinc-900 mb-4">
        Drivers details
      </h2>

      {/* Profile */}
      <div className="flex items-center gap-3 mb-5">
        <img
          src={driver.avatar}
          alt={driver.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold text-zinc-900">{driver.name}</p>
          <p className="text-xs text-zinc-400">{driver.orders}</p>
        </div>
      </div>

      <div className="flex justify-between text-xs text-zinc-400 mb-5">
        <span>
          Joined: <span className="text-zinc-600">{driver.joined}</span>
        </span>
        <span>
          Total deliveries:{' '}
          <span className="text-zinc-600">{driver.total}</span>
        </span>
      </div>

      {/* Vehicle */}
      <div className="flex items-center justify-between mb-5 pb-5 border-b border-zinc-100">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛵</span>
          <div>
            <p className="text-sm font-medium text-zinc-900">
              {driver.vehicle}
            </p>
            <p className="text-xs text-zinc-400">{driver.plate}</p>
          </div>
        </div>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-600">
          In good condition
        </span>
      </div>

      {/* Current delivery */}
      <p className="text-sm font-medium text-zinc-900 mb-3">
        Current delivery
        <span className="float-right text-xs text-zinc-400">
          Order ID: {driver.deliveryId}
        </span>
      </p>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🥑</span>
        <div className="flex-1 h-1 bg-zinc-100 rounded-full overflow-hidden">
          <div className="h-full w-2/3 bg-green-500 rounded-full" />
        </div>
        <span className="text-zinc-400">🛍</span>
      </div>

      <div className="flex justify-between text-xs">
        <div>
          <p className="text-zinc-700">{driver.from}</p>
          <p className="text-zinc-400">12:32 pm</p>
        </div>
        <div className="text-right">
          <p className="text-zinc-700">{driver.to}</p>
          <p className="text-zinc-400">12:44 pm</p>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="mt-4 h-40 rounded-lg bg-zinc-100 flex items-center justify-center text-sm text-zinc-400">
        🗺 Map view
      </div>
    </div>
  )
}

function Drivers() {
  const [tab, setTab] = useState('Driver list')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(drivers[0])

  const filtered = drivers.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()),
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: list */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-zinc-200 mb-4">
            {['Driver list', 'Motorcycle list'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 text-sm font-medium transition border-b-2 -mb-px ${
                  tab === t
                    ? 'text-zinc-900 border-zinc-900'
                    : 'text-zinc-400 border-transparent hover:text-zinc-600'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-zinc-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-zinc-400 border-b border-zinc-100">
                  <th className="font-normal py-3 px-4">Name</th>
                  <th className="font-normal py-3 px-4">Status</th>
                  <th className="font-normal py-3 px-4">Current delivery ID</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d) => (
                  <tr
                    key={d.id}
                    onClick={() => setSelected(d)}
                    className={`border-b border-zinc-50 cursor-pointer transition ${
                      selected?.id === d.id
                        ? 'bg-green-50/50'
                        : 'hover:bg-zinc-50'
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={d.avatar}
                          alt={d.name}
                          className="w-9 h-9 rounded-full"
                        />
                        <span className="font-medium text-zinc-900">
                          {d.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <StatusBadge status={d.status} />
                    </td>
                    <td className="py-3 px-4 text-zinc-600">{d.deliveryId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: details */}
        <div className="lg:col-span-1">
          <DriverDetails driver={selected} />
        </div>
      </div>
    </div>
  )
}

export default Drivers
