import React from 'react'
const Signup = () => {
  return (
    <div className='text-[30px]'>
        <form action="">
            <div>
                <label htmlFor="name">UserName</label>
                <input type="text" id='name' />
            </div>
             <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
            </div>
             <div>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' />
            </div>
        </form>
    </div>
  )
}
export default Signup
