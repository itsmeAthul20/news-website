import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Updates from "./Updates";

function App() {
  const [category, setCategory] = useState('general'); 

  const changeCategory = (newCategory) => {
    setCategory(newCategory); 
  };

  return (
    <>
      <h1 className="text-center">
        Hot <span className="badge bg-danger">News</span>
      </h1>
      {}
      <Navbar changeCategory={changeCategory} />
      {}
      <Updates category={category} />
    </>
  );
}

export default App;
