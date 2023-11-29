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
  CFormSwitch,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import api from 'src/services/axios.service'

const CboDataForm = () => {
  const [codigo, setCodigo] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [salarioAula, setSalarioAula] = useState(false)
  const [motoristaProfissional, setMotoristaProfissional] = useState(false)

  const handleBack = () => {
    window.location.href = '#/tabelas/cbo'
  }

  const handleSubmit = async () => {
    const data = {
      descricao: descricao,
      salarioAula: salarioAula === 'on' ? true : false,
      motoristaProfissional: motoristaProfissional === 'on' ? true : false,
    }

    const result = await api.post('/cbo', data)

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
                  <CFormInput
                    id="codigoInput"
                    placeholder="Código"
                    disabled
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </div>
                <div className="row col-9 mt-4">
                  <div className="mt-3 col-4">
                    <CFormSwitch
                      label="Salário aula"
                      id="disabilityquotaChecked"
                      onChange={(e) => setSalarioAula(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 col-5">
                    <CFormSwitch
                      label="É motorista profissional"
                      id="disabilityquotaChecked"
                      onChange={(e) => setMotoristaProfissional(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-2 col-12">
                  <CFormLabel htmlFor="nomeSocialInput">Descrição</CFormLabel>
                  <CFormInput
                    id="nomeSocialInput"
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

export default CboDataForm
