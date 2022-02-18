import React, {useState} from "react";
import {GiCheckMark} from "react-icons/gi"

const AjoutCitation = (props) => {

    const [inputCitation, setInputCitation] = useState({
        texte:"",
        auteur:"",
        img:"",
        id:"",
    });

    const onChange = (e) => {
      setInputCitation({
        ...inputCitation,
        [e.target.name]: e.target.value,
      });
    };

    const gererAjout = (e) => {
      e.preventDefault();
      if (inputCitation.texte.trim() && inputCitation.auteur.trim()) {
        props.addCitationProps(inputCitation);
        setInputCitation({
          texte:"",
          auteur:"",
          img:"",
        });
      } else {
        alert("Veuillez compléter les champs.");
      }
    };

    //Afficher ou masquer le formulaire
    const [affichage, setAffichage] = useState(true);

    const afficherForm = () => {
      setAffichage(!affichage)
    } 

    let modeAfficher = {};
    let texteAjout = {};

    if(affichage) {
      modeAfficher.display = "none"
      texteAjout = "Ajouter une citation"
    } else {
      modeAfficher.display = "block"
      texteAjout = "Masquer formulaire" 
    }

    return (
    <div className="ajout-citation">
      <button className="btn-ajout" onClick={afficherForm}>{texteAjout}</button>
      <form onSubmit={gererAjout} style={modeAfficher}>
        <input 
        type="text" 
        placeholder="Contenu"
        value={inputCitation.texte}
        onChange={onChange}
        name="texte"
        >
        </input>
        <input 
        type="text" 
        placeholder="Auteur"
        value={inputCitation.auteur}
        onChange={onChange}
        name="auteur"
        >
        </input>
        <input 
        type="text" 
        placeholder="Lien de votre image"
        value={inputCitation.img}
        onChange={onChange}
        name="img"
        >
        </input>
        <button className="btn-valid">
            <GiCheckMark style={{ color:"green"}}/>
        </button>
      </form>
    </div>
  );
};

export default AjoutCitation;
