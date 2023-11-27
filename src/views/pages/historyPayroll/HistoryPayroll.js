import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
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

const HistoryPayroll = () => {
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
                    <CTableHeaderCell scope="col">Referência</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Dia Inicial</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Dia Final</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Data de Execução do cálculo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>Cell</CTableDataCell>
                    <CTableDataCell>
                      <button>E</button>
                      <button>D</button>
                    </CTableDataCell>
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

export default HistoryPayroll