import React from 'react';
import Body from './body/Body';

type Props = {
  showHeader?: boolean,
  children : JSX.Element
}


const index : React.FC<Props>  = ({children, showHeader}) => {
  return (
   <Body children={children} showHeader={showHeader}/>
  )
}

export default index;