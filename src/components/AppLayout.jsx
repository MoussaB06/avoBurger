import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen bg-zinc-50 p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
