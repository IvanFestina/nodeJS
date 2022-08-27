import cors from "cors";

class UserController {
    async createUser(req, res) {
        try {
            const {name, surname} = req.body
            const client = await pool.connect()
            const newPerson = await pool.query
            (
                `INSERT INTO person (name, surname) 
                values ($1, $2) RETURNING *`, [name, surname]
            )
            res.json(newPerson)
            client.release();
        } catch (err) {
            res.status(400)
            console.error(err);
            res.send("ERROR: " + err);
        }
    }

    async getUsers(req, res) {

    }

    async getOneUser(req, res) {

    }

    async updateUser(req, res) {

    }

    async deleteUser(req, res) {

    }
}

export default new UserController()

