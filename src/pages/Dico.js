import React, { useState, useEffect } from "react";
import Liste from "../composants/Liste.js";
import AjoutCitation from "../composants/AjoutCitation.js";
import { v4 as uuidv4 } from "uuid";

//Import Tableau citations Shadok
import Shadok1 from "../images/Shadok-1.png";
import Shadok2 from "../images/Shadok-2.png";
import Shadok3 from "../images/Shadok-3.png";
import Shadok4 from "../images/Shadok-4.png";
import Shadok5 from "../images/Shadok-5.png";
import Shadok6 from "../images/Shadok-6.png";
import Shadok7 from "../images/Shadok-7.png";
import Shadok8 from "../images/Shadok-8.png";
import Shadok9 from "../images/Shadok-9.png";
import Shadok10 from "../images/Shadok-10.png";
import Shadok11 from "../images/Shadok-11.png";
import Shadok12 from "../images/Shadok-12.png";
import Shadok13 from "../images/Shadok-13.png";

const Dico = () => {
  //Les tableaux d'objets de citation
  const [citations, setCitation] = useState(recupererCitations());
  const [citShadoks] = useState([
    {
      img: Shadok1,
      texte: "S'il n'y a pas de solution, c'est qu'il n'y a pas de problème.",
      auteur: "Shadok",
      id: uuidv4(),
    },
    {
      img: Shadok2,
      texte:
        "*Dans la marine on ne fait pas grand chose mais on le fait de bonne heure.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok3,
      texte:
        "Il vaut mieux mobiliser son intelligence sur des conneries que mobiliser sa connerie sur des choses intelligentes.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok4,
      texte: "Si ça fait mal c'est que ça fait du bien!!",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok5,
      texte:
        "Il vaut mieux pomper même s'il ne se passe rien que risquer qu'il se passe quelque chose de pire en ne pompant pas.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok6,
      texte:
        "En essayant continuellement on finit par réussir. Donc plus ça rate, plus on a de chance que ça marche.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok7,
      texte: "On est jamais si bien battu que par soir-même.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok8,
      texte:
        "Avec un escalier prévu pour la montée on réussit souvent à monter plus bas qu'on ne serait descendu avec un escalier prévu pour la descente.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok9,
      texte:
        "Pour qu'il y ait le moins de mécontents possible il faut toujours taper sur les mêmes.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok10,
      texte:
        "Dans la Marine il faut saluer tout ce qui bouge et peindre le reste.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok11,
      texte: "La notion de passoire est indépendante de la notion de trou.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok12,
      texte: "Pourquoi faire simple quand on peut faire compliqué?!",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
    {
      img: Shadok13,
      texte: "Je pompe donc je suis.",
      auteur: "Shadok - Rouxel",
      id: uuidv4(),
    },
  ]);

  const compilation = citations.concat(citShadoks);

  /* const genererCitation = () => {
    let pioche = Math.round(Math.random() * compilation.length - 0.5);
    console.log(pioche);
    return compilation[pioche];
  }; */

  useEffect(() => {
    console.log("stockage")
    // stockage de la citation a afficher
    const temp = JSON.stringify(compilation)
    localStorage.setItem("Compilation", temp)
  }, [compilation])


 /*  console.log(genererCitation()); */

  const delCitation = (id) => {
    setCitation([
      ...citations.filter((citation) => {
        return citation.id !== id;
      }),
    ]);
  };

  //Mise à jour des champs de saisie de citation
  const majTexte = (nvTexte, id) => {
    setCitation(
      citations.map((citation) => {
        if (citation.id === id) {
          citation.texte = nvTexte;
        }
        return citation;
      })
    );
  };
  const majAuteur = (nvAuteur, id) => {
    setCitation(
      citations.map((citation) => {
        if (citation.id === id) {
          citation.auteur = nvAuteur;
        }
        return citation;
      })
    );
  };
  const majImg = (nvImg, id) => {
    setCitation(
      citations.map((citation) => {
        if (citation.id === id) {
          citation.img = nvImg;
        }
        return citation;
      })
    );
  };

  //Ajouter une nouvelle citation
  const addCitationItem = (newInput) => {
    const newCitation = {
      img: newInput.img,
      texte: newInput.texte,
      auteur: newInput.auteur,
      id: uuidv4(),
    };
    setCitation([...citations, newCitation]);
  };

  //Local storage
  useEffect(() => {
    const temp = JSON.stringify(citations);
    localStorage.setItem("citations", temp);
  }, [citations]);
  function recupererCitations() {
    const temp = localStorage.getItem("citations");
    const savedCitations = JSON.parse(temp);
    return savedCitations || [];
  }

  console.log(citations);
  console.log(citShadoks);
  console.log(compilation);

  return (
    <div className="dico">
      <div className="Muriel">
        <h1>Le Dico des citations</h1>
        <AjoutCitation addCitationProps={addCitationItem} />
      </div>
      <Liste
        addCitationProps={addCitationItem}
        citations={citations}
        citShadoks={citShadoks}
        delCitationProps={delCitation}
        majTexte={majTexte}
        majAuteur={majAuteur}
        majImg={majImg}
      />
    </div>
  );
};

export default Dico;
