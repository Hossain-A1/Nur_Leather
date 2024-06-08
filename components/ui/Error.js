export default function Error({ error }) {
  return (
    <div className='text-center text-red'>
      <p>{error}</p>
    </div>
  );
}
