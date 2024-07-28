import { Layout } from './layout/Layout';
import { Home } from './pages/home/Home';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
