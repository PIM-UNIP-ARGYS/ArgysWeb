import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSettings, cilSpeedometer, cilSpreadsheet, cilUser } from '@coreui/icons'
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
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Banco',
        to: '/tabelas/banco',
      },
      {
        component: CNavItem,
        name: 'Agência',
        to: '/tabelas/agencia',
      },
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
        name: 'Feriado',
        to: '/tabelas/feriado',
      },
      {
        component: CNavItem,
        name: 'Plano de Saúde',
        to: '/tabelas/plano_saude',
      },
      {
        component: CNavItem,
        name: 'Valor e Imposto',
        to: '/tabelas/valor_imposto',
      },
      {
        component: CNavItem,
        name: 'Valor e Imposto - PLR',
        to: '/tabelas/valor_imposto_plr',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Configurações',
    to: '/configuracoes',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Empresa',
        to: '/configuracoes/empresa',
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
    name: 'Consultar cálculos',
    to: '/processos/consulta_fp',
  },
  {
    component: CNavItem,
    name: 'Histórico de Cálculos',
    to: '/processos/historico_fp',
  },
]

export default _nav
