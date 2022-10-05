import './App.css';
import { Header } from './stories/Header/Header';
import { Intro } from './stories/Intro/Intro';
import { Layout } from './stories/Layout/Layout';

function App() {
  return (
    <Layout >
      <Header /> 
      <Intro />
    </Layout >
  );
}

export default App;
