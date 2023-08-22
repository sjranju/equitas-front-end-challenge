import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import RocketInfo from './pages/RocketInfo';
import MainPage from './pages/MainPage';
import RootLayout from './layouts/RootLayout';
import NotFound from './pages/NotFound';

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/rocket-info" element={<RocketInfo />} />
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )

}
export default App;
