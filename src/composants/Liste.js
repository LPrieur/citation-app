import React from "react";
import CitationItem from "./CitationItem";
import CitationsShadok from "./CitationsShadok";

const Liste = props => {
  return (
    <ul>
      {props.citations.map(citation => (
        <CitationItem 
            citation={citation}
            key={citation.id}
            delCitationProps={props.delCitationProps}
            majTexte={props.majTexte}
            majAuteur={props.majAuteur}
            majImg={props.majImg}
        />
      ))}
      {props.citShadoks.map(citShadok => (
      <CitationsShadok 
        citShadok={citShadok}
        key={citShadok.id}
      />
      ))}
    </ul>
  );
};

export default Liste;
