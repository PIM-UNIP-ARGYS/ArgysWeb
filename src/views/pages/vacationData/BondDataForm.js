import React from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormSwitch,
  CRow,
} from '@coreui/react'

const BondDataForm = () => {
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
                <CAccordionHeader>Informações bancárias</CAccordionHeader>
                <CAccordionBody>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Remuneração</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Banco</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Banco" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Agência</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Agência" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="tipoInput">Tipo de conta</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo de conta"
                          >
                            <option></option>
                            <option value="1">Corrente</option>
                            <option value="2">Poupança</option>
                            <option value="3">Salário</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Nº da conta</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Nº da conta" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Dígito verificador</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Dígito verificador" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Operação</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Operação" />
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>FGTS</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Banco</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Banco" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Agência</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Agência" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="tipoInput">Tipo de conta</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo de conta"
                          >
                            <option></option>
                            <option value="1">Corrente</option>
                            <option value="2">Poupança</option>
                            <option value="3">Salário</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Nº da conta</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Nº da conta" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Dígito verificador</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Dígito verificador" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Operação</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Operação" />
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
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
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="nContaInput">Horários</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="Horários" />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="nContaInput">Vale transporte</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="Vale transporte" />
                  </div>
                  <div className="mb-2 col-4">
                    <CFormLabel htmlFor="nContaInput">Planos de saúde</CFormLabel>
                    <CFormInput id="nContaInput" placeholder="Planos de saúde" />
                  </div>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default BondDataForm
