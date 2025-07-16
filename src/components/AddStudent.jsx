import axios from 'axios'
import React, { useState } from 'react'

const AddStudent = () => {
    const[input,changInput]=useState(
    {
"name": "",
"roll_number": "",
"admission_number": "",
"college": ""
})

  const inputhandler=(event)=>{
    changInput({...input,[event.target.name]:event.target.value})

  }
  
  const readvalues=()=>{
    console.log(input)
    
    axios.post("http://18.144.111.41/student_api.php",input).then((response)=>
    {alert("Successfully inserted")}).catch()
  }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br/>
                            <label htmlFor="" className="form-label">Name : </label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br/>
                            <label htmlFor="" className="form-label">Roll no : </label>
                            <input type="text" className="form-control" name='roll_number' value={input.roll_number} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br/>
                            <label htmlFor="" className="form-label">Admission number : </label>
                            <input type="text" className="form-control" name='admission_number' value={input.admission_number} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br/>
                            <label htmlFor="" className="form-label">college : </label>
                            <input type="text" className="form-control" name='college'value={input.college} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalues}>SUBMIT</button>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent