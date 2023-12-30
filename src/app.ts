import express from "express";

const app = express();

app.get('/', (req, res) => {
	res.status(404).send("<b>GET REQUEST NOT SUPPORTED</b>")
})

app.post('/', (req, res) => {
	res.status(404).json({"result": "POST REQUEST NOT SUPPORTED ON ROOT"})
})

export default app;