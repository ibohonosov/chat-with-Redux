import classes from "./Dialogs.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const [arr, setArr] = useState(props.messages);
  const [value, setValue] = useState("");

  useEffect(() => {
    setArr(props.messages);
  }, [props.messages]);
  
  const result = arr.map((element, index) => {
    return <Message  element={element} index={index} remove={remove}/> 
  });

  function remove(index) {
    setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
    props.setMessage([...arr.slice(0, index), ...arr.slice(index + 1)]);
  }

  let onTextChange = (e) => {
    setValue(e.target.value);
  };

  let newSendMessage = () => {
    if (value.length > 0) {
    setArr([...arr, value]);
    props.setMessage([...arr, value]);
    setValue("");
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper_chat}>{result}</div>
      <div className={classes.inputSubmit}>
        <input value={value} onChange={onTextChange} />
        <FontAwesomeIcon
          className={classes.icon}
          onClick={newSendMessage}
          icon={faPaperPlane}
        />
      </div>
    </div>
  );
};

export default Dialogs;
