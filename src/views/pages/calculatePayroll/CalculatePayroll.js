import React, { useState } from 'react'
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
import api from 'src/services/axios.service'

const CalculatePayroll = () => {
  const [referencia, setReferencia] = useState()

  const handleSubmit = async () => {
    const result = api.get(`/folha_pagamento?referencia=${referencia}`)

    if (result.status === 200) {
      window.location.href = '#/processos/historico_fp'
    }
  }
  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CCard className="p-1">
            <CCardBody>
              <CForm className="row">
                <div className="mb-2 col-9">
                  <CFormLabel htmlFor="codigoInput">Empresa</CFormLabel>
                  <CFormInput id="codigoInput" placeholder="Empresa" disabled value="Default" />
                </div>
                <div className="mb-2 col-3">
                  <CFormLabel htmlFor="codigoInput">Referência</CFormLabel>
                  <CFormInput
                    id="codigoInput"
                    placeholder="__/____"
                    onChange={(e) => setReferencia(e.target.value)}
                  />
                </div>
              </CForm>
            </CCardBody>
            <CFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="success" className="me-md-2" onClick={handleSubmit}>
                  Gerar <CIcon icon={cilPlus} />
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
