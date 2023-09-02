
import './App.css';
import { Routes, Route} from "react-router-dom";
import Handle from './components/Handle';
function App() {
  return (
    <>
    <Routes>
      <Route path='/my-gpt' element={<Handle/>}></Route>
    </Routes>
    </>
  );
}

export default App;
