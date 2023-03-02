import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppWrap from './AppWrap'
import HomePage from '../components/HomePage'
import Dashboard from '../components/Dashboard/Dashboard'

function AppRoutes() {
 return (
  <Routes>
   <Route path="/" element={<AppWrap />}>
    <Route index element={<HomePage />} />
    <Route path="/dashboard" element={<Dashboard />} />
   </Route>
  </Routes>
 )
}

export default AppRoutes
