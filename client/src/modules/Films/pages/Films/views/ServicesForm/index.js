import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { styles } from './styles';
import MenuItem from '@material-ui/core/MenuItem';

import RenderSelectField from '../../../../../../views/RenderSelectField';
import RenderTextField from '../../../../../../views/RenderTextField';

const ServicesForm = ({ classes, onSubmit }) => {
    return (
        <form onSubmit={(event) => { event.preventDefault(); }}>
            <Grid className={classes.container}
                container
                alignItems="center"
                justify="space-around">
                <Field
                    className={classes.textField}
                    name="search"
                    component={RenderTextField}
                    label="Search"
                    margin="dense"
                    type="search"
                    onChange={onSubmit}
                />
                <Field
                    className={classes.selectField}
                    onChange={onSubmit}
                    name="select"
                    component={RenderSelectField}
                    label="Order By"
                    margin="dense"
                    type="select">
                    <MenuItem value='none'>
                        None
                    </MenuItem>
                    <MenuItem value='title'>Title</MenuItem>
                    <MenuItem value='rating'>Rating</MenuItem>
                </Field>

            </Grid>
        </form>

    );
};

ServicesForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default reduxForm()(withStyles(styles)(ServicesForm));