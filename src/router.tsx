import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/home/HomeView";
import HomeOcasionalesView from "./views/ocasionales/HomeOcasionalesView";
import NominaCompletedView from "./views/nominaCompleted/NominaCompletedView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/ocasionales" element={<HomeOcasionalesView />} />
          <Route path="/completed" element={<NominaCompletedView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
