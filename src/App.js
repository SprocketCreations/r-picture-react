import './pages'
import './App.css';
import './index.css';
import './index.js';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigator from './components/navigator';
import PageHome from './pages/page-home';
import PageSearch from './pages/page-search';
import PageUserProfile from './pages/page-user-profile';
import PageViewPicture from './pages/page-view-picture';
import PageViewGallery from './pages/page-view-gallery';
import PageSignIn from './pages/page-sign-in';
import PageSignUp from './pages/page-sign-up';
import PageNewPicture from './pages/page-new-picture';
import PageNewGallery from './pages/page-new-gallery';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/" element={<PageHome />}>
          <Route path="/search/:term" element={<PageSearch />} />
          <Route path="/user/:userId" element={<PageUserProfile />} />
          <Route path="/picture/:pictureId" element={<PageViewPicture />} />
          <Route path="/gallery/:galleryId" element={<PageViewGallery />} />
          <Route path="/signin" element={<PageSignIn />} />
          <Route path="/signup" element={<PageSignUp />} />
          <Route path="/picture/new" element={<PageNewPicture />} />
          <Route path="/gallery/new" element={<PageNewGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
