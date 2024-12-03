import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MainLayout = lazy(() => import("@layout/MainLayout"));
const UserProfile = lazy(() => import("@pages/auth/UserProfile"));
import LandingPage from "@pages/LandingPage";
import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";
import Login from "@pages/auth/Login";
import Cart from "@pages/Cart/Cart";
import WishList from "@pages/WishList";
import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "src/Error/ErrorBoundary";
import ProtectLogin from "./ProtectLogin";

import Loader from "@components/Loader/Loader";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <MainLayout />
        </ErrorBoundary>
      </Suspense>
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
        element: (
          <ProtectLogin>
            <Login />
          </ProtectLogin>
        ),
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
          <Suspense fallback={<Loader />}>
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppRouter;
