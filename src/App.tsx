import { Outlet } from 'react-router-dom';
import { Layout } from './stories/Layout/Layout';
import './App.css';
import { Header } from './stories/Header/Header';

function App() {
  return (
    <Layout >
      <Header />
      <Outlet />
    </Layout>
  );
}

export default App;
