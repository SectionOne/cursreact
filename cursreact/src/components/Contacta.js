import React from 'react';

const MyForm = () => {
    const [values, setValues] = React.useState({
      name: '',
      email: ''
    })
  
    const [validations, setValidations] = React.useState({
      name: '',
      email: ''
    })
  
    const validateAll = () => {
      const { name, email } = values
      const validations = { name: '', email: '' }
      let isValid = true
  
      if (!name) {
        validations.name = 'El nom és obligatori'
        isValid = false
      }
  
      if ((name && name.length < 3) || name.length > 50) {
        validations.name = 'El nom ha de contenir entre 3 i 50 caràcters'
        isValid = false
      }
      
      if (!email) {
        validations.email = 'Email és obligatori'
        isValid = false
      }
  
      if (email && !/\S+@\S+\.\S+/.test(email)) {
        validations.email = 'El format del email ha de ser com example@mail.com'
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
  
      if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        message = 'El format del email ha de ser com example@mail.com'
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

    const { name, email } = values
  
    const { name: nameVal, email: emailVal } = validations

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
          
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </label>
            <div>{emailVal}</div>
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