import axios from 'axios';
import React, { useState, useEffect } from 'react';

const View = () => {
  const [student, change] = useState({ data: [] });


  const fetchdath = () => {
    axios.get("http://18.144.111.41/view_all_students.php")
      .then((response) => {
        change(response.data);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  };

  useEffect(() => {
    fetchdath();
  }, []);

  return (
    <div>
      <table class="table table-striped" >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Roll-number</th>
            <th scope="col">Adm_no</th>
            <th scope="col">College</th>
          </tr>
        </thead>
        <tbody>
          {student.data.map((x, y) => (
            <tr key={y}>
              <th scope="row">{x.id}</th>
              <td>{x.name}</td>
              <td>{x.roll_number}</td>
              <td>{x.admission_number}</td>
              <td>{x.college}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
