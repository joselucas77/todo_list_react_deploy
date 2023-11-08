import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Concluídas</option>
                    <option value="Incompleted">Pendentes</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética</p>
                <button onClick={() => setSort("Asc")}><FaSortAlphaDown /></button>
                <button onClick={() => setSort("Desc")}><FaSortAlphaDownAlt /></button>
            </div>
        </div>
    </div>
  );
};

export default Filter;