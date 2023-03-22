import { db } from '../db.js';

export const getList = (_, res) => {
    const query = "SELECT * FROM list";

    db.query(query, (error, data) => {
        if(error) return res.json(error);

        return res.status(200).json({listItems: data.map(item => {
            return {...item, done: item.done === 0 ? false : true}})});
    });
}

export const addListItem = (req, res) => {
    const query = "INSERT INTO list(name, done) VALUES (?)";
    const responseQuery = "SELECT * FROM list";

    const values = [
        req.body.name,
        req.body.done
    ]

    db.query(query, [values], (error) => {
        if(error) return res.json(error);

        db.query(responseQuery, (error, data) => {
            if(error) return res.json(error);
            
            return res.status(200).json({message: "Item adicionado com sucesso.", listItems: data});
        })
    })
}

export const updateListItem = (req, res) => {
    const query = req.body.name ? "UPDATE list SET name = ? WHERE id = ?" : "UPDATE list SET done = ? WHERE id = ?";
    const responseQuery = "SELECT * FROM list";

    const values = req.body.name ? [req.body.name] : [req.body.done];

    db.query(query, [...values, req.params.id], (error) => {
        if(error) return res.json(error);

        db.query(responseQuery, (error, data) => {
            if(error) return res.json(error);

            return res.status(201).json({message: "Item atualizado com sucesso.", listItems: data});
        })
    })
}

export const deleteListItem = (req, res) => {
    const query = "DELETE FROM list WHERE id = ?";
    const responseQuery = "SELECT * FROM list";

    db.query(query, [req.params.id], (error) => {
        if(error) return res.json(error);


        db.query(responseQuery, (error, data) => {
            if(error) return res.json(error);
            
            return res.status(201).json({message: "Item removido com sucesso.", listItems: data});
        })
    })
}