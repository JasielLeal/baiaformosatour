import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { PasseioCompleto } from "./pages/PasseioCompleto";
import { LayoutPage } from "./pages/LayoutPage";
import { Duvidas } from "./pages/Duvidas";
import { Sobre } from "./pages/Sobre";
import { Page404 } from "./pages/page404";
import { PasseioDeBuggy } from "./pages/PasseioBuggy";
import { PorDoSol } from "./pages/PorDoSol";
import { PacotesTotal } from "./pages/Pacotes";
import { PasseioMaguezal } from "./pages/PasseioMaguezal";
import { Termos } from "./pages/Termos";
import { PasseioPipa } from "./pages/PasseioPipa";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/passeiocompleto', element: <PasseioCompleto />, },
      { path: '/passeiodemaguezal', element: <PasseioMaguezal /> },
      { path: '/passeiodebuggy', element: <PasseioDeBuggy /> },
      { path: '/passeiopipa', element: <PasseioPipa /> },
      { path: '/pordosol', element: <PorDoSol /> },
      { path: '/pacotes', element: <PacotesTotal /> },
      { path: '/duvidas', element: <Duvidas /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/termos', element: <Termos /> }
    ]
  },
  {
    path: '*', element: <Page404 />
  }
])
