import { Route, Routes } from 'react-router-dom';
import 'styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="categories" element={<Categories />}/>
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
