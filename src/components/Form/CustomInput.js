import React from 'react';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
    render(){
        return(
            <input 
                type={this.props.type} 
                data-validate={this.props.validate} 
                className="input-text" 
                name={this.props.name} 
                placeholder={this.props.placeholder}
                value={this.props.username}
                onChange={this.props.handlerChange}
            />
        );
    }
}

Feedback.propTypes = {
    type: PropTypes.string,
    validate: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    handlerChange: PropTypes.func,
};

export default Feedback;