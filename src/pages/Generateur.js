
import React, {useState} from "react";
import titre from "../images/les-devises.png"
import {GrRefresh} from "react-icons/gr"

const Generateur = () => {

    const [lesCitations, setLesCitations] = useState(recupererCompilation())

    // recuperation de l'objet citation du jour
    function recupererCompilation() {
        // getting stored items
        const temp = localStorage.getItem("Compilation")
        const savedCompilation = JSON.parse(temp)
        return savedCompilation || []
      }
    console.log(recupererCompilation());

    const genererCitation = () => {
        let pioche = Math.round(Math.random() * lesCitations.length - 0.5);
        console.log(pioche);
        return lesCitations[pioche];
      };

      const citationJour = genererCitation();

      console.log(citationJour)

      function refreshPage(){
        window.location.reload();
    } 

return (
      
        <div className="conteneur">
            <div className="hamza">
            
                <img src={titre} alt="Les devises Shadoks" />
                <h1>CITATION DU JOUR</h1>
                            
            </div>

            <div className="citation-box">

                    {/* image par défaut */}
                <img src={citationJour.img} alt="Shadocks pompant" />
                    {/* affichage de la citation et de son auteur */}
                <div className="Pain-au-chocolat">
                    <p className="cit">{citationJour.texte}</p>
                    <br/> 
                    <p className="aut">{citationJour.auteur}</p>
                </div>
            </div>

            <div >
                {/* <button onClick={NouvelleCit}>Nouvelle citation</button> */}
                <button className="btn-generateur" onClick={refreshPage}  >
                    <GrRefresh />
                </button>
            </div>
        </div>
      
     
    )
  }

{/* <img src="" alt="image perso" hidden/> */}


export default Generateur;
