import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';

const layout = (props) => (
    <Auxillary>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;