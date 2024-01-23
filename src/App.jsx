import Home from './demos/Home';
import Battery from './demos/Battery';
import Vibration from './demos/Vibration';
import Audio from './demos/Audio';
import Rotation from './demos/Rotation';
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
      { path: '/audio', element: <Audio /> },
      { path: '/rotation', element: <Rotation /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
