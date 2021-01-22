import React, {Component, Fragment} from 'react';
import Navigation from './scan/Navigation';

class Scan extends Component{
    render(){
        return(
            <Fragment> 
                <section>
                    {/* Navigation */}
                    <Navigation />
                    {/* Navigation */}
                </section>
            </Fragment>
        )
    };
};

export default Scan;