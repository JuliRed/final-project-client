/*==================================================
components/views/EditCampusesView.js
==================================================*/

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
    formContainer:{  
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


const EditCampusView = (props) => {
    const { handleChange, handleSubmit } = props;
    const classes = useStyles();

    return (
        <div>
            <h1>Edit Campus</h1>
            <div className={classes.root}>
                <div className={classes.formContainer}>
                    <div className={classes.formTitle}>
                        <Typography style={{ fontWeight: 'normal', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#FFFFFF' }}>
                            Enter New Info
                        </Typography>
                    </div>
                    <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                    <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
                        <input type="text" name="imageURL" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
                        <input type="text" name="name" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
                        <input type="text" name="address" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
                        <input type="text" name="description" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <br />
                        <br />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCampusView;