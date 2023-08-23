import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const UserLayout = (props: Props) => {
  return (
    <div>
        Header
        <Outlet />
        Footer
    </div>
  )
}

export default UserLayout