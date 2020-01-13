import React, { useState } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

const Form = props => {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(smurf);
        setSmurf({
            name: '',
            age: '',
            height: ''
        });
    };

    return (
        <div>
            <form>
                <input className='field' type='text' name='name' value={smurf.name} placeholder='Enter name' onChange={handleChange} />
                <input className='field' type='text'name='age' value={smurf.age} placeholder='Enter age' onChange={handleChange} />
                <input className='field' type='text'name='height' value={smurf.height} placeholder='Enter height' onChange={handleChange} />
                <button type='submit' onClick={handleSubmit}>Add Smurf</button>
            </form>
        </div>
    );
};

export default connect(
    null,
    { addSmurf }
)(Form);