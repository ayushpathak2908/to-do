import React, { useState } from 'react';
import Lists from './Lists'

function App(){
    const [inputList, setInputList]= useState("");
    const [items, setItems]=useState([]);
    const [changeButton, setChangeButton]=useState(true);
    const [isEditItems, setIsEditItems] = useState(null);
    const onItemChange = (event) =>{                    //Function name changed and followed camel case
        setInputList(event.target.value)
    };
    const listOfItems = (event) => {                    //Function name changed
        
            if(changeButton){
                setItems((oldItems) => {
                    return [...oldItems, inputList];
                 })
                 setInputList('');
            }
            else{
                setItems(items.map((elem, index)=>{
                       if(index===isEditItems){
                          return [inputList];
                       }
                       return elem;
                })
             )
             setChangeButton(true);
             setInputList('');
             setIsEditItems(null);
            
        }

    };
    const deleteItems = (id)=>{
       
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index)=>{
                   return id!== index;
            })
         })
    }
    const editItems = (id) =>{
        

      let newItems= items.find((arrEle, index)=>{
          return id===index;
      })
        console.log(newItems);
        setChangeButton(false);
        setInputList(newItems);
        setIsEditItems(id);

    }
    return(
         <>
             <div className="first-div">
                <div className="second-div">
                    <br/>
                    <h1>My To Do List</h1>
                    <br/>
                    <input type="text" placeholder="Add a item" value={inputList} onChange={onItemChange}/>
                    {changeButton? <button onClick={listOfItems}>+</button> : <i class="fa fa-edit" aria-hidden="true" onClick={listOfItems}></i>}
                    <ol> 
                        
                        {
                            items.map((itemVal, index)=>{
                               return <Lists text={itemVal} 
                                        id={index}
                                        key={index}
                                        onSelect={deleteItems}      //please refer List.jsx component for delete icon
                                        onEdit={editItems}
                                        onChange={changeButton}
                                        />
                            })
                        }
                    </ol>
                </div>
             </div>
         </>
    )
}


export default App;