import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GiQuill, GiCheckMark } from "react-icons/gi";

const CitationItem = (props) => {
  const { texte, auteur, img, id } = props.citation;

  const [edition, setEdition] = useState(true);

  /*   const [modifCitation, setModifCitation] =useState({
    texte:"",
    auteur:"",
    img:"",
    id:"",
  }) */

  const gererEdition = () => {
    setEdition(!edition);
  };

  const validerEdition = (e) => {
    e.preventDefault()
    if (!texte.trim() || !auteur.trim()) {
      alert("Une citation et un auteur sont requis.")
    }else {
    setEdition(true);
    }
  };

  let modeDico = {};
  let modeEdition = {};

  if (edition) {
    modeEdition.display = "none";
  } else {
    modeDico.display = "none";
  }

  return (
    <div>
      <hr />
      <li className="citation">
        <div style={modeDico} className="citation">
          <p className="citation-txt">" {texte} "</p>
          <p className="citation-auteur">{auteur}</p>
        </div>

        <div style={modeEdition}>
            <input
              type="texte"
              name="texte"
              value={texte}
              onChange={(e) => {
                props.majTexte(e.target.value, id);
              }}
            />
            <input
              type="texte"
              value={auteur}
              name="auteur"
              onChange={(e) => {
                props.majAuteur(e.target.value, id);
              }}
            />
            <input
              type="texte"
              value={img}
              name="img"
              onChange={(e) => {
                props.majImg(e.target.value, id);
              }}
            />

            <button className="btn-valid" onClick={validerEdition}>
              <GiCheckMark style={{ color: "green" }} />
            </button>

        </div>
        <div className="citation-btn">
          <button className="btn-modif" onClick={gererEdition}>
            <GiQuill />
          </button>
          <button
            className="btn-suppr"
            onClick={() => props.delCitationProps(id)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </li>
    </div>
  );
};

export default CitationItem;
