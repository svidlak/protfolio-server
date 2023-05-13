import IRoutes from './IRoutes'

export default interface IAppInit {
    port: number,
    preRouteMiddlewares: any[],
    postRouteMiddlewares: any[],
    routesConfig: IRoutes[]
}
