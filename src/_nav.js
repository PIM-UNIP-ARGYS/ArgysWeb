import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
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
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
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
      {
        component: CNavItem,
        name: 'Quadro de Horário',
        to: '/trabalhador/quadro_horario',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Tabelas',
    to: '/tabelas',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavGroup,
    name: 'Configurações',
    to: '/configuracoes',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [],
  },
  {
    component: CNavTitle,
    name: 'Processos',
  },
]

export default _nav
