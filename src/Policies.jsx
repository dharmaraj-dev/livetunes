import React from 'react';
import { useParams } from 'react-router';

const Policies = () => {
    const params = useParams()
    const policyType = params.id[0].toUpperCase() + params.id.slice(1)



    return (
        <iframe className='policiesFrame' src={`/policies/${policyType}.pdf`}></iframe>

    )
}
export default Policies
