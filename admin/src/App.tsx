import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Hero from './pages/Dashboard/Hero';

import Profile from './pages/Profile';

import FaqForm from './pages/Form/FaqForm';
import OurInfo from './components/Tables/OurInfo';
// import CoustomerReview from './components/Tables/CustomerReview';
import Message from './components/Tables/Message';
import Faq from './components/Tables/Faq';
import SignIn from './pages/Auth/Signin';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from './store';
import TourForm from './pages/Form/Tourform';
import TourTable from './components/Tables/Tour';
import Gallery from './components/Tables/Gallery';
import GalleryForm from './pages/Form/GalleryForm';
import Blog from './components/Tables/Blog';
import BlogForm from './pages/Form/BlogForm';
import SocialLinks from './components/Tables/SocialLinks';
import User from './components/Tables/User';
import UserForm from './pages/Form/UserForm';

function App() {
  const isLogIn = useRecoilValue(isLoggedIn);
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLogIn) {
      navigate('/signin');
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title=" Dashboard" />
              <Hero />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />

        <Route
          path="/forms/tour-form"
          element={
            <>
              <PageTitle title="Form Elements" />
              <TourForm />
            </>
          }
        />

        <Route
          path="/forms/faq-form"
          element={
            <>
              <PageTitle title="Form Elements" />
              <FaqForm />
            </>
          }
        />
        <Route
          path="/our-info"
          element={
            <>
              <PageTitle title="Our Info" />
              <OurInfo />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <PageTitle title="Gallery" />
              <Gallery />
            </>
          }
        />
        <Route
          path="/forms/gallery-form"
          element={
            <>
              <PageTitle title="Gallery Form" />
              <GalleryForm />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <PageTitle title="Blogs" />
              <Blog />
            </>
          }
        />
        <Route
          path="/forms/blog-form"
          element={
            <>
              <PageTitle title="Blog Form" />
              <BlogForm />
            </>
          }
        />
        <Route
          path="/message-from-md"
          element={
            <>
              <PageTitle title="Message From Md" />
              <Message />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <PageTitle title="FAQ" />
              <Faq />
            </>
          }
        />
        <Route
          path="/tour"
          element={
            <>
              <PageTitle title="Tour" />
              <TourTable></TourTable>
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              <PageTitle title="Users" />
              <User />
            </>
          }
        />
        <Route
          path="/forms/user-form"
          element={
            <>
              <PageTitle title="User Form" />
              <UserForm />
            </>
          }
        />
        <Route
          path="/links"
          element={
            <>
              <PageTitle title="Social Links" />
              <SocialLinks />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
