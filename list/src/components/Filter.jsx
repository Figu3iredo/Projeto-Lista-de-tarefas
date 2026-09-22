
const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
            <p>Status:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Todas</option>
              <option value="completed">Concluídas</option>
              <option value="pending">Pendentes</option>
            </select>
        </div>
        <div>
            <p>Ordem alfabética:</p>
            <button onClick={() => setSort("A-Z")}>A-Z</button>
            <button onClick={() => setSort("Z-A")} >Z-A</button>
        </div>
       </div>   
    </div>
  )
}

export default Filter