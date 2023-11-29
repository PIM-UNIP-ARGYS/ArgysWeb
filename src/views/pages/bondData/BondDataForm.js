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

const BondDataForm = () => {
  const [eSocial, setESocial] = useState()
  const [matricula, setMatricula] = useState()
  const [trabalhador, setTrabalhador] = useState()
  const [cbo, setCbo] = useState()
  const [dataAdmissao, setDataAdmissao] = useState()
  const [dataFgts, setDataFgts] = useState()
  const [bancoRemuneracao, setBancoRemuneracao] = useState()
  const [agenciaRemuneracao, setAgenciaRemuneracao] = useState()
  const [tipoContaRemuneracao, setTipoContaRemuneracao] = useState()
  const [numeroContaRemuneracao, setNumeroContaRemuneracao] = useState()
  const [digitoVerificadoRemuneracao, setDigitoVerificadorRemuneracao] = useState()
  const [operacaoRemuneracao, setOperacaoRemuneracao] = useState()
  const [bancoFgts, setBancoFgts] = useState()
  const [agenciaFgts, setAgenciaFgts] = useState()
  const [tipoContaFgts, setTipoContaFgts] = useState()
  const [numeroContaFgts, setNumeroContaFgts] = useState()
  const [digitoVerificadoFgts, setDigitoVerificadorFgts] = useState()
  const [operacaoFgts, setOperacaoFgts] = useState()
  const [cargo, setCargo] = useState()
  const [salario, setSalario] = useState()
  const [tipoPagamento, setTipoPagamento] = useState()
  const [horario, setHorario] = useState()
  const [valeTransporte, setValeTransporte] = useState()
  const [planoSaude, setPlanoSaude] = useState()

  const handleBack = () => {
    window.location.href = '#/trabalhador/vinculo'
  }

  const handleSubmit = async () => {}

  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CCard className="p-1 mb-3">
            <CCardBody>
              <CForm className="row">
                <div className="mb-2 col-2">
                  <CFormLabel htmlFor="codigoInput">Matrícula eSocial</CFormLabel>
                  <CFormInput id="codigoInput" placeholder="Código" />
                </div>
                <div className="mb-2 col-2">
                  <CFormLabel htmlFor="nomeInput">Matrícula</CFormLabel>
                  <CFormInput id="nomeInput" placeholder="Nome" />
                </div>
                <div className="mb-2 col-8">
                  <CFormLabel htmlFor="nomeSocialInput">Trabalhador</CFormLabel>
                  <CFormInput id="nomeSocialInput" placeholder="Nome Social" />
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
                    <CFormLabel htmlFor="nContaInput">CBO</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="CBO" />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="nContaInput">Data de admissão</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="__/__/____" />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="nContaInput">Data de opção FGTS</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="__/__/____" />
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
                    <CFormLabel htmlFor="nContaInput">Cargo</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="Cargo" />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="nContaInput">Salário</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="Salário" />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="tipoInput">Tipo de pagamento</CFormLabel>
                    <CFormSelect
                      id="tipoInput"
                      className="mb-2"
                      aria-label="Selecione o Tipo de pagamento"
                    >
                      <option></option>
                      <option value="1">Mensais</option>
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
