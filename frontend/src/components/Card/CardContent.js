import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

const CardContent = ({DeveloperMode}) => {
  // Information of Doctor:
  // Title, Prefix, Name, Pronoun, Email, Number, AvailableTime, Experience 
  // Format:
  // Name(Pronoun) 
  return (
    <div>
      <CardHeader  DeveloperMode = {DeveloperMode} />
      <CardBody DeveloperMode = {DeveloperMode}/>
    </div>
  )
}

export default CardContent
