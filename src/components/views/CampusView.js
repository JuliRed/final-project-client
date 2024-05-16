/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, handleDelete, deleteStudent} = props;
  const campus_id = campus.id;

  ////////log testing img
    // Log the imageURL to the console
    console.log("Image URL:", campus.imageURL);
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <img src = {campus.imageURL} style={{width: '50%', height: 'auto', objectFit: 'scale-down'}} alt={campus.name}></img>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {campus.students.length > 0 ?
    (
      campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
            </Link>
            <button onClick={() => deleteStudent(student)}>Remove Student</button>             
          </div>
        );
      })
    ):
    (<h3>No students currently enrolled at this campus.</h3>)
    }
    <br></br>
    <Link to={{
      pathname: `/newstudent`,
      query: {campus_id}
    }}>
      <button> Enroll New Student</button>
    </Link>
    <Link to={{
      pathname: `/students`,
      query: {campus_id}
    }}>
      <button>Enroll Registered Student</button>
    </Link>
    <button onClick={handleDelete}>Delete Campus</button>
    </div>
  );
};

export default CampusView;