/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent, campusId} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`} style={{ position: 'absolute', top: '100px', right: '40px' }}>
        <button>Add New Student</button>
      </Link>
    </div>
    );
  }

  // Style for delete button
 const deleteButtonStyle = {
  backgroundColor: '#f44336', // Light shade of red
  color: '#ffffff',           // White text
  border: 'none',
  padding: '3px 7px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
};
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
      
              <img src={student.imageURL} alt={name} style={{ width: '50%', height: 'auto' }}></img>
              <h4>student id: {student.id}</h4>
              <p>Email: {student.email}</p>
              {student.campus ? (
                <p>Campus: {student.campus.name}</p>
              ) : (
                <p>Campus: Currently not enrolled</p>
              )}


              <button style={ deleteButtonStyle } onClick={() => deleteStudent(student.id)}>Delete Student</button>
              
              <Link to={`/editstudent/${student.id}`}>
                <button>Edit Student</button>
              </Link>
              {/* If campusId is passed as a prop, display the campus name */}
              {campusId && campusId !== null && (
                <Link to={{
                  pathname: `/editstudent/${student.id}`,
                  query: {campusId}
                }}>
                  <button>Enroll Student</button>
                </Link>
              )}
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newstudent`} style={{ position: 'absolute', top: '100px', right: '40px' }}>
        <button>Add New Student</button>
      </Link>
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;