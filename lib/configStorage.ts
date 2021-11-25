import express from 'express'
interface config {
    backend: string
    name?: string
}
export default class ConfigStorage {
    public configs: config[] = []
    constructor () {}

    public async newRouter() {
        return async (req: express.Request, res: express.Response) => {
            this.configs.push({
                backend: req.body.backend,
                name: req.body.name
            })
        }
    }
}