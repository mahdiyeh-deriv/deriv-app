import React from 'react';
import { Switch } from 'react-router-dom';
import { PlatformContext } from '@deriv/shared';
import { Localize } from '@deriv/translations';
import getRoutesConfig from '../../Constants/routes-config';
import RouteWithSubRoutes from './route-with-sub-routes.jsx';

type TBinaryRoutes = {
    is_logged_in: boolean;
    is_logging_in: boolean;
};

type TPlatformContext = {
    is_appstore?: boolean;
    is_pre_appstore?: boolean;
};

type TRoute = {
    exact?: boolean;
    id?: string;
    icon_component?: string;
    is_invisible?: boolean;
    path?: string;
    icon?: string;
    default?: boolean;
    to?: string;
    component?: React.ReactNode;
    subroutes?: TRoute[];
};

const BinaryRoutes = (props: TBinaryRoutes) => {
    const { is_appstore, is_pre_appstore } = React.useContext<TPlatformContext>(PlatformContext);

    return (
        <React.Suspense
            fallback={
                <div>
                    <Localize i18n_default_text='Loading...' />
                </div>
            }
        >
            <Switch>
                {getRoutesConfig({ is_appstore, is_pre_appstore }).map((route: TRoute) => (
                    <RouteWithSubRoutes key={route.path} {...route} {...props} />
                ))}
            </Switch>
        </React.Suspense>
    );
};

export default BinaryRoutes;
