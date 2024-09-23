const navbar = () => {
  return (
    <div>
        <div className="navbar bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Features</a></li>
      
      <li><a>Workflow</a></li>

      <li><a>Pricing</a></li>

      <li><a>Testimonials</a></li>
      <li>
      <button className="btn btn-outline mb-3 rounded-md">Sign In</button>
     
      </li>
      <li>
      
      <button className="btn bg-orange-500 rounded-md">Create an Account</button>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">VirtualR</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Features</a></li>
      
      <li><a>Workflow</a></li>

      <li><a>Pricing</a></li>

      <li><a>Testimonials</a></li>
    </ul>
  </div>
  <div className="navbar-end hidden md:block lg:ml-96">
  <button className="btn btn-outline mr-5 rounded-md">Sign In</button>
  <button className="btn bg-orange-500 rounded-md">Create an Account</button>

  </div>

</div>
        
    </div>
  )
}

export default navbar