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
  CFormSwitch,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const CboDataForm = () => {
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
                <div className="row col-9 mt-4">
                  <div className="mt-3 col-4">
                    <CFormSwitch
                      label="Salário aula"
                      id="disabilityquotaChecked"
                      defaultChecked={false}
                    />
                  </div>
                  <div className="mt-3 col-5">
                    <CFormSwitch
                      label="É motorista profissional"
                      id="disabilityquotaChecked"
                      defaultChecked={false}
                    />
                  </div>
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

export default CboDataForm
