import "./styles.css"
import img from "../../assets/img/logo.svg"


function Header() {


    return(
    
  
  <header>
        <div className="dsmeta-logo-container">
                    <img src={img} alt="DsMeta"/>
                    <h1> DSmeta</h1>
                    <link rel="stylesheet" href="styles.css"/>
                    <p> Desenvolvido <a href="https://github.com/regielberson?tab=repositories"> por Regis</a> </p>

                </div>
  </header>


    )    
    
  }
  
  export default Header
  