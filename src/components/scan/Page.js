import React, {Component, Fragment} from 'react';

class Page extends Component{
    render(){
        return(
            <Fragment>
                <section className="container bg-white">
                    <div className="text-center py-5">
                        <img src={this.props.image} value={this.props.value} alt=""/>
                    </div>
                </section>
            </Fragment>
        );
    };
};

export default Page;