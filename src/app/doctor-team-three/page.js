import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Navbar from '../components/navbar';

import { FiHeart, RiMapPinLine, RiTimeLine, RiMoneyDollarCircleLine, FiFacebook, FiLinkedin, FiGithub, FiTwitter } from '../assets/icons/vander'

import { doctorData } from '../data/data';
import Footer from '../components/footer';
import ScrollTop from '../components/scrollTop';

export default function DoctorTeamTwo(){
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>

        <section className="bg-half-150 bg-light d-table w-100">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">Doctors team</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-transparent mb-0">
                                    <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">Doctors</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Team three</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    {doctorData.map((item,index) =>{
                        return(
                            <div className="col-lg-6 col-md-12 mt-4 pt-2" key={index}>
                                <div className="card team border-0 rounded shadow overflow-hidden">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="team-person position-relative overflow-hidden">
                                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                                <ul className="list-unstyled team-like">
                                                    <li><Link href="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <Link href="#" className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                                <small className="text-muted speciality">{item.speciality}</small>
                                                <div className="d-flex justify-content-between align-items-center mt-2">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                    </ul>
                                                    <p className="text-muted mb-0">5 Star</p>
                                                </div>
                                                <ul className="list-unstyled mt-2 mb-0">
                                                    <li className="d-flex ms-0">
                                                        <RiMapPinLine className="text-primary align-middle"/>
                                                        <small className="text-muted ms-2">{item.location}</small>
                                                    </li>
                                                    <li className="d-flex ms-0 mt-2">
                                                        <RiTimeLine className="text-primary align-middle"/>
                                                        <small className="text-muted ms-2">{item.time}</small>
                                                    </li>
                                                    <li className="d-flex ms-0 mt-2">
                                                        <RiMoneyDollarCircleLine className="text-primary align-middle"/>
                                                        <small className="text-muted ms-2">{item.charges}</small>
                                                    </li>
                                                </ul>
                                                <ul className="list-unstyled mt-2 mb-0">
                                                    <li className="list-inline-item"><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiFacebook className="icons"/></Link></li>
                                                    <li className="mt-2 list-inline-item"><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiLinkedin className="icons"/></Link></li>
                                                    <li className="mt-2 list-inline-item"><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiGithub className="icons"/></Link></li>
                                                    <li className="mt-2 list-inline-item"><Link href="#" className="btn btn-icon btn-pills btn-soft-primary"><FiTwitter className="icons"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>

        </>
    )
}