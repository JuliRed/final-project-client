// /*==================================================
// /src/components/containers\AllCampusesContainer.js

// The Container component is responsible for stateful logic and data fetching, and
// passes data (if any) as props to the corresponding View component.
// If needed, it also defines the component's "connect" function.
// ================================================== */
import Header from './Header';
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk } from "../../store/thunks";
import { AllCampusesView } from "../views";

class AllCampusesContainer extends Component {
  // Get all campuses data from back-end database
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  // Render All Campuses view by passing all campuses data as props to the corresponding View component
  render() {
    const { allCampuses, deleteCampus } = this.props;
    
    // Sort campuses by ID in descending order
    const sortedCampuses = allCampuses.slice().sort((a, b) => b.id - a.id);

    return (
      <div>
        <Header />
        <AllCampusesView
          allCampuses={sortedCampuses}
          deleteCampus={deleteCampus}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
  };
};

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// Export store-connected container by default
export default connect(mapState, mapDispatch)(AllCampusesContainer);
