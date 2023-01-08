import React, {useState} from 'react'
import styles from "./HeaderComponent.module.css"

const HeaderComponent = (props) => {

  const [checked, setChecked] = useState("options");

  const handleChange = (e) => {
    setChecked(e.target.value);
    props.onClick(e.target.value);
  };

  return (
    <div className={styles.toggleContainer}>
        <label className={styles.toggleLabel}>Select segments</label>
        <div className={styles.toggleContainer}>
          <input
            id="futures"
            type="radio"
            name="selectOption"
            value="futures"
            onChange={handleChange}
            className={styles.toggleInput}
          ></input>
          <label
            htmlFor="futures"
            className={`${styles.toggleInputLabelLeft} ${styles.toggleOption} ${
              checked === "futures" ? styles.active : ""
            }`}
          >
            Futures
          </label>
          <input
            id="options"
            type="radio"
            name="selectOption"
            value="options"
            onChange={handleChange}
            className={styles.toggleInput}
          ></input>
          <label
            htmlFor="options"
            className={`${styles.toggleInputLabelRight} ${
              styles.toggleOption
            } ${checked === "options" ? styles.active : ""}`}
          >
            Options
          </label>
        </div>
      </div>
  )
}

export default HeaderComponent
