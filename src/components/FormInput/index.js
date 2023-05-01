import {useRef} from "react";
import Input from "../UI/Input";

import styles from './index.module.css'

const FormInput = () => {
  const inputValue = useRef()

  return (
    <form
      action=""
      className={styles.form}
    >
      <Input ref={inputValue}/>
    </form>
  )
}

export default FormInput