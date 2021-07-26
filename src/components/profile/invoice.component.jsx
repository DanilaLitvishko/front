import React from 'react'
import {ReactComponent as Vector} from '../../assets/vector.svg'
import { 
    InvoicesLine
} from './profile.styles'

const Invoice = ({date}) => {
    return (
        <div>
            <InvoicesLine/>
            <div>
                Subscription
            </div>
            <div>
                £12
            </div>
            <div>
                {date}
            </div>
            <div>
                <Vector/>
            </div>
        </div>
    )
}

export default Invoice
