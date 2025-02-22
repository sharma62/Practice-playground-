import React from 'react'

const About = () => {
  let section = {
  width:'80%',
  margin:'auto',
  }
  let h1={
    width:'90%',
    textAlign:'center',
    fontSize:'30px',
    margin:'auto'
  }
  
  let uppercase = {
    textTransform: "uppercase"
  }
  let ul = {
    width: "60%",
    display: "inline-block",
    listStyleType: 'disc',
    margin:'auto',
    paddingLeft:'50px'

  }
  return (
    <>
      <section style={section}>
        <h1 style={h1}>About</h1>
        <h1 style={uppercase}>this is the jumbo heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, laudantium.</p>
        <ul style={ul}>
          <li>Feature - 1</li>
          <li>Feature - 2 </li>
          <li>Feature - 3 </li>
          <li>Feature - 4 </li>
          <li>Feature - 5 </li>

        </ul>
      </section>
    </>
  )
}

export default About