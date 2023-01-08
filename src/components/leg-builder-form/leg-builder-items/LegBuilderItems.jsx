import React, { useEffect, useState } from "react";
import StrikeTypeData from "../leg-builder-forms-component/StrikeTypeData";
import styles from "./LegBuilderItems.module.css";

const LegBuilderItems = (props) => {
  const [data, setData] = useState(props.data);

  useEffect(()=>{
    setData(props.data)
  },[props.data])

  const onChangeHandler = (e, fieldName) => {
    if (fieldName === "EntryByPremiumRange.LowerRange") {
      setData({
        ...data,
        EntryByPremiumRange: {
          ...data.EntryByPremiumRange,
          LowerRange: e.target.value,
        },
      });
    } else if (fieldName === "EntryByPremiumRange.UpperRange") {
      setData({
        ...data,
        EntryByPremiumRange: {
          ...data.EntryByPremiumRange,
          UpperRange: e.target.value,
        },
      });
    } else {
      setData({ ...data, [fieldName]: e.target.value });
    }
    console.log("xyz",data);
  };

  return (
    <>
      {data && (
        <>
        <div className={styles.formBody}>
          <div className={styles.lotsValue}>
            <label className={styles.lotsLabel}>Lots :</label>
            <div className={styles.lotsInput}>
              <input
                name="Lots"
                type="number"
                min="1"
                defaultValue={data.Lots}
                className={styles.lotsInputNumber}
                onChange={(e) => onChangeHandler(e, "Lots")}
              ></input>
            </div>
          </div>
          <div className={styles.legBuilderSelect}>
            <span className={styles.selectContainer}>
              <select
                defaultValue={data.PositionType}
                name="PositionType"
                onChange={(e) => onChangeHandler(e, "PositionType")}
              >
                <option value="PositionType.Buy">Buy</option>
                <option value="PositionType.Sell">Sell</option>
              </select>
            </span>
          </div>
          {props.showSection === "options" && (
            <>
              <div className={styles.legBuilderSelect}>
                <span className={styles.selectContainer}>
                  <select
                    defaultValue={data.OptionType}
                    name="OptionType"
                    onChange={(e) => onChangeHandler(e, "OptionType")}
                  >
                    <option value="OptionType.Call">Call</option>
                    <option value="OptionType.Put">Put</option>
                  </select>
                </span>
              </div>

              <div className={styles.legBuilderSelect}>
                <span className={styles.selectContainer}>
                  <select
                    defaultValue={data.ExpiryKind}
                    name="ExpiryKind"
                    onChange={(e) => onChangeHandler(e, "ExpiryKind")}
                  >
                    <option value="ExpiryType.Weekly">Weekly</option>
                    <option value="ExpiryType.Monthly">Monthly</option>
                  </select>
                </span>
              </div>

              <div className={styles.legBuilderSelect}>
                <span className={styles.selectContainer}>
                  <select
                    defaultValue={data.EntryType}
                    name="EntryType"
                    onChange={(e) => onChangeHandler(e, "EntryType")}
                  >
                    <option value="EntryType.EntryByStrikeType">
                      Strike Type
                    </option>
                    <option value="EntryType.EntryByPremiumRange">
                      Primium Range
                    </option>
                    <option value="EntryType.EntryByClosestPremium">
                      Closest Premium
                    </option>
                    <option value="EntryType.EntryByStraddleWidth">
                      Straddle Width
                    </option>
                  </select>
                </span>
              </div>

              {data.EntryType === "EntryType.EntryByStrikeType" && (
                <div className={styles.legBuilderSelect}>
                  <span className={styles.selectContainer}>
                    <select
                      defaultValue={data.StrikeParameter}
                      name="StrikeParameter"
                      onChange={(e) => onChangeHandler(e, "StrikeParameter")}
                    >
                      {StrikeTypeData.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>
              )}

              {data.EntryType === "EntryType.EntryByPremiumRange" && (
                <>
                  <div className={styles.lotsValue}>
                    <label className={styles.lotsLabel}>Lower Range</label>
                    <div className={styles.lotsInput}>
                      <input
                        name="LowerRange"
                        type="number"
                        min="1"
                        defaultValue={data.EntryByPremiumRange.LowerRange}
                        className={styles.lotsInputNumber}
                        onChange={(e) =>
                          onChangeHandler(e, "EntryByPremiumRange.LowerRange")
                        }
                      ></input>
                    </div>
                  </div>
                  <div className={styles.lotsValue}>
                    <label className={styles.lotsLabel}>Upper Range</label>
                    <div className={styles.lotsInput}>
                      <input
                        name="UpperRange"
                        type="number"
                        min="1"
                        defaultValue={data.EntryByPremiumRange.UpperRange}
                        className={styles.lotsInputNumber}
                        onChange={(e) =>
                          onChangeHandler(e, "EntryByPremiumRange.UpperRange")
                        }
                      ></input>
                    </div>
                  </div>
                </>
              )}

              {data.EntryType === "EntryType.EntryByClosestPremium" && (
                <div className={styles.lotsValue}>
                  <label className={styles.lotsLabel}>Lower Range</label>
                  <div className={styles.lotsInput}>
                    <input
                      name="EntryByClosestPremiumValue"
                      type="number"
                      min="1"
                      defaultValue={data.EntryByClosestPremiumValue}
                      className={styles.lotsInputNumber}
                      onChange={(e) =>
                        onChangeHandler(e, "EntryByClosestPremiumValue")
                      }
                    ></input>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <div>
          <div>
            <div className={styles.checkBoxContainer5}>
              <input type="checkbox" className={styles.checkBoxInput} id="simpleMomentum"></input>
              <label htmlFor="simplemomentum" className={styles.checkBoxLabel}>Simple Momentum</label>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default LegBuilderItems;
