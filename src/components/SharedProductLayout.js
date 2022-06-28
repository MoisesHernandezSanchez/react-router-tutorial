import { Outlet } from 'react-router-dom'

export default function SharedProductLayout() {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  )
}
