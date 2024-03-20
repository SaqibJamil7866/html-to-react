import icAvatar from '../assets/media/avatars/300-2.jpg'

function RecentlyViewed(){

    return(
        <>
            <div data-kt-search-element="results" className="d-none">
                {/*begin::Items*/}
                <div className="scroll-y mh-200px mh-lg-350px">
                    {/*begin::Category title*/}
                    <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
                    {/*end::Category title*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-6.jpg" alt="" />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Karina Clark</span>
                            <span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <img src={icAvatar} alt="" />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Olivia Bold</span>
                            <span className="fs-7 fw-semibold text-muted">Software Engineer</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-9.jpg" alt="" />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Ana Clark</span>
                            <span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-14.jpg" alt="" />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Nick Pitola</span>
                            <span className="fs-7 fw-semibold text-muted">Art Director</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <img src="assets/media/avatars/300-11.jpg" alt="" />
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Edward Kulnic</span>
                            <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Category title*/}
                    <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                    {/*end::Category title*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Company Rbranding</span>
                            <span className="fs-7 fw-semibold text-muted">UI Design</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Company Re-branding</span>
                            <span className="fs-7 fw-semibold text-muted">Web Development</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Business Analytics App</span>
                            <span className="fs-7 fw-semibold text-muted">Administration</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                            <span className="fs-7 fw-semibold text-muted">Marketing</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column justify-content-start fw-semibold">
                            <span className="fs-6 fw-semibold">Tower Group Website</span>
                            <span className="fs-7 fw-semibold text-muted">Google Adwords</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Category title*/}
                    <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                    {/*end::Category title*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-notepad fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                    <span className="path5"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                            <span className="fs-7 fw-semibold text-muted">#45670</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-frame fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                            <span className="fs-7 fw-semibold text-muted">#45690</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-message-text-2 fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                            <span className="fs-7 fw-semibold text-muted">#21090</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <a href="#" className="d-flex text-gray-900 text-hover-primary align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-profile-circle fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                            <span className="fs-7 fw-semibold text-muted">#34560</span>
                        </div>
                        {/*end::Title*/}
                    </a>
                    {/*end::Item*/}
                </div>
                {/*end::Items*/}
            </div>
            <div className="" data-kt-search-element="main">
                {/*begin::Heading*/}
                <div className="d-flex flex-stack fw-semibold mb-4">
                    {/*begin::Label*/}
                    <span className="text-muted fs-6 me-2">Recently Searched:</span>
                    {/*end::Label*/}
                    {/*begin::Toolbar*/}
                    <div className="d-flex" data-kt-search-element="toolbar">
                        {/*begin::Preferences toggle*/}
                        <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle=" title="Show search preferences">
                            <i className="ki-duotone ki-setting-2 fs-2">
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </i>
                        </div>
                        {/*end::Preferences toggle*/}
                        {/*begin::Advanced search toggle*/}
                        <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1" data-bs-toggle="tooltip" title="Show more search options">
                            <i className="ki-duotone ki-down fs-2"></i>
                        </div>
                        {/*end::Advanced search toggle*/}
                    </div>
                    {/*end::Toolbar*/}
                </div>
                {/*end::Heading*/}
                {/*begin::Items*/}
                <div className="scroll-y mh-200px mh-lg-325px">
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-laptop fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                            <span className="fs-7 text-muted fw-semibold">#45789</span>
                        </div>
                        {/*end::Title*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart-simple fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
                            <span className="fs-7 text-muted fw-semibold">#84050</span>
                        </div>
                        {/*end::Title*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
                            <span className="fs-7 text-muted fw-semibold">#84250</span>
                        </div>
                        {/*end::Title*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
                            <span className="fs-7 text-muted fw-semibold">#67945</span>
                        </div>
                        {/*end::Title*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-sms fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
                            <span className="fs-7 text-muted fw-semibold">#84250</span>
                        </div>
                        {/*end::Title*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-bank fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                            <span className="fs-7 text-muted fw-semibold">#45690</span>
                        </div>
                        {/*end::Title*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex align-items-center mb-5">
                        {/*begin::Symbol*/}
                        <div className="symbol symbol-40px me-4">
                            <span className="symbol-label bg-light">
                                <i className="ki-duotone ki-chart-line-down fs-2 text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                        </div>
                        {/*end::Symbol*/}
                        {/*begin::Title*/}
                        <div className="d-flex flex-column">
                            <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
                            <span className="fs-7 text-muted fw-semibold">#24005</span>
                        </div>
                        {/*end::Title*/}
                    </div>
                    {/*end::Item*/}
                </div>
                {/*end::Items*/}
            </div>
        </>

    )

}

export default RecentlyViewed