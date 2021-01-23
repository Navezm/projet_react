import React, {Component, Fragment} from 'react';

class Page extends Component{
    render(){
        return(
            <Fragment>
                <section className="container bg-white">
                    <div className="text-center py-lg-4 py-2">
                        <img src={this.props.image} value={this.props.value} className="w-100" alt=""/>
                    </div>
                </section>
            </Fragment>
        );
    };
};

export default Page;