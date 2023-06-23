
import React from "react";

const styles = {
  color: '#ff9db5'
}

const Header = ({title}) => {
    return (
      <div className="header">

         <h1 style={styles} >{title}</h1>
        
      </div>
    );
  };
  
  export default Header;