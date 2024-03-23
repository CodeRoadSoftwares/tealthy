import React from 'react'

const CardModeButton = ({handleSwitch, DeveloperMode}) => {
  return (
    <div>
      <button 
      style={{
        backgroundColor: '#e1ecf4',
        borderRadius: '3px',
        border: '1px solid #7aa7c7',
        boxShadow: 'rgba(255, 255, 255, .7) 0 1px 0 0 inset',
        boxSizing: 'border-box',
        color: '#39739d',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: '-apple-system, system-ui, "Segoe UI", "Liberation Sans", sans-serif',
        fontSize: '13px',
        fontWeight: '400',
        lineHeight: '1.15385',
        margin: '0',
        outline: 'none',
        padding: '6px 8px',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        verticalAlign: 'baseline',
        whiteSpace: 'nowrap',
        transition: 'background-color 0.3s ease',
    }}
      onClick={handleSwitch}>
      Developer Mode: {DeveloperMode ? "On":"Off"}</button>
    </div>
  )
}

export default CardModeButton
