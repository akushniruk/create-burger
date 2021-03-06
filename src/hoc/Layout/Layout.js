import React, {Component} from 'react';
import Auxillary from '../Auxillary/Auxillary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerCloseHandler = () => {
        // this.setState({ showSideDrawer: !showSideDrawer }); - watch on next line
        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render () {
        return (
            <Auxillary>
                <Toolbar click={this.sideDrawerCloseHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxillary>
        );
    }
} 

export default Layout;
