import React, { useState } from "react";
import style from "./LegBuilderComponent.module.css";
import LegBuilderFormContainer from "../leg-builder-form/leg-builder-form-container/LegBuilderFormContainer";
import LegBuilderItems from "../leg-builder-form/leg-builder-items/LegBuilderItems";

const LegBuilderComponent = () => {
  const [visibility, setVisibility] = useState(false);
  const [show, setShow] = useState(false);
  const [dataSet, setDataSet] = useState([]);
  const [displaySection, setDisplaySection] = useState([]);

  const toggleLegsList = () => {
    setVisibility((prev) => !prev);
  };

  const onAddLegHandler = (data, showSection) => {
    setDataSet([...dataSet, data]);
    setDisplaySection([...displaySection, showSection]);
    setShow(true);
  };

  const deleteHandler = (idx) => {
    setDataSet((dataSet) => dataSet.filter((data, i) => i !== idx));
    setDisplaySection((displaySection) =>
      displaySection.filter((data, i) => i !== idx)
    );
  };

  const copyHandler = (idx) => {
    const tempData = dataSet.filter((data, i) => i === idx);
    setDataSet(dataSet.concat(tempData));
    const tempDisplay = displaySection.filter((data, i) => i === idx);
    setDisplaySection(displaySection.concat(tempDisplay));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const [
      Lots,
      PositionType,
      OptionType,
      ExpiryKind,
      EntryType,
      StrikeParameter,
      EntryByClosestPremiumValue,
    ] = dataSet;

    const res = await fetch(
      "https://leg-builder-feature-default-rtdb.firebaseio.com/database.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Lots,
          PositionType,
          OptionType,
          ExpiryKind,
          EntryType,
          StrikeParameter,
          EntryByClosestPremiumValue,
        }),
      }
    );
    console.log(dataSet);
    alert("Data added Successfully");
  };

  return (
    <>
      <div className={style.addLegsSection}>
        <span className={style.addLegsLabel}>Legs</span>
        <span
          className={`${
            visibility ? style.addLegsButtonactive : style.addLegsButton
          }`}
          onClick={toggleLegsList}
        >
          +Add Legs
        </span>
      </div>

      {visibility && (
        <LegBuilderFormContainer
          toggleVisibility={toggleLegsList}
          onAddLegHandler={onAddLegHandler}
        ></LegBuilderFormContainer>
      )}

      {show &&
        dataSet.map((data, idx) => {
          return (
            <div key={idx} className={style.LegsLegItem}>
              <LegBuilderItems
                data={data}
                showSection={displaySection[idx]}
              ></LegBuilderItems>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={style.cancelSvg}
                onClick={() => {
                  deleteHandler(idx);
                }}
              >
                <path
                  d="M12 .96C5.913.96.96 5.913.96 12c0 6.087 4.953 11.04 11.04 11.04 6.087 0 11.04-4.953 11.04-11.04C23.04 5.913 18.087.96 12 .96Zm4.18 14.54a.484.484 0 0 1 0 .68.492.492 0 0 1-.34.14.492.492 0 0 1-.34-.14L12 12.683 8.5 16.18a.492.492 0 0 1-.34.139.492.492 0 0 1-.34-.14.484.484 0 0 1 0-.68l3.498-3.5L7.82 8.5a.484.484 0 0 1 0-.68.484.484 0 0 1 .682 0L12 11.317l3.5-3.499a.484.484 0 0 1 .68 0 .484.484 0 0 1 0 .682L12.683 12l3.499 3.5Z"
                  fill="#F07777"
                ></path>
              </svg>
              <div
                className={style.legsCopyBtn}
                onClick={() => {
                  copyHandler(idx);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.56 0v1.44l.48.48V.48h3.6v2.88h2.88V9.6h-3.6v.48H12V3.022L8.977 0H4.56Zm4.56.818 2.063 2.062H9.12V.817ZM0 1.92V12h7.44V4.942l-.068-.075-2.88-2.88-.074-.067H0Zm.48.48h3.6v2.88h2.88v6.24H.48V2.4Zm4.08.345L6.615 4.8H4.56V2.745Z"
                    fill="#375A9E"
                  ></path>
                </svg>
              </div>
            </div>
          );
        })}

      {dataSet.length !== 0 && (
        <div className={style.LegsLegItem}>
          <button
            className={`${style.btnPrimary} ${style.btn}`}
            onClick={onSubmitHandler}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default LegBuilderComponent;
