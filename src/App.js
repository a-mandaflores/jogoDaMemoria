import React from 'react';
import boxColor from './boxColor';
import Box from './box';

function App() {
  const [color, setColor] = React.useState(boxColor)
  const [clicks, setClicks] = React.useState(0)
  const [boxIdOne, setBoxIdOne] = React.useState(0)



  function clicado(id){

  
    setClicks(prevClick => prevClick + 1)
    

      if(clicks < 2){
        
        setColor(prevColor => {       
          return prevColor.map((box) => {
              return box.id == id ? {...box, on: true}: box 
          })
        })
      }

      if(clicks === 0){
        setBoxIdOne((prevBoxIdOne) => {
          if (prevBoxIdOne !== id) {
            return id;
          }
          return prevBoxIdOne;   
        })   
      }


      
      if(clicks === 1){
        if(color[boxIdOne].id == color[id].id){
          setColor(prevColor => {
            console.log(color[id].id)
            return prevColor.map(box => {
              return box.id == id ? {...box, on: false}: box;
            })
          })
          setClicks(0)
        }else{

        setTimeout(()=>{
          if(color[boxIdOne].color !== color[id].color){
            setColor(prevColor => {
              console.log(color[boxIdOne].color)
              console.log(color[id].color)
              return prevColor.map((box) => {
                if(box.id === boxIdOne || box.id === id){
                  return {...box, on: false};
                }
                return box;
            })
            
          })  

            setClicks(0)
          
          }else{
            setColor(prevColor => {
              return prevColor.map(box =>{
                console.log("to entrando aqui")
                if(box.id == id || box.id == boxIdOne){
                  return {...box, find: true} 
                }
                return box
              })
            })
            setClicks(0)

          }
        },1000)
        }
        
      }
      
    

  }
    
    
  const boxAll = color.map(color => {
    return(
      <Box
      on={color.on} 
      key={color.id}
      id={color.id}
      color={color.color}
      onClick={clicado}
      />
      )
  })
  
  return (
    <>      
    <div className='container'>
    <h1>Jogo da Memoria</h1>
    <div className='underline'></div>
      <div className='boxContainer'>
      {boxAll}
      </div>
    </div>
    </>

  );
}

export default App;
