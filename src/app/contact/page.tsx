import React from 'react'

const Contact = () => {
  return (
   <section className='contact-form' style={{ backgroundImage: "url(p1.avif)" }}>
     <h2 className='fade-in'>Contact Us</h2>
     <p className='fade-in'>
       For more information or to schedule a meeting, please contact us.
     </p>
     <form>
       <label>Name:</label>
       <input type="text" name="name" required />
       <label>Email:</label>
       <input type="email" name="email" required />
       <label>Phone:</label>
       <input type="tel" name="phone" required />
       <label>Message:</label>
       <textarea name="message" rows={6} required></textarea>
       <button type="submit">Submit</button>
     </form>
   </section>

  )
}

export default Contact