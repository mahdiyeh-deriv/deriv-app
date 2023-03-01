import React from 'react';
import { withRouter, Redirect, RouteComponentProps } from 'react-router-dom';
import {
    Div100vhContainer,
    VerticalTab,
    DesktopWrapper,
    MobileWrapper,
    FadeWrapper,
    PageOverlay,
    SelectNative,
    Loading,
} from '@deriv/components';
import { getSelectedRoute } from '@deriv/shared';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import { TRoute } from '../Types';
import { TRootStore } from 'Stores/index';
import 'Sass/app/modules/reports.scss';

type TList = {
    value: React.ComponentType | typeof Redirect;
    default?: boolean;
    label: string;
    icon?: string;
    path?: string;
};

type TReports = {
    history: RouteComponentProps['history'];
    is_logged_in: boolean;
    is_logging_in: boolean;
    is_from_derivgo: boolean;
    is_visible: boolean;
    location: RouteComponentProps['location'];
    routeBackInApp: (history: RouteComponentProps['history'], additional_platform_path?: string[]) => void;
    routes: TRoute[];
    setTabIndex: (value: number) => void;
    setVisibilityRealityCheck: (value: number) => void;
    tab_index: number;
    toggleReports: (value: boolean) => void;
};

const Reports = ({
    history,
    is_logged_in,
    is_logging_in,
    is_from_derivgo,
    is_visible,
    location,
    routeBackInApp,
    routes,
    setTabIndex,
    setVisibilityRealityCheck,
    tab_index,
    toggleReports,
}: TReports) => {
    React.useEffect(() => {
        toggleReports(true);
        return () => {
            setVisibilityRealityCheck(1);
            toggleReports(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onClickClose = () => routeBackInApp(history);

    const handleRouteChange = (e: React.ChangeEvent<HTMLSelectElement>) => history.push(e.target.value);

    const menu_options = () => {
        const options: TList[] = [];

        routes.forEach(route => {
            options.push({
                default: route.default,
                icon: route.icon_component,
                label: route.getTitle(),
                value: route.component,
                path: route.path,
            });
        });

        return options;
    };

    const selected_route = getSelectedRoute({ routes, pathname: location.pathname });

    if (!is_logged_in && is_logging_in) {
        return <Loading is_fullscreen />;
    }
    return (
        <FadeWrapper is_visible={is_visible} className='reports-page-wrapper' keyname='reports-page-wrapper'>
            <div className='reports'>
                <PageOverlay header={localize('Reports')} onClickClose={onClickClose} is_from_app={is_from_derivgo}>
                    <DesktopWrapper>
                        <VerticalTab
                            is_floating
                            current_path={location.pathname}
                            is_routed
                            is_full_width
                            setVerticalTabIndex={setTabIndex}
                            vertical_tab_index={selected_route.default ? 0 : tab_index}
                            list={menu_options()}
                        />
                    </DesktopWrapper>
                    <MobileWrapper>
                        <Div100vhContainer className='reports__mobile-wrapper' height_offset='80px'>
                            <SelectNative
                                className='reports__route-selection'
                                list_items={menu_options().map(option => ({
                                    text: option.label,
                                    value: option.path ?? '',
                                }))}
                                value={selected_route.path ?? ''}
                                should_show_empty_option={false}
                                onChange={handleRouteChange}
                                label={''}
                                hide_top_placeholder={false}
                            />
                            {selected_route?.component && (
                                <selected_route.component icon_component={selected_route.icon_component} />
                            )}
                        </Div100vhContainer>
                    </MobileWrapper>
                </PageOverlay>
            </div>
        </FadeWrapper>
    );
};

export default withRouter(
    connect(({ client, common, ui }: TRootStore) => ({
        is_logged_in: client.is_logged_in,
        is_logging_in: client.is_logging_in,
        is_from_derivgo: common.is_from_derivgo,
        is_visible: ui.is_reports_visible,
        routeBackInApp: common.routeBackInApp,
        setVisibilityRealityCheck: client.setVisibilityRealityCheck,
        setTabIndex: ui.setReportsTabIndex,
        tab_index: ui.reports_route_tab_index,
        toggleReports: ui.toggleReports,
    }))(Reports)
);
