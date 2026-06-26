import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 🔑 Identifiants de démo (pré-remplis pour les visiteurs / recruteurs)
const DEMO_EMAIL = 'admin@avoburger.com'
const DEMO_PASSWORD = 'demo1234'

function Login() {
  const [email, setEmail] = useState(DEMO_EMAIL)
  const [password, setPassword] = useState(DEMO_PASSWORD)
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    localStorage.setItem('isLoggedIn', true)
    navigate('/dashboard')
  }

  return (
    <div className="flex h-screen">
      {/* LEFT — Image + Testimonial */}
      <div className="relative hidden w-1/2 lg:flex flex-col justify-end bg-zinc-900 p-10">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
          alt="burger"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-2xl">🥑</span>
            <span className="text-white font-semibold text-xl">AvoBurger</span>
          </div>
          <blockquote className="text-white text-lg font-medium leading-relaxed mb-4">
            "The biggest and tastiest vegan burgers I've ever had, you are
            simply the best!"
          </blockquote>
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="Kevin"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-white/80 text-sm">Kevin from New Jersey</span>
          </div>
        </div>
      </div>

      {/* RIGHT — Form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="flex justify-end mb-8">
            <span className="text-sm text-zinc-500">
              Don't have an account?
            </span>
            <button className="text-sm font-medium ml-2 px-3 py-1 border border-zinc-300 rounded-lg hover:bg-zinc-50">
              Request access
            </button>
          </div>

          <h1 className="text-2xl font-semibold text-zinc-900 mb-1">
            Sign into Avoburger admin
          </h1>
          <p className="text-sm text-zinc-500 mb-6">
            Please enter your details below to sign in
          </p>

          {/* 🔑 Bandeau démo */}
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm">
            <p className="font-medium text-green-700 mb-1">👋 Demo access</p>
            <p className="text-green-700/80 leading-relaxed">
              Credentials are pre-filled — just click{' '}
              <span className="font-medium">Sign in</span>.
            </p>
            <div className="mt-2 text-xs text-green-700/70 font-mono">
              <div>email: {DEMO_EMAIL}</div>
              <div>password: {DEMO_PASSWORD}</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-700">
                Your Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="border border-zinc-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-zinc-700">
                  Your Password
                </label>
                <button
                  type="button"
                  className="text-sm text-zinc-500 hover:text-zinc-700"
                >
                  Forgot password
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-zinc-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 rounded-lg transition flex items-center justify-center gap-2"
            >
              🔑 Sign in to admin
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
