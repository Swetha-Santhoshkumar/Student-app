import React from 'react'

const DeleteStudent = () => {
  return (
    <div>
        <div className="container">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br/>

                            <label htmlFor="" className="form-label">ROLL NUMBER : </label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-danger">DELETE </button>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default DeleteStudent