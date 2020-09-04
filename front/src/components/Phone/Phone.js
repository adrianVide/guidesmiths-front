import React from 'react';
import { useSelector } from 'react-redux';

export const Phone = () => {
    const phone = useSelector(state => state.phones)

    console.log(phone)
    // let phone = {};
    // console.log(this.props);
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.phone_id;
    return { phone: state.phones.find(phone => phone.id === id) }
}

