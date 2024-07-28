"use client";
import { authLogic } from "@/lib/authLogic";
import { login } from "@/redux/feature/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [formData, setFormData] = useState({
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
      const data = await authLogic("/api/auth/login", formData);

      if (data) {
        setLoading(false);
        setFormData({
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
        <h2>Login to your account</h2>

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
            Login
          </button>
        </div>

        <div>
          <span className='text-sm'>Do not have an account?</span>
          <Link href='/auth/login' className='text-green'>
            {" "}
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
