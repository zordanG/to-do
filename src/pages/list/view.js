import { useState, useEffect } from "react";
import { ListItem } from "../../components/list-item/view";
import { IconButton } from '../../components/ui-button/view';
import { Input } from "../../components/ui-input/view";
import api from "../../api";
import './style.sass';

function List() {
  const [items, setItems] = useState([]);
  const [newItemInput, setNewItemInput] = useState("hide");
  const [newItemValue, setNewItemValue] = useState("");

  useEffect(()=> {
    api.get("/list")
      .then((response) => {
        setItems(response.data.listItems)
    })
  }, []);

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
        {console.log(items)}
        { (items.length > 0 || newItemInput === "show") ?
          items.map((item) => {
            return (
              <ListItem
                item={item}
                key={item.name}
                submit={(content) => {
                  setItems(items.map((i) => {
                    if (i.id === content.id){
                      api.patch(`/list/${content.id}`, {name: content.name}).then(response => setItems(response.data.listItems));
                    }
                    return(i);
                }))}}
                click={(content) => {
                  setItems(items.map((i) => {
                    if (i.id === content.id){
                      api.patch(`/list/${content.id}`, {done: content.done}).then(response => setItems(response.data.listItems));
                    }
                    return(i);
                  }))
                }}
                delete={(content) => {
                  api.delete(`/list/${content.id}`).then((response => setItems(response.data.listItems)));
                }}
          />
        )}) : <h1 className="empty"> Lista Vazia </h1>}
        <div className={"new-item " + newItemInput}>
          <form className="new-item-form" onSubmit={(e) => {
            e.preventDefault();
            if(newItemValue.length > 0){
              api.post(`/list`, {name: newItemValue, done: false}).then(response => setItems(response.data.listItems));
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
