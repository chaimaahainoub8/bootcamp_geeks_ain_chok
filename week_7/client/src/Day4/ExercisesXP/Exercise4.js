import React from 'react';

const Exercise4 = () => {
  const sendData = async () => {
    // IMPORTANT: Replace this URL with your own from webhook.site
    const url = "https://webhook.site/REPLACE-WITH-YOUR-ID"; 
    const bodyData = { key1: 'myusername', email: 'mymail@gmail.com', name: 'Isaac', lastname: 'Doe', age: 27 };

    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData)
      });
      console.log("Response:", response);
      alert("Data sent! Check console and Webhook site.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border p-3 mb-3">
      <h5>Ex 4: Webhook</h5>
      <button onClick={sendData} className="btn btn-primary btn-sm">Post Data</button>
    </div>
  );
};
export default Exercise4;