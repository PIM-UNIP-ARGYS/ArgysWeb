import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CFooter,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const CalculatePayroll = () => {
  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CCard className="p-1">
            <CCardBody>
              <CForm className="row">
                <div className="mb-2 col-9">
                  <CFormLabel htmlFor="codigoInput">Empresa</CFormLabel>
                  <CFormInput id="codigoInput" placeholder="Empresa" />
                </div>
                <div className="mb-2 col-3">
                  <CFormLabel htmlFor="codigoInput">Referência</CFormLabel>
                  <CFormInput id="codigoInput" placeholder="__/____" />
                </div>
              </CForm>
            </CCardBody>
            <CFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="success" className="me-md-2">
                  Confirmar <CIcon icon={cilPlus} />
                </CButton>
              </div>
            </CFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default CalculatePayroll
