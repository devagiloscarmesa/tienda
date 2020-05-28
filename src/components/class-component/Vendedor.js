import React from 'react';
class Vendedor extends React.Component {
    constructor(){
        super();
        this.state = {
            nombre : 'Carlos Menses'
        };
    }
    
    handleCambiar = () => {
        this.setState({
            nombre : "Diego", 
            apellido : "Diaz"
        });
    }
    
    render = () => {
        return (
            <section className = "card bg-info">
                <div className="card-header">
                    Vendedor
                </div>
                <div className="card-body">
                <div className = "row">
                        <div className = "col-lg-6 col-6">Nombre: {this.state.nombre}</div>
                        <div className = "col-lg-6 col-6">Apellido: {this.state.apellido}</div>
                    </div>
                    <div className = "row">
                        <div className = "col-lg-6 col-6">Edad: </div>
                        <div className = "col-lg-6 col-6">Documento: </div>
                    </div>
                    <div className = "row">
                        <div className = "col-lg-6 col-6">Lugar de residencia: </div>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-lg-6 col-6">
                        <button onClick = {this.handleCambiar}>Cambiar</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Vendedor;