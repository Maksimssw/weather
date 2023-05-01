import {useRef} from "react";
import Input from "../UI/Input";

import styles from './index.module.css'
import Button from "../UI/Button";

const FormInput = () => {
  const inputValue = useRef()

  return (
    <section className='container'>
      <form
        action=""
        className={styles.form}
      >
        <Input ref={inputValue}/>
        <Button></Button>
      </form>
    </section>
  )
}

export default FormInput