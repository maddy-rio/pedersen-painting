import { Router } from 'express'


const router = Router()

router.get('/', (req, res) => {
  res.send('Welcome to the home page')
})

router.get('/about', (req, res) => {
  res.send('Welcome to the about page')
})

router.get('/services', (req, res) => {
  res.send('Welcome to the shop page')
})

router.get('/work', (req, res) => {
  res.send('Welcome to the shop page')
})

router.get('/customers', (req, res) => {
  res.send('Welcome to the customers page')
})

router.get('/contact', (req, res) => {
  res.send('Welcome to the contact page')
})


export default router
