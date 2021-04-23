import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">

            <h1>Eric Espinoza Mansilla</h1>
        
            <Typed 
                className="typed-text"
                strings={["Desarrollador Full Stack javascript", "Front-end", "Back-end", "Producción"]}
                typeSpeed={40}            
                backSpeed={60}
                loop
            />
            <a href="#" className="btn-main-offer">Contáctame</a>
            </div>

        </div>
    )
}

export default Header
