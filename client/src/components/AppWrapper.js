import Toolbar from './Toolbar';

import './AppWrapper.css';

function AppWrapper(props) {
  return(
    <div>
      <Toolbar title={props.title}/>
      <div className='AppWidth'>
        {props.children}
      </div>
    </div>
  )
}

export default AppWrapper;