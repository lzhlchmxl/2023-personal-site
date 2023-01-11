import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';



function App() {

  const { pathname } = useLocation();

  return (
    <div className={`flex flex-col items-center justify-center bg-black overflow-y-auto ${pathname === '/' ? 'h-screen': ''}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
