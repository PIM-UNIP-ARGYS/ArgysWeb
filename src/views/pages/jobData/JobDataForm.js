import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const JobDataForm = () => {
  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CCard className="p-1 mb-3">
            <CCardBody>
              <CForm className="row">
                <div className="mb-2 col-3">
                  <CFormLabel htmlFor="codigoInput">Código</CFormLabel>
                  <CFormInput id="codigoInput" placeholder="Código" />
                </div>
                <div className="mb-2 col-9">
                  <CFormLabel htmlFor="nomeInput">CBO</CFormLabel>
                  <CFormInput id="nomeInput" placeholder="CBO" />
                </div>
                <div className="mb-2 col-12">
                  <CFormLabel htmlFor="nomeSocialInput">Descrição</CFormLabel>
                  <CFormInput id="nomeSocialInput" placeholder="Descrição" />
                </div>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="success" className="me-md-2">
                  Salvar <CIcon icon={cilPlus} />
                </CButton>
                <CButton color="dark" className="me-md-2">
                  Voltar <CIcon icon={cilPlus} />
                </CButton>
              </div>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default JobDataForm
