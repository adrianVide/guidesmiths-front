import React from 'react';
import { connect } from 'react-redux';

export const Phone = () => {
    console.log(this.props);
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return { phone: state.phone }
}

export default connect(mapStateToProps)(Phone);