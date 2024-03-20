
function Navigation(){

    return(
        <div className="header-menu-container container-xxl d-flex flex-stack h-lg-75px w-100" id="kt_header_nav">
        {/*begin::Menu wrapper*/}
        <div className="header-menu flex-column flex-lg-row" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
            {/*begin::Menu*/}
            <div className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-state-primary menu-title-gray-800 menu-arrow-gray-500 align-items-stretch flex-grow-1 my-5 my-lg-0 px-2 px-lg-0 fw-semibold fs-6" id="#kt_header_menu" data-kt-menu="true">
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
                    {/*begin:Menu link*/}
                    <span className="menu-link py-3">
                        <span className="menu-title">Dashboards</span>
                        <span className="menu-arrow d-lg-none"></span>
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                        {/*begin:Dashboards menu*/}
                        <div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible" data-kt-menu-dismiss="true">
                            {/*begin:Row*/}
                            <div className="row">
                                {/*begin:Col*/}
                                <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                                    {/*begin:Row*/}
                                    <div className="row">
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="index.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-element-11 text-primary fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">Default</span>
                                                        <span className="fs-7 fw-semibold text-muted">Reports & statistics</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="dashboards/ecommerce.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-basket text-danger fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">eCommerce</span>
                                                        <span className="fs-7 fw-semibold text-muted">Sales reports</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="dashboards/projects.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-abstract-44 text-info fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">Projects</span>
                                                        <span className="fs-7 fw-semibold text-muted">Tasts, graphs & charts</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="dashboards/online-courses.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-color-swatch text-success fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                            <span className="path5"></span>
                                                            <span className="path6"></span>
                                                            <span className="path7"></span>
                                                            <span className="path8"></span>
                                                            <span className="path9"></span>
                                                            <span className="path10"></span>
                                                            <span className="path11"></span>
                                                            <span className="path12"></span>
                                                            <span className="path13"></span>
                                                            <span className="path14"></span>
                                                            <span className="path15"></span>
                                                            <span className="path16"></span>
                                                            <span className="path17"></span>
                                                            <span className="path18"></span>
                                                            <span className="path19"></span>
                                                            <span className="path20"></span>
                                                            <span className="path21"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">Online Courses</span>
                                                        <span className="fs-7 fw-semibold text-muted">Student progress</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="dashboards/marketing.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-chart-simple text-gray-900 fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">Marketing</span>
                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="dashboards/bidding.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-switch text-warning fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">Bidding</span>
                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="dashboards/pos.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-abstract-42 text-danger fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">POS System</span>
                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-6 mb-3">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="dashboards/call-center.html" className="menu-link">
                                                    <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                        <i className="ki-duotone ki-call text-primary fs-1">
                                                            <span className="path1"></span>
                                                            <span className="path2"></span>
                                                            <span className="path3"></span>
                                                            <span className="path4"></span>
                                                            <span className="path5"></span>
                                                            <span className="path6"></span>
                                                            <span className="path7"></span>
                                                            <span className="path8"></span>
                                                        </i>
                                                    </span>
                                                    <span className="d-flex flex-column">
                                                        <span className="fs-6 fw-bold text-gray-800">Call Center</span>
                                                        <span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
                                                    </span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                    </div>
                                    {/*end:Row*/}
                                    <div className="separator separator-dashed mx-5 my-5"></div>
                                    {/*begin:Landing*/}
                                    <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                                        <div className="d-flex flex-column me-5">
                                            <div className="fs-6 fw-bold text-gray-800">Landing Page Template</div>
                                            <div className="fs-7 fw-semibold text-muted">Onpe page landing template with pricing & others</div>
                                        </div>
                                        <a href="landing.html" className="btn btn-sm btn-primary fw-bold">Explore</a>
                                    </div>
                                    {/*end:Landing*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                                    {/*begin:Heading*/}
                                    <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">More Dashboards</h4>
                                    {/*end:Heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/logistics.html" className="menu-link py-2">
                                            <span className="menu-title">Logistics</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/website-analytics.html" className="menu-link py-2">
                                            <span className="menu-title">Website Analytics</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/finance-performance.html" className="menu-link py-2">
                                            <span className="menu-title">Finance Performance</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/store-analytics.html" className="menu-link py-2">
                                            <span className="menu-title">Store Analytics</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/social.html" className="menu-link py-2">
                                            <span className="menu-title">Social</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/delivery.html" className="menu-link py-2">
                                            <span className="menu-title">Delivery</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/crypto.html" className="menu-link py-2">
                                            <span className="menu-title">Crypto</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/school.html" className="menu-link py-2">
                                            <span className="menu-title">School</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                        {/*begin:Menu link*/}
                                        <a href="dashboards/podcast.html" className="menu-link py-2">
                                            <span className="menu-title">Podcast</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Col*/}
                            </div>
                            {/*end:Row*/}
                        </div>
                        {/*end:Dashboards menu*/}
                    </div>
                    {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show">
                    {/*begin:Menu link*/}
                    <span className="menu-link py-3">
                        <span className="menu-title">Pages</span>
                        <span className="menu-arrow d-lg-none"></span>
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                        {/*begin:Pages menu*/}
                        <div className="menu-active-bg px-4 px-lg-0">
                            {/*begin:Tabs nav*/}
                            <div className="d-flex w-100 overflow-auto">
                                <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                                    {/*begin:Nav item*/}
                                    <li className="nav-item mx-lg-1">
                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
                                    </li>
                                    {/*end:Nav item*/}
                                    {/*begin:Nav item*/}
                                    <li className="nav-item mx-lg-1">
                                        <a className="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
                                    </li>
                                    {/*end:Nav item*/}
                                    {/*begin:Nav item*/}
                                    <li className="nav-item mx-lg-1">
                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
                                    </li>
                                    {/*end:Nav item*/}
                                    {/*begin:Nav item*/}
                                    <li className="nav-item mx-lg-1">
                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
                                    </li>
                                    {/*end:Nav item*/}
                                    {/*begin:Nav item*/}
                                    <li className="nav-item mx-lg-1">
                                        <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_widgets">Widgets</a>
                                    </li>
                                    {/*end:Nav item*/}
                                </ul>
                            </div>
                            {/*end:Tabs nav*/}
                            {/*begin:Tab content*/}
                            <div className="tab-content py-4 py-lg-8 px-lg-7">
                                {/*begin:Tab pane*/}
                                <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_pages">
                                    {/*begin:Row*/}
                                    <div className="row">
                                        {/*begin:Col*/}
                                        <div className="col-lg-8">
                                            {/*begin:Row*/}
                                            <div className="row">
                                                {/*begin:Col*/}
                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                    {/*begin:Menu heading*/}
                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
                                                    {/*end:Menu heading*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="pages/user-profile/overview.html" className="menu-link">
                                                            <span className="menu-title">Overview</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="pages/user-profile/projects.html" className="menu-link">
                                                            <span className="menu-title">Projects</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="pages/user-profile/campaigns.html" className="menu-link">
                                                            <span className="menu-title">Campaigns</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="pages/user-profile/documents.html" className="menu-link">
                                                            <span className="menu-title">Documents</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="pages/user-profile/followers.html" className="menu-link">
                                                            <span className="menu-title">Followers</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="pages/user-profile/activity.html" className="menu-link">
                                                            <span className="menu-title">Activity</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                </div>
                                                {/*end:Col*/}
                                                {/*begin:Col*/}
                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-6">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/about.html" className="menu-link">
                                                                <span className="menu-title">About</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/team.html" className="menu-link">
                                                                <span className="menu-title">Our Team</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/contact.html" className="menu-link">
                                                                <span className="menu-title">Contact Us</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/licenses.html" className="menu-link">
                                                                <span className="menu-title">Licenses</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/sitemap.html" className="menu-link">
                                                                <span className="menu-title">Sitemap</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-0">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/careers/list.html" className="menu-link">
                                                                <span className="menu-title">Careers List</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/careers/apply.html" className="menu-link">
                                                                <span className="menu-title">Careers Apply</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                </div>
                                                {/*end:Col*/}
                                                {/*begin:Col*/}
                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-6">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/faq/classic.html" className="menu-link">
                                                                <span className="menu-title">FAQ Classic</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/faq/extended.html" className="menu-link">
                                                                <span className="menu-title">FAQ Extended</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-6">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/blog/home.html" className="menu-link">
                                                                <span className="menu-title">Blog Home</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/blog/post.html" className="menu-link">
                                                                <span className="menu-title">Blog Post</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-0">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/pricing.html" className="menu-link">
                                                                <span className="menu-title">Column Pricing</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/pricing/table.html" className="menu-link">
                                                                <span className="menu-title">Table Pricing</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                </div>
                                                {/*end:Col*/}
                                                {/*begin:Col*/}
                                                <div className="col-lg-3 mb-6 mb-lg-0">
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-0">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/social/feeds.html" className="menu-link">
                                                                <span className="menu-title">Feeds</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/social/activity.html" className="menu-link">
                                                                <span className="menu-title">Activty</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/social/followers.html" className="menu-link">
                                                                <span className="menu-title">Followers</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="pages/social/settings.html" className="menu-link">
                                                                <span className="menu-title">Settings</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                </div>
                                                {/*end:Col*/}
                                            </div>
                                            {/*end:Row*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-4">
                                            <img src="assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="" />
                                        </div>
                                        {/*end:Col*/}
                                    </div>
                                    {/*end:Row*/}
                                </div>
                                {/*end:Tab pane*/}
                                {/*begin:Tab pane*/}
                                <div className="tab-pane active w-lg-600px" id="kt_app_header_menu_pages_account">
                                    {/*begin:Row*/}
                                    <div className="row">
                                        {/*begin:Col*/}
                                        <div className="col-lg-5 mb-6 mb-lg-0">
                                            {/*begin:Row*/}
                                            <div className="row">
                                                {/*begin:Col*/}
                                                <div className="col-lg-6">
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/overview.html" className="menu-link">
                                                            <span className="menu-title">Overview</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/settings.html" className="menu-link">
                                                            <span className="menu-title">Settings</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/security.html" className="menu-link">
                                                            <span className="menu-title">Security</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/activity.html" className="menu-link">
                                                            <span className="menu-title">Activity</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/billing.html" className="menu-link">
                                                            <span className="menu-title">Billing</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                </div>
                                                {/*end:Col*/}
                                                {/*begin:Col*/}
                                                <div className="col-lg-6">
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/statements.html" className="menu-link">
                                                            <span className="menu-title">Statements</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/referrals.html" className="menu-link">
                                                            <span className="menu-title">Referrals</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/api-keys.html" className="menu-link active">
                                                            <span className="menu-title">API Keys</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                    {/*begin:Menu item*/}
                                                    <div className="menu-item p-0 m-0">
                                                        {/*begin:Menu link*/}
                                                        <a href="account/logs.html" className="menu-link">
                                                            <span className="menu-title">Logs</span>
                                                        </a>
                                                        {/*end:Menu link*/}
                                                    </div>
                                                    {/*end:Menu item*/}
                                                </div>
                                                {/*end:Col*/}
                                            </div>
                                            {/*end:Row*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-7">
                                            <img src="assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="" />
                                        </div>
                                        {/*end:Col*/}
                                    </div>
                                    {/*end:Row*/}
                                </div>
                                {/*end:Tab pane*/}
                                {/*begin:Tab pane*/}
                                <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">
                                    {/*begin:Row*/}
                                    <div className="row">
                                        {/*begin:Col*/}
                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                            {/*begin:Menu section*/}
                                            <div className="mb-6">
                                                {/*begin:Menu heading*/}
                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
                                                {/*end:Menu heading*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/corporate/sign-in.html" className="menu-link">
                                                        <span className="menu-title">Sign-In</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/corporate/sign-up.html" className="menu-link">
                                                        <span className="menu-title">Sign-Up</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/corporate/two-factor.html" className="menu-link">
                                                        <span className="menu-title">Two-Factor</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/corporate/reset-password.html" className="menu-link">
                                                        <span className="menu-title">Reset Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/corporate/new-password.html" className="menu-link">
                                                        <span className="menu-title">New Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu section*/}
                                            {/*begin:Menu section*/}
                                            <div className="mb-0">
                                                {/*begin:Menu heading*/}
                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
                                                {/*end:Menu heading*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/overlay/sign-in.html" className="menu-link">
                                                        <span className="menu-title">Sign-In</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/overlay/sign-up.html" className="menu-link">
                                                        <span className="menu-title">Sign-Up</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/overlay/two-factor.html" className="menu-link">
                                                        <span className="menu-title">Two-Factor</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/overlay/reset-password.html" className="menu-link">
                                                        <span className="menu-title">Reset Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/overlay/new-password.html" className="menu-link">
                                                        <span className="menu-title">New Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu section*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                            {/*begin:Menu section*/}
                                            <div className="mb-6">
                                                {/*begin:Menu heading*/}
                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
                                                {/*end:Menu heading*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/creative/sign-in.html" className="menu-link">
                                                        <span className="menu-title">Sign-in</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/creative/sign-up.html" className="menu-link">
                                                        <span className="menu-title">Sign-up</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/creative/two-factor.html" className="menu-link">
                                                        <span className="menu-title">Two-Factor</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/creative/reset-password.html" className="menu-link">
                                                        <span className="menu-title">Reset Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/creative/new-password.html" className="menu-link">
                                                        <span className="menu-title">New Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu section*/}
                                            {/*begin:Menu section*/}
                                            <div className="mb-6">
                                                {/*begin:Menu heading*/}
                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
                                                {/*end:Menu heading*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/fancy/sign-in.html" className="menu-link">
                                                        <span className="menu-title">Sign-In</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/fancy/sign-up.html" className="menu-link">
                                                        <span className="menu-title">Sign-Up</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/fancy/two-factor.html" className="menu-link">
                                                        <span className="menu-title">Two-Factor</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/fancy/reset-password.html" className="menu-link">
                                                        <span className="menu-title">Reset Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/layouts/fancy/new-password.html" className="menu-link">
                                                        <span className="menu-title">New Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu section*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                            {/*begin:Menu section*/}
                                            <div className="mb-0">
                                                {/*begin:Menu heading*/}
                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
                                                {/*end:Menu heading*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/extended/multi-steps-sign-up.html" className="menu-link">
                                                        <span className="menu-title">Multi-Steps Sign-Up</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/general/welcome.html" className="menu-link">
                                                        <span className="menu-title">Welcome Message</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/general/verify-email.html" className="menu-link">
                                                        <span className="menu-title">Verify Email</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/general/coming-soon.html" className="menu-link">
                                                        <span className="menu-title">Coming Soon</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/general/password-confirmation.html" className="menu-link">
                                                        <span className="menu-title">Password Confirmation</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/general/account-deactivated.html" className="menu-link">
                                                        <span className="menu-title">Account Deactivation</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/general/error-404.html" className="menu-link">
                                                        <span className="menu-title">Error 404</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/general/error-500.html" className="menu-link">
                                                        <span className="menu-title">Error 500</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu section*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                            {/*begin:Menu section*/}
                                            <div className="mb-0">
                                                {/*begin:Menu heading*/}
                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
                                                {/*end:Menu heading*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/email/welcome-message.html" className="menu-link">
                                                        <span className="menu-title">Welcome Message</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/email/reset-password.html" className="menu-link">
                                                        <span className="menu-title">Reset Password</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/email/subscription-confirmed.html" className="menu-link">
                                                        <span className="menu-title">Subscription Confirmed</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/email/card-declined.html" className="menu-link">
                                                        <span className="menu-title">Credit Card Declined</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/email/promo-1.html" className="menu-link">
                                                        <span className="menu-title">Promo 1</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/email/promo-2.html" className="menu-link">
                                                        <span className="menu-title">Promo 2</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div className="menu-item p-0 m-0">
                                                    {/*begin:Menu link*/}
                                                    <a href="authentication/email/promo-3.html" className="menu-link">
                                                        <span className="menu-title">Promo 3</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu section*/}
                                        </div>
                                        {/*end:Col*/}
                                    </div>
                                    {/*end:Row*/}
                                </div>
                                {/*end:Tab pane*/}
                                {/*begin:Tab pane*/}
                                <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
                                    {/*begin:Row*/}
                                    <div className="row">
                                        {/*begin:Col*/}
                                        <div className="col-lg-7">
                                            {/*begin:Row*/}
                                            <div className="row">
                                                {/*begin:Col*/}
                                                <div className="col-lg-4 mb-6 mb-lg-0">
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-0">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/general/invite-friends.html" className="menu-link">
                                                                <span className="menu-title">Invite Friends</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/general/view-users.html" className="menu-link">
                                                                <span className="menu-title">View Users</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/general/select-users.html" className="menu-link">
                                                                <span className="menu-title">Select Users</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/general/upgrade-plan.html" className="menu-link">
                                                                <span className="menu-title">Upgrade Plan</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/general/share-earn.html" className="menu-link">
                                                                <span className="menu-title">Share & Earn</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/forms/new-target.html" className="menu-link">
                                                                <span className="menu-title">New Target</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/forms/new-card.html" className="menu-link">
                                                                <span className="menu-title">New Card</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/forms/new-address.html" className="menu-link">
                                                                <span className="menu-title">New Address</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/forms/create-api-key.html" className="menu-link">
                                                                <span className="menu-title">Create API Key</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/forms/bidding.html" className="menu-link">
                                                                <span className="menu-title">Bidding</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                </div>
                                                {/*end:Col*/}
                                                {/*begin:Col*/}
                                                <div className="col-lg-4 mb-6 mb-lg-0">
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-6">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/create-app.html" className="menu-link">
                                                                <span className="menu-title">Create App</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/create-campaign.html" className="menu-link">
                                                                <span className="menu-title">Create Campaign</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/create-account.html" className="menu-link">
                                                                <span className="menu-title">Create Business Acc</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/create-project.html" className="menu-link">
                                                                <span className="menu-title">Create Project</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                                                <span className="menu-title">Top Up Wallet</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/offer-a-deal.html" className="menu-link">
                                                                <span className="menu-title">Offer a Deal</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
                                                                <span className="menu-title">Two Factor Auth</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-0">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/search/horizontal.html" className="menu-link">
                                                                <span className="menu-title">Horizontal</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/search/vertical.html" className="menu-link">
                                                                <span className="menu-title">Vertical</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/search/users.html" className="menu-link">
                                                                <span className="menu-title">Users</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/search/select-location.html" className="menu-link">
                                                                <span className="menu-title">Select Location</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                </div>
                                                {/*end:Col*/}
                                                {/*begin:Col*/}
                                                <div className="col-lg-4 mb-6 mb-lg-0">
                                                    {/*begin:Menu section*/}
                                                    <div className="mb-0">
                                                        {/*begin:Menu heading*/}
                                                        <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
                                                        {/*end:Menu heading*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/horizontal.html" className="menu-link">
                                                                <span className="menu-title">Horizontal</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/vertical.html" className="menu-link">
                                                                <span className="menu-title">Vertical</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/two-factor-authentication.html" className="menu-link">
                                                                <span className="menu-title">Two Factor Auth</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/create-app.html" className="menu-link">
                                                                <span className="menu-title">Create App</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/create-campaign.html" className="menu-link">
                                                                <span className="menu-title">Create Campaign</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/create-account.html" className="menu-link">
                                                                <span className="menu-title">Create Account</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/create-project.html" className="menu-link">
                                                                <span className="menu-title">Create Project</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                                                <span className="menu-title">Top Up Wallet</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item p-0 m-0">
                                                            {/*begin:Menu link*/}
                                                            <a href="utilities/wizards/offer-a-deal.html" className="menu-link">
                                                                <span className="menu-title">Offer a Deal</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu section*/}
                                                </div>
                                                {/*end:Col*/}
                                            </div>
                                            {/*end:Row*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-5 pe-lg-5">
                                            <img src="assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="" />
                                        </div>
                                        {/*end:Col*/}
                                    </div>
                                    {/*end:Row*/}
                                </div>
                                {/*end:Tab pane*/}
                                {/*begin:Tab pane*/}
                                <div className="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">
                                    {/*begin:Row*/}
                                    <div className="row">
                                        {/*begin:Col*/}
                                        <div className="col-lg-4 mb-6 mb-lg-0">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="widgets/lists.html" className="menu-link">
                                                    <span className="menu-title">Lists</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="widgets/statistics.html" className="menu-link">
                                                    <span className="menu-title">Statistics</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="widgets/charts.html" className="menu-link">
                                                    <span className="menu-title">Charts</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="widgets/mixed.html" className="menu-link">
                                                    <span className="menu-title">Mixed</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="widgets/tables.html" className="menu-link">
                                                    <span className="menu-title">Tables</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item p-0 m-0">
                                                {/*begin:Menu link*/}
                                                <a href="widgets/feeds.html" className="menu-link">
                                                    <span className="menu-title">Feeds</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Col*/}
                                        {/*begin:Col*/}
                                        <div className="col-lg-8">
                                            <img src="assets/media/stock/900x600/44.jpg" className="rounded mw-100" alt="" />
                                        </div>
                                        {/*end:Col*/}
                                    </div>
                                    {/*end:Row*/}
                                </div>
                                {/*end:Tab pane*/}
                            </div>
                            {/*end:Tab content*/}
                        </div>
                        {/*end:Pages menu*/}
                    </div>
                    {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                    {/*begin:Menu link*/}
                    <span className="menu-link py-3">
                        <span className="menu-title">Apps</span>
                        <span className="menu-arrow d-lg-none"></span>
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-rocket fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Projects</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/list.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">My Projects</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/project.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">View Project</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/targets.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Targets</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/budget.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Budget</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/users.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Users</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/files.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Files</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/activity.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Activity</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/projects/settings.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Settings</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-handcart fs-2"></i>
                                </span>
                                <span className="menu-title">eCommerce</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Catalog</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/catalog/products.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Products</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/catalog/categories.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Categories</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/catalog/add-product.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Add Product</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/catalog/edit-product.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Edit Product</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/catalog/add-category.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Add Category</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/catalog/edit-category.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Edit Category</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Sales</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-accordion">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/sales/listing.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Orders Listing</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/sales/details.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Order Details</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/sales/add-order.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Add Order</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/sales/edit-order.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Edit Order</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Customers</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-accordion">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/customers/listing.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Customers Listing</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/customers/details.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Customers Details</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Reports</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-accordion">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/reports/view.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Products Viewed</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/reports/sales.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Sales</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/reports/returns.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Returns</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/reports/customer-orders.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Customer Orders</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/ecommerce/reports/shipping.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Shipping</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/ecommerce/settings.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Settings</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-chart fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Support Center</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/support-center/overview.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Overview</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Tickets</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/support-center/tickets/list.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Ticket List</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/support-center/tickets/view.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Ticket View</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Tutorials</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/support-center/tutorials/list.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Tutorials List</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/support-center/tutorials/post.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Tutorials Post</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/support-center/faq.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">FAQ</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/support-center/licenses.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Licenses</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/support-center/contact.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Contact Us</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-shield-tick fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">User Management</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Users</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/user-management/users/list.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Users List</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/user-management/users/view.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">View User</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Roles</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/user-management/roles/list.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Roles List</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/user-management/roles/view.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">View Roles</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/user-management/permissions.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Permissions</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-phone fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Contacts</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/contacts/getting-started.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Getting Started</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/contacts/add-contact.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Add Contact</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/contacts/edit-contact.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Edit Contact</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/contacts/view-contact.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">View Contact</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-basket fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Subscriptions</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/subscriptions/getting-started.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Getting Started</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/subscriptions/list.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Subscription List</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/subscriptions/add.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Add Subscription</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/subscriptions/view.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">View Subscription</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-briefcase fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Customers</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/customers/getting-started.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Getting Started</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/customers/list.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Customer Listing</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/customers/view.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Customer Details</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-credit-cart fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Invoice Management</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                    {/*begin:Menu link*/}
                                    <span className="menu-link py-3">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Profile</span>
                                        <span className="menu-arrow"></span>
                                    </span>
                                    {/*end:Menu link*/}
                                    {/*begin:Menu sub*/}
                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/invoices/view/invoice-1.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Invoice 1</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/invoices/view/invoice-2.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Invoice 2</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div className="menu-item">
                                            {/*begin:Menu link*/}
                                            <a className="menu-link py-3" href="apps/invoices/view/invoice-3.html">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot"></span>
                                                </span>
                                                <span className="menu-title">Invoice 3</span>
                                            </a>
                                            {/*end:Menu link*/}
                                        </div>
                                        {/*end:Menu item*/}
                                    </div>
                                    {/*end:Menu sub*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/invoices/create.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Create Invoice</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-file-added fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">File Manager</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/file-manager/folders.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Folders</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/file-manager/files.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Files</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/file-manager/blank.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Blank Directory</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/file-manager/settings.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Settings</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-sms fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Inbox</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/inbox/listing.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Messages</span>
                                        <span className="menu-badge">
                                            <span className="badge badge-light-success">3</span>
                                        </span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/inbox/compose.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Compose</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/inbox/reply.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">View & Reply</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                            {/*begin:Menu link*/}
                            <span className="menu-link py-3">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-message-text-2 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Chat</span>
                                <span className="menu-arrow"></span>
                            </span>
                            {/*end:Menu link*/}
                            {/*begin:Menu sub*/}
                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/chat/private.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Private Chat</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/chat/group.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Group Chat</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item">
                                    {/*begin:Menu link*/}
                                    <a className="menu-link py-3" href="apps/chat/drawer.html">
                                        <span className="menu-bullet">
                                            <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">Drawer Chat</span>
                                    </a>
                                    {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                            </div>
                            {/*end:Menu sub*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a className="menu-link py-3" href="apps/calendar.html">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-calendar-8 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                        <span className="path5"></span>
                                        <span className="path6"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Calendar</span>
                            </a>
                            {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                    {/*begin:Menu link*/}
                    <span className="menu-link py-3">
                        <span className="menu-title">Help</span>
                        <span className="menu-arrow d-lg-none"></span>
                    </span>
                    {/*end:Menu link*/}
                    {/*begin:Menu sub*/}
                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-rocket fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Components</span>
                            </a>
                            {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-abstract-26 fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Documentation</span>
                            </a>
                            {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a className="menu-link py-3" href="https://preview.keenthemes.com/metronic8/demo11/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-switch fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Layout Builder</span>
                            </a>
                            {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                        {/*begin:Menu item*/}
                        <div className="menu-item">
                            {/*begin:Menu link*/}
                            <a className="menu-link py-3" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
                                <span className="menu-icon">
                                    <i className="ki-duotone ki-code fs-2">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                        <span className="path4"></span>
                                    </i>
                                </span>
                                <span className="menu-title">Changelog v8.2.3</span>
                            </a>
                            {/*end:Menu link*/}
                        </div>
                        {/*end:Menu item*/}
                    </div>
                    {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
            </div>
            {/*end::Menu*/}
            {/*begin::Actions*/}
            <div className="flex-shrink-0 p-4 p-lg-0 me-lg-2">
                <a href="https://preview.keenthemes.com/html/metronic/docs" className="btn btn-sm btn-light-primary fw-bold w-100 w-lg-auto" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss-="click" title="200+ in-house components and 3rd-party plugins">Docs & Components</a>
            </div>
            {/*end::Actions*/}
        </div>
        {/*end::Menu wrapper*/}
    </div>
    )
}

export default Navigation