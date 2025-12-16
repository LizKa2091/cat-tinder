import type { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FeedPage } from "@pages/FeedPage/ui";
import { DialoguePage } from "@pages/DialoguePage/ui";

import '@shared/styles/global.scss';

const App: FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<FeedPage />} />
            <Route path='/dialogue' element={<DialoguePage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App;