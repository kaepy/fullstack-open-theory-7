// Jokaisella näkymällä tulisi olla oma osoitteensa, jotta käyttäjä voi navigoida sovelluksessa.
// React Routerin avulla voidaan määritellä reitit ja linkit sovellukselle.
// npm install react-router-dom
// Reititys eli komponenttien ehdollinen, selaimen URL:iin perustuva renderöinti otetaan käyttöön sijoittamalla komponentteja Router-komponentin lapsiksi eli Router-tagien sisälle.
// BrowserRouter is a Router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Reitityskomponentit

const Home = () => (
  <div>
    {" "}
    <h2>TKTL notes app</h2>{" "}
  </div>
);

const Notes = () => (
  <div>
    {" "}
    <h2>Notes</h2>{" "}
  </div>
);

const Users = () => (
  <div>
    {" "}
    <h2>Users</h2>{" "}
  </div>
);

const App = () => {
  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
      </div>

      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Router>
  );
};

export default App;
