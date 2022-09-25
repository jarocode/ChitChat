import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ChatRoom from "pages/chatroom";
import Auth from "pages/auth";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Auth/>} />
      <Route
        path="/chatroom"
        element={<ChatRoom/>}
      />
    </Routes>
  </Router>
  )
}

export default App;