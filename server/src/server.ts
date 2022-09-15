import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient({
  log: ['query']
})


app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany()

  return response.json(games)
});

app.get('/ads', (request, response) => {
  return response.status(201).json([])
});

app.get('/games/:id/ads', (request, response) => {
  return response.json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 4, name: "Anúncio 4" },
    { id: 5, name: "Anúncio 5" },
    { id: 6, name: "Anúncio 6" },
  ])
});

app.listen(3333)