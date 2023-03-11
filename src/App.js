import './pages'
import './App.css';
import './index.css';
import './index.js';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigator } from './components';
import {
	PageHome,
	PageSearch,
	PageUserProfile,
	PageViewPicture,
	PageViewGallery,
	PageSignIn,
	PageSignUp,
	PageNewPicture,
	PageNewGallery
} from './pages';

function App() {
	return (
		<BrowserRouter>
			<Navigator />
			<Routes>
				<Route path="/search/:term" element={<PageSearch />} />
				<Route path="/user/:userId" element={<PageUserProfile />} />
				<Route path="/picture/:pictureId" element={<PageViewPicture />} />
				<Route path="/gallery/:galleryId" element={<PageViewGallery />} />
				<Route path="/signin" element={<PageSignIn />} />
				<Route path="/signup" element={<PageSignUp />} />
				<Route path="/picture/new" element={<PageNewPicture />} />
				<Route path="/gallery/new" element={<PageNewGallery />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
