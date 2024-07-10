import { useState } from "react"

const Form  = () => {
    const [add,setadd] = useState([
        {name : "",phone : "",id : ""}
    ])
    const addrow = () => {
        let arow = {name : "",phone : "" ,id : Date.now()}
        setadd([...add,arow])
    }
    const removerow =(id) => {
        setadd(add.filter(val=> val.id != id))
    }
    return(
        <div align="center">
           <h1>Dynamic Form</h1>
           <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">EmailAddress</th>
      <th scope="col">Salary</th>
      <th scope="col">
      <button type="button" className="btn btn-success" onClick={()=> addrow()}>Add</button>
      </th>
    </tr>
  </thead>
  <tbody>
    {
        add.map((val,index)=>{
            return(
                <tr key={val.id}>
                    <th scope="row">
                        <input type="text" placeholder="Name"/>
                    </th>
                    <td><input type="text" placeholder="Email"/></td>
                    <td><input type="text"placeholder="Salary" /></td>
                    <td>
                    {
                        index === 0 ? ("") :<button type="button" class="btn btn-danger"onClick={() => removerow(val.id)}>Delete</button>
                    }
                    
                    </td>
                </tr>
            )
        })
    }
   
  </tbody>
</table>
        </div>
    )
}
export default Form