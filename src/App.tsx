import WarGameSession from "./components/WarGameSession";
import PreloadCards from "./components/PreloadCards";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-emerald-900 to-gray-700 text-center pt-6 px-4 text-gray-100">
      <WarGameSession />
      <PreloadCards />
    </div>
  );
}

export default App;
