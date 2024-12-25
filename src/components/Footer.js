import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black px-7">
      <div className="max-w-7xl mx-auto py-5 flex flex-col items-center">
          <h4 className="text-white font-bold text-2xl tracking-wide ">
            SOCIAL
          </h4>
          <div className='mt-5 flex gap-4 text-white sm:flex-row flex-col'>
              <a href='dagmmike1224@gmail.com' target='_blank' rel='noreferrer'>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-white w-5 h-5" /> 
                  <span className='underline leaning-5'>dagmmike1224@mail.com</span>
                </div> 
              </a>
              <a href='phone' target='_blank' rel='noreferrer'>
                <div className="flex items-center space-x-2">
                  <FaPhone className="text-white w-5 h-5" />
                  <span>+251-966930056</span>
                </div>  
              </a>
              <a href='https://github.com/MickeyDagm' target='_blank' rel='noreferrer'>
              <div className="flex items-center space-x-2">
                <FaGithub className="text-white w-6 h-6" />
                <span>MickeyDagm</span>
              </div> 
              </a>    
            </div>
          </div>
      <hr className='text-slate-50 opacity-30 px-7'/>
      <div>
        <p className=' py-2 text-sm leading-7 text-[#eee] text-center'>© Copyright 2024. Made by <p  className='italic ml-2'>Dagmawi</p></p>
      </div>
    </div>
  );
};

export default Footer;