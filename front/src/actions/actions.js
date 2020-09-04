export const PHONE_SELECTED = 'PHONE_SELECTED'

export default function phoneSelected(phone) {
    return {
        type: PHONE_SELECTED,
        phone: phone
    }
}
