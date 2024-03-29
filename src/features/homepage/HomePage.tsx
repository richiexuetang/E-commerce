import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/Directory';
import './homepage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Directory />
      <Outlet />
    </div>
  );
};

export default HomePage;
