import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const PersonalData = () => {
  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CCard className="p-1">
            <CCardHeader>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="success" className="me-md-2">
                  Adicionar <CIcon icon={cilPlus} />
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CTable responsive bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Código</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                    <CTableHeaderCell scope="col">RG</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nº Carteira Trab.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">CPF</CTableHeaderCell>
                    <CTableHeaderCell scope="col">PIS</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Titulo de Eleitor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Data de Nascimento</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default PersonalData
