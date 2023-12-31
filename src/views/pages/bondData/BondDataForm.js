import React, { useState } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import api from 'src/services/axios.service'

const BondDataForm = () => {
  const [trabalhador, setTrabalhador] = useState()
  const [cbo, setCbo] = useState()
  const [dataAdmissao, setDataAdmissao] = useState()
  const [dataFgts, setDataFgts] = useState()
  const [cargo, setCargo] = useState()
  const [salario, setSalario] = useState()
  const [tipoPagamento, setTipoPagamento] = useState()

  const formatDate = (date) => {
    if (!date) {
      return null
    }
    const dateSplit = date.split('/')
    const dateObject = new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0])
    const dateFormat = dateObject.toLocaleDateString('en-CA') + 'T16:49:36.751Z'
    return dateFormat
  }

  const handleBack = () => {
    window.location.href = '#/trabalhador/vinculo'
  }

  const handleSubmit = async () => {
    const dtAdmissao = formatDate(dataAdmissao)
    const dtFgts = formatDate(dataFgts)

    const data = {
      pessoa: trabalhador,
      cbo: cbo,
      dtAdmissao: dtAdmissao,
      dtFgts: dtFgts,
      cargo: cargo,
      salario: salario,
      tipoPagamento: tipoPagamento,
    }

    const result = await api.post('/vinculo', data)

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
                <div className="mb-2 col-2">
                  <CFormLabel htmlFor="matriculaEsocialInput">Matrícula eSocial</CFormLabel>
                  <CFormInput id="matriculaEsocialInput" placeholder="Matrícula eSocial" disabled />
                </div>
                <div className="mb-2 col-2">
                  <CFormLabel htmlFor="matriculaInput">Matrícula</CFormLabel>
                  <CFormInput id="matriculaInput" placeholder="Matrícula" disabled />
                </div>
                <div className="mb-2 col-8">
                  <CFormLabel htmlFor="trabalhadorInput">Trabalhador</CFormLabel>
                  <CFormInput
                    id="trabalhadorInput"
                    placeholder="Trabalhador"
                    onChange={(e) => setTrabalhador(e.target.value)}
                  />
                </div>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard className="p-1 mb-3">
            <CAccordion>
              <CAccordionItem>
                <CAccordionHeader>Dados Gerais</CAccordionHeader>
                <CAccordionBody className="row">
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="cboInput">CBO</CFormLabel>
                    <CFormInput
                      id="cboInput"
                      placeholder="CBO"
                      onChange={(e) => setCbo(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="dataAdmissaoInput">Data de admissão</CFormLabel>
                    <CFormInput
                      id="dataAdmissaoInput"
                      placeholder="__/__/____"
                      onChange={(e) => setDataAdmissao(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="dataFgtsInput">Data de opção FGTS</CFormLabel>
                    <CFormInput
                      id="dataFgtsInput"
                      placeholder="__/__/____"
                      onChange={(e) => setDataFgts(e.target.value)}
                    />
                  </div>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCard>
          <CCard className="p-1 mb-3">
            <CAccordion>
              <CAccordionItem>
                <CAccordionHeader>Cargos e Salários</CAccordionHeader>
                <CAccordionBody className="row">
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="cargoInput">Cargo</CFormLabel>
                    <CFormInput
                      id="cargoInput"
                      placeholder="Cargo"
                      onChange={(e) => setCargo(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="salarioInput">Salário</CFormLabel>
                    <CFormInput
                      id="salarioInput"
                      placeholder="Salário"
                      onChange={(e) => setSalario(e.target.value)}
                    />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="tipoInput">Tipo de pagamento</CFormLabel>
                    <CFormSelect
                      id="tipoInput"
                      className="mb-2"
                      aria-label="Selecione o Tipo de pagamento"
                      onChange={(e) => setTipoPagamento(e.target.value)}
                    >
                      <option></option>
                      <option value="mensais">Mensais</option>
                    </CFormSelect>
                  </div>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCard>
          <CCard>
            <CCardBody>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="success" className="me-md-2" onClick={handleSubmit}>
                  Salvar <CIcon icon={cilPlus} />
                </CButton>
                <CButton color="dark" className="me-md-2" onClick={handleBack}>
                  Voltar <CIcon icon={cilPlus} />
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default BondDataForm
