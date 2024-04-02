import React, { Component } from 'react';

class App extends Component {

    // Déclaration des states et des props
    constructor(props) {
        super(props);
        this.state = {
        person: {
            fullName: 'Samuel Etoo',
            bio: 'Bio of Samuel Etoo',
            imgSrc: '/img/samuel-etoo.jpeg',
            profession: 'Software Engineer',
        },
        show: false,
        mountTime: 0,
    };
    }
    // Mise à jour du state
    componentDidMount() {
        this.setState({ mountTime: new Date().getTime() });
        this.intervalId = setInterval(() => {
        this.setState({ mountTime: new Date().getTime() });
        }, 1000);
    }
    // Destruction du composant
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    // Fonction pour le changement d'état du bouton
    toggleShow = () => {
        this.setState(prevState => ({ show: !prevState.show }));
    };

    render() {
        const { person, show, mountTime } = this.state;
        return (
        <div className="App">
            <button onClick={this.toggleShow}>Toggle Profile</button>
            {show && (
             //  Affichage de la personne si l'utilisateur a cliqué sur "Toggle Profile"
            <div>
                <h1>{person.fullName}</h1>
                <img src={person.imgSrc} alt={person.fullName} />
                <p>{person.bio}</p>
                <p>{person.profession}</p>
            </div>
            )}
            <p>Component mounted {(new Date().getTime() - mountTime) / 1000} seconds ago</p>
        </div>
        );
    }
}

export default App;