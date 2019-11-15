import React          from 'react';
import {
    SmartChart,
    setSmartChartsPublicPath,
}                     from 'smartcharts-beta';
import ControlWidgets from './control-widgets.jsx';
import { connect }           from '../../stores/connect';

// import ChartLoader           from 'App/Components/Elements/chart-loader.jsx';
// import MarketIsClosedOverlay from 'App/Components/Elements/market-is-closed-overlay.jsx';
// import Lazy                  from 'App/Containers/Lazy';
// import Digits                from 'Modules/Contract/Components/Digits';
// import TopWidgets            from '../../SmartChart/Components/top-widgets.jsx';
// import FormLayout            from '../Components/Form/form-layout.jsx';
// import { symbolChange }      from '../../SmartChart/Helpers/symbol';
// import AllMarkers            from '../../SmartChart/Components/all-markers.jsx';

const getUrlBase = (path = '') => {
    const l = window.location;

    if (!/^\/(br_|bot)/.test(l.pathname)) return path;

    return `/${l.pathname.split('/')[1]}${/^\//.test(path) ? path : `/${path}`}`;
};

setSmartChartsPublicPath(getUrlBase('/js/smartcharts/'));

class Chart extends React.Component {

    chartControlsWidgets = () => (
        <ControlWidgets
            updateChartType={this.props.updateChartType}
            updateGranularity={this.props.updateGranularity}
        />
    );

    // bottomWidgets = ({ digits, tick }) => (
    //     <ChartBottomWidgets digits={digits} tick={tick} />
    // );

    render() {
        const {
            show_digits_stats,
            main_barrier,
            // should_refresh,
            // resetRefresh,
            chart_type,
            is_mobile,
            granularity,
            wsSendRequest,
            wsForget,
            wsForgetStream,
            wsSubscribe,
            settings,
            symbol,
            is_socket_opened,

        } = this.props;

        const barriers = main_barrier ? [main_barrier] : [];
        // smartcharts only way to refresh active-symbols is to reset the connection.
        // const is_socket_opened = this.props.is_socket_opened && !should_refresh;

        // if (should_refresh) {
        //     setImmediate(() => resetRefresh());
        //     // TODO: fix this in smartcharts, it should be possible to update
        //     // active-symbols without re-rendering the entire chart.
        //     return null;
        // }

        return (
            <SmartChart
                id='dbot'
                barriers={barriers}
                // bottomWidgets={ show_digits_stats ? this.bottomWidgets : null}
                showLastDigitStats={show_digits_stats}
                chartControlsWidgets={this.chartControlsWidgets}
                chartStatusListener={(v) => this.props.setChartStatus(!v)}
                chartType={chart_type}
                isMobile={is_mobile}
                granularity={granularity}
                requestAPI={wsSendRequest}
                requestForget={wsForget}
                requestForgetStream={wsForgetStream}
                requestSubscribe={wsSubscribe}
                settings={settings}
                symbol={symbol}
                // topWidgets={ChartTopWidgets}
                isConnectionOpened={is_socket_opened}
            // clearChart={false}
            // importedLayout={chart_layout}
            // onExportLayout={this.props.exportLayout}
            // shouldFetchTradingTimes={!this.props.end_epoch}
            >
                {/* <ChartMarkers /> */}
            </SmartChart>
        );
    }
}

export default connect(({ chart_store, common, ui }) => ({
    is_mobile        : ui.is_mobile,
    is_socket_opened : common.is_socket_opened,
    updateChartType  : chart_store.updateChartType,
    updateGranularity: chart_store.updateGranularity,
    granularity      : chart_store.granularity,
    chart_type       : chart_store.chart_type,
    settings         : {
        assetInformation            : false, // ui.is_chart_asset_info_visible,
        countdown                   : true,
        isHighestLowestMarkerEnabled: false, // TODO: Pending UI,
        lang                        : common.current_language,
        position                    : ui.is_chart_layout_default ? 'bottom' : 'left',
        theme                       : ui.is_dark_mode_on ? 'dark' : 'light',
    },
    last_contract: {
        is_digit_contract: false,
    },
    main_barrier  : chart_store.main_barrier,
    // show_digits_stats: modules.trade.show_digits_stats,
    // contract_type    : modules.trade.contract_type,
    symbol        : chart_store.symbol,
    // exportLayout     : modules.trade.exportLayout,
    setChartStatus: chart_store.setChartStatus,
    // chart_layout     : modules.trade.chart_layout,
    wsForget      : chart_store.wsForget,
    wsForgetStream: chart_store.wsForgetStream,
    wsSendRequest : chart_store.wsSendRequest,
    wsSubscribe   : chart_store.wsSubscribe,
    // should_refresh   : modules.trade.should_refresh_active_symbols,
    // resetRefresh     : modules.trade.resetRefresh,
}))(Chart);
