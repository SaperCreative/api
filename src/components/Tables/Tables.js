import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllTables } from '../../redux/tablesRedux'
import { Link } from 'react-router-dom'

const Tables = () => {

  const tables = useSelector(state => getAllTables(state))

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>All tables</h1>
      </div>
      {
        tables.map(table => (
          <div key={table.id} className="d-flex border-bottom align-items-center p-3">
            <h3 className="m-0">Table {table.id}</h3>
            <p className="ps-4 m-0"><span className="fw-bold">Status: </span>{table.status}</p>
            <Link className="ms-auto p-2" to={`api/table/${table.id}`}>
              <Button variant="primary" >Show more</Button>
            </Link>
          </div>
        ))
      }
    </>
  );
}

export default Tables;