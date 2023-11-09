import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1"> Argys Technology &copy; 2023 Argys Solution.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Argys Technology</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
