/*==================================================
src/components/containers/EditCampusContainer.js
==================================================*/


import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import EditCampusView from '../views/EditCampusView';
import { Redirect } from 'react-router-dom';
import { editCampusThunk, fetchCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
    componentDidMount() {
        this.props.fetchCampus(this.props.match.params.id);
    }

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }
    // Capture input data when it is entered
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Take action after user click the submit button
    handleSubmit = async event => {
        event.preventDefault();  // Prevent browser reload/refresh after submit.
        let { campus } = this.props;

        campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            id: campus.id
        };

        await this.props.editCampus(campus);

        this.setState({
            redirect: true
        });

    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/campuses`} />)
        }

        return (
            <div>
                <Header />
                <EditCampusView handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

// The following 2 input arguments are passed to the "connect" function used by "StudentContainer" to connect to Redux Store.  
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => {
    return {
        campus: state.campus,  // Get the State object from Reducer "campus"
    };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    };
};

export default connect(mapState, mapDispatch)(EditCampusContainer) 