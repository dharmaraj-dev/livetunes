import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

const PaymentCallback = () => {
    const search = useLocation().search;
    console.log('search', search)
    const code = new URLSearchParams(search).get("code");
    console.log(code);
    const id = new URLSearchParams(search).get("id");
    console.log(id);

    return (
        <p>Payment Callback...</p>
    );
};

export default PaymentCallback;