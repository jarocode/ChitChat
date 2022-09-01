import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ChatRoom from "pages/chatroom";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<><h1>login</h1></>} />
      <Route
        path="/chatroom"
        element={<ChatRoom/>}
      />
    </Routes>
  </Router>
  )
}

export default App;