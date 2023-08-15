import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}