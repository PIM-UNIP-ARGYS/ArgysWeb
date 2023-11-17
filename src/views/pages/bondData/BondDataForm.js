import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
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
                <div className="mb-3 col-3">
                  <CFormLabel htmlFor="matriculaESocialInput">Matrícul eSocial</CFormLabel>
                  <CFormInput id="matriculaESocialInput" placeholder="Matrícul eSocial" />
                </div>
                <div className="mb-3 col-3">
                  <CFormLabel htmlFor="matriculaInput">Matrícula</CFormLabel>
                  <CFormInput id="matriculaInput" placeholder="Matrícula" />
                </div>
                <div className="mb-3 col-6">
                  <CFormLabel htmlFor="trabalhadorInput">Trabalhador</CFormLabel>
                  <CFormInput id="trabalhadorInput" placeholder="Trabalhador" />
                </div>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard className="p-1">
            <CCardHeader>
              <strong>Dados Gerais</strong>
            </CCardHeader>
            <CCardBody>
              <CForm className="row">
                <div className="mb-3 col-6">
                  <CFormLabel htmlFor="cboInput">CBO</CFormLabel>
                  <CFormSelect id="cboInput" className="mb-3" aria-label="Selecione o CBO">
                    <option></option>
                    <option value="1">CBO 1</option>
                    <option value="2">CBO 2</option>
                    <option value="3">CBO 3</option>
                  </CFormSelect>
                </div>
                <div className="mb-3 col-3">
                  <CFormLabel htmlFor="dtAdmissaoInput">Data de admissão</CFormLabel>
                  <CFormInput id="dtAdmissaoInput" placeholder="Data de Admissão" />
                </div>
                <div className="mb-3 col-3">
                  <CFormLabel htmlFor="dtOpcaoFgtsInput">Data opção FGTS</CFormLabel>
                  <CFormInput id="dtOpcaoFgtsInput" placeholder="Data opção FGTS" />
                </div>

                <CCard className="p-1">
                  <CCardHeader className="mb-3">
                    <strong>Informações Bancárias</strong>
                  </CCardHeader>
                  <CCard className="p-1 mb-3">
                    <CCardHeader>
                      <strong>Remuneração</strong>
                    </CCardHeader>
                    <CCardBody className="row">
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="bancoInput">Banco</CFormLabel>
                        <CFormSelect
                          id="bancoInput"
                          className="mb-3"
                          aria-label="Selecione o Banco"
                        >
                          <option></option>
                          <option value="1">Banco 1</option>
                          <option value="2">Banco 2</option>
                          <option value="3">Banco 3</option>
                        </CFormSelect>
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="agenciaInput">Agência</CFormLabel>
                        <CFormSelect
                          id="agenciaInput"
                          className="mb-3"
                          aria-label="Selecione o Agência"
                        >
                          <option></option>
                          <option value="1">Agência 1</option>
                          <option value="2">Agência 2</option>
                          <option value="3">Agência 3</option>
                        </CFormSelect>
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="tipoInput">Tipo</CFormLabel>
                        <CFormSelect
                          id="tipoInput"
                          className="mb-3"
                          aria-label="Selecione o Tipo da Conta"
                        >
                          <option></option>
                          <option value="1">Conta Salário</option>
                          <option value="2">Conta Corrente</option>
                          <option value="3">Conta Poupança</option>
                        </CFormSelect>
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="nContaInput">Nº da Conta</CFormLabel>
                        <CFormInput id="nContaInput" placeholder="Data opção FGTS" />
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="dgVerificadorInput">Dígito verificador</CFormLabel>
                        <CFormInput id="dgVerificadorInput" placeholder="Data opção FGTS" />
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="operacaoInput">Operação</CFormLabel>
                        <CFormInput id="operacaoInput" placeholder="Data opção FGTS" />
                      </div>
                    </CCardBody>
                  </CCard>
                  <CCard className="p-1">
                    <CCardHeader>
                      <strong>FGTS</strong>
                    </CCardHeader>
                    <CCardBody className="row">
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="bancoInput">Banco</CFormLabel>
                        <CFormSelect
                          id="bancoInput"
                          className="mb-3"
                          aria-label="Selecione o Banco"
                        >
                          <option></option>
                          <option value="1">Banco 1</option>
                          <option value="2">Banco 2</option>
                          <option value="3">Banco 3</option>
                        </CFormSelect>
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="agenciaInput">Agência</CFormLabel>
                        <CFormSelect
                          id="agenciaInput"
                          className="mb-3"
                          aria-label="Selecione o Agência"
                        >
                          <option></option>
                          <option value="1">Agência 1</option>
                          <option value="2">Agência 2</option>
                          <option value="3">Agência 3</option>
                        </CFormSelect>
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="tipoInput">Tipo</CFormLabel>
                        <CFormSelect
                          id="tipoInput"
                          className="mb-3"
                          aria-label="Selecione o Tipo da Conta"
                        >
                          <option></option>
                          <option value="1">Conta Salário</option>
                          <option value="2">Conta Corrente</option>
                          <option value="3">Conta Poupança</option>
                        </CFormSelect>
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="nContaInput">Nº da Conta</CFormLabel>
                        <CFormInput id="nContaInput" placeholder="Data opção FGTS" />
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="dgVerificadorInput">Dígito verificador</CFormLabel>
                        <CFormInput id="dgVerificadorInput" placeholder="Data opção FGTS" />
                      </div>
                      <div className="mb-3 col-4">
                        <CFormLabel htmlFor="operacaoInput">Operação</CFormLabel>
                        <CFormInput id="operacaoInput" placeholder="Data opção FGTS" />
                      </div>
                    </CCardBody>
                  </CCard>
                </CCard>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default BondDataForm
