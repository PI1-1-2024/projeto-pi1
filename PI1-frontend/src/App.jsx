import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ListRuns } from "./pages/ListRuns";
import { NewRun } from "./pages/NewRun";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ListRuns />} />
            <Route path="new" element={<NewRun />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
