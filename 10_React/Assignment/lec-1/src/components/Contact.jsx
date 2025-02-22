import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>

      <form action="">
      <h1>contact us</h1>
        <label htmlFor="name">name</label>
        <input type="text" placeholder='name' id='name' />

        <label htmlFor="email">Email</label>
        <input type="text" placeholder='email' id='email' />
        <label htmlFor="massage">massage</label>
        <textarea name="massage" id="massage" rows={10} cols={50} placeholder='max 250 words . . . .'></textarea>

      </form>
    </>
  )
}

export default Contact