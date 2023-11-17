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

const PersonalDataForm = () => {
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
                  <CFormLabel htmlFor="nomeInput">Nome</CFormLabel>
                  <CFormInput id="nomeInput" placeholder="Nome" />
                </div>
                <div className="mb-2 col-12">
                  <CFormLabel htmlFor="nomeSocialInput">Nome Social</CFormLabel>
                  <CFormInput id="nomeSocialInput" placeholder="Nome Social" />
                </div>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard className="p-1 mb-3">
            <CAccordion>
              <CAccordionItem>
                <CAccordionHeader>Dados Principais</CAccordionHeader>
                <CAccordionBody>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Informações Pessoais</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="bancoInput">Sexo</CFormLabel>
                          <CFormSelect
                            id="bancoInput"
                            className="mb-3"
                            aria-label="Selecione o Banco"
                          >
                            <option></option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                            <option value="3">Outros</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="agenciaInput">Raça</CFormLabel>
                          <CFormSelect
                            id="agenciaInput"
                            className="mb-2"
                            aria-label="Selecione o Agência"
                          >
                            <option></option>
                            <option value="1">Branco</option>
                            <option value="2">Negro</option>
                            <option value="3">Pardo</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="tipoInput">Estado Civil</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo da Conta"
                          >
                            <option></option>
                            <option value="1">Solteiro</option>
                            <option value="2">Casado</option>
                            <option value="3">Viúvo</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Data de Nascimento</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="__/__/____" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="tipoInput">Grau de Instrução</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo da Conta"
                          >
                            <option></option>
                            <option value="1">Ensino Fundamental</option>
                            <option value="2">Ensino Médio</option>
                            <option value="3">Ensino Superior</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="tipoInput">Deficiência</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo da Conta"
                          >
                            <option></option>
                            <option value="1">Deficiência</option>
                            <option value="2">Deficiência</option>
                            <option value="3">Deficiência</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="tipoInput">Nacionalidade</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo da Conta"
                          >
                            <option></option>
                            <option value="1">Nacionalidade</option>
                            <option value="2">Nacionalidade</option>
                            <option value="3">Nacionalidade</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-6">
                          <CFormSwitch
                            label="Preenche cota de pessoas com deficiência"
                            id="disabilityquotaChecked"
                            defaultChecked={false}
                          />
                        </div>
                        <div className="mb-2 col-6">
                          <CFormSwitch
                            label="Proprietário"
                            id="ownerChecked"
                            defaultChecked={false}
                          />
                        </div>
                        <div className="mb-2 col-6">
                          <CFormLabel htmlFor="nContaInput">Nome da Mãe</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Nome da Mãe" />
                        </div>
                        <div className="mb-2 col-6">
                          <CFormLabel htmlFor="nContaInput">Nome do Pai</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Nome do Pai" />
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Documentos</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="row col-12">
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="nContaInput">CPF</CFormLabel>
                            <CFormInput id="nContaInput" placeholder="CPF" />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="nContaInput">PIS/NIS</CFormLabel>
                            <CFormInput id="nContaInput" placeholder="PIS/NIS" />
                          </div>
                        </div>
                        <div className="row col-12">
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="nContaInput">Número de Identidade</CFormLabel>
                            <CFormInput id="nContaInput" placeholder="Número de Identidade" />
                          </div>
                          <div className="mb-2 col-2">
                            <CFormLabel htmlFor="nContaInput">Complemento</CFormLabel>
                            <CFormInput id="nContaInput" placeholder="Complemento" />
                          </div>
                          <div className="mb-2 col-2">
                            <CFormLabel htmlFor="tipoInput">UF</CFormLabel>
                            <CFormSelect
                              id="tipoInput"
                              className="mb-2"
                              aria-label="Selecione o Tipo da Conta"
                            >
                              <option></option>
                              <option value="1">UF</option>
                              <option value="2">UF</option>
                              <option value="3">UF</option>
                            </CFormSelect>
                          </div>
                          <div className="mb-2 col-2">
                            <CFormLabel htmlFor="nContaInput">Data de Emissão</CFormLabel>
                            <CFormInput id="nContaInput" placeholder="__/__/____" />
                          </div>
                          <div className="mb-2 col-3">
                            <CFormLabel htmlFor="nContaInput">Órgão Expedidor</CFormLabel>
                            <CFormInput id="nContaInput" placeholder="Órgão Expedidor" />
                          </div>
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Título de Eleitor</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Título de Eleitor</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Título de Eleitor" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Seção</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Seção" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Zona Eleitoral</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Zona Eleitoral" />
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Carteira de Habilitação</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Número</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Número" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Categoria</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Categoria" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Dt. Primeira Habilitação</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Dt. Primeira Habilitação" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="tipoInput">UF Expedidor</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo da Conta"
                          >
                            <option></option>
                            <option value="1">UF</option>
                            <option value="2">UF</option>
                            <option value="3">UF</option>
                          </CFormSelect>
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Expedição</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="__/__/____" />
                        </div>
                        <div className="mb-2 col-4">
                          <CFormLabel htmlFor="nContaInput">Dt. Validade</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Dt. Validade" />
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Carteira de Trabalho</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Número</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Número" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Série</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Categoria" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Expedição</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="__/__/____" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="tipoInput">UF Expedidor</CFormLabel>
                          <CFormSelect
                            id="tipoInput"
                            className="mb-2"
                            aria-label="Selecione o Tipo da Conta"
                          >
                            <option></option>
                            <option value="1">UF</option>
                            <option value="2">UF</option>
                            <option value="3">UF</option>
                          </CFormSelect>
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Passaporte</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Número</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Número" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Validade do Visto</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="__/__/____" />
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCard>
          <CCard className="p-1">
            <CAccordion>
              <CAccordionItem>
                <CAccordionHeader>Dados Complementares</CAccordionHeader>
                <CAccordionBody>
                  <CAccordion className="p-1">
                    <CAccordionItem>
                      <CAccordionHeader>Endereço</CAccordionHeader>
                      <CAccordionBody className="row">
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">CEP</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="CEP" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">UF</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="UF" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Cidade</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Cidade" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Bairro</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Bairro" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Logradouro</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Logradouro" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Número</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Número" />
                        </div>
                        <div className="mb-2 col-3">
                          <CFormLabel htmlFor="nContaInput">Complemento</CFormLabel>
                          <CFormInput id="nContaInput" placeholder="Complemento" />
                        </div>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default PersonalDataForm
