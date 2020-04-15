import React from "react";
import Header from "./template/DefaultHeader";
import Menu from "./template/DefaultMenu";

export default () => {
  return (
      <div className="Main-page">
        <Header />
        <Menu />
        <div className="App-header">
          Pagina de Figuras en construccion
        </div>
      </div>
  );
}
