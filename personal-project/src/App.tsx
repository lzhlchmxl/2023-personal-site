import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



function App() {

  const { pathname } = useLocation();

  document.title="Meet Bill"

  return (
    <div className={`min-h-full flex flex-col items-center justify-center bg-black overflow-hidden ${pathname === '/' ? 'h-screen': ''}`}>
      <Header />
      <Outlet />
      { pathname !== '/' && <Footer /> }
    </div>
  );
}

export default App;
