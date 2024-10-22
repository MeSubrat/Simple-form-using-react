import React, { useState } from "react";
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Contact: "",
    Gender: "",
    MaritalStatus:""
  });
  const {
    register, handleSubmit, watch, formState: { errors }
  } = useForm();
  const onSubmit = data => console.log(data);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <h2 style={{ textAlign: "center", color: 'green' }}>Form in React</h2>
          <div className="input-sec-1">
            <label>
              First Name* <br />
              <input
                {...register("FirstName", {
                  required: {value:true,message:"First Name is required."},
                  pattern: { value: /^[A-Za-z]+$/i, message: "Only letters are allowed" },
                  minLength: { value: 3, message: 'Minimum length is 3' },
                  maxLength: { value: 20, message: "Max length is 20" }
                })
                } type="text" value={formData.FirstName} name="FirstName" onChange={handleChange} 
               />
              {errors.FirstName && <span className="error-message">{errors.FirstName.message}</span>}
            </label>
            <br />
            <label>
              Last Name* <br />
              <input
                {...register("LastName", {
                  required: {value:true,message:"Last Name is required."},
                  pattern: { value: /^[A-Za-z]+$/i, message: "Only letters are allowed" },
                  minLength: { value: 3, message: 'Minimum length is 3' },
                  maxLength: { value: 20, message: "Max length is 20" }
                })
                } type="text" value={formData.LastName} name="LastName" onChange={handleChange} 
                />
              {errors.LastName && <span className="error-message">{errors.LastName.message}</span>}
            </label>
            <br />
            <label>
              Enter Email* <br />
              <input type="text"
                {...register("Email", {
                  required: {value:true,message:"Email is required."},
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format"
                  }
                })} name="Email" onChange={handleChange} value={formData.Email}
                
              />
              {errors.Email && <span className="error-message">{errors.Email.message}</span>}
            </label>
            <br />
            <label>
              Contact* <br />
              <input type="text"
              {...register('Contact',
                  {
                    required: {value:true,message:"Contact is required."},
                    minLength:{value:7,message:"Minimum length is 7"},
                    maxLength:{value:15,message:"Max Length is 15"},
                    pattern:{
                      value: /^\+?[0-9]{10,15}$/,
                      message:"Invalid contact details format"
                    }
                  }
                )
              } name="Contact"  onChange={handleChange} value={formData.Contact}
            
              />
              {errors.Contact && <span className="error-message">{errors.Contact.message}</span>}
            </label>
            <br />
            <label>
              Marital Status
              <br />
              <select {...register("maritalStatus",{required:{value:true,message:"Marital Status is required"}})}>
                <option value="">Select marital Status</option>
                <option value='Married'>Married</option>
                <option value='Single'>Single</option>
                <option value='Divorced'>Divorced</option>
              </select>
              {errors.maritalStatus && <span className="error-message">{errors.maritalStatus.message}</span>}
            </label>    
            <br></br>
            <div><label >Gender
              <label ><input {...register("Gender",{required:{value:true,message:"Gender must be required"}})} type="radio" value='male' />Male</label>
              <label ><input  {...register('Gender')} type="radio" value='female' />Female</label>
              <label ><input  {...register('Gender')} type="radio" value='other' />Other</label>
              {errors.Gender && <div className="error-message">{errors.Gender.message}</div>}
            </label></div>
          </div>
          <div className="btns">
            <button>Submit</button>
            <button onClick={() => setFormData({ FirstName: "", LastName: "", Email: "", Contact: "", Gender: "", MaritalStatus:""})} >Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
