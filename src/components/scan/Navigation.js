import React, {Component, Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfo} from '@fortawesome/free-solid-svg-icons';

class Navigation extends Component{
    render(){
        return(
            <Fragment>
                <div className="div_nav_scan container mt-4 rounded-top">
                    <div className="row py-1">
                        <div className="col-lg-6 col-sm-12">
                            <select className="mx-1 rounded p-1" name="chapter" id="">
                                <option value="">Chapitre : 20</option>
                                <option value="">Chapitre : 19</option>
                                <option value="">Chapitre : 18</option>
                                <option value="">Chapitre : 17</option>
                                <option value="">Chapitre : 16</option>
                                <option value="">Chapitre : 15</option>
                                <option value="">Chapitre : 14</option>
                                <option value="">Chapitre : 13</option>
                                <option value="">Chapitre : 12</option>
                                <option value="">Chapitre : 11</option>
                                <option value="">Chapitre : 10</option>
                                <option value="">Chapitre : 9</option>
                                <option value="">Chapitre : 8</option>
                                <option value="">Chapitre : 7</option>
                                <option value="">Chapitre : 6</option>
                                <option value="">Chapitre : 5</option>
                                <option value="">Chapitre : 4</option>
                                <option value="">Chapitre : 3</option>
                                <option value="">Chapitre : 2</option>
                                <option value="">Chapitre : 1</option>
                            </select>
                            <select className="mx-1 rounded p-1" name="page" id="">
                                <option value="one_page">One Page</option>
                                <option value="all_page">All Page</option>
                            </select>
                            <a className="text-dark mx-2 rounded a_navigation" href="#"><FontAwesomeIcon icon={faInfo} /></a>
                        </div>
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-end">
                            <select className="mx-1 rounded p-1" name="page" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
                            <a className="a_navigation mx-1 rounded text-dark px-2">Next</a>
                            <a className="a_navigation mx-1 rounded text-dark px-2">Prev</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    };
};

export default Navigation;