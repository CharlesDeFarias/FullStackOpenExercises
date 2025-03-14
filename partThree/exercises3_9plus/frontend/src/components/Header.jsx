import Toolbar from "./Toolbar"

const Header = ({ handler, filter, newName, newNumber }) => {

    return (
      <div>
        <h2>Phonebook</h2>
        <Toolbar handler={handler} filter={filter} newName={newName} newNumber={newNumber} />
      </div>
    );
  };

  export default Header