import React from 'react'
import { CButton, CTableDataCell, CTableRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCloudDownload } from '@coreui/icons'

const HistoryPayrollTable = (data) => {
  const handleDownload = () => {
    const blob = base64toBlob(data.data.folhaPagamento, 'application/pdf')
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.href = url
    a.download = data.data.nomeArquivo
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const base64toBlob = (base64, type) => {
    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type })
  }

  if (!data) {
    return <></>
  }

  return (
    <>
      <CTableRow>
        <CTableDataCell>{data.data.nomeArquivo}</CTableDataCell>
        <CTableDataCell className="d-flex justify-content-center gap-2">
          <CButton color="info" onClick={handleDownload}>
            <CIcon icon={cilCloudDownload} />
          </CButton>
        </CTableDataCell>
      </CTableRow>
    </>
  )
}

export default HistoryPayrollTable
