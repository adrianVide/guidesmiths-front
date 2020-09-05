import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import phoneSelected from '../../actions/actions'

export const PhoneList = () => {
    const phones = useSelector(state => state.phones)
    const dispatch = useDispatch()

    function singlePhone(id) {
        const phone = phones.find((phone) => phone.id === id);
        dispatch(phoneSelected(phone))        
    }


    return (
        <div>
            {phones.map(phone => {
                return (
                    <div key={phone.id}>
                       <button onClick={() => singlePhone(phone.id)} className='btn btn-primary btn-lg'><h2>{phone.name}</h2></button>
                    </div>
                )
            })}
        </div>
    )
}





