import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    let temp = {}

    if (!form.name) temp.name = "Name required"
    if (!form.email.includes("@")) temp.email = "Valid email required"
    if (!form.message) temp.message = "Message required"

    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert("Form submitted!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <p>{errors.name}</p>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <p>{errors.email}</p>

      <textarea name="message" placeholder="Message" onChange={handleChange} />
      <p>{errors.message}</p>

      <button type="submit">Send</button>
    </form>
  )
}

export default Contact