import React from 'react';
import { useParams } from 'react-router-dom';
import pic from '../assets/successful.png'

const PaymentSuccess = () => {
    const {tranId} = useParams();
    return (
        <div>
           <h2>Payment Successful </h2>
           <div className="d-flex justify-contect-center mt-3 mb-3">
            <img
              src={pic}
              alt="successful"
            />
          </div>
           <h3>{tranId}</h3>
        </div>
    );
};

export default PaymentSuccess;