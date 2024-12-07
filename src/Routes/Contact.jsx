import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ThemeContext } from '../Components/ThemeProvider'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {theme, toggleTheme} =useContext(ThemeContext) // Acceder al estado y la función toggle
  
  return (
    <div className={theme}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact