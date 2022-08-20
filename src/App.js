import styles from './styles/app.module.css'
import {  Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Exercises from './pages/Exercises';

function App() {
  return (
    <div className={styles.app} >
      
       <Routes>
        
         <Route path="/" element={ <Home/>}/>
         <Route path="/exercises" element={<Exercises/> }/>
       </Routes>
    </div>
  );
}

export default App;
