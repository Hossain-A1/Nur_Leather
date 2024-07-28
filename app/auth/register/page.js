"use client";
import { authLogic } from "@/lib/authLogic";
import { login } from "@/redux/feature/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const handleAuthSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      const data = await authLogic("/api/auth/register", formData);

      if (data) {
        setLoading(false);
        setFormData({
          name: "",
          address: "",
          phoneNo: "",
          email: "",
          password: "",
        });
        dispatch(login(data));

        router.push("/");
      } else {
        setLoading(false);
      }
    },
    [formData, router, dispatch, setLoading]
  );
  return (
    <div className='container sp mt-10 flex flex-col items-center justify-center '>
      <form
        onSubmit={handleAuthSubmit}
        className='flex flex-col gap-3 lg:w-2/3 w-full'
      >
        <h2>Create a new account</h2>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className=' text-lg'>
            Name:
          </label>
          <input
            required
            type='text'
            id='name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder='Name'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='address' className=' text-lg'>
            Address:
          </label>
          <input
            required
            type='text'
            id='address'
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder='Address'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='phone' className=' text-lg'>
            Phone No:
          </label>
          <input
            required
            type='tel'
            id='phone'
            value={formData.phoneNo}
            onChange={(e) =>
              setFormData({ ...formData, phoneNo: e.target.value })
            }
            placeholder='Phone'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className=' text-lg'>
            Email:
          </label>
          <input
            required
            type='email'
            id='email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder='Email'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className=' text-lg'>
            Password:
          </label>
          <input
            required
            type='password'
            id='password'
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
