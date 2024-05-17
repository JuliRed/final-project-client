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
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            name: "",
            address: "",
            description: "",
            imageURL: "", // Add imageURL to component state
        };
    }

    componentDidMount() {
        const { fetchCampus, match } = this.props;
        fetchCampus(match.params.id).then(() => {
            // Set initial state with fetched campus data
            const { campus } = this.props;
            this.setState({
                name: campus.name,
                address: campus.address,
                description: campus.description,
                imageURL: campus.imageURL // Set initial imageURL from fetched data
            });
        });
    }

    // Capture input data when it is entered
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Take action after user clicks the submit button
    handleSubmit = async event => {
        event.preventDefault();
        const { campus } = this.props;
        const { name, address, description, imageURL } = this.state;

        // Create a new campus object with updated values including imageURL
        const updatedCampus = {
            id: campus.id,
            name,
            address,
            description,
            imageURL: imageURL || campus.imageURL // Use current imageURL if new one is not provided
        };

        await this.props.editCampus(updatedCampus);
        this.setState({ redirect: true });
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={`/campuses`} />)
        }

        return (
            <div>
                <Header />
                <EditCampusView 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    campus={this.props.campus} // Pass the current campus data to EditCampusView
                />
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        campus: state.campus,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);
