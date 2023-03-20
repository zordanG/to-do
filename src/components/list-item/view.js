import { useState } from "react";
import { IconButton } from '../../components/ui-button/view';
import { Input } from "../../components/ui-input/view";
import './style.sass';

function ListItem(props) {
    const [edit, setEdit] = useState(props.item.edit);
    const [name, setName] = useState(props.item.name);
    const [done, setDone] = useState(props.item.done);
    const [id] = useState(props.item.id);
    
  return (
    <div className="list-item">
        {edit === true ?
        <form className="edit-item" onSubmit={(e) => {
            e.preventDefault();
            if(props.submit && name.length > 0) {
                props.submit({"name": name, "id": id});
                setEdit(false)
            }
        }}>
            <Input value={name} function={(e) => {
                setName(e.target.value);
            }}/>
            <IconButton
                name="checkmark"
                color="button-light"
                type="submit"
                size="sm"
            />
        </form>
        : <>
            <div className={done === true ? "item-text done" : "item-text"} onClick={() => {
                if(props.click) {
                    props.click({"id": id, "done": !done});
                    setDone(!done);
                }
            }}>
                {name}
            </div>
            {done === true ? 
                <IconButton
                    name={"close"}
                    color="button-light"
                    size="sm"
                    function={() => {
                    if(props.delete){
                        props.delete({"id": id});
                    }
                }} />
                : <IconButton
                    name={"pencil"}
                    color="button-light"
                    size="sm"
                    function={() => {
                    setEdit(true);
                }} />
            }
        </>
        }
    </div>
  );
}

export {ListItem};
