import RecentlyViewed from "./recentlyViewed";
import ThemeMode from "./themeMode";
import iCGermany from '../assets/media/flags/germany.svg'
import icJapan from '../assets/media/flags/japan.svg'

function Topbar(){
    return(
        <div className="d-flex align-items-center flex-shrink-0">
            {/* {/*begin::Search*/}
            <div id="kt_header_search" className="header-search d-flex align-items-center w-lg-250px" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="lg" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                {/* {/*begin::Tablet and mobile search toggle*/}
                <div data-kt-search-element="toggle" className="search-toggle-mobile d-flex d-lg-none align-items-center">
                    <div className="d-flex btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px">
                        <i className="ki-duotone ki-magnifier fs-1 text-gray-700 fs-2">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </div>
                </div>
                {/* {/*end::Tablet and mobile search toggle*/}
                {/*begin::Form(use d-none d-lg-block classes for responsive search)*/}
                <form data-kt-search-element="form" className="d-none d-lg-block w-100 position-relative mb-2 mb-lg-0" autocomplete="off">
                    {/* {/*begin::Hidden input(Added to disable form autocomplete)*/}
                    <input type="hidden" />
                    {/* {/*end::Hidden input*/}
                    {/*begin::Icon*/}
                    <i className="ki-duotone ki-magnifier fs-2 text-gray-700 position-absolute top-50 translate-middle-y ms-4">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                    {/* {/*end::Icon*/}
                    {/*begin::Input*/}
                    <input type="text" className="form-control bg-transparent ps-13 fs-7 h-40px" name="search" value="" placeholder="Quick Search" data-kt-search-element="input" />
                    {/* {/*end::Input*/}
                    {/*begin::Spinner*/}
                    <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                        <span className="spinner-border h-15px w-15px align-middle text-gray-500"></span>
                    </span>
                    {/* {/*end::Spinner*/}
                    {/*begin::Reset*/}
                    <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
                        <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </i>
                    </span>
                    {/* {/*end::Reset*/}
                </form>
                {/*end::Form*/}
                {/*begin::Menu*/}
                <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown py-7 px-7 overflow-hidden w-300px w-md-350px">
                    {/*begin::Wrapper*/}
                    <div data-kt-search-element="wrapper">
                        <RecentlyViewed />
                        {/*begin::Empty*/}
                        <div data-kt-search-element="empty" className="text-center d-none">
                            {/*begin::Icon*/}
                            <div className="pt-10 pb-10">
                                <i className="ki-duotone ki-search-list fs-4x opacity-50">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </div>
                            {/*end::Icon*/}
                            {/*begin::Message*/}
                            <div className="pb-15 fw-semibold">
                                <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                                <div className="text-muted fs-7">Please try again with a different query</div>
                            </div>
                            {/*end::Message*/}
                        </div>
                        {/*end::Empty*/}
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Preferences*/}
                    <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                        {/*begin::Heading*/}
                        <h3 className="fw-semibold text-gray-900 mb-7">Advanced Search</h3>
                        {/*end::Heading*/}
                        {/*begin::Input group*/}
                        <div className="mb-5">
                            <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-5">
                            {/*begin::Radio group*/}
                            <div className="nav-group nav-group-fluid">
                                {/*begin::Option*/}
                                <label>
                                    <input type="radio" className="btn-check" name="type" value="has" checked="checked" />
                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                    <input type="radio" className="btn-check" name="type" value="users" />
                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                    <input type="radio" className="btn-check" name="type" value="orders" />
                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                    <input type="radio" className="btn-check" name="type" value="projects" />
                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                                </label>
                                {/*end::Option*/}
                            </div>
                            {/*end::Radio group*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-5">
                            <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-5">
                            <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-5">
                            {/*begin::Radio group*/}
                            <div className="nav-group nav-group-fluid">
                                {/*begin::Option*/}
                                <label>
                                    <input type="radio" className="btn-check" name="attachment" value="has" checked="checked" />
                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                                </label>
                                {/*end::Option*/}
                                {/*begin::Option*/}
                                <label>
                                    <input type="radio" className="btn-check" name="attachment" value="any" />
                                    <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                                </label>
                                {/*end::Option*/}
                            </div>
                            {/*end::Radio group*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="mb-5">
                            <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                                <option value="next">Within the next</option>
                                <option value="last">Within the last</option>
                                <option value="between">Between</option>
                                <option value="on">On</option>
                            </select>
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="row mb-8">
                            {/*begin::Col*/}
                            <div className="col-6">
                                <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className="col-6">
                                <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-dropdown-parent="#kt_header_search" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                                    <option value="days">Days</option>
                                    <option value="weeks">Weeks</option>
                                    <option value="months">Months</option>
                                    <option value="years">Years</option>
                                </select>
                            </div>
                            {/*end::Col*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end">
                            <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
                            <a href="utilities/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                        </div>
                        {/*end::Actions*/}
                    </form>
                    {/*end::Preferences*/}
                    {/*begin::Preferences*/}
                    <form data-kt-search-element="preferences" className="pt-1 d-none">
                        {/*begin::Heading*/}
                        <h3 className="fw-semibold text-gray-900 mb-7">Search Preferences</h3>
                        {/*end::Heading*/}
                        {/*begin::Input group*/}
                        <div className="pb-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
                                <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                            </label>
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
                                <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                            </label>
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
                                <input className="form-check-input" type="checkbox" value="1" />
                            </label>
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
                                <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                            </label>
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
                                <input className="form-check-input" type="checkbox" value="1" />
                            </label>
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className="d-flex justify-content-end pt-7">
                            <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                            <button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
                        </div>
                        {/*end::Actions*/}
                    </form>
                    {/*end::Preferences*/}
                </div>
                {/*end::Menu*/}
            </div>
            {/*end::Search*/}
            {/*begin::Activities*/}
            <div className="d-flex align-items-center ms-3 ms-lg-4">
                {/*begin::Drawer toggle*/}
                <div className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px" id="kt_activities_toggle">
                    <i className="ki-duotone ki-chart-simple fs-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                    </i>
                </div>
                {/*end::Drawer toggle*/}
            </div>
            {/*end::Activities*/}

            <ThemeMode />
            {/*begin::User*/}
            <div className="d-flex align-items-center ms-3 ms-lg-4" id="kt_header_user_menu_toggle">
                {/*begin::Menu- wrapper*/}
                {/*begin::User icon(remove this button to use user avatar as menu toggle)*/}
                <div className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                    <i className="ki-duotone ki-user fs-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                    </i>
                </div>
                {/*end::User icon*/}
                {/*begin::User account menu*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                    {/*begin::Menu item*/}
                    <div className="menu-item px-3">
                        <div className="menu-content d-flex align-items-center px-3">
                            {/*begin::Avatar*/}
                            <div className="symbol symbol-50px me-5">
                                <img alt="Logo" src="assets/media/avatars/300-1.jpg" />
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Username*/}
                            <div className="d-flex flex-column">
                                <div className="fw-bold d-flex align-items-center fs-5">Max Smith 
                                <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
                                <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
                            </div>
                            {/*end::Username*/}
                        </div>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator my-2"></div>
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-5">
                        <a href="account/overview.html" className="menu-link px-5">My Profile</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-5">
                        <a href="apps/projects/list.html" className="menu-link px-5">
                            <span className="menu-text">My Projects</span>
                            <span className="menu-badge">
                                <span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
                            </span>
                        </a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                        <a href="#" className="menu-link px-5">
                            <span className="menu-title">My Subscription</span>
                            <span className="menu-arrow"></span>
                        </a>
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/referrals.html" className="menu-link px-5">Referrals</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/billing.html" className="menu-link px-5">Billing</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/statements.html" className="menu-link px-5">Payments</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements 
                                <span className="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
                                    <i className="ki-duotone ki-information-5 fs-5">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                    </i>
                                </span></a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator my-2"></div>
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <div className="menu-content px-3">
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                        <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                        <span className="form-check-label text-muted fs-7">Notifications</span>
                                    </label>
                                </div>
                            </div>
                            {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-5">
                        <a href="account/statements.html" className="menu-link px-5">My Statements</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu separator*/}
                    <div className="separator my-2"></div>
                    {/*end::Menu separator*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                        <a href="#" className="menu-link px-5">
                            <span className="menu-title position-relative">Language 
                            <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English 
                            <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
                        </a>
                        {/*begin::Menu sub*/}
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/settings.html" className="menu-link d-flex px-5 active">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
                                </span>English</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
                                </span>Spanish</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src={iCGermany} alt="" />
                                </span>German</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src={icJapan} alt="" />
                                </span>Japanese</a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                                <a href="account/settings.html" className="menu-link d-flex px-5">
                                <span className="symbol symbol-20px me-4">
                                    <img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
                                </span>French</a>
                            </div>
                            {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-5 my-1">
                        <a href="account/settings.html" className="menu-link px-5">Account Settings</a>
                    </div>
                    {/*end::Menu item*/}
                    {/*begin::Menu item*/}
                    <div className="menu-item px-5">
                        <a href="authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
                    </div>
                    {/*end::Menu item*/}
                </div>
                {/*end::User account menu*/}
                {/*end::Menu wrapper*/}
            </div>
            {/*end::User */}
            {/*begin::Chat*/}
            <div className="d-flex align-items-center ms-3 ms-lg-4">
                {/*begin::Drawer wrapper*/}
                <div className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px fw-bold position-relative" id="kt_drawer_chat_toggle">3 
                {/*begin::Bullet*/}
                <span className="d-none bullet bullet-dot bg-danger h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                {/*end::Bullet*/}</div>
                {/*end::Drawer wrapper*/}
            </div>
            {/*end::Chat*/}
            {/*begin::Sidebar Toggler*/}
            {/*end::Sidebar Toggler*/}
        </div>
    )
}

export default Topbar;