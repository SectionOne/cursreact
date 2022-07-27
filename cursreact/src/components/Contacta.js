import React from 'react';

const MyForm = () => {
  
  return (
    <div>
      <h1>Formulari simple</h1>
      <form>
        <div>
          <label>
            Nom:
            <input
              type="text"
              name="name"
            />
          </label>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default MyForm;