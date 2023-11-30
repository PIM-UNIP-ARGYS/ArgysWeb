import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import api from 'src/services/axios.service'
import PersonalDataTable from './PersonalDataTable'

const PersonalData = () => {
  const [listData, setListData] = useState([])

  const created = () => {
    window.location.href = '#/trabalhador/dados_pessoais/create'
  }

  const handleGetPersonalDataList = async () => {
    const list = await api.get('/pessoa')

    if (list.status === 200) {
      setListData(list.data)
    }
  }

  useEffect(() => {
    handleGetPersonalDataList()
  }, [])

  if (listData.length === 0) {
    return <></>
  }

  return (
    <CContainer>
      <CRow>
        <CCol md="12">
          <CCard className="p-1">
            <CCardHeader>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton color="success" className="me-md-2" onClick={created}>
                  Adicionar <CIcon icon={cilPlus} />
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <CTable responsive bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Código</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                    <CTableHeaderCell scope="col">RG</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nº Carteira Trab.</CTableHeaderCell>
                    <CTableHeaderCell scope="col">CPF</CTableHeaderCell>
                    <CTableHeaderCell scope="col">PIS</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Titulo de Eleitor</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Data de Nascimento</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {listData &&
                    listData.map((item, index) => <PersonalDataTable key={index} data={item} />)}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default PersonalData
