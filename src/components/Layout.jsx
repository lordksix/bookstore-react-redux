import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';

const Layout = () => (
  <>
    <header className="appHeader">
      <h1>Bookstore CMS</h1>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export default Layout;
