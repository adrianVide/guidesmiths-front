export const PHONE_SELECTED = 'PHONE_SELECTED'
export const PHONE_LIST = 'PHONE_LIST'

export const phoneSelected = (phone) => {
    return {
        type: PHONE_SELECTED,
        phone: phone
    }
}


export const phoneList = (phones) => {
    return {
        type: PHONE_LIST,
        phone: phones
    }
}