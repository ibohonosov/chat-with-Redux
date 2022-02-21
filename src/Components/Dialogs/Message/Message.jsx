import classes from './Message.module.css'

const Message = (props) => {
    
  let data = new Date();
  let hour = data.getHours();
  let min = data.getMinutes();

    return (
        <div className={classes.messages}>
        <span className={classes.messagesEl} key={props.index} onClick={() => props.remove(props.index)}>
          {props.element}
        </span>
        <span className={classes.time}>
          {hour}:{min}
        </span>
      </div>
    )
}

export default Message;