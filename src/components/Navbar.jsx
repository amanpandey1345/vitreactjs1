import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className=' flex w-full h-[80px] items-center justify-between p-3 bg-black text-white'>

        <h1 className=' font-extrabold text-xl '>Logo</h1>

        <ul className='flex w-[50%] justify-around items-center'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/product"><li>Product</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar