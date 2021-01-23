import React, {Component, Fragment} from 'react';
import Navigation from './scan/Navigation';
import Page from './scan/Page';
import NavEnd from './scan/NavEnd';
import ScanInfo from './scan/ScanInfo';

class Scan extends Component{
    state = {
        imageScan: [
            "../img/scanDeathNote/p_00001.jpg",  "../img/scanDeathNote/p_00002.jpg",  "../img/scanDeathNote/p_00003.jpg",  "../img/scanDeathNote/p_00004.jpg",  "../img/scanDeathNote/p_00005.jpg",  "../img/scanDeathNote/p_00006.jpg",  "../img/scanDeathNote/p_00007.jpg",  "../img/scanDeathNote/p_00008.jpg",  "../img/scanDeathNote/p_00009.jpg",  "../img/scanDeathNote/p_00010.jpg",  "../img/scanDeathNote/p_00011.jpg",  "../img/scanDeathNote/p_00012.jpg",  "../img/scanDeathNote/p_00013.jpg",  "../img/scanDeathNote/p_00014.jpg",  "../img/scanDeathNote/p_00015.jpg",  "../img/scanDeathNote/p_00016.jpg",  "../img/scanDeathNote/p_00017.jpg",  "../img/scanDeathNote/p_00018.jpg",  "../img/scanDeathNote/p_00019.jpg",  "../img/scanDeathNote/p_00020.jpg", 
        ],
        value: [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"
        ]
    }
    render(){
        return(
            <Fragment> 
                <section className="py-2">
                    {/* Navigation */}
                    <Navigation />
                    {/* Navigation */}

                    {/* Lecture */}
                    {
                        this.state.imageScan.map((elem) => {
                            return <Page image={elem} />
                        })
                    }
                    {/* Lecture */}

                    {/* NavEnd */}
                    <NavEnd />
                    {/* NavEnd */}

                    {/* Info Scan */}
                    <ScanInfo />
                    {/* Info Scan */}
                </section>
            </Fragment>
        )
    };
};

export default Scan;