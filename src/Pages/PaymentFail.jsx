import React from 'react';
import pic from '../assets/fail.png'

const PaymentFail = () => {
    // const {tranId} = useParams();
    return (
        <div>
           <h2>Payment Fail </h2>
           <div className="d-flex justify-contect-center mt-3 mb-3">
            <img
              src={pic}
              alt="fail"
            />
          </div>
           {/* <h3>{tranId}</h3> */}
        </div>
    );
};

export default PaymentFail;