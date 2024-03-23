import React from 'react'
import CardModeButton from './CardModeButton';
import CardAvatar from './CardAvatar';
const CardImage = ({handleSwitch,DeveloperMode}) => {
  return (
    <div style={{
        marginRight:"10px",
        width: '150px', 
        // height: 'calc(15 * 1.5em)', 
        }}>
      <CardModeButton handleSwitch={handleSwitch} DeveloperMode = {DeveloperMode}/>
      <div style={{verticalAlign:"center",marginRight:"10px"}}>
      <CardAvatar  DeveloperMode = {DeveloperMode}/>
      </div>
    </div>
  )
}

export default CardImage
