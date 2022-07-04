/**/
import { About } from './About';
import { Contact } from './Contact'
import { MySkills } from './MySkills';
import { MyWork } from './MyWork';

import './page.css'
/* */



export const HomeScreen = () => {
  
  (document.getElementById("side-menu") || {}).checked = true;

  return (
    <div className='slider disableScrollbar'>
      <div><MySkills/></div>
      <div><About/></div>
      <div><MyWork/></div>
      <div><Contact/></div>
    </div>
  )
}
