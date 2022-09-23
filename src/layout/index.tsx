import React from 'react';
import Body from './body/Body';

type Children = {
  children : JSX.Element
}


const index : React.FC<Children>  = ({children}) => {
  return (
   <Body children={children}/>
  )
}

export default index;