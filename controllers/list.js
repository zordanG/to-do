import { db } from '../db';

export const getList = (_, res) => {
    const query = "SELECT * FROM list";

    db.query(query, (error, data) => {
        if(error) return res.json(error);

        return res.status(200).json(data);
    });
}

export const addListItem = (req, res) => {
    const query = "INSERT INTO list(item, done) VALUES (?)";

    const values = [
        req.body.item,
        req.body.done
    ]

    db.query(q, [values], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Item adicionado com sucesso.");
    })
}

export const updateListItem = (req, res) => {
    const query = "UPDATE list SET 'item' = ?, 'done' = ?, 'order' = ? WHERE 'id' = ?";

    const values = [
        req.body.item,
        req.body.done,
        req.body.order
    ]

    db.query(q, [...values, req.params.id], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Item autalizado com sucesso.");
    })
}

export const deleteListItem = (req, res) => {
    const query = "DELETE FROM list WHERE 'id' = ?";

    db.query(q, [req.params.id], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Item removido com sucesso.");
    })
}