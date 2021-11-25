import express from 'express'
import ConfigStorage from './configStorage'
import httpProxy from 'http-proxy'

export const getProxyHandler = async () => {
    const router = express.Router()
    const configStorage = new ConfigStorage()
    router.post('/new', await configStorage.newRouter())
    router.all('/*', async () => {
        httpProxy.createProxyServer()
    })
    return router
}