import { match, matchPath, RouteProps } from 'react-router';

type TRoute = {
    path?: string;
    component: React.ComponentType;
    is_authenticated?: boolean;
    getTitle: () => string;
    icon_component?: string;
    routes?: TRoute[];
    default?: boolean;
    is_appstore?: boolean;
    is_pre_appstore?: boolean;
};

type TRouteConfig = TRoute & {
    is_modal?: boolean;
    is_authenticated?: boolean;
};

export const normalizePath = (path: string) => (/^\//.test(path) ? path : `/${path || ''}`); // Default to '/'

export const findRouteByPath = (path: string, routes_config?: TRouteConfig[]): RouteProps | undefined => {
    let result: RouteProps | undefined;

    routes_config?.some(route_info => {
        let match_path: match | null = null;
        try {
            match_path = matchPath(path, route_info);
        } catch (e: unknown) {
            if (/undefined/.test((e as Error).message)) {
                return undefined;
            }
        }

        if (match_path) {
            result = route_info;
            return true;
        } else if (route_info.routes) {
            result = findRouteByPath(path, route_info.routes);
            return result;
        }
        return false;
    });

    return result;
};

export const isRouteVisible = (route?: { is_authenticated: boolean }, is_logged_in?: boolean) =>
    !(route && route.is_authenticated && !is_logged_in);

export const getPath = (route_path: string, params: { [key: string]: string } = {}) =>
    Object.keys(params).reduce((p, name) => p.replace(`:${name}`, params[name]), route_path);
