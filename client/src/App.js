import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./user/pages/Home";
import Admin from "./admin/pages/Admin";
import Login from "./admin/pages/Login";
import Popup from "./components/Popup";
import QuizQuestions from "./admin/pages/QuizQuestions";
import Payment from "./admin/pages/Payment";
import CreateAdmin from "./admin/components/CreateAdmin";
import EditAdmin from "./admin/components/EditAdmin";
import CreateQuiz from "./admin/components/CreateQuiz";
import Quiz from "./admin/pages/Quiz";
import CreateQuizQuestions from "./admin/components/CreateQuizQuestions";
import EditQuizQuestions from "./admin/components/EditQuizQuestions";
import EditQuiz from "./admin/components/EditQuiz";
import FinalAllQuiz from "./admin/pages/FinalAllQuiz";
import FinalQuiz from "./admin/pages/FinalQuiz";

// Define the initial state
export const initialState = {
  admin: JSON.parse(localStorage.getItem("admin")),
  paymentInfo: {},
  error: null,
};

// Define the payment reducer
export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, admin: action.payload };
    case "LOGOUT":
      return { ...state, admin: null };
    case "STORE_PAYMENT_INFO":
      return { ...state, paymentInfo: action.payload };
    case "PAYMENT_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const Routing = () => {
  const admin = useSelector((state) => state.admin);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/admin"
        element={admin ? <Admin /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/createadmin"
        element={admin ? <CreateAdmin /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/editadmin/:id"
        element={admin ? <EditAdmin /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/payment"
        element={admin ? <Payment /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/quiz"
        element={admin ? <Quiz /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/createquiz"
        element={admin ? <CreateQuiz /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/editquiz/:id"
        element={admin ? <EditQuiz /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/quizquestions"
        element={admin ? <QuizQuestions /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/createquizquestions"
        element={admin ? <CreateQuizQuestions /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/editquizquestion/:id"
        element={admin ? <EditQuizQuestions /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/finalallquiz"
        element={admin ? <FinalAllQuiz /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/finalquiz/:id"
        element={admin ? <FinalQuiz /> : <Navigate to="/login" />}
      />

      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <Popup />
      <Routing />
    </Router>
  );
}

export default App;
