import "./App.scss";
import "./assets/_reset.scss";
import Ticket from "./components/Ticket/Ticket";
import Search from "./components/Search/Search";
import teamArray from "./data/team";

function App() {
  const teamTicketsJsx = teamArray.map((element) => {
    return (
      <Ticket
        key={element.id}
        id={element.id}
        name={element.name}
        role={element.role}
      />
    );
  });

  return (
    <div className="wholeApp">
      <header>
        <h1 className="mainHeading">Ticket Tracker</h1>
      </header>
      <div>
        <Search />
      </div>
      <div className="ticketGrid">{teamTicketsJsx}</div>
    </div>
  );
}

export default App;
