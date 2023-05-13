import express from 'express'

export default interface IRoutes {
    prefix: string,
    routes: express.Router[]
}
