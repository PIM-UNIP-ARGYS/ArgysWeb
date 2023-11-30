import React from 'react'
import { CButton, CTableDataCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'

const CboDataTable = (data) => {
  const handleEdit = () => {}

  const handleDelete = () => {}

  if (!data) {
    return <></>
  }

  return (
    <>
      <CTableRow>
        <CTableDataCell>{data.data.codigo}</CTableDataCell>
        <CTableDataCell>{data.data.descricao}</CTableDataCell>
        <CTableDataCell>{data.data.salarioAula}</CTableDataCell>
        <CTableDataCell>{data.data.motoristaProfissional}</CTableDataCell>
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

export default CboDataTable
