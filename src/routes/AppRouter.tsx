import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LandingPage from "@components/LandingPage";
import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";
import Login from "@pages/auth/Login";
import Cart from "@pages/Cart";
import WishList from "@pages/WishList";
import UserProfile from "@pages/auth/UserProfile";
import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "src/Error/ErrorBoundary";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),

    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/user-profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
