import ModulesStore from './Modules';
import ProfitTableStore from './Modules/Profit/profit-store';
import StatementStore from './Modules/Statement/statement-store';
import type { TStores } from '@deriv/stores';

export type TRootStore = TStores & {
    active_symbols: Record<string, any>;
    chart_barrier_store: Record<string, any>;
    contract_replay: Record<string, any>;
    gtm: Record<string, any>;
    modules: {
        profit_table: ProfitTableStore;
        statement: StatementStore;
    };
    notifications: Record<string, any>;
    pushwoosh: Record<string, any>;
    rudderstack: Record<string, any>;
};

export default class RootStore {
    public active_symbols: Record<string, any>;
    public chart_barrier_store: Record<string, any>;
    public client: Record<string, any>;
    public common: Record<string, any>;
    public contract_replay: Record<string, any>;
    public contract_trade: Record<string, any>;
    public gtm: Record<string, any>;
    public modules: Record<string, any>;
    public notifications: Record<string, any>;
    public portfolio: Record<string, any>;
    public pushwoosh: Record<string, any>;
    public rudderstack: Record<string, any>;
    public ui: Record<string, any>;

    constructor(core_store: TRootStore) {
        this.active_symbols = core_store.active_symbols;
        this.chart_barrier_store = core_store.chart_barrier_store;
        this.client = core_store.client;
        this.common = core_store.common;
        this.contract_replay = core_store.contract_replay;
        this.contract_trade = core_store.contract_trade;
        this.gtm = core_store.gtm;
        this.modules = new ModulesStore(this);
        this.notifications = core_store.notifications;
        this.portfolio = core_store.portfolio;
        this.pushwoosh = core_store.pushwoosh;
        this.rudderstack = core_store.rudderstack;
        this.ui = core_store.ui;
    }
}
