import React, { useState } from 'react';

const DailyChallenge = () => {
  const [formData, setFormData] = useState({ fname: '', lname: '', age: '', gender: '' });

  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  return (
    <div className="container mt-3">
      <h2>Day 3 Daily Challenge: Form</h2>
      <form className="card p-3 bg-warning">
        <input name="fname" onChange={handleChange} placeholder="First Name" className="mb-2"/>
        <input name="lname" onChange={handleChange} placeholder="Last Name" className="mb-2"/>
        <input name="age" onChange={handleChange} placeholder="Age" className="mb-2"/>
        
        <label><input type="radio" name="gender" value="male" onChange={handleChange}/> Male</label>
        <label><input type="radio" name="gender" value="female" onChange={handleChange}/> Female</label>

        <div className="mt-3 bg-white p-2">
            <p>Your name is {formData.fname} {formData.lname}</p>
            <p>Your age is {formData.age}</p>
            <p>Your gender is {formData.gender}</p>
        </div>
      </form>
    </div>
  );
}
export default DailyChallenge;