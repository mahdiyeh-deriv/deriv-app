import { Tabs } from 'deriv-components';
import React from 'react';
import Flyout from './flyout.jsx';
import Chart from './chart/chart.jsx';
import { connect } from '../stores/connect';
import { translate } from '../utils/lang/i18n';
import '../assets/sass/main-content.scss';
import '../assets/sass/scratch/workspace.scss';
import '../assets/sass/scratch/toolbox.scss';

class MainContent extends React.Component {
    componentDidMount(){
        if (this.props.active_index === 0) {
            this.props.componentDidUpdate();
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.active_index !== prevProps.active_index) {
            this.props.componentDidUpdate();
        }
    }

    render() {
        const { active_index, onTabItemClick } = this.props;
        return (
            <Tabs
                className='bot_workspace'
                active_index={active_index}
                onTabItemClick={onTabItemClick}
                bottom
                fit_content
            >
                <div label={translate('Workspace')}>
                    <div id='scratch_div'>
                        <Flyout />
                    </div>
                </div>
                <div label={translate('Chart')} >
                    <Chart />
                </div>
            </Tabs>);
    }
}
export default connect(({ main_content }) => ({
    active_index      : main_content.active_index,
    componentDidUpdate: main_content.componentDidUpdate,
    onTabItemClick    : main_content.onTabItemClick,
}))(MainContent);

