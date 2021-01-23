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
                };
            };
        } else {
            for (let e = 0; e < imgScan.length; e++) {
                imgScan[e].parentElement.style.display = "block";
            };
        };
    };
    numberFunction = (e) => {
        let imgScan = document.getElementsByClassName("imgScan");
        for (let i = 0; i < 20; i++) {
            if(e.target.value == 1){
                imgScan[i].parentElement.style.display = "none";
                imgScan[0].parentElement.style.display = "block";
            } else if(e.target.value == 2){
                imgScan[i].parentElement.style.display = "none";
                imgScan[1].parentElement.style.display = "block";
            }  else if(e.target.value == 3){
                imgScan[i].parentElement.style.display = "none";
                imgScan[2].parentElement.style.display = "block";
            }  else if(e.target.value == 4){
                imgScan[i].parentElement.style.display = "none";
                imgScan[3].parentElement.style.display = "block";
            }  else if(e.target.value == 5){
                imgScan[i].parentElement.style.display = "none";
                imgScan[4].parentElement.style.display = "block";
            }  else if(e.target.value == 6){
                imgScan[i].parentElement.style.display = "none";
                imgScan[5].parentElement.style.display = "block";
            }  else if(e.target.value == 7){
                imgScan[i].parentElement.style.display = "none";
                imgScan[6].parentElement.style.display = "block";
            }  else if(e.target.value == 8){
                imgScan[i].parentElement.style.display = "none";
                imgScan[7].parentElement.style.display = "block";
            }  else if(e.target.value == 9){
                imgScan[i].parentElement.style.display = "none";
                imgScan[8].parentElement.style.display = "block";
            }  else if(e.target.value == 10){
                imgScan[i].parentElement.style.display = "none";
                imgScan[9].parentElement.style.display = "block";
            }  else if(e.target.value == 11){
                imgScan[i].parentElement.style.display = "none";
                imgScan[10].parentElement.style.display = "block";
            }  else if(e.target.value == 12){
                imgScan[i].parentElement.style.display = "none";
                imgScan[11].parentElement.style.display = "block";
            }  else if(e.target.value == 13){
                imgScan[i].parentElement.style.display = "none";
                imgScan[12].parentElement.style.display = "block";
            }  else if(e.target.value == 14){
                imgScan[i].parentElement.style.display = "none";
                imgScan[13].parentElement.style.display = "block";
            }  else if(e.target.value == 15){
                imgScan[i].parentElement.style.display = "none";
                imgScan[14].parentElement.style.display = "block";
            }  else if(e.target.value == 16){
                imgScan[i].parentElement.style.display = "none";
                imgScan[15].parentElement.style.display = "block";
            }  else if(e.target.value == 17){
                imgScan[i].parentElement.style.display = "none";
                imgScan[16].parentElement.style.display = "block";
            }  else if(e.target.value == 18){
                imgScan[i].parentElement.style.display = "none";
                imgScan[17].parentElement.style.display = "block";
            }  else if(e.target.value == 19){
                imgScan[i].parentElement.style.display = "none";
                imgScan[18].parentElement.style.display = "block";
            }  else if(e.target.value == 20){
                imgScan[i].parentElement.style.display = "none";
                imgScan[19].parentElement.style.display = "block";
            };
        };
    };
    btnPrev = (e) => {
        let imgScan = document.getElementsByClassName("imgScan");

    };
    btnNext = () => {
        let imgScan = document.getElementsByClassName("imgScan");
        for (let i = 0; i < imgScan.length; i++) {
            if(imgScan[i].parentElement.style.display == "block"){
                const count = i;
                console.log(count+1);
                imgScan[i+1].parentElement.style.display = "block";
                imgScan[i].parentElement.style.display = "none";
            };
        };
    };
    render(){
        return(
            <Fragment> 
                <section className="py-2">
                    {/* Navigation */}
                    <Navigation fctPage={this.allOnePage} fctNumber={this.numberFunction} fctPrev={this.btnPrev} fctNext={this.btnNext}/>
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