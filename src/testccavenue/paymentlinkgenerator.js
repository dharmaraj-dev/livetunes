import React, { useState } from 'react';

const PaymentLinkGenerator = () => {
  const [token, setToken] = useState('');
  const [paymentLink, setPaymentLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // CCAvenue credentials
  const merchant_id = '3728091';
  const access_code = 'ATTL36LK05CG86LTGC';
  const encRequest = '7127c4060f410649464bafffa05d648d74f17e7bd96ab5ee7eefdb785d7c5d4517c7bd649d8ad4e19bbf852429dbbea1cbf9ffe7689f5cd2debd9eb87c1ffa11d6b97ac2623a3c3e41b8d66f047fe46516da56acb477bd395c62a077a4a14df034bbc0c2aa55ec16dd4fffaaf7cc69e3b7ccad1ab99f74b3e16c76ceaee956ce41c98831ab01c7616f2a8a4ff3164400138013c6ebabf1e4f18baa1999553df34f9328983dc4bd207bc49cffbfc1ee4a39809e76a365f61265d49c19ab8ead19';

  const handleGenerateLink = () => {
    setLoading(true);
    setError('');

    try {
      const redirect_url = 'http://your_redirect_url';
      const cancel_url = 'http://your_cancel_url';

      // Construct the payment URL
      const paymentLink = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&encRequest=${encRequest}&access_code=${access_code}`;

      setPaymentLink(paymentLink);
    } catch (err) {
      setError('Failed to generate payment link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Generate CCAvenue Payment Link</h2>
      <div>
        <label htmlFor="token">Token: </label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter your token"
        />
      </div>

      <div>
        <button onClick={handleGenerateLink} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Payment Link'}
        </button>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {paymentLink && (
        <div>
          <h3>Payment Link:</h3>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            Click here to make the payment
          </a>
        </div>
      )}
    </div>
  );
};

export default PaymentLinkGenerator;




// import React, { useState } from 'react';
// import axios from 'axios';

// const PaymentLinkGenerator = () => {
//   const [token, setToken] = useState('');
//   const [paymentLink, setPaymentLink] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   // Function to handle form submission
//   const handleGenerateLink = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       // Send the token to the server to generate the payment link
//       const response = await axios.post('http://localhost:3000/generatePaymentLink', { token });
      
//       // Update the state with the payment link
//       setPaymentLink(response.data.paymentLink);
//     } catch (err) {
//       // Handle error
//       setError('Failed to generate payment link. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Generate CCAvenue Payment Link</h2>
//       <div>
//         <label htmlFor="token">Token: </label>
//         <input
//           type="text"
//           id="token"
//           value={token}
//           onChange={(e) => setToken(e.target.value)}
//           placeholder="Enter your token"
//         />
//       </div>

//       <div>
//         <button onClick={handleGenerateLink} disabled={loading}>
//           {loading ? 'Generating...' : 'Generate Payment Link'}
//         </button>
//       </div>

//       {error && <div style={{ color: 'red' }}>{error}</div>}
      
//       {paymentLink && (
//         <div>
//           <h3>Payment Link:</h3>
//           <a href={paymentLink} target="_blank" rel="noopener noreferrer">
//             Click here to make the payment
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentLinkGenerator;
