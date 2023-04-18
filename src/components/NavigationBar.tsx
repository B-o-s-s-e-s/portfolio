import { Link } from 'react-router-dom';
import resume from '../assets/Cai_Senhuang_Resume.pdf';

function NavigationBar() {
  return (
    <div className='absolute w-screen z-10 flex justify-around items-center pt-4 pb-4'>
      <Link to='/'><h1 className='text-3xl font-medium'>Pika Cai</h1></Link>
      <ul className='flex gap-10 items-center'>
        <li><Link to='/'>Projects</Link></li>
        <li><a href={resume}>Resume</a></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  )
}

export default NavigationBar;