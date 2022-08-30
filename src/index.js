import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NoPage from "./404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./components/Post";
import './index.css'
import About from "./pages/About";
import Contact from "./pages/Contact";
import {UserProvider} from "./context/userContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<UserProvider>
		<ToastContainer/>
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>

				<Route exact path="/" element={<MainLayout/>}>
					<Route index element={<App/>}/>
					<Route path="about" element={<About/>}/>
					<Route path="contact" element={<Contact/>}/>
					<Route path="post/:id" element={<Post/>}/>
					<Route path="*" element={<NoPage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	</UserProvider>
);
