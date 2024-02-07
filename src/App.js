import { useState } from "react";
import { Header,Footer,SearchCard } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  const [toogleSearch, settoogleSearch] = useState(false);

  return (
    <div className="flex flex-col dark:bg-gray-800 ">
      <Header />

      <SearchCard toogleSearch={toogleSearch} settoogleSearch={settoogleSearch} />

      <AllRoutes />


      <Footer />

    </div>
  );
}

export default App;
