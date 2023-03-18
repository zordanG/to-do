import { useState } from "react";
import { IconButton } from '../../components/ui-button/view';
import { Input } from "../../components/ui-input/view";
import './style.sass';

function ListItem(props) {
    const [edit, setEdit] = useState(props.edit);
    const [name, setName] = useState(props.name);
    const oldName = props.name;
    
  return (
    <div className="list-item">
        {edit === true ?
        <form className="edit-item" onSubmit={(e) => {
            e.preventDefault();
            if(props.function && name.length > 0) {
                props.function({"name": name, "oldName": oldName});
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
            <div className="item-text">
                {name}
            </div>
            <IconButton
                name="pencil"
                color="button-light"
                size="sm"
                function={() => {
                setEdit(true);
            }} />
        </>
        }
    </div>
  );
}

export {ListItem};
