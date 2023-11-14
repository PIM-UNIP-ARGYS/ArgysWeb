import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const PersonalData = React.lazy(() => import('./views/pages/personalData/PersonalData'))
const PersonalDataForm = React.lazy(() => import('./views/pages/personalData/PersonalDataForm'))

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
]

export default routes
