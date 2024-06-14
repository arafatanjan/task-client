import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const {tranId} = useParams();
    return (
        <div>
           <h2>Payment Successful </h2>
           <h3>{tranId}</h3>
        </div>
    );
};

export default PaymentSuccess;