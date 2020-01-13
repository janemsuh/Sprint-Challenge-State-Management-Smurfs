import React, { useEffect } from 'react';
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';

const SmurfVillage = props => {
    useEffect(() => {
        props.fetchSmurfs();
        console.log(props.smurfs);
    }, []);

    return (
        <div className='smurfVillage'>
            {props.smurfs.map((smurf, index) => {
                return <SmurfCard smurf={smurf} key={index} />
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfVillage);