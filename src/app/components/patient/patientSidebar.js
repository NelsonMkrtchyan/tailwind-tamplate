import React from "react";
import Link from "next/link";
import Image from "next/image";

import { payment } from "../../data/data";

export default function PatientSidebar(){
    return(
        <div className="col-xl-3 col-lg-4 col-md-5 col-12">
            <div className="card border-0 p-4 rounded shadow overflow-hidden sticky-bar">
                <div className="d-md-flex text-center text-md-start align-items-center">
                    <Image src='/images/client/09.jpg' width={80} height={80} className="avatar avatar-md-md rounded-circle border shadow" alt=""/>
                    <div className="ms-md-3 mt-3 mt-sm-0">
                        <h5 className="d-block mb-1 mb-sm-0">Christopher Burrell</h5>
                        <small className="text-muted">25 Years old</small>
                    </div>
                </div>

                <span className="bg-soft-success p-2 rounded-pill text-center h6 mb-0 mt-4">
                    Healthy
                </span>

                <div className="row">
                    <div className="col-4 mt-4">
                        <div className="text-center">
                            <span className="h6 text-muted">Blood</span>
                            <h6 className="mb-0 fw-normal">B +</h6>
                        </div>
                    </div>

                    <div className="col-4 mt-4">
                        <div className="text-center">
                            <span className="h6 text-muted">Height</span>
                            <h6 className="mb-0 fw-normal">175cm</h6>
                        </div>
                    </div>

                    <div className="col-4 mt-4">
                        <div className="text-center">
                            <span className="h6 text-muted">Weight</span>
                            <h6 className="mb-0 fw-normal">64k.g</h6>
                        </div>
                    </div>
                </div>

                <h6 className="mt-4 mb-0">Doctors:</h6>
                <ul className="list-unstyled mb-0 mt-4">
                    <li className="list-inline-item"><Link href="#"><Image src='/images/doctors/01.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/></Link></li>
                    <li className="list-inline-item"><Link href="#"><Image src='/images/doctors/02.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/></Link></li>
                    <li className="list-inline-item"><Link href="#"><Image src='/images/doctors/03.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/></Link></li>
                    <li className="list-inline-item"><Link href="#"><Image src='/images/doctors/04.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/></Link></li>
                    <li className="list-inline-item"><Link href="#"><Image src='/images/doctors/05.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/></Link></li>
                </ul>

                <h6 className="mt-4 mb-0">Payments:</h6>
                <ul className="list-unstyled mb-0 mt-1">
                    {payment.map((item,index) =>{
                        return(
                            <li className="d-flex align-items-center mt-3" key={index}>
                                <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm" alt=""/>
                                <div className="flex-1 ms-3">
                                    <p className="mb-0">{item.name} <span className="ms-2">{item.id}</span></p>
                                    <p className="text-muted mb-0">{item.expires}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <div className="mt-4">
                    <div className="d-grid">
                        <Link href="#" className="btn btn-soft-primary">View Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}