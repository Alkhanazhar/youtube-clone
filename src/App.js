import { Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import Layout from './components/Layout';
import Watch from './components/Watch';
import { useOnline } from './utils/hooks';
import Online from './utils/InternetIssue';
import Search from './components/Search';

function App() {
  const online = useOnline()
  if (online) {
    return <Online />
  }
  return (
    <Layout>
      <Routes>

        <Route path='/' element={<Body />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;
