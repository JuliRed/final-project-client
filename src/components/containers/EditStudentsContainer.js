import Header from "./Header";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { useEffect } from "react";
import { editStudentThunk, fetchStudentThunk } from "../../store/thunks";
import EditStudentsView from "../views/EditStudentsView";

class EditStudentsContainer extends Component {
    // Get student data from back-end database
    componentDidMount() {
        //getting student ID from url
        this.props.fetchStudent(this.props.match.params.id);
    }

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    // Capture input data when it is entered
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // Take action after user click the submit button
    handleSubmit = async (event) => {
        event.preventDefault(); // Prevent browser reload/refresh after submit.
        let { student } = this.props;
        
        student = {
            id: this.props.student.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            imageURL: this.state.imageURL,
            gpa: this.state.gpa,
            campusId: this.state.campusId,
        };

        // Edit student in back-end database
        await this.props.editStudent(student);

        // Update state, and trigger redirect to show the new student
        try {
            this.setState({
                redirect: true,
            });
        } catch (err) {
            console.error(err);
            alert("Failed to edit student. Please try again.");
        }
    };
    
    // Render Student view by passing student data as props to the corresponding View component
    render() {
        // const { student } = this.props;

        if (this.state.redirect) {
            // return <Redirect to={`/students/${student.id}`} />;
            return <Redirect to={`/students/`} />
        }

        return (
        <div>
            <Header />
            <EditStudentsView
            // student={this.props.student}
            // campusId={this.props.location.query}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            // editStudent={this.props.editStudent}
            />
        </div>
        );
    }
}

// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.
const mapState = (state) => {
    return {
        student: state.student, // Get the State object from Reducer "student"
    };
};

// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
    };
};

// Export store-connected container by default
export default connect(mapState, mapDispatch)(EditStudentsContainer)