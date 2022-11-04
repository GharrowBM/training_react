import { NavLink, Outlet } from "react-router-dom"
import classes from './Root.module.scss'
import dogSVG from '../assets/dog.svg'

function Root () {
  return <div className={classes.root}>
    <header>
      <NavLink to={'/'} className={classes['app-logo']}>
<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M85.25,176.55c-3.75-.31-6.62-1.52-9.87-1.25-2,.17-4.16-1-6.16-1.83a1.71,1.71,0,0,1-.64-2.67c1.5-1.92,2.92-4.54,5-5.28,4-1.44,6-4.35,7.91-7.59a27.78,27.78,0,0,0,3.76-13.17c.08-2.1-1.33-4.29-2.25-6.36a19.44,19.44,0,0,0-2.1-3.06c-2.28,1.18-4.46.53-6.74,0a14,14,0,0,0-5.86,0c-5.35,1.26-7.47.59-10.83-3.83-1.53-2-3.29-3.85-5-5.72a5.23,5.23,0,0,0-1.5-.77c-.28,1.58-.64,3-.76,4.4-.68,8.71-1.36,17.41-1.92,26.13a75.61,75.61,0,0,0-.06,9.28c.41,7.21,0,14.31-2.4,21.2-.28.8-.53,1.61-.87,2.39-1.92,4.43-7.44,7-11.78,4.82-2.76-1.37-5.44-1.32-8.26-1.37a16.37,16.37,0,0,1-2.72-.12,8.79,8.79,0,0,1-2.71-.93c-1.86-1.1-2.25-2.61-.82-4.24A30.8,30.8,0,0,1,24.51,181c4.64-3.07,6.57-7.39,6.55-12.66,0-3.43-.57-6.86-.81-10.29a27,27,0,0,1-.11-5.61,31.24,31.24,0,0,0-.71-11.2,51.79,51.79,0,0,1,0-21,19.44,19.44,0,0,0-.72-10,27.36,27.36,0,0,1-.67-16.61c1.68-6.18,2.39-12.63,3.91-18.86.63-2.57,2.18-4.94,3.52-7.28.67-1.18,1-2.13.22-3.34C34.42,62,33.22,59.8,32,57.67a33,33,0,0,1-4.44-12.42c-.14-1-.24-1.92-.3-2.44-1.39.62-2.86,1.83-4.27,1.76a8.28,8.28,0,0,1-4.47-2.13,25.4,25.4,0,0,1-8.11-12.07c-.6-2-1.59-3.8-2.32-5.72-2.18-5.74-1.15-8.37,4.33-11,2.79-1.34,5.69-2.46,8.42-3.9A85.38,85.38,0,0,0,28.69,5C31.41,3.14,34.1,2.49,37,4.41c2,1.35,3.88,1.24,6.28.64a103.51,103.51,0,0,1,13.64-2,48.76,48.76,0,0,1,6.73-.16,14.64,14.64,0,0,1,8.83,2.91C76.24,2,78.25,1.67,82.8,4.64A31.06,31.06,0,0,0,93.1,9c5.1,1.14,9.08,3.78,10.06,9.44a7.51,7.51,0,0,1,.16,1.63c-.42,8.24-.65,16.5-2.55,24.59a15.07,15.07,0,0,1-1.31,3.56c-1,1.87-2.24,1.94-3.43.14A59,59,0,0,1,92.25,42c-1.06-2.16-1.8-4.47-2.73-6.84-.29,1.71-.46,3.45-.89,5.12-1.19,4.63-2.42,9.25-3.79,13.82-.45,1.5-.64,2.89.27,4.14a3.47,3.47,0,0,0,2.14,1.51,63.42,63.42,0,0,1,18.09,2.91,17.14,17.14,0,0,0,13.25-1.31c3.53-1.87,7-4,10.37-6,10.82-6.61,22.27-11.6,34.9-13.43,7.51-1.08,15-1.2,22.24,1.8,1.44.6,3,.83,4.54,1.3a23.74,23.74,0,0,1,2.27,1l.12.68c-2.54,1-5,2.41-7.65,2.95-4.5.91-9.11,1.31-13.68,1.87-15.35,1.9-28.22,8.44-38.25,20.34-.59.7-1.22,1.27-.42,2.34,5.3,7.08,8.05,15.25,10.15,23.74,1.23,5,3.22,9.79,4.5,14.76,1.67,6.52,3,13.12,4.46,19.68a16.67,16.67,0,0,0,1.23,4c2.91,5.56,2.59,11.49,2.3,17.45-.39,8.37-.64,16.73,1.68,24.95,1.28,4.56-.3,6.77-5,6.72A87.41,87.41,0,0,1,139.88,184c-.61-.09-1.38-1.38-1.47-2.17a12.4,12.4,0,0,1,.44-3.95,23.35,23.35,0,0,1,1.4-4.51c3.82-8.33,2.67-16.66.29-25.06a24.65,24.65,0,0,1-1.06-6.58,7.9,7.9,0,0,0-3.38-6.86c-.84-.61-1.71-1.16-2.58-1.72a21.13,21.13,0,0,1-9-10.71c-4.47,1.85-9.37,2.73-13.29,5.89-2.57,2.08-3.35,4.93-3.45,8.09-.24,7.17-.39,14.33-.84,21.48-.28,4.6-1,9.16-1.56,13.74-.56,4.94-.42,9.77,1.63,14.47a18.5,18.5,0,0,1,1.36,6.34c.16,3.07-1.8,4.58-4.86,4.42a27.41,27.41,0,0,0-4.3.4,4.53,4.53,0,0,1-1.08.12c-4.47-.75-9.12.08-13.49-1.57a3,3,0,0,0-1.91-.26c-1.54.62-1.86-.32-1.68-1.36.58-3.44,1.26-6.88,2.06-10.29C83.66,181.5,84.47,179.18,85.25,176.55Z"/></svg>
        <span>KennelApp</span>
      </NavLink>
      <hr />
      <nav>
        <ul className={classes.navigation}>
        <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/dogs'}>Dogs</NavLink>
          </li>
          <li>
          <NavLink to={'/masters'}>Masters</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main className={classes.outlet}>
      <Outlet />
    </main>
  </div>
}

export default Root