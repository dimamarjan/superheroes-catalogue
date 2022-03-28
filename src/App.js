import { Route, Routes, Navigate } from "react-router-dom";
import {
  Header,
  AddForm,
  SuperheroCard,
  Information,
  Pagination,
  EditForm,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to={"/1"} />} />
        <Route
          exact
          path="/:page"
          element={
            <>
              <SuperheroCard />
              <Pagination />
            </>
          }
        />
        <Route exact path="/add" element={<AddForm />} />
        <Route exact path="/info/:id" element={<Information />} />
        <Route exact path="/edit/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
