import { useState } from 'react';

function StadiumTable({ listField }) {
  const [selectedFields, setSelectedFields] = useState([]); // Danh sách sân đã tick

  const handleCheckboxChange = (fieldId) => {
    setSelectedFields((prevSelected) =>
      prevSelected.includes(fieldId)
        ? prevSelected.filter((id) => id !== fieldId)
        : [...prevSelected, fieldId]
    );
  };

  const handleCheckAll = (e) => {
    const isChecked = e.target.checked;
    const allIds = listField.map((field) => field.idField);
    setSelectedFields(isChecked ? allIds : []);
  };

  return (
    <div className="mb-2">
      <div className="card">
        <div className="card-body pt-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={handleCheckAll}
                      checked={
                        listField.length > 0 &&
                        listField.every((field) =>
                          selectedFields.includes(field.idField)
                        )
                      }
                    />
                  </th>
                  <th>Name Stadium</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {listField.map((field, index) => (
                  <tr key={field.idField}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedFields.includes(field.idField)}
                        onChange={() => handleCheckboxChange(field.idField)}
                      />
                    </td>
                    <td>{field.name}</td>
                    <td>7</td>
                    <td>{field.status === 'ACTIVE' ? 'Online' : 'Offline'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StadiumTable;
