import React from 'react';

const MyForm = () => {
    const [values, setValues] = React.useState({
      name: ''
    })
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setValues({ ...values, [name]: value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      alert(JSON.stringify(values))
    }
  
    const { name } = values
  
    
    return (
      <div>
        <h1>Formulari simple</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nom:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
          </div>
  
          <button type="submit">Send</button>
        </form>
  
        <div>
          <h2>Values of the form</h2>
          <p>{JSON.stringify(values)}</p>
        </div>
      </div>
    )
}

export default MyForm;