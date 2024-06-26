/*================================================== DONE
NewCampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';

class NewCampusContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      imageURL: "",
      name: "", 
      address: "", 
      description: "", 
      redirect: false, 
      redirectId: null,
      error: ""
    };
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Validate form inputs
  validateInputs = () => {
    const { imageURL, name, address, description } = this.state;
    if (!imageURL || !name || !address || !description) {
      return false;
    }
    return true;
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    // Validate form inputs
    if (!this.validateInputs()) {
      this.setState({ error: "Please fill out all fields." });
      return;
    }

    // Correctly construct the campus object with the name property
    let campus = {
      imageURL: this.state.imageURL,
      name: this.state.name, 
      address: this.state.address,
      description: this.state.description
    };

    // Add new campus in back-end database
    try {
      let newCampus = await this.props.addCampus(campus);

      // Update state, and trigger redirect to show the new campus
    //try {
      this.setState({
        imageURL: "",
        name: "", //
        address: "", 
        description: "", 
        redirect: true, 
        redirectId: newCampus.id,
        error: ""
      });
    } catch(error) {
      console.log(error);
      alert("Failed to add the new campus. Please try again.");
    }
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
    this.setState({redirect: false, redirectId: null, error: ""});
  }

  // Render new campus input form
  render() {
    // Redirect to new campus' page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <NewCampusView
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          error={this.state.error}      
        />
      </div>          
    );
  }
}

// The following input argument is passed to the "connect" function used by "NewCampusContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return({
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(NewCampusContainer);