import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './components/Login_SignUp';
import ViewUsers from './components/ViewUsers';
import CustomUserAdd from './components/CustomeUserAdd';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignUp />} />
        <Route path='/view_users' element={<ViewUsers/>}/>
        <Route path='/customusers' element={<CustomUserAdd/>}/>
      </Routes>
    </Router>
  );
}

export default App;
