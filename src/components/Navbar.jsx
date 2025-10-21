import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ search, setSearch }) => {

  return (
    <nav className='flex items-center justify-between px-8 bg-violet-900 text-white py-3'>

      <ul className="list-none flex items-center gap-8 text-sm sm:text-base md:text-lg lg:text-xl">
        <li className='hover:opacity-60 duration-300 transition-all'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='hover:opacity-60 duration-300 transition-all'>
          <Link to={'/post/'}>Post</Link>
        </li>
        <li className='hover:opacity-60 duration-300 transition-all'>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="search">
        <input
          type="text"
          className="focus:border-slate-600 p-1 border w-[100%] rounded-md outline-none text-black"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  )
}

export default Navbar