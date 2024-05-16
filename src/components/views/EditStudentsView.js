import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';

// Styling for input fields and buttons
const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
        marginTop: '50px'
    },

    title: {
        flexGrow: 1,
        textAlign: 'left',
        marginTop: '20px',
        marginBottom: '20px'

    },

    formTitle: {
        marginBottom: '20px',
        textAlign: 'center',
    

    },

    customizeAppBar: {
        backgroundColor: '#333333',
        color: 'white',
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
            <h1>Edit Student</h1>
            <div className={classes.root}>
                <div className={classes.formContainer}>
                    <div className={classes.formTitle}>
                        <Typography style={{fontSize: '24px', fontWeight: 'bold'}}>
                            Enter New Information
                        </Typography>
                    </div>
                    <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
                        <label>First Name:</label>
                        <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        <label>Last Name:</label>
                        <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
                        <br />
                        <br />

                        {/* <label>Email:</label>
                        <input type="text" name="email" onChange={(e) => handleChange(e)} />
                        <br /> */}

                        {/* <label>Image URL:</label>
                        <input type="text" name="imageURL" value={student.imageURL} onChange={handleChange} />
                        <br />
                        <label>GPA:</label>
                        <input type="text" name="gpa" value={student.gpa} onChange={handleChange} />
                        <br /> */}

                        <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus ID:</label>
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