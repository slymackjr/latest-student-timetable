import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { AddSession, ClassAdmin, Classes, CourseYear, CreateNotice, EditSession, GroupSession, IndexAdmin, LoginAdmin, NoticeAdmin, ProfileAdmin, RegisterAdmin, ShowNotices, YearGroup } from "./pages/admin";
import { IndexStudent, LoginStudent, ProfileStudent, RegisterStudent, WeekClasses } from "./pages/student";


const App = () => {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/add-session" element={<AddSession />} />
          <Route path="/classes-admin" element={<ClassAdmin />} />
          <Route path="/course-year" element={<CourseYear />} />
          <Route path="/create-notice" element={<CreateNotice />} />
          <Route path="/edit-session" element={<EditSession />} />
          <Route path="/group-session" element={<GroupSession />} />
          <Route path="/index-admin" element={<IndexAdmin />} />
          <Route path="/login-staff" element={<LoginAdmin />} />
          <Route path="/notice-admin" element={<NoticeAdmin />} />
          <Route path="/register-staff" element={<RegisterAdmin />} />
          <Route path="/show-notice" element={<ShowNotices />} />
          <Route path="/profile-admin" element={<ProfileAdmin />} />
          <Route path="/class-admin" element={<Classes />} />
          <Route path="/year-group" element={<YearGroup />} />
          <Route path="/index-student" element={<IndexStudent />} />
          <Route path="/login-student" element={<LoginStudent />} />
          <Route path="/profile-student" element={<ProfileStudent/>} />
          <Route path="/register-student" element={<RegisterStudent/>} />
          <Route path="/week-classes" element={<WeekClasses/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;