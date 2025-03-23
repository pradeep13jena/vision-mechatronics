import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./utils/store.js";

// importing css
import '../src/assets/styles/index.css'

// Importing components
import App from '../src/components/App.jsx'
import Home from '../src/components/Home.jsx'
import About from '../src/components/About.jsx'
import Contact from '../src/components/Contact.jsx'
import ErrorPage from '../src/components/ErrorPage.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/aboutus",
                element: <About/>
            },
            {
                path: "/contactus",
                element: <Contact/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)