// /*==================================================
// NewCampusView.js

// The Views component is responsible for rendering web page with data provided by the corresponding Container component.
// It constructs a React component to display the new campus page.
// ================================================== */
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// // Create styling for the input form
// const useStyles = makeStyles(() => ({
//   formContainer: {  
//     width: '500px',
//     backgroundColor: '#f0f0f5',
//     borderRadius: '5px',
//     margin: 'auto',
//   },
//   title: {
//     flexGrow: 1,
//     textAlign: 'left',
//     textDecoration: 'none'
//   }, 
//   customizeAppBar:{
//     backgroundColor: '#11153e',
//     shadows: ['none'],
//   },
//   formTitle:{
//     backgroundColor:'#4051b5',
//     marginBottom: '15px',
//     textAlign: 'center',
//     borderRadius: '5px 5px 0px 0px',
//     padding: '3px'
//   },
// }));

// const NewCampusView = (props) => {
//   const {handleChange, handleSubmit } = props;
//   const classes = useStyles();

//   // Render a New Campus view with an input form
//   return (
//     <div>
//       <h1>New Campus</h1>

//       <div className={classes.root}>
//         <div className={classes.formContainer}>
//           <div className={classes.formTitle}>
//             <Typography style={{fontWeight: 'normal', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#FFFFFF'}}>
//               Add a Campus
//             </Typography>
//           </div>
//           <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
//             <label style= {{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
//             <input type="text" name="imageURL" onChange ={(e) => handleChange(e)} />
//             <br/>
//             <br/>

//             <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
//             <input type="text" name="name" onChange ={(e) => handleChange(e)} />
//             <br/>
//             <br/>

//             <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Address: </label>
//             <input type="text" name="address" onChange={(e) => handleChange(e)} />
//             <br/>
//             <br/>

//             <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Description: </label>
//             <input type="text" name="description" onChange={(e) => handleChange(e)} />
//             <br/>
//             <br/>

//             <Button variant="contained" color="primary" type="submit">
//               Submit
//             </Button>
//             <br/>
//             <br/>
//           </form>
//           </div>
//       </div>
//     </div>    
//   )
// }

// export default NewCampusView;

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formContainer: {  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#4051b5',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const NewCampusView = (props) => {
  const { handleChange, handleSubmit, error } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>New Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'normal', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#FFFFFF'}}>
              Add a Campus
            </Typography>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
            <input type="text" name="imageURL" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
            <input type="text" name="name" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Address: </label>
            <input type="text" name="address" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Description: </label>
            <input type="text" name="description" onChange={(e) => handleChange(e)} />
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

export default NewCampusView;
