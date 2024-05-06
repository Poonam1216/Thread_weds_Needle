import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/structured/login/Login";
import SignUp from "./component/structured/signup/Signup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;