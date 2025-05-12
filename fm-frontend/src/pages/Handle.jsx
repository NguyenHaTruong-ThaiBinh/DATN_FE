import React, { useState, useEffect } from 'react';
import { fetchData } from '../API/Api';

function Handle() {
  const [matchCancel, setMatchCancel] = useState([]);

  useEffect(() => {
    fetchData('matchcancel')
      .then((response) => {
        setMatchCancel(response.data.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <h4 className="card-title">Top Cancel</h4>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          <div className="table-responsive-sm">
            <table className="table mb-0 text-center">
              <thead className="table-primary">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {matchCancel.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'table-info' : 'table-warning'}
                  >
                    <th scope="row">{index + 1}</th>
                    <td>{item.nameUser}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Handle;
