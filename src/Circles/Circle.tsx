import React from 'react';
interface Props extends  React.PropsWithChildren{
  children:number;
}
const Circle: React.FC<Props> = (props)=>{
  return(
    <div className="circle">
    <p>{props.children}</p>
    </div>
  );
};

export default Circle;