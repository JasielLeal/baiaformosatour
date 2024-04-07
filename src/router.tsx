import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PasseioCompleto } from "./pages/PasseioCompleto";
import { LayoutPage } from "./pages/LayoutPage";
import { Duvidas } from "./pages/Duvidas";
import { Sobre } from "./pages/Sobre";
import { Page404 } from "./pages/page404";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/passeiocompleto', element: <PasseioCompleto /> },
      { path: '/duvidas', element: <Duvidas /> },
      { path: '/sobre', element: <Sobre /> }
    ]
  },
  {
    path: '*', element: <Page404/>
  }
])
