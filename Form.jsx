import React from 'react'

const App = () => {
const handelForm = (e)=>{
  e.preventDefault();
const formData = new FormData(e.target);
const obj =  Object.fromEntries(formData.entries())
console.log(obj);

}

  return (
   <div>
    <form action='' onSubmit={handelForm}>
      <label > Name </label>
      <input type='text' name="name" placeholder='Enter your name'/><br/>
      <label>age</label>
      <input type='number' name="age" placeholder='Enter your age'/><br/>

      <button type="submit">subbmit hoon !</button>
    </form>
   </div>
  )
}

export default App
