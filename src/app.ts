import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
	next()
})

app.post('/', (req, res, next) => {
	next()
})

app.use((req, res, next) => {
	res.status(404).json({"result": "ENDPOINT NOT EXIST"})
})

export default app;