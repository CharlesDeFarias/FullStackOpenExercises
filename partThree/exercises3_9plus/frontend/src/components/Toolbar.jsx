const Toolbar = ({ handler, filter, newName, newNumber }) => {
    return (
      <div>
        <span>Filter shown with:</span>
        <input name="filter" value={filter} onChange={handler} />
  
        <form onSubmit={handler}>
          <div>
            Name: <input name="name" value={newName} onChange={handler} />
            Number: <input name="number" value={newNumber} onChange={handler} />
          </div>
          <div>
            <button type="submit" name="addPerson">Add</button>
          </div>
        </form>
      </div>
    );
  };

  export default Toolbar