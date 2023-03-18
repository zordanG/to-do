import { useState } from "react";
import { ListItem } from "../../components/list-item/view";
import { IconButton } from '../../components/ui-button/view';
import { Input } from "../../components/ui-input/view";
import './style.sass';

function List() {
  const [items, setItems] = useState([]);
  const [newItemInput, setNewItemInput] = useState("hide");
  const [newItemValue, setNewItemValue] = useState("");

  return (
    <div className="list-container">
        <div className="list-info dark">
            <h1 className='title'> Lista To Do </h1>
            <IconButton
              name="add-circle"
              color="button-dark"
              function={() => {
                setNewItemInput("show");
            }}/>
        </div>
        <div className="list-content">
          { (items.length > 0 || newItemInput === "show") ? items.map((item) => {
            return (
              <ListItem name={item.name} edit={item.edit} key={item.name} function={(content) => {
                setItems(items.map((i) => {
                  if (i.name === content.oldName){
                    return {...i, "name": content.name};
                  }
                  return(i);
                }));
              }}/>
            )
          }) : <h1 className="empty"> Lista Vazia </h1>}
          <div className={"new-item " + newItemInput}>
            <form className="new-item-form" onSubmit={(e) => {
              e.preventDefault();
              if(newItemValue.length > 0){
                setItems([...items, {"name": newItemValue, "edit": false}]);
              }
              setNewItemValue("");
            }}>
              <Input
                placeholder="Novo item"
                value={newItemValue}
                function={(e) => {
                  setNewItemValue(e.target.value);
              }}/>
              <IconButton
                name="checkmark"
                color="button-light"
                type="submit"
                size="sm"
              />
            </form>
            <IconButton
              name="close"
              color="button-light"
              size="sm"
              function={() => {
                setNewItemInput("hide");
                setNewItemValue("");
            }}/>
          </div>
        </div>
    </div>
  );
}

export default List;
