import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import logo from '../../../assets/images/logo.png'
import axios from '../../../services/axios.service'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginApp = async () => {
    const data = {
      email: email,
      senha: password,
    }

    const result = await axios.post('auth', data)

    if (result.status === 200) {
      window.location.href = '#/dashboard'
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <img src={logo} alt="Logo Argys Technology" />
                    <p className="text-medium-emphasis">Preencha seus dados para entrar</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="E-mail"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CButton color="primary" className="w-100" onClick={loginApp}>
                      Login
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Inscrever-se</h2>
                    <p>
                      Você busca eficiência, simplicidade e controle total para o gerenciamento do
                      seu negócio? Nosso ERP é a resposta. Inscreva-se!
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Cadastre-se!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
