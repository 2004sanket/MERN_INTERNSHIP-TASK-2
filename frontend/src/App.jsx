import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './App.css';
import AddTask from './Add-Task/addTask'; 

function App() {
  return (
    /* We removed the inline style 'display: flex' and moved it to App.css 
       to allow for better media query control. */
    <div className="app-layout">
      <Sidebar />

      <main className="content-area">
        <Routes>
          {/* Default Route: Redirects users to the inbox immediately */}
          <Route path="/" element={<Navigate to="/inbox" replace />} />

          {/* Feature Routes */}
          <Route path="/search" element={<div className="placeholder-page"><h1>Search Results</h1></div>} />
          <Route path="/inbox" element={<AddTask />} />
          <Route path="/today" element={<div className="placeholder-page"><h1>Tasks for Today</h1></div>} />
          <Route path="/upcoming" element={<div className="placeholder-page"><h1>Upcoming Schedule</h1></div>} />
          <Route path="/completed" element={<div className="placeholder-page"><h1>Finished Tasks</h1></div>} />
          <Route path="/settings" element={<div className="placeholder-page"><h1>User Settings</h1></div>} />
          
          {/* Catch-all route: Redirects any broken links back to the inbox */}
          <Route path="*" element={<Navigate to="/inbox" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;