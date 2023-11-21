import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const PersonalData = React.lazy(() => import('./views/pages/personalData/PersonalData'))
const PersonalDataForm = React.lazy(() => import('./views/pages/personalData/PersonalDataForm'))
const BondData = React.lazy(() => import('./views/pages/bondData/BondData'))
const BondDataForm = React.lazy(() => import('./views/pages/bondData/BondDataForm'))
const VacationData = React.lazy(() => import('./views/pages/vacationData/VacationData'))
const JobData = React.lazy(() => import('./views/pages/jobData/JobData'))
const JobDataForm = React.lazy(() => import('./views/pages/jobData/JobDataForm'))
const CboData = React.lazy(() => import('./views/pages/cboData/CboData'))
const CboDataForm = React.lazy(() => import('./views/pages/cboData/CboDataForm'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  {
    path: '/trabalhador/dados_pessoais',
    name: 'Trabalhador / Dados Pessoais',
    element: PersonalData,
  },
  {
    path: '/trabalhador/dados_pessoais/create',
    element: PersonalDataForm,
  },
  {
    path: '/trabalhador/vinculo',
    name: 'Trabalhador / Vínculo',
    element: BondData,
  },
  {
    path: '/trabalhador/vinculo/create',
    element: BondDataForm,
  },
  {
    path: '/trabalhador/ferias',
    name: 'Trabalhador / Ferias',
    element: VacationData,
  },
  {
    path: '/tabelas/cargo',
    name: 'Tabelas / Cargo',
    element: JobData,
  },
  {
    path: '/tabelas/cargo/create',
    element: JobDataForm,
  },
  {
    path: '/tabelas/cbo',
    name: 'Tabelas / CBO',
    element: CboData,
  },
  {
    path: '/tabelas/cbo/create',
    element: CboDataForm,
  },
]

export default routes
