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
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import api from 'src/services/axios.service'
import BondDataTable from './BondDataTable'

const BondData = () => {
  const [listData, setListData] = useState([])

  const created = () => {
    window.location.href = '#/trabalhador/vinculo/create'
  }

  const handleGetList = async () => {
    const list = await api.get('/vinculo')

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
                    <CTableHeaderCell scope="col">Matrícula</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Trabalhador</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Data de admissão</CTableHeaderCell>
                    <CTableHeaderCell scope="col">CPF</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {listData &&
                    listData.map((item, index) => <BondDataTable key={index} data={item} />)}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default BondData
