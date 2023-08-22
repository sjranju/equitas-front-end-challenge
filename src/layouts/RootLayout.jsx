// import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <main>
        {/* <Suspense fallback={<h1>Loading...</h1>}> */}
          <Outlet />
        {/* </Suspense> */}
      </main>
    </div>
  )
}

export default RootLayout