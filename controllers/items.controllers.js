import {sqlConnect, sql} from '../utils/sql.js';

export const getItems = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool.request().query('SELECT * FROM items');
    // console.log(data);
    res.json(data.recordset);
};

export const getItem = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool
    .request()
    .input("", sql.Int, req.params.id)
    .query('SELECT * FROM items where id = @myId');
    // console.log(data);
    res.json(data.recordset);
};

export const postItem = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool
    .request()
    .input('name', sql.NVarChar, req.body.name)
    .input('price', sql.Decimal, req.body.price)
    .query('INSERT INTO items (name, price) VALUES (@name, @price)');
    // console.log(data);
    res.json(data.recordset);
}

export const putItem = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool
    .request()
    .input('id', sql.Int, req.params.id)
    .input('name', sql.NVarChar, req.body.name)
    .input('price', sql.Decimal, req.body.price)
    .query('UPDATE items SET name = @name, price = @price WHERE id = @id');
    // console.log(data);
    res.json(data.recordset);
}