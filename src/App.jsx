import TButtons from "./components/details/TButtons";
import TText from "./components/details/TText";
import ProtectedRoute from "./layout/ProtectedRoute";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const routes = [
  {
    path: "/buttons",
    component: <TButtons />,
  },
  {
    path: "/text",
    component: <TText />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/" element={<ProtectedRoute isAuthenticated={true} />}>
          {routes.map((router, index) => (
            <Route path={router.path} element={router.component} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
