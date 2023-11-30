import React, { useState } from 'react'
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
import api from 'src/services/axios.service'

const JobDataForm = () => {
  const [descricao, setDescricao] = useState(null)
  const [cbo, setCbo] = useState(false)

  const handleBack = () => {
    window.location.href = '#/tabelas/cargo'
  }

  const handleSubmit = async () => {
    const data = {
      descricao: descricao,
      cbo: cbo,
    }

    const result = await api.post('/cargo', data)

    if (result.status === 201) {
      handleBack()
    }
  }

  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CCard className="p-1 mb-3">
            <CCardBody>
              <CForm className="row">
                <div className="mb-2 col-3">
                  <CFormLabel htmlFor="codigoInput">Código</CFormLabel>
                  <CFormInput id="codigoInput" placeholder="Código" disabled />
                </div>
                <div className="mb-2 col-9">
                  <CFormLabel htmlFor="cboInput">CBO</CFormLabel>
                  <CFormInput
                    id="cboInput"
                    placeholder="CBO"
                    onChange={(e) => setCbo(e.target.value)}
                  />
                </div>
                <div className="mb-2 col-12">
                  <CFormLabel htmlFor="descricaoInput">Descrição</CFormLabel>
                  <CFormInput
                    id="descricaoInput"
                    placeholder="Descrição"
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="success" className="me-md-2" onClick={handleSubmit}>
                  Salvar <CIcon icon={cilPlus} />
                </CButton>
                <CButton color="dark" className="me-md-2" onClick={handleBack}>
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
