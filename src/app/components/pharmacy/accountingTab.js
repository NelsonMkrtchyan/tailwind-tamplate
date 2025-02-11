'use client'
import React, { useState } from "react";
import Link from "next/link"

import { GrDashboard, MdList, MdArrowCircleDown, FiMapPin, LuUser2, BiSolidEdit, FiArrowRight } from '../../assets/icons/vander'

export default function AccountingTab(){
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <div className="row">
            <div className="col-md-4 mt-4 pt-2">
                <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0">
                    <li className="nav-item ms-0">
                        <Link scroll={false} className={`${activeIndex === 1 ? 'active' : '' } nav-link rounded`} href="#" onClick={()=>setActiveIndex(1)}>
                            <div className="text-start py-1 px-3">
                                <h6 className="mb-0"><GrDashboard className="h5 align-middle me-2 mb-0"/> Dashboard</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item ms-0 mt-2">
                        <Link scroll={false} className={`${activeIndex === 2 ? 'active' : '' } nav-link rounded`} href="#" onClick={()=>setActiveIndex(2)}>
                            <div className="text-start py-1 px-3">
                                <h6 className="mb-0"><MdList className="h5 align-middle me-2 mb-0"/> Orders</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item ms-0 mt-2">
                        <Link scroll={false} className={`${activeIndex === 3 ? 'active' : '' } nav-link rounded`} href="#" onClick={()=>setActiveIndex(3)}>
                            <div className="text-start py-1 px-3">
                                <h6 className="mb-0"><MdArrowCircleDown className="h5 align-middle me-2 mb-0"/> Downloads</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item ms-0 mt-2">
                        <Link scroll={false} className={`${activeIndex === 4 ? 'active' : '' } nav-link rounded`} href="#" onClick={()=>setActiveIndex(4)}>
                            <div className="text-start py-1 px-3">
                                <h6 className="mb-0"><FiMapPin className="h5 align-middle me-2 mb-0"/> Addresses</h6>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item ms-0 mt-2">
                        <Link scroll={false} className={`${activeIndex === 5 ? 'active' : '' } nav-link rounded`} href="#" onClick={()=>setActiveIndex(5)}>
                            <div className="text-start py-1 px-3">
                                <h6 className="mb-0"><LuUser2 className="h5 align-middle me-2 mb-0"/> Account Details</h6>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-8 col-12 mt-4 pt-2">
                <div className="tab-content">
                    {activeIndex === 1 ? 
                        <div className="tab-pane fade show active shadow rounded p-4">
                            <p className="text-muted">Hello <span className="text-dark">christopher</span> (not <span className="text-dark fw-bold">christopher</span>? <Link href="#" className="text-danger fw-bold">Log out</Link>)</p>

                            <p className="text-muted mb-0">From your account dashboard you can view your <Link href="#" className="text-danger fw-bold">recent orders</Link>, manage your <Link href="#" className="text-danger fw-bold">shipping and billing addresses</Link>, and <Link href="#" className="text-danger fw-bold">edit your password and account details</Link>.</p>
                        </div>:''
                    }
                    {activeIndex === 2 ? 
                        <div className="tab-pane fade show active shadow rounded p-4">
                            <div className="table-responsive bg-white shadow rounded">
                                <table className="table mb-0 table-center table-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" scope="col">Order no.</th>
                                            <th className="border-bottom p-3" scope="col">Date</th>
                                            <th className="border-bottom p-3" scope="col">Status</th>
                                            <th className="border-bottom p-3" scope="col">Total</th>
                                            <th className="border-bottom p-3" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-3">7107</td>
                                            <td className="p-3">1st November 2020</td>
                                            <td className="text-success p-3">Delivered</td>
                                            <td className="p-3">$ 320 <span className="text-muted">for 2items</span></td>
                                            <td className="p-3"><Link href="#" className="text-primary">View <FiArrowRight/></Link></td>
                                        </tr>

                                        <tr>
                                            <td className="p-3">8007</td>
                                            <td className="p-3">4td November 2020</td>
                                            <td className="text-muted p-3">Processing</td>
                                            <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                            <td className="p-3"><Link href="#" className="text-primary">View <FiArrowRight/></Link></td>
                                        </tr>

                                        <tr>
                                            <td className="p-3">8008</td>
                                            <td className="p-3">4th November 2020</td>
                                            <td className="text-danger p-3">Canceled</td>
                                            <td className="p-3">$ 800 <span className="text-muted">for 1item</span></td>
                                            <td className="p-3"><Link href="#" className="text-primary">View <FiArrowRight/></Link></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> : ''
                    }
                    {activeIndex === 3 ?
                        <div className="tab-pane fade show active shadow rounded p-4">
                            <div className="table-responsive bg-white shadow rounded">
                                <table className="table mb-0 table-center table-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" scope="col">Product Name</th>
                                            <th className="border-bottom p-3" scope="col">Description</th>
                                            <th className="border-bottom p-3" scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-3">Quick heal</td>
                                            <td className="text-muted p-3">It is said that song composers of the past <br/> used dummy texts as lyrics when writing <br/> melodies in order to have a ready-made <br/> text to sing with the melody.</td>
                                            <td className="text-success p-3">Downloaded</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> :''
                    }
                    {activeIndex === 4 ?
                        <div className="tab-pane fade show active shadow rounded p-4">
                            <h6 className="text-muted mb-0">The following addresses will be used on the checkout page by default.</h6>

                            <div className="row">
                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="d-flex align-items-center mb-4 justify-content-between">
                                        <h5 className="mb-0">Billing Address:</h5>
                                        <Link href="#" className="text-primary h5 mb-0"><BiSolidEdit className="mb-0 align-middle"/></Link>
                                    </div>
                                    <div className="pt-4 border-top">
                                        <p className="h6">Cally Joseph</p>
                                        <p className="text-muted mb-0">C/54 Northwest Freeway, </p>
                                        <p className="text-muted mb-0">Suite 558,</p>
                                        <p className="text-muted mb-0">Houston, USA 485</p>
                                        <p className="text-muted mb-0">+123 897 5468</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 mt-4 pt-2">
                                    <div className="d-flex align-items-center mb-4 justify-content-between">
                                        <h5 className="mb-0">Shipping Address:</h5>
                                        <Link href="#" className="text-primary h5 mb-0" ><BiSolidEdit className="mb-0 align-middle"/></Link>
                                    </div>
                                    <div className="pt-4 border-top">
                                        <p className="h6">Cally Joseph</p>
                                        <p className="text-muted mb-0">C/54 Northwest Freeway, </p>
                                        <p className="text-muted mb-0">Suite 558,</p>
                                        <p className="text-muted mb-0">Houston, USA 485</p>
                                        <p className="text-muted mb-0">+123 897 5468</p>
                                    </div>
                                </div>
                            </div>
                        </div> :''
                    }
                    {activeIndex === 5 ?
                        <div className="tab-pane fade show active shadow rounded p-4">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input name="name" id="first-name" type="text" className="form-control" defaultValue="Cally"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input name="name" id="last-name" type="text" className="form-control" defaultValue="Joseph"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email</label>
                                            <input name="email" id="email" type="email" className="form-control" defaultValue="callyjoseph@gmail.com"/>
                                        </div> 
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Display Name</label>
                                            <input name="name" id="display-name" type="text" className="form-control" defaultValue="christopher"/>
                                        </div> 
                                    </div>

                                    <div className="col-lg-12 mt-2 mb-0">
                                        <button className="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </form>

                            <h5 className="mt-4">Change password :</h5>
                            <form>
                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Old password :</label>
                                            <input type="password" className="form-control" placeholder="Old password" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">New password :</label>
                                            <input type="password" className="form-control" placeholder="New password" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Re-type New password :</label>
                                            <input type="password" className="form-control" placeholder="Re-type New password" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-2 mb-0">
                                        <button className="btn btn-primary">Save Password</button>
                                    </div>
                                </div>
                            </form>
                        </div> :''
                    }
                </div>
            </div>
        </div>
    )
}