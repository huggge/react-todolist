import React from 'react';

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
