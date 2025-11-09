import { createBrowserRouter, RouterProvider } from "react-router";

import { HomePage } from "./modules/home";
import { OrganizationPage } from "./modules/orgs";
import { CheckInPage } from "./modules/check-in";
import { CheckInSuccessPage } from "./modules/success";
import { ExamPickupPage } from "./modules/exam-pickup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/clinica/:idLocal",
    element: <OrganizationPage />,
  },
  {
    path: "/clinica/:idLocal/confirmar-presenca",
    element: <CheckInPage />,
  },
  {
    path: "/clinica/:idLocal/confirmar-presenca/sucesso",
    element: <CheckInSuccessPage />,
  },
  {
    path: "/clinica/:idLocal/retirar-exame",
    element: <ExamPickupPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
