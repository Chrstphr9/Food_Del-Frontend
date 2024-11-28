import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const verify = () => {

    const [searchParams, setSearchParams ] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });

            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Payment verification failed:", error);
            navigate("/"); // Redirect to home or error page
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [success, orderId]);

  return (
    <div className='verify '>
        <div className="spinner">

        </div>
    </div>
  )
}

export default verify 