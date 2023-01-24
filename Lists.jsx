import React from 'react';

const Lists = (props) =>{
   return(<> 
   <div className='to-do'>
      <li><i class="fa fa-times" aria-hidden="true" onClick={()=>{props.onSelect(props.id);}}>
         </i>{props.text}
         <i class="fa fa-edit" aria-hidden="true" onClick={()=>{props.onEdit(props.id);}}></i>
      </li>
   </div>
   </>)
}

export default Lists;