import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Profile from "./Profile";

const Router = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <App/>,
                errorElement: <ErrorPage />
            },
            {
                path:"profile/:name",
                element: <Profile />,
            }
        ]
    );
    return <RouterProvider router={router} />;
}

export default Router;