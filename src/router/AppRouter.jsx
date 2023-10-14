import { Navigate, Route, Routes } from "react-router-dom"
import { AuthenticationPage } from "../auth/AuthenticationPage"
import { EcommercePage } from "../ecommerce/EcommercePage"

export const AppRouter = () => {
    return (
    <>
        <Routes>
            <Route path="/auth/*" element={ <AuthenticationPage /> }/>
            <Route path="/*" element={ <EcommercePage /> }/>

            <Route path="/*" element={ <Navigate to="/*" /> }/>
        </Routes>
    </>
  )
}