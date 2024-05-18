/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

// Create styling for the input form
const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        margin: 'auto',
        marginTop: '20px',
        backgroundColor: '#ffcc99',
    },

    title: {
        flexGrow: 1,
        textAlign: 'center',
        marginTop: '15px',
        marginBottom: '15px'

    },

    formTitle: {
        marginBottom: '15px',
        textAlign: 'center',
        backgroundColor: '#e67300',
        borderRadius: '3px',
        padding: '10px',
    },

    customizeAppBar: {
        backgroundColor: '#fff2e6',
        color: '#11153e',
    },
    
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit, campusId, error } = props;
  const classes = useStyles();
  useEffect(() => {
    if (campusId && campusId !== null) {
      handleChange({
        target: {
          name: 'campusId',
          value: campusId.campus_id,
        },
      });
    }
  }, [campusId, handleChange]);

    // Render a New Student view with an input form
  return (
    <div>
      <h1>NEW STUDENT</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontSize: '20px', fontWeight: 'bold'}}>
              ADD STUDENT
            </Typography>
          </div>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style={{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input type="text" name="email" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>imageURL: </label>
            <input type="text" name="imageURL" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="text" name="gpa" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus ID: </label>
            <input type="text" defaultValue={campusId && campusId.campus_id !== null ? campusId.campus_id : ''} name='campusId' onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default NewStudentView;
