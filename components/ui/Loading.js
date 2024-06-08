import { FadeLoader } from "react-spinners";

export default function Loading({ isLoading }) {
  return (
    <div className='h-screen w-full flex justify-center items-center '>
      <FadeLoader
        size='32px'
        color='rgb(0, 145, 181)'
        loading={isLoading}
        aria-label='Loading spinner'
        data-testid='loader'
      />
    </div>
  );
}
