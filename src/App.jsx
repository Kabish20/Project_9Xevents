import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, ScrollToTop } from '@/components/layout';
import { AppRoutes } from '@/routes';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
