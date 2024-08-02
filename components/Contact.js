"use client";

import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef(null);
  const router = useRouter();

  const handleContact = async (e) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
      );

      toast.success("Your message sent!");
      router.push("/");
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message!");
    }

    // Reset form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };
  return (
    <div className='container sp mt-20  space-y-10'>
      <h3 className='text-center font-medium'>
        Love to hear from you, Get in tuch
      </h3>
      <form
        ref={formRef}
        onSubmit={handleContact}
        className=' flex flex-col items-center justify-center gap-6 '
      >
        <div className='flex  justify-center gap-6 items-center lg:w-2/3 w-full'>
          <div className='space-y-6'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name' className=' text-lg'>
                Your Name:
              </label>
              <input
                required
                type='text'
                id='name'
                placeholder='Your Name'
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
                placeholder='Email'
                className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
              />
            </div>
          </div>
          <div className='space-y-6'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='phone' className=' text-lg'>
                PhoneNo:
              </label>
              <input
                required
                type='tel'
                id='phone'
                placeholder='Phone'
                className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='gender' className=' text-lg'>
                Gender:
              </label>
              <select className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <textarea
            required
            name='message'
            rows={6}
            cols={56}
            placeholder='Your message here'
            className='border-none py-3 px-6 rounded eq focus:outline-blue bg-dark/10'
          />
        </div>

        <div>
          <button
            type='submit'
            className='border-none py-3 px-6 rounded eq bg-blue text-light '
          >
            Just Send ⇗
          </button>
        </div>
      </form>
    </div>
  );
}
