import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

const Home = () => {
  return (
    <div className="Home">
      <h1>Dougs WEb ApI DemosS s</h1>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Home;
