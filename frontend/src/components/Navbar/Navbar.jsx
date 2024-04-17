import React,{useState} from 'react'

function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <nav>
        <div id="nav-part1">
           <h1>tealthy</h1>
        </div>
        <div id="nav-part2" >
            <p>Link 1</p>
            <p onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Link 2</p>
            <p onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Link 3</p>
        </div>
        <div id="nav-part3">
            <button>Login</button>
            <button>Singup</button>
        </div>
        {isDropdownVisible &&   <Dropdown/>}
     
    </nav>
  )
}


function Dropdown(){
  return ( 
    <div class="sub-section">
    <p>Sub section headings</p>
    <div id="subsection-links">
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
    </div>
</div>
  )
}

export default Navbar