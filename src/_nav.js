import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilSpreadsheet, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Manutenção',
  },
  {
    component: CNavGroup,
    name: 'Trabalhador',
    to: '/trabalhador',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Dados Pessoais',
        to: '/trabalhador/dados_pessoais',
      },
      {
        component: CNavItem,
        name: 'Vínculo',
        to: '/trabalhador/vinculo',
      },
      {
        component: CNavItem,
        name: 'Férias',
        to: '/trabalhador/ferias',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Tabelas',
    to: '/tabelas',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Cargo',
        to: '/tabelas/cargo',
      },
      {
        component: CNavItem,
        name: 'CBO',
        to: '/tabelas/cbo',
      },
      {
        component: CNavItem,
        name: 'Plano de Saúde',
        to: '/tabelas/plano_saude',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Processos',
  },
  {
    component: CNavItem,
    name: 'Calcular Folha de Pagamento',
    to: '/processos/calcular_fp',
  },
  {
    component: CNavItem,
    name: 'Histórico de Cálculos',
    to: '/processos/historico_fp',
  },
]

export default _nav
