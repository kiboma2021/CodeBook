import { Header,Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="flex flex-col dark:bg-gray-800 ">
      <Header />
      <AllRoutes />


      <Footer />

    </div>
  );
}

export default App;
