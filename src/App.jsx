import React from "react";
// Presentational (Stateless) Components
import Layout from "./components/hoc/Layout/Layout";
// Containers (Statefull Components)
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
// Style

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
