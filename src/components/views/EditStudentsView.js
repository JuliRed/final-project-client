import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

// Styling for input fields and buttons
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
        textAlign: 'left',
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

const EditStudentsView = (props) => {
    const classes = useStyles();
    const {campusId, handleChange, handleSubmit} = props;

    useEffect(() => {
        if (campusId && campusId !== null) {
            handleChange({
                target: {
                    name: 'campusId',
                    value: campusId.campusId.campus_id,
                },
            });
        }
    }, [campusId, handleChange]);
    
    return (
        <div>
            <h1>EDIT STUDENT</h1>
            <div className={classes.root}>
                <div className={classes.formContainer}>
                    <div className={classes.formTitle}>
                        <Typography style={{fontSize: '20px', fontWeight: 'bold'}}>
                            ENTER NEW INFORMATION
                        </Typography>
                    </div>
                    <form style={{ textAlign:'center' }} onSubmit={(e) => handleSubmit(e)}>
                        <label style={{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
                        <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
                        <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
                        <input type="text" name="email" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label style={{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
                        <input type="text" name="imageURL" onChange={handleChange} />
                        <br />
                        <br />

                        <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
                        <input type="text" name="gpa" onChange={handleChange} />
                        <br />
                        <br />

                        <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus ID: </label>
                        <input type="text" defaultValue={campusId && campusId.campusId.campus_id !== null ? campusId.campusId.campus_id : ''} name='campusId' onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <Button type="submit" variant="contained" color="primary">
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

export default EditStudentsView;