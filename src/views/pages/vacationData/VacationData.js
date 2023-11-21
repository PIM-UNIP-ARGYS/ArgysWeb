import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const VacationData = () => {
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
            <CCard className="p-1 m-2">
              <CCardHeader>
                <CCardTitle>Cadastrar Férias</CCardTitle>
              </CCardHeader>
              <CCardBody className="row">
                <div className="mb-2 col-4">
                  <CFormLabel htmlFor="nContaInput">Período Aquisitivo</CFormLabel>
                  <CFormInput id="nContaInput" placeholder="__/__/____" />
                </div>
                <div className="mb-2 col-4">
                  <CFormLabel htmlFor="nContaInput">Até</CFormLabel>
                  <CFormInput id="nContaInput" placeholder="__/__/____" />
                </div>
                <div className="mb-2 col-4">
                  <CFormLabel htmlFor="nContaInput">Dt. Inicial do Gozo</CFormLabel>
                  <CFormInput id="nContaInput" placeholder="__/__/____" />
                </div>
                <div className="mb-2 col-4">
                  <CFormLabel htmlFor="nContaInput">Dias de Gozo</CFormLabel>
                  <CFormInput id="nContaInput" placeholder="Dias de Gozo" />
                </div>
                <div className="mb-2 col-4">
                  <CFormLabel htmlFor="nContaInput">Dt. Pagamento</CFormLabel>
                  <CFormInput id="nContaInput" placeholder="__/__/____" />
                </div>
                <div className="mb-2 col-4">
                  <CFormLabel htmlFor="tipoInput">Forma de acúmulo (maior remuneração)</CFormLabel>
                  <CFormSelect
                    id="tipoInput"
                    className="mb-2"
                    aria-label="Selecione o Tipo do Endereço"
                  >
                    <option></option>
                    <option value="1">Período aquisitivo</option>
                  </CFormSelect>
                </div>
              </CCardBody>
              <CCardFooter>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <CButton color="success" className="me-md-2">
                    Salvar <CIcon icon={cilPlus} />
                  </CButton>
                </div>
              </CCardFooter>
            </CCard>
            <CCard className="p-1 m-2">
              <CCardHeader>
                <CCardTitle>Histórico de Férias</CCardTitle>
              </CCardHeader>
              <CCardBody>
                <CTable responsive bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Data Inicial de Gozo</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Dias de Gozo</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Dt. Inicial</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Dt. Final</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell>Cell</CTableDataCell>
                      <CTableDataCell>Cell</CTableDataCell>
                      <CTableDataCell>Cell</CTableDataCell>
                      <CTableDataCell>Cell</CTableDataCell>
                      <CTableDataCell>Cell</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default VacationData
