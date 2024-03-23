import React, {useState} from 'react'
import CardContent from './CardContent'
import CardImage from './CardImage'

const CardContainer = () => {
    const [DeveloperMode, setDeveloperMode] = useState(true)
    const handleSwitch = () =>{
      if (DeveloperMode){setDeveloperMode(false)}
      else{setDeveloperMode(true)}
    }
  return (
    <div className='CardContainer' style={{
        padding:"20px",
        display:"inline-flex",
        border:"0.5px thick",
        textWrap:"nowrap",
        width: 'calc(85 * 1ch)', 
        height: 'calc(15 * 1.5em)', 
        position:"absolute",
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}>
      <div style={{display:"flex"}}>
        <CardImage handleSwitch={handleSwitch} DeveloperMode={DeveloperMode}/>
        <CardContent  DeveloperMode = {DeveloperMode}/>
      </div>
    </div>
  )
}

export default CardContainer
