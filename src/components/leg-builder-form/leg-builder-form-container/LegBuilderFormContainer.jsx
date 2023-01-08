import React, { useState } from "react";
import styles from "./LegBuilderFormContainer.module.css";
import HeaderComponent from "../leg-builder-forms-component/HeaderComponent";
import BodyComponent from "../leg-builder-forms-component/BodyComponent";

const LegBuilderFormContainer = (props) => {
  const [showSection, setShowSection] = useState("options");

  const onClickHandler = (e) => {
    setShowSection(e);
  };

  const onAddLegHandler =(e,showSection) =>{
    props.onAddLegHandler(e,showSection)
  }

  return (
    <div className={styles.legBuilderFormContainer}>
      <HeaderComponent onClick={onClickHandler}></HeaderComponent>
      <BodyComponent
        showSection={showSection}
        onCancelHandler={props.toggleVisibility}
        onAddLegHandler={(e)=>{onAddLegHandler(e,showSection)}}
      ></BodyComponent>
    </div>
  );
};

export default LegBuilderFormContainer;
