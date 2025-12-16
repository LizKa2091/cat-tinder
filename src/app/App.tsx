import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeedPage from "@pages/ui/FeedPage";

import '@shared/styles/global.scss';

const App: FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<FeedPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App;