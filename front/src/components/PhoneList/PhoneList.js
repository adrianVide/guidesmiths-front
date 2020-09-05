import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import phoneSelected from '../../actions/actions'

export const PhoneList = () => {
    const phones = useSelector(state => state.phones)
    const dispatch = useDispatch()

    function singlePhone(id) {
        console.log(id)
        const phone = phones.find((phone) => phone.id === id);
        console.log(phone)
        dispatch(phoneSelected(phone))        
    }


    return (
        <div>
            {phones.map(phone => {
                return (
                    <div key={phone.id}>
                       <button onClick={() => singlePhone(phone.id)}><h2>{phone.name}</h2></button>
                    </div>
                )
            })}
        </div>
    )
}





