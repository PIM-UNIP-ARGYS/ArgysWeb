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
import CboDataTable from './CboDataTable'

const CboData = () => {
  const [listData, setListData] = useState([])

  const created = () => {
    window.location.href = '#/tabelas/cbo/create'
  }

  const handleGetList = async () => {
    const list = await api.get('/cbo')

    if (list.status === 200) {
      setListData(list.data)
    }
  }

  useEffect(() => {
    handleGetList()
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
                    <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Salário aula</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Motorista Profissional</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {listData &&
                    listData.map((item, index) => <CboDataTable key={index} data={item} />)}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default CboData
