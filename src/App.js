import { useEffect, useState } from "react";
import HomePage from "./components/home/Home";
import { initAuthListener } from "./firebase";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = initAuthListener(() => {
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
}

export default App;
