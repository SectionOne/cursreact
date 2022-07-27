import React from 'react';

const MyForm = () => {
    const [values, setValues] = React.useState({
      name: ''
    })
  
    const [validations, setValidations] = React.useState({
      name: ''
    })
  
    const validateAll = () => {
      const { name } = values
      const validations = { name: '' }
      let isValid = true
  
      if (!name) {
        validations.name = 'El nom és obligatori'
        isValid = false
      }
  
      if ((name && name.length < 3) || name.length > 50) {
        validations.name = 'El nom ha de contenir entre 3 i 50 caràcters'
        isValid = false
      }
    
      if (!isValid) {
        setValidations(validations)
      }
  
      return isValid
    }
  
    const validateOne = (e) => {
      const { name } = e.target
      const value = values[name]
      let message = ''
  
      if (!value) {
        message = `${name} és obligatori`
      }
  
      if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
        message = 'El nom ha de contenir entre 3 i 50 caràcters'
      }
  
      setValidations({ ...validations, [name]: message })
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setValues({ ...values, [name]: value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      const isValid = validateAll()
  
      if (!isValid) {
        return false
      }
  
      alert(JSON.stringify(values))
    }

    const { name } = values
  
    const { name: nameVal } = validations

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
                onBlur={validateOne}
              />
            </label>
            <div>{nameVal}</div>
          </div>
          <button type="submit">Send</button>
        </form>
  
        <div>
          <h2>Valors del formulari</h2>
          <p>{JSON.stringify(values)}</p>
        </div>
      </div>
    )
}

export default MyForm;