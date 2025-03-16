import { SkeletonTheme } from "react-loading-skeleton";
import AnimatedOutlet from "./components/animation/AnimatedOutlet";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <section className="w-[100dvw] h-[100dvh] text-white overflow-hidden relative">
      <SkeletonTheme
        baseColor="rgba(255, 255, 255, 0.2)"
        highlightColor="rgba(255, 255, 255, 0.1)"
      >
        <NavBar />
        <AnimatedOutlet />
      </SkeletonTheme>
    </section>
  );
}

export default App;
