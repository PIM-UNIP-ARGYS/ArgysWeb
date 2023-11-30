import React from 'react'
import { CButton, CTableDataCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'

const BondDataTable = (data) => {
  const handleEdit = () => {}

  const handleDelete = () => {}

  if (!data) {
    return <></>
  }

  return (
    <>
      <CTableRow>
        <CTableDataCell>{data.data.matricula}</CTableDataCell>
        <CTableDataCell>{data.data.trabalhador}</CTableDataCell>
        <CTableDataCell>{data.data.dataAdmissão}</CTableDataCell>
        <CTableDataCell>{data.data.cpf}</CTableDataCell>
        <CTableDataCell className="d-flex justify-content-center gap-2">
          <CButton color="info" onClick={handleEdit}>
            <CIcon icon={cilPencil} />
          </CButton>
          <CButton color="danger" onClick={handleDelete}>
            <CIcon icon={cilTrash} />
          </CButton>
        </CTableDataCell>
      </CTableRow>
    </>
  )
}

export default BondDataTable
