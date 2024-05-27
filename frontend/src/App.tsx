import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* The Outlet component is a placeholder for the child route components of the current route(App) */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};
