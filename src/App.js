import React from "react";
import UserListContainer from "./User/UserList/UserListContainer";
import NewUserButtonContainer from "./User/NewUserButton/NewUserButtonContainer";

function App() {
  return (
    <main className="App">
      <section className="section">
        <div className="container">
          <h1 className="title">User Book</h1>
          <NewUserButtonContainer />
          <UserListContainer />
        </div>
      </section>
    </main>
  );
}

export default App;
