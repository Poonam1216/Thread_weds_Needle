import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/structured/login/Login";
import SignUp from "./component/structured/signup/Signup";


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	);
}

export default App;