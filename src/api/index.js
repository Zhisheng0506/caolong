const API_BASE = import.meta.env.VITE_API_BASE || ''

async function request(url, options = {}) {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error || `请求失败 (${res.status})`)
  }
  return data
}

export const api = {
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
