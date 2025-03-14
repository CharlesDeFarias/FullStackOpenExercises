//todo:change name of component and have it handle the actual status code from the error and response objects.
const Notification = ({ msg, status }) => {
    if (status === null || msg === "") {
      return null
    }else{
      const statusClass = status === 200 ? "success" : "error"
      return (
        <div className={statusClass}>
          {msg}
        </div>
      )
    }
  }

  export default Notification