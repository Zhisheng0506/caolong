const API_BASE = import.meta.env.VITE_API_BASE || ''

function getToken() {
  return localStorage.getItem('admin_token') || ''
}

function authHeaders() {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

async function request(url, options = {}) {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeaders(),
      ...(options.headers || {}),
    },
    ...options,
  })

  // 尝试解析 JSON，失败则抛出明确错误
  let data
  try {
    data = await res.json()
  } catch {
    throw new Error('服务器返回了无效响应，请确认后端已启动（npm start）')
  }

  if (!res.ok) {
    throw new Error(data.message || data.error || `请求失败 (${res.status})`)
  }
  return data
}

export const api = {
  // Auth
  login: (password) =>
    request('/api/auth/login', { method: 'POST', body: JSON.stringify({ password }) }),
  verifyToken: () =>
    request('/api/auth/verify', { method: 'POST' }),

  // Health
  health: () => request('/api/health'),

  // Craft registrations
  submitCraftRegistration: (body) =>
    request('/api/craft-registration', { method: 'POST', body: JSON.stringify(body) }),
  getCraftRegistrations: () => request('/api/craft-registrations'),
  deleteCraftRegistration: (id) =>
    request(`/api/craft-registrations/${id}`, { method: 'DELETE' }),

  // Exhibition bookings
  submitExhibitionBooking: (body) =>
    request('/api/exhibition-booking', { method: 'POST', body: JSON.stringify(body) }),
  getExhibitionBookings: () => request('/api/exhibition-bookings'),
  deleteExhibitionBooking: (id) =>
    request(`/api/exhibition-bookings/${id}`, { method: 'DELETE' }),

  // Orders
  submitOrder: (body) =>
    request('/api/orders', { method: 'POST', body: JSON.stringify(body) }),
  getOrders: () => request('/api/orders'),
  deleteOrder: (id) =>
    request(`/api/orders/${id}`, { method: 'DELETE' }),
}

export { getToken }
