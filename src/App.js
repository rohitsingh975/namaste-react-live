import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/ProfileClass";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store"
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"))

const AppLayout = () => {
    return (
        <Provider store={store}> 
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

const  appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restraunt/:resId",
                element: <RestrauntMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}>
                            <Instamart />
                        </Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
    }
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

