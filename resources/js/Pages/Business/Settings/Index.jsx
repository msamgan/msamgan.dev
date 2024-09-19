import Master from '@/Layouts/Master.jsx'
import { Head } from '@inertiajs/react'
import GeneralInfo from '@/Pages/Business/Settings/Partials/GeneralInfo.jsx'

export default function Index({ auth }) {
    return (
        <Master user={auth.user} header={'Business Settings'}>
            <Head title="Business Settings" />

            <div className="row gx-6">
                <div className="col-12 col-lg-2">
                    <div className="d-flex justify-content-between flex-column mb-md-0 mb-4">
                        <ul className="nav nav-align-left nav-pills flex-column">
                            <li className="nav-item mb-1">
                                <a className="nav-link active" href={route('business.settings')}>
                                    <i className="ri-store-2-line me-2"></i>
                                    <span className="align-middle">General Details</span>
                                </a>
                            </li>
                            {/*<li className="nav-item mb-1">
								<a className="nav-link" href={route('business.settings')}>
									<i className="ri-map-2-line me-2"></i>
									<span className="align-middle">Locations</span>
								</a>
							</li>
							<li className="nav-item mb-1">
								<a className="nav-link" href="#">
									<i className="ri-bank-card-line me-2"></i>
									<span className="align-middle">Businesses</span>
								</a>
							</li>*/}
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-10 pt-lg-0 pt-6">
                    <div className="col-xl-12">
                        <div className="nav-align-top mb-6">
                            <ul className="nav nav-pills mb-4" role="tablist">
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="nav-link active"
                                        role="tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#navs-pills-top-general"
                                        aria-controls="navs-pills-top-general"
                                        aria-selected="true"
                                    >
                                        General
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content bg-transparent p-0 shadow-none">
                                <div className="tab-pane fade show active" id="navs-pills-top-general" role="tabpanel">
                                    <GeneralInfo business={auth.user.business} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    )
}
