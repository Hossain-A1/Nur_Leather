import Link from "next/link";

export default function UserPage() {
  return (
    <div className='container sp mt-10 flex flex-col items-center justify-center '>
      <form className='flex flex-col gap-3 lg:w-2/3 w-full'>
        <h2>Create a new account</h2>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className=' text-lg'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            placeholder='Name'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='address' className=' text-lg'>
            Address:
          </label>
          <input
            type='text'
            id='address'
            placeholder='Address'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='phone' className=' text-lg'>
            Phone No:
          </label>
          <input
            type='tel'
            id='phone'
            placeholder='Phone'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className=' text-lg'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className=' text-lg'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>

        <div>
          <button
            type='submit'
            className='border-none py-3 px-6 rounded eq bg-blue text-light '
          >
            Sign up
          </button>
        </div>

        <div>
          <span className='text-sm'>Already have an account?</span>
          <Link href='/auth/login' className='text-green'>
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
