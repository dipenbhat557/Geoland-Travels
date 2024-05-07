import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';



import Hero from './pages/Dashboard/Hero';

import Profile from './pages/Profile';


import BusinessForm from './pages/Form/BusinessForm';
import CoustomerReviewForm from './pages/Form/CoustomerReviewForm';
import MessageMd from './pages/Form/MessageMd';
import FaqForm from './pages/Form/FaqForm';
import Business from './components/Tables/Business';
import CoustomerReview from './components/Tables/CustomerReview';
import Message from './components/Tables/Message';
import Faq from './components/Tables/Faq';
import SignIn from './pages/Auth/Signin';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from './store';
import TourForm from './pages/Form/Tourform';
import TourTable from './components/Tables/TourTable';

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
          path="/forms/business-form"
          element={
            <>
              <PageTitle title="Form Elements" />
              <BusinessForm />
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
          path="/forms/coutomer-review-form"
          element={
            <>
              <PageTitle title="Form Elements" />
              <CoustomerReviewForm />
            </>
          }
        />

        <Route
          path="/forms/message-from-md"
          element={
            <>
              <PageTitle title="Form Elements" />
              <MessageMd />
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
          path="/business"
          element={
            <>
              <PageTitle title="Business" />
              <Business />
            </>
          }
        />
        <Route
          path="/customer-review"
          element={
            <>
              <PageTitle title="Customer Review" />
              <CoustomerReview />
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
              <PageTitle title="FAQ" />
              <TourTable></TourTable>
            </>
          }
        />

      </Routes>
    </>
  );
}

export default App;
