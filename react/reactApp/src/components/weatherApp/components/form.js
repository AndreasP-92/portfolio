import React from "react";

class Form extends React.Component{
  render (){
    return(
        <div>
          <input className="form-control .bg--mid-gray" type="text" name="city" placeholder="city"/>
          <button className="btn btn-blue"><i className="glyphicon glyphicon-search"></i></button>
        </div>
    )
  }
};
export default Form;