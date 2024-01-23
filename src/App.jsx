import Home from './demos/Home';
import Battery from './demos/Battery';
import Vibration from './demos/Vibration';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/battery',
        element: <Battery />,
      },
      { path: '/vibration', element: <Vibration /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
