import React, {Component, Fragment} from 'react';
import Navigation from './scan/Navigation';
import Page from './scan/Page';
import NavEnd from './scan/NavEnd';
import ScanInfo from './scan/ScanInfo';

class Scan extends Component{
    state = {
        imageScan: [
            "../img/scanDeathNote/Ap_00001.jpg",  "../img/scanDeathNote/Bp_00002.jpg",  "../img/scanDeathNote/Cp_00003.jpg",  "../img/scanDeathNote/Dp_00004.jpg",  "../img/scanDeathNote/Ep_00005.jpg",  "../img/scanDeathNote/Fp_00006.jpg",  "../img/scanDeathNote/Gp_00007.jpg",  "../img/scanDeathNote/Hp_00008.jpg",  "../img/scanDeathNote/Ip_00009.jpg",  "../img/scanDeathNote/Jp_00010.jpg",  "../img/scanDeathNote/Kp_00011.jpg",  "../img/scanDeathNote/Lp_00012.jpg",  "../img/scanDeathNote/Mp_00013.jpg",  "../img/scanDeathNote/Np_00014.jpg",  "../img/scanDeathNote/Op_00015.jpg",  "../img/scanDeathNote/Pp_00016.jpg",  "../img/scanDeathNote/Qp_00017.jpg",  "../img/scanDeathNote/Rp_00018.jpg",  "../img/scanDeathNote/Sp_00019.jpg",  "../img/scanDeathNote/Tp_00020.jpg", 
        ],
    }
    allOnePage = (e) =>{
        let imgScan = document.getElementsByClassName("imgScan");
        if(e.target.value === "one_page"){
            for (let i = 0; i < imgScan.length; i++) {
                if (i == 0){
                    imgScan[0].parentElement.style.display = "block";
                } else {
                    imgScan[i].parentElement.style.display = "none";
                }
            }
        } else {
            for (let e = 0; e < imgScan.length; e++) {
                imgScan[e].parentElement.style.display = "block";
            }
        }
    }
    render(){
        return(
            <Fragment> 
                <section className="py-2">
                    {/* Navigation */}
                    <Navigation fctPage={this.allOnePage}/>
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