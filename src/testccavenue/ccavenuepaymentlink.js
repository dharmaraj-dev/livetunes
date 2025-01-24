import React from "react";
import "./ccavenuepaymentlink.css";

const CcavenuePaymentLink = () => {
  const merchantId = "3728091";
  const accessCode =
    "7127c4060f410649464bafffa05d648d74f17e7bd96ab5ee7eefdb785d7c5d4517c7bd649d8ad4e19bbf852429dbbea1cbf9ffe7689f5cd2debd9eb87c1ffa11d6b97ac2623a3c3e41b8d66f047fe46516da56acb477bd395c62a077a4a14df034bbc0c2aa55ec16dd4fffaaf7cc69e3b7ccad1ab99f74b3e16c76ceaee956ce41c98831ab01c7616f2a8a4ff3164400138013c6ebabf1e4f18baa1999553df34f9328983dc4bd207bc49cffbfc1ee4a39809e76a365f61265d49c19ab8ead19";
  const encryptedRequest = "14BD909B132FDA4A3CE3A4B57A00877E"; // Static or replace with encryption logic

  const paymentUrl = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction`;

  const handlePayment = () => {
    const form = document.createElement("form");
    form.method = "post";
    form.action = paymentUrl;

    const encRequestInput = document.createElement("input");
    encRequestInput.type = "hidden";
    encRequestInput.name = "encRequest";
    encRequestInput.value = encryptedRequest;

    const accessCodeInput = document.createElement("input");
    accessCodeInput.type = "hidden";
    accessCodeInput.name = "access_code";
    accessCodeInput.value = accessCode;

    form.appendChild(encRequestInput);
    form.appendChild(accessCodeInput);
    document.body.appendChild(form);

    form.submit();
  };

  return (
    <div className="redirect-container">
      <h1>Payment Link</h1>
      <button className="payment-button" onClick={handlePayment}>
        Generate Payment Link
      </button>
    </div>
  );
};

export default CcavenuePaymentLink;
