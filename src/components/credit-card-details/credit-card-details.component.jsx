import { useFormik } from 'formik'
import React from 'react'
import { EnterString, Window } from './credit-card-details.styles'

const CreditCardDetail = () => {
    const formik = useFormik({

    })
    return (
        <Window>
            <EnterString>Enter your credit card details</EnterString>
            
        </Window>
    )
}

export default CreditCardDetail
 