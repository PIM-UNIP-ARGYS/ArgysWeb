import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import api from 'src/services/axios.service'
import HistoryPayrollTable from './HistoryPayrollTable'

const HistoryPayroll = () => {
  const [listData, setListData] = useState([])

  const handleGetList = async () => {
    const list = await api.get('/folha_pagamento/historico')

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
            <CCardBody>
              <CTable responsive bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Nome do Arquivo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {listData &&
                    listData.map((item, index) => <HistoryPayrollTable key={index} data={item} />)}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default HistoryPayroll
