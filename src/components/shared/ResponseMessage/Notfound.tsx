
interface INotFoundProps{
  message: string
}

const Notfound = ({message}: INotFoundProps) => {
  return (
    <>
    <p className='text-[17px] font-bold text-gray-400'>
    {message}
    </p>
    </>
  )
}

export default Notfound