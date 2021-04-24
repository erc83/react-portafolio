import avatar from "../img/avatar.jpg";

const Acerca = () => {
    return (
        <section className="text-center" id="about">
            <h3 className="my-5">
                <strong>Acerca de mí</strong>
            </h3>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src={avatar} height="200px" className="rounded-circle shadow-4-strong mb-4" alt="Avatar" />
                    <p><strong>¿Quién Soy?</strong></p>
                    <p>Desarrollador Full stack Javascript, que por motivos de la vida migre de Constructor Civil a programador. </p>


                    <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} 
                        href="https://www.facebook.com/eric.espinozamansilla/" role="button"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}}
                        href="https://www.linkedin.com/in/eric-espinoza-mansilla/" role="button"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="https://github.com/erc83/"
                        role="button"><i className="fab fa-github"></i></a>
                </div>
                <div className="col-md-6">

                    <p><strong>Front-End: </strong></p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-html5 fa-3x m-2"></i>
                            <p>HTML</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-css3 fa-3x m-2"></i>
                            <p>CSS</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-js fa-3x m-2"></i>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>

                    <p><strong>Back-End: </strong></p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-node fa-3x m-2"></i>
                            <p>NODEJS</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fas fa-database fa-3x m-2"></i>
                            <p>POSTGRESQL</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fas fa-code fa-3x m-2"></i>
                            <p>EXPRESS</p>
                        </div>
                    </div>

                    <p><strong>Estudiando (Autodidacta): </strong></p>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <i className="fas fa-database fa-3x m-2"></i>
                            <p>MONGODB</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <i className="fab fa-react fa-3x m-2"></i>
                            <p>REACTJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Acerca
