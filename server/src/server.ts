import express, { response } from "express";

const app = express()

app.get('/games', (request, response) => {
  return response.json()
})

app.get('/ads', (request, response) => {
  return response.status(201).json([])
});

app.get('/games/:id/discord', (request, response) => {

  return response.json([])
})

app.listen(3333)