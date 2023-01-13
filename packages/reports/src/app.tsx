import React from 'react';
import Routes from 'Containers/routes.jsx';
import { MobxContentProvider } from 'Stores/connect';
import 'Sass/app.scss';
import initStore from './init-store'; // eslint-disable-line import/extensions
import RootStore from './Stores/index';

type TAppProps = {
    passthrough: {
        root_store: RootStore;
        WS: Record<string, any>;
    };
};

const App = ({ passthrough }: TAppProps) => {
    const [root_store] = React.useState(initStore(passthrough.root_store, passthrough.WS));

    return (
        <MobxContentProvider store={root_store}>
            <React.Fragment>
                <Routes />
            </React.Fragment>
        </MobxContentProvider>
    );
};

export default App;
