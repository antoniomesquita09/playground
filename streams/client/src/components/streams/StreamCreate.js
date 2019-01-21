import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="alert alert-danger">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        //const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return(
            <div className="form-group">
                <label>{label}</label>
                <input {...input} autoComplete="off" className="form-control" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div>
                    <Field name="title" component={this.renderInput} label="Title" />
                    <Field name="description" component={this.renderInput} label="Description" />
                    <br/>
                    <button className="btn btn-primary">Submit</button>
                </div>
                
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, {createStream})(formWrapped);