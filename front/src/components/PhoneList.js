import React from 'react'
import { useSelector } from 'react-redux'

export const PhoneList = () => {
    const phones = useSelector(state => state.phones)

    function singlePhone() {
        console.log('yes')
    }


    return (
        <div>
            {phones.map(phone => {
                return (
                    <div key={phone.id}>
                       <button onClick={singlePhone}><h2>{phone.name}</h2></button>
                    </div>
                )
            })}
        </div>
    )
}





