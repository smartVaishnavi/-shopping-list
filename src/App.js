import React,{useState} from "react";
import './App.css';
import ToDoLists from'./ToDoLists'

const App=()=> {
  const [ inputList, setInputList]
  =useState("");
  
  const[Items, setItems]= useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return[...oldItems, inputList];
    });
    setInputList(" ");

  };
  const deleteItems=(id)=>{
    console.log("deleted");
    
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      });

    });
  };
  
  return (<>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1 >
           SHOPPING LIST</h1>
        <br/>
        <input type="text" placeholder=" Add your shopping list" value={inputList} onChange={itemEvent} 
        />

        <button onClick={listOfItems}> +</button>
        <ol>{Items.map((itemval,index)=>{
          return(<ToDoLists 
        id={index}
        key={index}
        text={itemval}
        onSelect={deleteItems}/>
        );

        })
        
        }
        </ol>
      </div>
    </div>
    </>
  );
};

export default App;
