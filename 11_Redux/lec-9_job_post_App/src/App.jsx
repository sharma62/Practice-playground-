// App.jsx
import React from "react";
import Home from "./pages/Home";
import { JobContextProvider } from "./context/JobContext";
import { MultiStepFormContextProvider } from "./context/multiStepFormContext";
import { ProfileContextProvider } from "./context/ProfileContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobDetails from "./pages/JobDetails";
import Apply from "../src/pages/apply";
import FormSummary from "../src/pages/formSummary";
import ThankYou from "../src/pages/ThankYou";
import Profile from "../src/pages/Profile";
import Edit from "./pages/Edit";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <ProfileContextProvider>
        <Provider store={store}>
          <JobContextProvider>
            <MultiStepFormContextProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/jobs/:id" element={<JobDetails />} />
                  <Route path="/Apply/:id" element={<Apply />} />
                  <Route path="/formSummary/:id" element={<FormSummary />} />
                  <Route path="/thankyou/:id" element={<ThankYou />} />
                  <Route path="/profile/:id" element={<Profile />} />
                  <Route path="/edit/:id" element={<Edit />} />
                </Routes>
              </Router>
            </MultiStepFormContextProvider>
          </JobContextProvider>
        </Provider>
      </ProfileContextProvider>
    </div>
  );
}

export default App;
