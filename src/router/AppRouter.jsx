import { Navigate, Route, Routes } from "react-router-dom"
import { AuthenticationPage } from "../auth/AuthenticationPage"
import { EcommercePage } from "../ecommerce/EcommercePage"
import { RegisterPage } from "../auth/RegisterPage"

export const AppRouter = () => {
    return (
    <>
        <Routes>
            <Route path="/auth/login" element={ <AuthenticationPage /> }/>
            <Route path="/auth/register" element={ <RegisterPage /> }/>
            <Route path="/*" element={ <EcommercePage /> }/>

            <Route path="/*" element={ <Navigate to="/*" /> }/>
        </Routes>
    </>
  )
}