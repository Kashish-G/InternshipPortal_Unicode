import React from 'react'

const NavBar = () => {
  return (
    <nav className="absolute top-[0rem] left-[0rem] w-[95rem] h-[6.25rem]">
    <div className="absolute top-[0rem] left-[0rem] bg-white w-[95rem] h-[6.25rem]" />
    <div className="absolute top-[2.56rem] left-[42rem] text-[1rem] font-medium font-inter text-gray-200 text-left inline-block w-[3.06rem]">{`Home `}</div>
    <div className="absolute top-[1.56rem] left-[3.44rem] text-[2.5rem] font-semibold bg-gradient-to-r from-slategray to-black-900 bg-clip-text text-transparent">
Internship Portal
</div>

<div className="absolute top-[219.63rem] left-[11.81rem] text-[2rem] font-semibold  bg-gradient-to-r from-slategray to-black-900 bg-clip-text text-transparent text-gradient">
Internship Portal
</div>



    <div className="absolute top-[2.56rem] left-[47.25rem] text-[1rem] font-medium font-inter text-gray-200 text-center inline-block w-[4.25rem]">
      Courses
    </div>
    <div className="absolute top-[2.56rem] left-[53.69rem] text-[1rem] font-medium font-inter text-gray-200 text-center inline-block w-[5.88rem]">
      Research
    </div>
    <div className="absolute top-[2.56rem] left-[61.75rem] text-[1rem] font-medium font-inter text-gray-200 text-left inline-block w-[4.75rem]">
      Interview
    </div>
    <div className="absolute top-[2.56rem] left-[75.06rem] text-[1rem] font-medium font-inter text-gray-200 text-left inline-block w-[3.13rem]">
      Log in
    </div>
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1.44rem] left-[80.19rem] w-[10.88rem] h-[3.44rem]">
      <div className="absolute top-[0rem] left-[0rem] rounded-md bg-mediumaquamarine shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] w-[10.88rem] h-[3.44rem]" />
      <div className="absolute top-[1.13rem] left-[2.38rem] text-[1rem] font-medium font-inter text-white text-left inline-block w-[6.13rem]">
        Registration
      </div>
    </button>
  </nav>
  )
}

export default NavBar