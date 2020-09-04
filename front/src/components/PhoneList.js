import React from 'react'
import {connect} from 'react-redux';

export const PhoneList = () => {
    console.log(phoneList)
    return (
        <div>
            test
        </div>
    )
}


const mapStateToProps = (state) => {
    return { phoneList: state.phoneList }
}

export default connect(mapStateToProps)(PhoneList);