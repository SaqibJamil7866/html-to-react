import icDemoLogo from "./assets/media/logos/demo11.svg";
import icDarkDemoLogo from "./assets/media/logos/demo11-dark.svg";
import icAvatar from "./assets/media/avatars/300-1.jpg"
import './App.css';
import './assets/css/style.bundle.css'
import Topbar from "./components/topbar";
import Navigation from "./components/navigation";
import APIKey from "./components/apikey";
import LoginSession from "./components/loginSession";

function App() {
  	return (
		<div className="App">
			<div className="d-flex flex-column flex-root">
				<div className="page d-flex flex-row flex-column-fluid">
					<div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
						<div id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
							<div className="container-xxl d-flex flex-grow-1 flex-stack">
								<div className="d-flex align-items-center me-5">
									<div className="d-lg-none btn btn-icon btn-active-color-primary w-30px h-30px ms-n2 me-3" id="kt_header_menu_toggle">
										<i className="ki-duotone ki-abstract-14 fs-2">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
									
									<a href="index.html" className="py-4 flex items-center justify-center">
										<img alt="Logo" src={icDemoLogo} className="theme-light-show h-20px h-lg-30px" />
										{/* <img alt="Logo" src={icDarkDemoLogo} className="theme-dark-show h-20px h-lg-30px" /> */}
									</a>
								</div>
								<Topbar />
							</div>
							{/*end::Container*/}
							{/*begin::Separator*/}
							<div className="separator"></div>
							{/*end::Separator*/}
							<Navigation />
						</div>

						{/*begin::Toolbar*/}
						<div className="toolbar py-5 py-lg-5" id="kt_toolbar">
							{/*begin::Container*/}
							<div id="kt_toolbar_container" className="container-xxl d-flex flex-stack flex-wrap">
								{/*begin::Page title*/}
								<div className="page-title d-flex flex-column me-3">
									{/*begin::Title*/}
									<h1 className="d-flex text-gray-900 fw-bold my-1 fs-3">API Keys</h1>
									{/*end::Title*/}
									{/*begin::Breadcrumb*/}
									<ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7 my-1">
										{/*begin::Item*/}
										<li className="breadcrumb-item text-gray-600">
											<a href="index.html" className="text-gray-600 text-hover-primary">Home</a>
										</li>
										{/*end::Item*/}
										{/*begin::Item*/}
										<li className="breadcrumb-item text-gray-600">Account</li>
										{/*end::Item*/}
										{/*begin::Item*/}
										<li className="breadcrumb-item text-gray-500">API Keys</li>
										{/*end::Item*/}
									</ul>
									{/*end::Breadcrumb*/}
								</div>
								{/*end::Page title*/}
								{/*begin::Actions*/}
								<div className="d-flex align-items-center py-2 py-md-1">
									{/*begin::Wrapper*/}
									<div className="me-3">
										{/*begin::Menu*/}
										<a href="#" className="btn btn-light-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
										<i className="ki-duotone ki-filter fs-5 text-gray-500 me-1">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>Filter</a>
										{/*begin::Menu 1*/}
										<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_65a10ad6244d2">
											{/*begin::Header*/}
											<div className="px-7 py-5">
												<div className="fs-5 text-gray-900 fw-bold">Filter Options</div>
											</div>
											{/*end::Header*/}
											{/*begin::Menu separator*/}
											<div className="separator border-gray-200"></div>
											{/*end::Menu separator*/}
											{/*begin::Form*/}
											<div className="px-7 py-5">
												{/*begin::Input group*/}
												<div className="mb-10">
													{/*begin::Label*/}
													<label className="form-label fw-semibold">Status:</label>
													{/*end::Label*/}
													{/*begin::Input*/}
													<div>
														<select className="form-select form-select-solid" multiple="multiple" data-kt-select2="true" data-close-on-select="false" data-placeholder="Select option" data-dropdown-parent="#kt_menu_65a10ad6244d2" data-allow-clear="true">
															<option></option>
															<option value="1">Approved</option>
															<option value="2">Pending</option>
															<option value="2">In Process</option>
															<option value="2">Rejected</option>
														</select>
													</div>
													{/*end::Input*/}
												</div>
												{/*end::Input group*/}
												{/*begin::Input group*/}
												<div className="mb-10">
													{/*begin::Label*/}
													<label className="form-label fw-semibold">Member Type:</label>
													{/*end::Label*/}
													{/*begin::Options*/}
													<div className="d-flex">
														{/*begin::Options*/}
														<label className="form-check form-check-sm form-check-custom form-check-solid me-5">
															<input className="form-check-input" type="checkbox" value="1" />
															<span className="form-check-label">Author</span>
														</label>
														{/*end::Options*/}
														{/*begin::Options*/}
														<label className="form-check form-check-sm form-check-custom form-check-solid">
															<input className="form-check-input" type="checkbox" value="2" checked="checked" />
															<span className="form-check-label">Customer</span>
														</label>
														{/*end::Options*/}
													</div>
													{/*end::Options*/}
												</div>
												{/*end::Input group*/}
												{/*begin::Input group*/}
												<div className="mb-10">
													{/*begin::Label*/}
													<label className="form-label fw-semibold">Notifications:</label>
													{/*end::Label*/}
													{/*begin::Switch*/}
													<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
														<input className="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
														<label className="form-check-label">Enabled</label>
													</div>
													{/*end::Switch*/}
												</div>
												{/*end::Input group*/}
												{/*begin::Actions*/}
												<div className="d-flex justify-content-end">
													<button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
													<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
												</div>
												{/*end::Actions*/}
											</div>
											{/*end::Form*/}
										</div>
										{/*end::Menu 1*/}
										{/*end::Menu*/}
									</div>
									{/*end::Wrapper*/}
									{/*begin::Button*/}
									<a href="#" className="btn btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_create_api_key" id="kt_toolbar_primary_button">New API Key</a>
									{/*end::Button*/}
								</div>
								{/*end::Actions*/}
							</div>
							{/*end::Container*/}
						</div>
						{/*end::Toolbar*/}
						{/*begin::Container*/}
						<div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
							{/*begin::Post*/}
							<div className="content flex-row-fluid" id="kt_content">
								{/*begin::Navbar*/}
								<div className="card mb-5 mb-xl-10">
									<div className="card-body pt-9 pb-0">
										{/*begin::Details*/}
										<div className="d-flex flex-wrap flex-sm-nowrap">
											{/*begin: Pic*/}
											<div className="me-7 mb-4">
												<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
													<img src={icAvatar} alt="image" />
													<div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
												</div>
											</div>
											{/*end::Pic*/}
											{/*begin::Info*/}
											<div className="flex-grow-1">
												{/*begin::Title*/}
												<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
													{/*begin::User*/}
													<div className="d-flex flex-column">
														{/*begin::Name*/}
														<div className="d-flex align-items-center mb-2">
															<a href="#" className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">Max Smith</a>
															<a href="#">
																<i className="ki-duotone ki-verify fs-1 text-primary">
																	<span className="path1"></span>
																	<span className="path2"></span>
																</i>
															</a>
														</div>
														{/*end::Name*/}
														{/*begin::Info*/}
														<div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
															<a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
															<i className="ki-duotone ki-profile-circle fs-4 me-1">
																<span className="path1"></span>
																<span className="path2"></span>
																<span className="path3"></span>
															</i>Developer</a>
															<a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
															<i className="ki-duotone ki-geolocation fs-4 me-1">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>SF, Bay Area</a>
															<a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
															<i className="ki-duotone ki-sms fs-4">
																<span className="path1"></span>
																<span className="path2"></span>
															</i>max@kt.com</a>
														</div>
														{/*end::Info*/}
													</div>
													{/*end::User*/}
													{/*begin::Actions*/}
													<div className="d-flex my-4">
														<a href="#" className="btn btn-sm btn-light me-2" id="kt_user_follow_button">
															<i className="ki-duotone ki-check fs-3 d-none"></i>
															{/*begin::Indicator label*/}
															<span className="indicator-label">Follow</span>
															{/*end::Indicator label*/}
															{/*begin::Indicator progress*/}
															<span className="indicator-progress">Please wait... 
															<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
															{/*end::Indicator progress*/}
														</a>
														<a href="#" className="btn btn-sm btn-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_offer_a_deal">Hire Me</a>
														{/*begin::Menu*/}
														<div className="me-0">
															<button className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
																<i className="ki-solid ki-dots-horizontal fs-2x"></i>
															</button>
															{/*begin::Menu 3*/}
															<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
																{/*begin::Heading*/}
																<div className="menu-item px-3">
																	<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
																</div>
																{/*end::Heading*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">Create Invoice</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link flex-stack px-3">Create Payment 
																	<span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
																		<i className="ki-duotone ki-information fs-6">
																			<span className="path1"></span>
																			<span className="path2"></span>
																			<span className="path3"></span>
																		</i>
																	</span></a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3">
																	<a href="#" className="menu-link px-3">Generate Bill</a>
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
																	<a href="#" className="menu-link px-3">
																		<span className="menu-title">Subscription</span>
																		<span className="menu-arrow"></span>
																	</a>
																	{/*begin::Menu sub*/}
																	<div className="menu-sub menu-sub-dropdown w-175px py-4">
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Plans</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Billing</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<a href="#" className="menu-link px-3">Statements</a>
																		</div>
																		{/*end::Menu item*/}
																		{/*begin::Menu separator*/}
																		<div className="separator my-2"></div>
																		{/*end::Menu separator*/}
																		{/*begin::Menu item*/}
																		<div className="menu-item px-3">
																			<div className="menu-content px-3">
																				{/*begin::Switch*/}
																				<label className="form-check form-switch form-check-custom form-check-solid">
																					{/*begin::Input*/}
																					<input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
																					{/*end::Input*/}
																					{/*end::Label*/}
																					<span className="form-check-label text-muted fs-6">Recuring</span>
																					{/*end::Label*/}
																				</label>
																				{/*end::Switch*/}
																			</div>
																		</div>
																		{/*end::Menu item*/}
																	</div>
																	{/*end::Menu sub*/}
																</div>
																{/*end::Menu item*/}
																{/*begin::Menu item*/}
																<div className="menu-item px-3 my-1">
																	<a href="#" className="menu-link px-3">Settings</a>
																</div>
																{/*end::Menu item*/}
															</div>
															{/*end::Menu 3*/}
														</div>
														{/*end::Menu*/}
													</div>
													{/*end::Actions*/}
												</div>
												{/*end::Title*/}
												{/*begin::Stats*/}
												<div className="d-flex flex-wrap flex-stack">
													{/*begin::Wrapper*/}
													<div className="d-flex flex-column flex-grow-1 pe-8">
														{/*begin::Stats*/}
														<div className="d-flex flex-wrap">
															{/*begin::Stat*/}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/*begin::Number*/}
																<div className="d-flex align-items-center">
																	<i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																	<div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
																</div>
																{/*end::Number*/}
																{/*begin::Label*/}
																<div className="fw-semibold fs-6 text-gray-500">Earnings</div>
																{/*end::Label*/}
															</div>
															{/*end::Stat*/}
															{/*begin::Stat*/}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/*begin::Number*/}
																<div className="d-flex align-items-center">
																	<i className="ki-duotone ki-arrow-down fs-3 text-danger me-2">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																	<div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="80">0</div>
																</div>
																{/*end::Number*/}
																{/*begin::Label*/}
																<div className="fw-semibold fs-6 text-gray-500">Projects</div>
																{/*end::Label*/}
															</div>
															{/*end::Stat*/}
															{/*begin::Stat*/}
															<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
																{/*begin::Number*/}
																<div className="d-flex align-items-center">
																	<i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
																		<span className="path1"></span>
																		<span className="path2"></span>
																	</i>
																	<div className="fs-2 fw-bold" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
																</div>
																{/*end::Number*/}
																{/*begin::Label*/}
																<div className="fw-semibold fs-6 text-gray-500">Success Rate</div>
																{/*end::Label*/}
															</div>
															{/*end::Stat*/}
														</div>
														{/*end::Stats*/}
													</div>
													{/*end::Wrapper*/}
													{/*begin::Progress*/}
													<div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
														<div className="d-flex justify-content-between w-100 mt-auto mb-2">
															<span className="fw-semibold fs-6 text-gray-500">Profile Compleation</span>
															<span className="fw-bold fs-6">50%</span>
														</div>
														<div className="h-5px mx-3 w-100 bg-light mb-3">
															<div className="bg-success rounded h-5px" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
														</div>
													</div>
													{/*end::Progress*/}
												</div>
												{/*end::Stats*/}
											</div>
											{/*end::Info*/}
										</div>
										{/*end::Details*/}
										{/*begin::Navs*/}
										<ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/overview.html">Overview</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/settings.html">Settings</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/security.html">Security</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/activity.html">Activity</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/billing.html">Billing</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/statements.html">Statements</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/referrals.html">Referrals</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5 active" href="account/api-keys.html">API Keys</a>
											</li>
											{/*end::Nav item*/}
											{/*begin::Nav item*/}
											<li className="nav-item mt-2">
												<a className="nav-link text-active-primary ms-0 me-10 py-5" href="account/logs.html">Logs</a>
											</li>
											{/*end::Nav item*/}
										</ul>
										{/*begin::Navs*/}
									</div>
								</div>
								{/*end::Navbar*/}
								{/*begin::API Overview*/}
								<div className="card mb-5 mb-xxl-10">
									{/*begin::Header*/}
									<div className="card-header">
										{/*begin::Title*/}
										<div className="card-title">
											<h3>API Overview</h3>
										</div>
										{/*end::Title*/}
										{/*begin::Toolbar*/}
										<div className="card-toolbar">
											<label className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
												<input className="form-check-input" type="checkbox" checked="checked" value="1" />
												<span className="form-check-label text-muted">Test mode</span>
											</label>
										</div>
										{/*end::Toolbar*/}
									</div>
									{/*end::Header*/}
									{/*begin::Body*/}
									<div className="card-body py-10">
										{/*begin::Row*/}
										<div className="row mb-10">
											{/*begin::Col*/}
											<div className="col-md-6 pb-10 pb-lg-0">
												<h2>How to set API</h2>
												<p className="fs-6 fw-semibold text-gray-600 py-2">Use images to enhance your post, improve its flow, add humor 
												<br />and explain complex topics</p>
												<a href="#" className="btn btn-light btn-active-light-primary">Get Started</a>
											</div>
											{/*end::Col*/}
											{/*begin::Col*/}
											<div className="col-md-6">
												<h2>Developer Tools</h2>
												<p className="fs-6 fw-semibold text-gray-600 py-2">Plan your blog post by choosing a topic, creating an outline conduct 
												<br />research, and checking facts</p>
												<a href="#" className="btn btn-light btn-active-light-primary">Create Rule</a>
											</div>
											{/*end::Col*/}
										</div>
										{/*end::Row*/}
										{/*begin::Notice*/}
										{/*begin::Notice*/}
										<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
											{/*begin::Icon*/}
											<i className="ki-duotone ki-design-1 fs-2tx text-primary me-4"></i>
											{/*end::Icon*/}
											{/*begin::Wrapper*/}
											<div className="d-flex flex-stack flex-grow-1">
												{/*begin::Content*/}
												<div className="fw-semibold">
													<div className="fs-6 text-gray-700">Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing and create outstanding products to serve your clients 
													<a className="fw-bold" href="#">Learn More</a>.</div>
												</div>
												{/*end::Content*/}
											</div>
											{/*end::Wrapper*/}
										</div>
										{/*end::Notice*/}
										{/*end::Notice*/}
									</div>
									{/*end::Body*/}
								</div>
								{/*end::API overview*/}
								{/*begin::Login sessions*/}
								<LoginSession />
								{/*end::Login sessions*/}
								<APIKey />
							</div>
							{/*end::Post*/}
						</div>
						{/*end::Container*/}
						{/*begin::Footer*/}
						<div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
							{/*begin::Container*/}
							<div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
								{/*begin::Copyright*/}
								<div className="text-gray-900 order-2 order-md-1">
									<span className="text-muted fw-semibold me-1">2024&copy;</span>
									<a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
								</div>
								{/*end::Copyright*/}
								{/*begin::Menu*/}
								<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
									<li className="menu-item">
										<a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
									</li>
									<li className="menu-item">
										<a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
									</li>
									<li className="menu-item">
										<a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
									</li>
								</ul>
								{/*end::Menu*/}
							</div>
							{/*end::Container*/}
						</div>
						{/*end::Footer*/}
					</div>
					{/*end::Wrapper*/}
				</div>
				{/*end::Page*/}
			</div>
			{/*end::Root*/}
			{/*begin::Drawers*/}
			{/*begin::Activities drawer*/}
			<div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
				<div className="card shadow-none border-0 rounded-0">
					{/*begin::Header*/}
					<div className="card-header" id="kt_activities_header">
						<h3 className="card-title fw-bold text-gray-900">Activity Logs</h3>
						<div className="card-toolbar">
							<button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
								<i className="ki-duotone ki-cross fs-1">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</button>
						</div>
					</div>
					{/*end::Header*/}
					{/*begin::Body*/}
					<div className="card-body position-relative" id="kt_activities_body">
						{/*begin::Content*/}
						<div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
							{/*begin::Timeline items*/}
							<div className="timeline timeline-border-dashed">
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon">
										<i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mb-10 mt-n1">
										{/*begin::Timeline heading*/}
										<div className="pe-3 mb-5">
											{/*begin::Title*/}
											<div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/*begin::Info*/}
												<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
												{/*end::Info*/}
												{/*begin::User*/}
												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
													<img src="assets/media/avatars/300-14.jpg" alt="img" />
												</div>
												{/*end::User*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
										{/*begin::Timeline details*/}
										<div className="overflow-auto pb-5">
											{/*begin::Record*/}
											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
												{/*begin::Title*/}
												<a href="apps/projects/project.html" className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>
												{/*end::Title*/}
												{/*begin::Label*/}
												<div className="min-w-175px pe-2">
													<span className="badge badge-light text-muted">Application Design</span>
												</div>
												{/*end::Label*/}
												{/*begin::Users*/}
												<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
													{/*begin::User*/}
													<div className="symbol symbol-circle symbol-25px">
														<img src="assets/media/avatars/300-2.jpg" alt="img" />
													</div>
													{/*end::User*/}
													{/*begin::User*/}
													<div className="symbol symbol-circle symbol-25px">
														<img src="assets/media/avatars/300-14.jpg" alt="img" />
													</div>
													{/*end::User*/}
													{/*begin::User*/}
													<div className="symbol symbol-circle symbol-25px">
														<div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
													</div>
													{/*end::User*/}
												</div>
												{/*end::Users*/}
												{/*begin::Progress*/}
												<div className="min-w-125px pe-2">
													<span className="badge badge-light-primary">In Progress</span>
												</div>
												{/*end::Progress*/}
												{/*begin::Action*/}
												<a href="apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
												{/*end::Action*/}
											</div>
											{/*end::Record*/}
											{/*begin::Record*/}
											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
												{/*begin::Title*/}
												<a href="apps/projects/project.html" className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>
												{/*end::Title*/}
												{/*begin::Label*/}
												<div className="min-w-175px">
													<span className="badge badge-light text-muted">CRM System Development</span>
												</div>
												{/*end::Label*/}
												{/*begin::Users*/}
												<div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
													{/*begin::User*/}
													<div className="symbol symbol-circle symbol-25px">
														<img src="assets/media/avatars/300-20.jpg" alt="img" />
													</div>
													{/*end::User*/}
													{/*begin::User*/}
													<div className="symbol symbol-circle symbol-25px">
														<div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
													</div>
													{/*end::User*/}
												</div>
												{/*end::Users*/}
												{/*begin::Progress*/}
												<div className="min-w-125px">
													<span className="badge badge-light-success">Completed</span>
												</div>
												{/*end::Progress*/}
												{/*begin::Action*/}
												<a href="apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
												{/*end::Action*/}
											</div>
											{/*end::Record*/}
										</div>
										{/*end::Timeline details*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon me-4">
										<i className="ki-duotone ki-flag fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mb-10 mt-n2">
										{/*begin::Timeline heading*/}
										<div className="overflow-auto pe-3">
											{/*begin::Title*/}
											<div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/*begin::Info*/}
												<div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
												{/*end::Info*/}
												{/*begin::User*/}
												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
													<img src="assets/media/avatars/300-1.jpg" alt="img" />
												</div>
												{/*end::User*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon">
										<i className="ki-duotone ki-disconnect fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
											<span className="path5"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mb-10 mt-n1">
										{/*begin::Timeline heading*/}
										<div className="mb-5 pe-3">
											{/*begin::Title*/}
											<a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/*begin::Info*/}
												<div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
												{/*end::Info*/}
												{/*begin::User*/}
												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
													<img src="assets/media/avatars/300-23.jpg" alt="img" />
												</div>
												{/*end::User*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
										{/*begin::Timeline details*/}
										<div className="overflow-auto pb-5">
											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
												{/*begin::Item*/}
												<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
													{/*begin::Icon*/}
													<img alt="" className="w-30px me-3" src="assets/media/svg/files/pdf.svg" />
													{/*end::Icon*/}
													{/*begin::Info*/}
													<div className="ms-1 fw-semibold">
														{/*begin::Desc*/}
														<a href="apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
														{/*end::Desc*/}
														{/*begin::Number*/}
														<div className="text-gray-500">1.9mb</div>
														{/*end::Number*/}
													</div>
													{/*begin::Info*/}
												</div>
												{/*end::Item*/}
												{/*begin::Item*/}
												<div className="d-flex flex-aligns-center pe-10 pe-lg-20">
													{/*begin::Icon*/}
													<img alt="apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/doc.svg" />
													{/*end::Icon*/}
													{/*begin::Info*/}
													<div className="ms-1 fw-semibold">
														{/*begin::Desc*/}
														<a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
														{/*end::Desc*/}
														{/*begin::Number*/}
														<div className="text-gray-500">18kb</div>
														{/*end::Number*/}
													</div>
													{/*end::Info*/}
												</div>
												{/*end::Item*/}
												{/*begin::Item*/}
												<div className="d-flex flex-aligns-center">
													{/*begin::Icon*/}
													<img alt="apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/css.svg" />
													{/*end::Icon*/}
													{/*begin::Info*/}
													<div className="ms-1 fw-semibold">
														{/*begin::Desc*/}
														<a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
														{/*end::Desc*/}
														{/*begin::Number*/}
														<div className="text-gray-500">20mb</div>
														{/*end::Number*/}
													</div>
													{/*end::Icon*/}
												</div>
												{/*end::Item*/}
											</div>
										</div>
										{/*end::Timeline details*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon">
										<i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mb-10 mt-n1">
										{/*begin::Timeline heading*/}
										<div className="pe-3 mb-5">
											{/*begin::Title*/}
											<div className="fs-5 fw-semibold mb-2">Task 
											<a href="#" className="text-primary fw-bold me-1">#45890</a>merged with 
											<a href="#" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/*begin::Info*/}
												<div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
												{/*end::Info*/}
												{/*begin::User*/}
												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
													<img src="assets/media/avatars/300-14.jpg" alt="img" />
												</div>
												{/*end::User*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon">
										<i className="ki-duotone ki-pencil fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mb-10 mt-n1">
										{/*begin::Timeline heading*/}
										<div className="pe-3 mb-5">
											{/*begin::Title*/}
											<div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/*begin::Info*/}
												<div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
												{/*end::Info*/}
												{/*begin::User*/}
												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
													<img src="assets/media/avatars/300-2.jpg" alt="img" />
												</div>
												{/*end::User*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
										{/*begin::Timeline details*/}
										<div className="overflow-auto pb-5">
											<div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
												{/*begin::Item*/}
												<div className="overlay me-10">
													{/*begin::Image*/}
													<div className="overlay-wrapper">
														<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-29.jpg" />
													</div>
													{/*end::Image*/}
													{/*begin::Link*/}
													<div className="overlay-layer bg-dark bg-opacity-10 rounded">
														<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
													</div>
													{/*end::Link*/}
												</div>
												{/*end::Item*/}
												{/*begin::Item*/}
												<div className="overlay me-10">
													{/*begin::Image*/}
													<div className="overlay-wrapper">
														<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-31.jpg" />
													</div>
													{/*end::Image*/}
													{/*begin::Link*/}
													<div className="overlay-layer bg-dark bg-opacity-10 rounded">
														<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
													</div>
													{/*end::Link*/}
												</div>
												{/*end::Item*/}
												{/*begin::Item*/}
												<div className="overlay">
													{/*begin::Image*/}
													<div className="overlay-wrapper">
														<img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-40.jpg" />
													</div>
													{/*end::Image*/}
													{/*begin::Link*/}
													<div className="overlay-layer bg-dark bg-opacity-10 rounded">
														<a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
													</div>
													{/*end::Link*/}
												</div>
												{/*end::Item*/}
											</div>
										</div>
										{/*end::Timeline details*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon">
										<i className="ki-duotone ki-sms fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mb-10 mt-n1">
										{/*begin::Timeline heading*/}
										<div className="pe-3 mb-5">
											{/*begin::Title*/}
											<div className="fs-5 fw-semibold mb-2">New case 
											<a href="#" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="overflow-auto pb-5">
												{/*begin::Wrapper*/}
												<div className="d-flex align-items-center mt-1 fs-6">
													{/*begin::Info*/}
													<div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
													{/*end::Info*/}
													{/*begin::User*/}
													<a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
													{/*end::User*/}
												</div>
												{/*end::Wrapper*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon">
										<i className="ki-duotone ki-pencil fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mb-10 mt-n1">
										{/*begin::Timeline heading*/}
										<div className="pe-3 mb-5">
											{/*begin::Title*/}
											<div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/*begin::Info*/}
												<div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
												{/*end::Info*/}
												{/*begin::User*/}
												<div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
													<img src="assets/media/avatars/300-4.jpg" alt="img" />
												</div>
												{/*end::User*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
										{/*begin::Timeline details*/}
										<div className="overflow-auto pb-5">
											{/*begin::Notice*/}
											<div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
												{/*begin::Icon*/}
												<i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
													<span className="path1"></span>
													<span className="path2"></span>
													<span className="path3"></span>
												</i>
												{/*end::Icon*/}
												{/*begin::Wrapper*/}
												<div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
													{/*begin::Content*/}
													<div className="mb-3 mb-md-0 fw-semibold">
														<h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
														<div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
													</div>
													{/*end::Content*/}
													{/*begin::Action*/}
													<a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
													{/*end::Action*/}
												</div>
												{/*end::Wrapper*/}
											</div>
											{/*end::Notice*/}
										</div>
										{/*end::Timeline details*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
								{/*begin::Timeline item*/}
								<div className="timeline-item">
									{/*begin::Timeline line*/}
									<div className="timeline-line"></div>
									{/*end::Timeline line*/}
									{/*begin::Timeline icon*/}
									<div className="timeline-icon">
										<i className="ki-duotone ki-basket fs-2 text-gray-500">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
											<span className="path4"></span>
										</i>
									</div>
									{/*end::Timeline icon*/}
									{/*begin::Timeline content*/}
									<div className="timeline-content mt-n1">
										{/*begin::Timeline heading*/}
										<div className="pe-3 mb-5">
											{/*begin::Title*/}
											<div className="fs-5 fw-semibold mb-2">New order 
											<a href="#" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
											{/*end::Title*/}
											{/*begin::Description*/}
											<div className="d-flex align-items-center mt-1 fs-6">
												{/*begin::Info*/}
												<div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
												{/*end::Info*/}
												{/*begin::User*/}
												<a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
												{/*end::User*/}
											</div>
											{/*end::Description*/}
										</div>
										{/*end::Timeline heading*/}
									</div>
									{/*end::Timeline content*/}
								</div>
								{/*end::Timeline item*/}
							</div>
							{/*end::Timeline items*/}
						</div>
						{/*end::Content*/}
					</div>
					{/*end::Body*/}
					{/*begin::Footer*/}
					<div className="card-footer py-5 text-center" id="kt_activities_footer">
						<a href="pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities 
						<i className="ki-duotone ki-arrow-right fs-3 text-primary">
							<span className="path1"></span>
							<span className="path2"></span>
						</i></a>
					</div>
					{/*end::Footer*/}
				</div>
			</div>
			{/*end::Activities drawer*/}
			{/*begin::Chat drawer*/}
			<div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
				{/*begin::Messenger*/}
				<div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">
					{/*begin::Card header*/}
					<div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
						{/*begin::Title*/}
						<div className="card-title">
							{/*begin::User*/}
							<div className="d-flex justify-content-center flex-column me-3">
								<a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
								{/*begin::Info*/}
								<div className="mb-0 lh-1">
									<span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
									<span className="fs-7 fw-semibold text-muted">Active</span>
								</div>
								{/*end::Info*/}
							</div>
							{/*end::User*/}
						</div>
						{/*end::Title*/}
						{/*begin::Card toolbar*/}
						<div className="card-toolbar">
							{/*begin::Menu*/}
							<div className="me-0">
								<button className="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
									<i className="ki-duotone ki-dots-square fs-2">
										<span className="path1"></span>
										<span className="path2"></span>
										<span className="path3"></span>
										<span className="path4"></span>
									</i>
								</button>
								{/*begin::Menu 3*/}
								<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
									{/*begin::Heading*/}
									<div className="menu-item px-3">
										<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
									</div>
									{/*end::Heading*/}
									{/*begin::Menu item*/}
									<div className="menu-item px-3">
										<a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
									</div>
									{/*end::Menu item*/}
									{/*begin::Menu item*/}
									<div className="menu-item px-3">
										<a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts 
										<span className="ms-2" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation">
											<i className="ki-duotone ki-information fs-7">
												<span className="path1"></span>
												<span className="path2"></span>
												<span className="path3"></span>
											</i>
										</span></a>
									</div>
									{/*end::Menu item*/}
									{/*begin::Menu item*/}
									<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
										<a href="#" className="menu-link px-3">
											<span className="menu-title">Groups</span>
											<span className="menu-arrow"></span>
										</a>
										{/*begin::Menu sub*/}
										<div className="menu-sub menu-sub-dropdown w-175px py-4">
											{/*begin::Menu item*/}
											<div className="menu-item px-3">
												<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
											</div>
											{/*end::Menu item*/}
											{/*begin::Menu item*/}
											<div className="menu-item px-3">
												<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
											</div>
											{/*end::Menu item*/}
											{/*begin::Menu item*/}
											<div className="menu-item px-3">
												<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
											</div>
											{/*end::Menu item*/}
										</div>
										{/*end::Menu sub*/}
									</div>
									{/*end::Menu item*/}
									{/*begin::Menu item*/}
									<div className="menu-item px-3 my-1">
										<a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
									</div>
									{/*end::Menu item*/}
								</div>
								{/*end::Menu 3*/}
							</div>
							{/*end::Menu*/}
							{/*begin::Close*/}
							<div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
								<i className="ki-duotone ki-cross-square fs-2">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</div>
							{/*end::Close*/}
						</div>
						{/*end::Card toolbar*/}
					</div>
					{/*end::Card header*/}
					{/*begin::Card body*/}
					<div className="card-body" id="kt_drawer_chat_messenger_body">
						{/*begin::Messages*/}
						<div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
							{/*begin::Message(in)*/}
							<div className="d-flex justify-content-start mb-10">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-start">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>
										{/*end::Avatar*/}
										{/*begin::Details*/}
										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">2 mins</span>
										</div>
										{/*end::Details*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(in)*/}
							{/*begin::Message(out)*/}
							<div className="d-flex justify-content-end mb-10">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-end">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Details*/}
										<div className="me-3">
											<span className="text-muted fs-7 mb-1">5 mins</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>
										{/*end::Details*/}
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>
										{/*end::Avatar*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(out)*/}
							{/*begin::Message(in)*/}
							<div className="d-flex justify-content-start mb-10">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-start">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>
										{/*end::Avatar*/}
										{/*begin::Details*/}
										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">1 Hour</span>
										</div>
										{/*end::Details*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(in)*/}
							{/*begin::Message(out)*/}
							<div className="d-flex justify-content-end mb-10">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-end">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Details*/}
										<div className="me-3">
											<span className="text-muted fs-7 mb-1">2 Hours</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>
										{/*end::Details*/}
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>
										{/*end::Avatar*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(out)*/}
							{/*begin::Message(in)*/}
							<div className="d-flex justify-content-start mb-10">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-start">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>
										{/*end::Avatar*/}
										{/*begin::Details*/}
										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">3 Hours</span>
										</div>
										{/*end::Details*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here: 
									<a href="https://keenthemes.com">Keenthemes.com</a></div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(in)*/}
							{/*begin::Message(out)*/}
							<div className="d-flex justify-content-end mb-10">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-end">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Details*/}
										<div className="me-3">
											<span className="text-muted fs-7 mb-1">4 Hours</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>
										{/*end::Details*/}
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>
										{/*end::Avatar*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(out)*/}
							{/*begin::Message(in)*/}
							<div className="d-flex justify-content-start mb-10">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-start">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>
										{/*end::Avatar*/}
										{/*begin::Details*/}
										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">5 Hours</span>
										</div>
										{/*end::Details*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(in)*/}
							{/*begin::Message(template for out)*/}
							<div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-end">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Details*/}
										<div className="me-3">
											<span className="text-muted fs-7 mb-1">Just now</span>
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
										</div>
										{/*end::Details*/}
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
										</div>
										{/*end::Avatar*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(template for out)*/}
							{/*begin::Message(template for in)*/}
							<div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
								{/*begin::Wrapper*/}
								<div className="d-flex flex-column align-items-start">
									{/*begin::User*/}
									<div className="d-flex align-items-center mb-2">
										{/*begin::Avatar*/}
										<div className="symbol symbol-35px symbol-circle">
											<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
										</div>
										{/*end::Avatar*/}
										{/*begin::Details*/}
										<div className="ms-3">
											<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
											<span className="text-muted fs-7 mb-1">Just now</span>
										</div>
										{/*end::Details*/}
									</div>
									{/*end::User*/}
									{/*begin::Text*/}
									<div className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
									{/*end::Text*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Message(template for in)*/}
						</div>
						{/*end::Messages*/}
					</div>
					{/*end::Card body*/}
					{/*begin::Card footer*/}
					<div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
						{/*begin::Input*/}
						<textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
						{/*end::Input*/}
						{/*begin:Toolbar*/}
						<div className="d-flex flex-stack">
							{/*begin::Actions*/}
							<div className="d-flex align-items-center me-2">
								<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
									<i className="ki-duotone ki-paper-clip fs-3"></i>
								</button>
								<button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
									<i className="ki-duotone ki-cloud-add fs-3">
										<span className="path1"></span>
										<span className="path2"></span>
									</i>
								</button>
							</div>
							{/*end::Actions*/}
							{/*begin::Send*/}
							<button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
							{/*end::Send*/}
						</div>
						{/*end::Toolbar*/}
					</div>
					{/*end::Card footer*/}
				</div>
				{/*end::Messenger*/}
			</div>
			{/*end::Chat drawer*/}
			{/*begin::Chat drawer*/}
			<div id="kt_shopping_cart" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="cart" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" data-kt-drawer-close="#kt_drawer_shopping_cart_close">
				{/*begin::Messenger*/}
				<div className="card card-flush w-100 rounded-0">
					{/*begin::Card header*/}
					<div className="card-header">
						{/*begin::Title*/}
						<h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
						{/*end::Title*/}
						{/*begin::Card toolbar*/}
						<div className="card-toolbar">
							{/*begin::Close*/}
							<div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
								<i className="ki-duotone ki-cross fs-2">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</div>
							{/*end::Close*/}
						</div>
						{/*end::Card toolbar*/}
					</div>
					{/*end::Card header*/}
					{/*begin::Card body*/}
					<div className="card-body hover-scroll-overlay-y h-400px pt-5">
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							{/*begin::Wrapper*/}
							<div className="d-flex flex-column me-3">
								{/*begin::Section*/}
								<div className="mb-3">
									<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
									<span className="text-gray-500 fw-semibold d-block">The best kitchen gadget in 2022</span>
								</div>
								{/*end::Section*/}
								{/*begin::Section*/}
								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 350</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">5</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-duotone ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-duotone ki-plus fs-4"></i>
									</a>
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Wrapper*/}
							{/*begin::Pic*/}
							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-1.jpg" alt="" />
							</div>
							{/*end::Pic*/}
						</div>
						{/*end::Item*/}
						{/*begin::Separator*/}
						<div className="separator separator-dashed my-6"></div>
						{/*end::Separator*/}
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							{/*begin::Wrapper*/}
							<div className="d-flex flex-column me-3">
								{/*begin::Section*/}
								<div className="mb-3">
									<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
									<span className="text-gray-500 fw-semibold d-block">Smart tool for cooking</span>
								</div>
								{/*end::Section*/}
								{/*begin::Section*/}
								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 650</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">4</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-duotone ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-duotone ki-plus fs-4"></i>
									</a>
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Wrapper*/}
							{/*begin::Pic*/}
							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-3.jpg" alt="" />
							</div>
							{/*end::Pic*/}
						</div>
						{/*end::Item*/}
						{/*begin::Separator*/}
						<div className="separator separator-dashed my-6"></div>
						{/*end::Separator*/}
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							{/*begin::Wrapper*/}
							<div className="d-flex flex-column me-3">
								{/*begin::Section*/}
								<div className="mb-3">
									<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
									<span className="text-gray-500 fw-semibold d-block">Professional camera for edge</span>
								</div>
								{/*end::Section*/}
								{/*begin::Section*/}
								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 150</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">3</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-duotone ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-duotone ki-plus fs-4"></i>
									</a>
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Wrapper*/}
							{/*begin::Pic*/}
							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-8.jpg" alt="" />
							</div>
							{/*end::Pic*/}
						</div>
						{/*end::Item*/}
						{/*begin::Separator*/}
						<div className="separator separator-dashed my-6"></div>
						{/*end::Separator*/}
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							{/*begin::Wrapper*/}
							<div className="d-flex flex-column me-3">
								{/*begin::Section*/}
								<div className="mb-3">
									<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
									<span className="text-gray-500 fw-semibold d-block">Manfactoring unique objekts</span>
								</div>
								{/*end::Section*/}
								{/*begin::Section*/}
								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 1450</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-duotone ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-duotone ki-plus fs-4"></i>
									</a>
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Wrapper*/}
							{/*begin::Pic*/}
							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-26.jpg" alt="" />
							</div>
							{/*end::Pic*/}
						</div>
						{/*end::Item*/}
						{/*begin::Separator*/}
						<div className="separator separator-dashed my-6"></div>
						{/*end::Separator*/}
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							{/*begin::Wrapper*/}
							<div className="d-flex flex-column me-3">
								{/*begin::Section*/}
								<div className="mb-3">
									<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
									<span className="text-gray-500 fw-semibold d-block">Perfect animation tool</span>
								</div>
								{/*end::Section*/}
								{/*begin::Section*/}
								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 650</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">7</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-duotone ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-duotone ki-plus fs-4"></i>
									</a>
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Wrapper*/}
							{/*begin::Pic*/}
							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-21.jpg" alt="" />
							</div>
							{/*end::Pic*/}
						</div>
						{/*end::Item*/}
						{/*begin::Separator*/}
						<div className="separator separator-dashed my-6"></div>
						{/*end::Separator*/}
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							{/*begin::Wrapper*/}
							<div className="d-flex flex-column me-3">
								{/*begin::Section*/}
								<div className="mb-3">
									<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
									<span className="text-gray-500 fw-semibold d-block">Profile info,Timeline etc</span>
								</div>
								{/*end::Section*/}
								{/*begin::Section*/}
								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 720</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">6</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-duotone ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-duotone ki-plus fs-4"></i>
									</a>
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Wrapper*/}
							{/*begin::Pic*/}
							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-34.jpg" alt="" />
							</div>
							{/*end::Pic*/}
						</div>
						{/*end::Item*/}
						{/*begin::Separator*/}
						<div className="separator separator-dashed my-6"></div>
						{/*end::Separator*/}
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							{/*begin::Wrapper*/}
							<div className="d-flex flex-column me-3">
								{/*begin::Section*/}
								<div className="mb-3">
									<a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
									<span className="text-gray-500 fw-semibold d-block">Manfactoring unique objekts</span>
								</div>
								{/*end::Section*/}
								{/*begin::Section*/}
								<div className="d-flex align-items-center">
									<span className="fw-bold text-gray-800 fs-5">$ 430</span>
									<span className="text-muted mx-2">for</span>
									<span className="fw-bold text-gray-800 fs-5 me-3">8</span>
									<a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
										<i className="ki-duotone ki-minus fs-4"></i>
									</a>
									<a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
										<i className="ki-duotone ki-plus fs-4"></i>
									</a>
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Wrapper*/}
							{/*begin::Pic*/}
							<div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
								<img src="assets/media/stock/600x400/img-27.jpg" alt="" />
							</div>
							{/*end::Pic*/}
						</div>
						{/*end::Item*/}
					</div>
					{/*end::Card body*/}
					{/*begin::Card footer*/}
					<div className="card-footer">
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							<span className="fw-bold text-gray-600">Total</span>
							<span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
						</div>
						{/*end::Item*/}
						{/*begin::Item*/}
						<div className="d-flex flex-stack">
							<span className="fw-bold text-gray-600">Sub total</span>
							<span className="text-primary fw-bolder fs-5">$ 246.35</span>
						</div>
						{/*end::Item*/}
						{/*end::Action*/}
						<div className="d-flex justify-content-end mt-9">
							<a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
						</div>
						{/*end::Action*/}
					</div>
					{/*end::Card footer*/}
				</div>
				{/*end::Messenger*/}
			</div>
			{/*end::Chat drawer*/}
			{/*end::Drawers*/}
			{/*end::Main*/}
			{/*begin::Scrolltop*/}
			<div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
				<i className="ki-duotone ki-arrow-up">
					<span className="path1"></span>
					<span className="path2"></span>
				</i>
			</div>
			{/*end::Scrolltop*/}
			{/*begin::Modals*/}
			{/*begin::Modal - Create Api Key*/}
			<div className="modal fade" id="kt_modal_create_api_key" tabindex="-1" aria-hidden="true">
				{/*begin::Modal dialog*/}
				<div className="modal-dialog modal-dialog-centered mw-650px">
					{/*begin::Modal content*/}
					<div className="modal-content">
						{/*begin::Modal header*/}
						<div className="modal-header" id="kt_modal_create_api_key_header">
							{/*begin::Modal title*/}
							<h2>Create API Key</h2>
							{/*end::Modal title*/}
							{/*begin::Close*/}
							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-duotone ki-cross fs-1">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</div>
							{/*end::Close*/}
						</div>
						{/*end::Modal header*/}
						{/*begin::Form*/}
						<form id="kt_modal_create_api_key_form" className="form" action="#">
							{/*begin::Modal body*/}
							<div className="modal-body py-10 px-lg-17">
								{/*begin::Scroll*/}
								<div className="scroll-y me-n7 pe-7" id="kt_modal_create_api_key_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_create_api_key_header" data-kt-scroll-wrappers="#kt_modal_create_api_key_scroll" data-kt-scroll-offset="300px">
									{/*begin::Notice*/}
									<div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6">
										{/*begin::Icon*/}
										<i className="ki-duotone ki-information fs-2tx text-warning me-4">
											<span className="path1"></span>
											<span className="path2"></span>
											<span className="path3"></span>
										</i>
										{/*end::Icon*/}
										{/*begin::Wrapper*/}
										<div className="d-flex flex-stack flex-grow-1">
											{/*begin::Content*/}
											<div className="fw-semibold">
												<h4 className="text-gray-900 fw-bold">Please Note!</h4>
												<div className="fs-6 text-gray-700">Adding new API key may afftect to your 
												<a href="#">Affiliate Income</a></div>
											</div>
											{/*end::Content*/}
										</div>
										{/*end::Wrapper*/}
									</div>
									{/*end::Notice*/}
									{/*begin::Input group*/}
									<div className="mb-5 fv-row">
										{/*begin::Label*/}
										<label className="required fs-5 fw-semibold mb-2">API Name</label>
										{/*end::Label*/}
										{/*begin::Input*/}
										<input type="text" className="form-control form-control-solid" placeholder="Your API Name" name="name" />
										{/*end::Input*/}
									</div>
									{/*end::Input group*/}
									{/*begin::Input group*/}
									<div className="d-flex flex-column mb-5 fv-row">
										{/*begin::Label*/}
										<label className="required fs-5 fw-semibold mb-2">Short Description</label>
										{/*end::Label*/}
										{/*begin::Input*/}
										<textarea className="form-control form-control-solid" rows="3" name="description" placeholder="Describe your API"></textarea>
										{/*end::Input*/}
									</div>
									{/*end::Input group*/}
									{/*begin::Input group*/}
									<div className="d-flex flex-column mb-10 fv-row">
										{/*begin::Label*/}
										<label className="required fs-5 fw-semibold mb-2">Category</label>
										{/*end::Label*/}
										{/*begin::Select*/}
										<select name="category" data-control="select2" data-hide-search="true" data-placeholder="Select a Category..." className="form-select form-select-solid">
											<option value="">Select a Category...</option>
											<option value="1">CRM</option>
											<option value="2">Project Alice</option>
											<option value="3">Keenthemes</option>
											<option value="4">General</option>
										</select>
										{/*end::Select*/}
									</div>
									{/*end::Input group*/}
									{/*begin::Input group*/}
									<div className="mb-10">
										{/*begin::Heading*/}
										<div className="mb-3">
											{/*begin::Label*/}
											<label className="d-flex align-items-center fs-5 fw-semibold">
												<span className="required">Specify Your API Method</span>
												<span className="ms-1" data-bs-toggle="tooltip" title="Your billing numbers will be calculated based on your API method">
													<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
													</i>
												</span>
											</label>
											{/*end::Label*/}
											{/*begin::Description*/}
											<div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
											{/*end::Description*/}
										</div>
										{/*end::Heading*/}
										{/*begin::Row*/}
										<div className="fv-row">
											{/*begin::Radio group*/}
											<div className="btn-group w-100" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]">
												{/*begin::Radio*/}
												<label className="btn btn-outline btn-active-success btn-color-muted" data-kt-button="true">
												{/*begin::Input*/}
												<input className="btn-check" type="radio" name="method" value="1" />
												{/*end::Input*/}
												Open API</label>
												{/*end::Radio*/}
												{/*begin::Radio*/}
												<label className="btn btn-outline btn-active-success btn-color-muted active" data-kt-button="true">
												{/*begin::Input*/}
												<input className="btn-check" type="radio" name="method" checked="checked" value="2" />
												{/*end::Input*/}
												SQL Call</label>
												{/*end::Radio*/}
												{/*begin::Radio*/}
												<label className="btn btn-outline btn-active-success btn-color-muted" data-kt-button="true">
												{/*begin::Input*/}
												<input className="btn-check" type="radio" name="method" value="3" />
												{/*end::Input*/}
												UI/UX</label>
												{/*end::Radio*/}
												{/*begin::Radio*/}
												<label className="btn btn-outline btn-active-success btn-color-muted" data-kt-button="true">
												{/*begin::Input*/}
												<input className="btn-check" type="radio" name="method" value="4" />
												{/*end::Input*/}
												Docs</label>
												{/*end::Radio*/}
											</div>
											{/*end::Radio group*/}
										</div>
										{/*end::Row*/}
									</div>
									{/*end::Input group*/}
								</div>
								{/*end::Scroll*/}
							</div>
							{/*end::Modal body*/}
							{/*begin::Modal footer*/}
							<div className="modal-footer flex-center">
								{/*begin::Button*/}
								<button type="reset" id="kt_modal_create_api_key_cancel" className="btn btn-light me-3">Discard</button>
								{/*end::Button*/}
								{/*begin::Button*/}
								<button type="submit" id="kt_modal_create_api_key_submit" className="btn btn-primary">
									<span className="indicator-label">Submit</span>
									<span className="indicator-progress">Please wait... 
									<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
								{/*end::Button*/}
							</div>
							{/*end::Modal footer*/}
						</form>
						{/*end::Form*/}
					</div>
					{/*end::Modal content*/}
				</div>
				{/*end::Modal dialog*/}
			</div>
			{/*end::Modal - Create Api Key*/}
			{/*begin::Modal - Offer A Deal*/}
			<div className="modal fade" id="kt_modal_offer_a_deal" tabindex="-1" aria-hidden="true">
				{/*begin::Modal dialog*/}
				<div className="modal-dialog modal-dialog-centered mw-1000px">
					{/*begin::Modal content*/}
					<div className="modal-content">
						{/*begin::Modal header*/}
						<div className="modal-header py-7 d-flex justify-content-between">
							{/*begin::Modal title*/}
							<h2>Offer a Deal</h2>
							{/*end::Modal title*/}
							{/*begin::Close*/}
							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-duotone ki-cross fs-1">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</div>
							{/*end::Close*/}
						</div>
						{/*begin::Modal header*/}
						{/*begin::Modal body*/}
						<div className="modal-body scroll-y m-5">
							{/*begin::Stepper*/}
							<div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
								{/*begin::Nav*/}
								<div className="stepper-nav justify-content-center py-2">
									{/*begin::Step 1*/}
									<div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Deal Type</h3>
									</div>
									{/*end::Step 1*/}
									{/*begin::Step 2*/}
									<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Deal Details</h3>
									</div>
									{/*end::Step 2*/}
									{/*begin::Step 3*/}
									<div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Finance Settings</h3>
									</div>
									{/*end::Step 3*/}
									{/*begin::Step 4*/}
									<div className="stepper-item" data-kt-stepper-element="nav">
										<h3 className="stepper-title">Completed</h3>
									</div>
									{/*end::Step 4*/}
								</div>
								{/*end::Nav*/}
								{/*begin::Form*/}
								<form className="mx-auto mw-500px w-100 pt-15 pb-10" novalidate="novalidate" id="kt_modal_offer_a_deal_form">
									{/*begin::Type*/}
									<div className="current" data-kt-stepper-element="content">
										{/*begin::Wrapper*/}
										<div className="w-100">
											{/*begin::Heading*/}
											<div className="mb-13">
												{/*begin::Title*/}
												<h2 className="mb-3">Deal Type</h2>
												{/*end::Title*/}
												{/*begin::Description*/}
												<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
												<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
												{/*end::Description*/}
											</div>
											{/*end::Heading*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-15" data-kt-buttons="true">
												{/*begin::Option*/}
												<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
													{/*begin::Input*/}
													<input className="btn-check" type="radio" checked="checked" name="offer_type" value="1" />
													{/*end::Input*/}
													{/*begin::Label*/}
													<span className="d-flex">
														{/*begin::Icon*/}
														<i className="ki-duotone ki-profile-circle fs-3hx">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
														</i>
														{/*end::Icon*/}
														{/*begin::Info*/}
														<span className="ms-4">
															<span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Deal</span>
															<span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
														</span>
														{/*end::Info*/}
													</span>
													{/*end::Label*/}
												</label>
												{/*end::Option*/}
												{/*begin::Option*/}
												<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
													{/*begin::Input*/}
													<input className="btn-check" type="radio" name="offer_type" value="2" />
													{/*end::Input*/}
													{/*begin::Label*/}
													<span className="d-flex">
														{/*begin::Icon*/}
														<i className="ki-duotone ki-element-11 fs-3hx">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
															<span className="path4"></span>
														</i>
														{/*end::Icon*/}
														{/*begin::Info*/}
														<span className="ms-4">
															<span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate Deal</span>
															<span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
														</span>
														{/*end::Info*/}
													</span>
													{/*end::Label*/}
												</label>
												{/*end::Option*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Actions*/}
											<div className="d-flex justify-content-end">
												<button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
													<span className="indicator-label">Offer Details</span>
													<span className="indicator-progress">Please wait... 
													<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
												</button>
											</div>
											{/*end::Actions*/}
										</div>
										{/*end::Wrapper*/}
									</div>
									{/*end::Type*/}
									{/*begin::Details*/}
									<div data-kt-stepper-element="content">
										{/*begin::Wrapper*/}
										<div className="w-100">
											{/*begin::Heading*/}
											<div className="mb-13">
												{/*begin::Title*/}
												<h2 className="mb-3">Deal Details</h2>
												{/*end::Title*/}
												{/*begin::Description*/}
												<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
												<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
												{/*end::Description*/}
											</div>
											{/*end::Heading*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-8">
												{/*begin::Label*/}
												<label className="required fs-6 fw-semibold mb-2">Customer</label>
												{/*end::Label*/}
												{/*begin::Input*/}
												<select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
													<option></option>
													<option value="1" selected="selected">Keenthemes</option>
													<option value="2">CRM App</option>
												</select>
												{/*end::Input*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-8">
												{/*begin::Label*/}
												<label className="required fs-6 fw-semibold mb-2">Deal Title</label>
												{/*end::Label*/}
												{/*begin::Input*/}
												<input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" value="Marketing Campaign" />
												{/*end::Input*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-8">
												{/*begin::Label*/}
												<label className="fs-6 fw-semibold mb-2">Deal Description</label>
												{/*end::Label*/}
												{/*begin::Label*/}
												<textarea className="form-control form-control-solid" rows="3" placeholder="Enter Deal Description" name="details_description">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>
												{/*end::Label*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-8">
												<label className="required fs-6 fw-semibold mb-2">Activation Date</label>
												<div className="position-relative d-flex align-items-center">
													{/*begin::Icon*/}
													<i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
														<span className="path1"></span>
														<span className="path2"></span>
														<span className="path3"></span>
														<span className="path4"></span>
														<span className="path5"></span>
														<span className="path6"></span>
													</i>
													{/*end::Icon*/}
													{/*begin::Datepicker*/}
													<input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />
													{/*end::Datepicker*/}
												</div>
											</div>
											{/*end::Input group*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-15">
												{/*begin::Wrapper*/}
												<div className="d-flex flex-stack">
													{/*begin::Label*/}
													<div className="me-5">
														<label className="required fs-6 fw-semibold">Notifications</label>
														<div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
													</div>
													{/*end::Label*/}
													{/*begin::Checkboxes*/}
													<div className="d-flex">
														{/*begin::Checkbox*/}
														<label className="form-check form-check-custom form-check-solid me-10">
															{/*begin::Input*/}
															<input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="details_notifications[]" />
															{/*end::Input*/}
															{/*begin::Label*/}
															<span className="form-check-label fw-semibold">Email</span>
															{/*end::Label*/}
														</label>
														{/*end::Checkbox*/}
														{/*begin::Checkbox*/}
														<label className="form-check form-check-custom form-check-solid">
															{/*begin::Input*/}
															<input className="form-check-input h-20px w-20px" type="checkbox" value="phone" checked="checked" name="details_notifications[]" />
															{/*end::Input*/}
															{/*begin::Label*/}
															<span className="form-check-label fw-semibold">Phone</span>
															{/*end::Label*/}
														</label>
														{/*end::Checkbox*/}
													</div>
													{/*end::Checkboxes*/}
												</div>
												{/*begin::Wrapper*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Actions*/}
											<div className="d-flex flex-stack">
												<button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">Deal Type</button>
												<button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
													<span className="indicator-label">Financing</span>
													<span className="indicator-progress">Please wait... 
													<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
												</button>
											</div>
											{/*end::Actions*/}
										</div>
										{/*end::Wrapper*/}
									</div>
									{/*end::Details*/}
									{/*begin::Budget*/}
									<div data-kt-stepper-element="content">
										{/*begin::Wrapper*/}
										<div className="w-100">
											{/*begin::Heading*/}
											<div className="mb-13">
												{/*begin::Title*/}
												<h2 className="mb-3">Finance</h2>
												{/*end::Title*/}
												{/*begin::Description*/}
												<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
												<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
												{/*end::Description*/}
											</div>
											{/*end::Heading*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-8">
												{/*begin::Label*/}
												<label className="d-flex align-items-center fs-6 fw-semibold mb-2">
													<span className="required">Setup Budget</span>
													<span className="lh-1 ms-1" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className=&quot;ki-duotone ki-bank fs-3 me-3&quot;&gt;&lt;span className=&quot;path1&quot;&gt;&lt;/span&gt;&lt;span className=&quot;path2&quot;&gt;&lt;/span&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;">
														<i className="ki-duotone ki-information-5 text-gray-500 fs-6">
															<span className="path1"></span>
															<span className="path2"></span>
															<span className="path3"></span>
														</i>
													</span>
												</label>
												{/*end::Label*/}
												{/*begin::Dialer*/}
												<div className="position-relative w-lg-250px" id="kt_modal_finance_setup" data-kt-dialer="true" data-kt-dialer-min="50" data-kt-dialer-max="50000" data-kt-dialer-step="100" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
													{/*begin::Decrease control*/}
													<button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
														<i className="ki-duotone ki-minus-circle fs-1">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</button>
													{/*end::Decrease control*/}
													{/*begin::Input control*/}
													<input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" readonly="readonly" value="$50" />
													{/*end::Input control*/}
													{/*begin::Increase control*/}
													<button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
														<i className="ki-duotone ki-plus-circle fs-1">
															<span className="path1"></span>
															<span className="path2"></span>
														</i>
													</button>
													{/*end::Increase control*/}
												</div>
												{/*end::Dialer*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-8">
												{/*begin::Label*/}
												<label className="fs-6 fw-semibold mb-2">Budget Usage</label>
												{/*end::Label*/}
												{/*begin::Row*/}
												<div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
													{/*begin::Col*/}
													<div className="col-md-6 col-lg-12 col-xxl-6">
														{/*begin::Option*/}
														<label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
															{/*begin::Radio*/}
															<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																<input className="form-check-input" type="radio" name="finance_usage" value="1" checked="checked" />
															</span>
															{/*end::Radio*/}
															{/*begin::Info*/}
															<span className="ms-5">
																<span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
																<span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
															</span>
															{/*end::Info*/}
														</label>
														{/*end::Option*/}
													</div>
													{/*end::Col*/}
													{/*begin::Col*/}
													<div className="col-md-6 col-lg-12 col-xxl-6">
														{/*begin::Option*/}
														<label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
															{/*begin::Radio*/}
															<span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
																<input className="form-check-input" type="radio" name="finance_usage" value="2" />
															</span>
															{/*end::Radio*/}
															{/*begin::Info*/}
															<span className="ms-5">
																<span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
																<span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
															</span>
															{/*end::Info*/}
														</label>
														{/*end::Option*/}
													</div>
													{/*end::Col*/}
												</div>
												{/*end::Row*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Input group*/}
											<div className="fv-row mb-15">
												{/*begin::Wrapper*/}
												<div className="d-flex flex-stack">
													{/*begin::Label*/}
													<div className="me-5">
														<label className="fs-6 fw-semibold">Allow Changes in Budget</label>
														<div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
													</div>
													{/*end::Label*/}
													{/*begin::Switch*/}
													<label className="form-check form-switch form-check-custom form-check-solid">
														<input className="form-check-input" type="checkbox" value="1" name="finance_allow" checked="checked" />
														<span className="form-check-label fw-semibold text-muted">Allowed</span>
													</label>
													{/*end::Switch*/}
												</div>
												{/*end::Wrapper*/}
											</div>
											{/*end::Input group*/}
											{/*begin::Actions*/}
											<div className="d-flex flex-stack">
												<button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">Project Settings</button>
												<button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
													<span className="indicator-label">Build Team</span>
													<span className="indicator-progress">Please wait... 
													<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
												</button>
											</div>
											{/*end::Actions*/}
										</div>
										{/*end::Wrapper*/}
									</div>
									{/*end::Budget*/}
									{/*begin::Complete*/}
									<div data-kt-stepper-element="content">
										{/*begin::Wrapper*/}
										<div className="w-100">
											{/*begin::Heading*/}
											<div className="mb-13">
												{/*begin::Title*/}
												<h2 className="mb-3">Deal Created!</h2>
												{/*end::Title*/}
												{/*begin::Description*/}
												<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
												<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
												{/*end::Description*/}
											</div>
											{/*end::Heading*/}
											{/*begin::Actions*/}
											<div className="d-flex flex-center pb-20">
												<button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Deal</button>
												<a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Deal</a>
											</div>
											{/*end::Actions*/}
											{/*begin::Illustration*/}
											<div className="text-center px-4">
												<img src="assets/media/illustrations/sketchy-1/20.png" alt="" className="mw-100 mh-300px" />
											</div>
											{/*end::Illustration*/}
										</div>
									</div>
									{/*end::Complete*/}
								</form>
								{/*end::Form*/}
							</div>
							{/*end::Stepper*/}
						</div>
						{/*begin::Modal body*/}
					</div>
				</div>
			</div>
			{/*end::Modal - Offer A Deal*/}
			{/*begin::Modal - Users Search*/}
			<div className="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
				{/*begin::Modal dialog*/}
				<div className="modal-dialog modal-dialog-centered mw-650px">
					{/*begin::Modal content*/}
					<div className="modal-content">
						{/*begin::Modal header*/}
						<div className="modal-header pb-0 border-0 justify-content-end">
							{/*begin::Close*/}
							<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<i className="ki-duotone ki-cross fs-1">
									<span className="path1"></span>
									<span className="path2"></span>
								</i>
							</div>
							{/*end::Close*/}
						</div>
						{/*begin::Modal header*/}
						{/*begin::Modal body*/}
						<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
							{/*begin::Content*/}
							<div className="text-center mb-13">
								<h1 className="mb-3">Search Users</h1>
								<div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
							</div>
							{/*end::Content*/}
							{/*begin::Search*/}
							<div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
								{/*begin::Form*/}
								<form data-kt-search-element="form" className="w-100 position-relative mb-5" autocomplete="off">
									{/*begin::Hidden input(Added to disable form autocomplete)*/}
									<input type="hidden" />
									{/*end::Hidden input*/}
									{/*begin::Icon*/}
									<i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
										<span className="path1"></span>
										<span className="path2"></span>
									</i>
									{/*end::Icon*/}
									{/*begin::Input*/}
									<input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
									{/*end::Input*/}
									{/*begin::Spinner*/}
									<span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
										<span className="spinner-border h-15px w-15px align-middle text-muted"></span>
									</span>
									{/*end::Spinner*/}
									{/*begin::Reset*/}
									<span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
										<i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
											<span className="path1"></span>
											<span className="path2"></span>
										</i>
									</span>
									{/*end::Reset*/}
								</form>
								{/*end::Form*/}
								{/*begin::Wrapper*/}
								<div className="py-5">
									{/*begin::Suggestions*/}
									<div data-kt-search-element="suggestions">
										{/*begin::Heading*/}
										<h3 className="fw-semibold mb-5">Recently searched:</h3>
										{/*end::Heading*/}
										{/*begin::Users*/}
										<div className="mh-375px scroll-y me-n7 pe-7">
											{/*begin::User*/}
											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
												{/*begin::Avatar*/}
												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src="assets/media/avatars/300-6.jpg" />
												</div>
												{/*end::Avatar*/}
												{/*begin::Info*/}
												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Emma Smith</span>
													<span className="badge badge-light">Art Director</span>
												</div>
												{/*end::Info*/}
											</a>
											{/*end::User*/}
											{/*begin::User*/}
											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
												{/*begin::Avatar*/}
												<div className="symbol symbol-35px symbol-circle me-5">
													<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
												</div>
												{/*end::Avatar*/}
												{/*begin::Info*/}
												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Melody Macy</span>
													<span className="badge badge-light">Marketing Analytic</span>
												</div>
												{/*end::Info*/}
											</a>
											{/*end::User*/}
											{/*begin::User*/}
											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
												{/*begin::Avatar*/}
												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
												</div>
												{/*end::Avatar*/}
												{/*begin::Info*/}
												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Max Smith</span>
													<span className="badge badge-light">Software Enginer</span>
												</div>
												{/*end::Info*/}
											</a>
											{/*end::User*/}
											{/*begin::User*/}
											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
												{/*begin::Avatar*/}
												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
												</div>
												{/*end::Avatar*/}
												{/*begin::Info*/}
												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Sean Bean</span>
													<span className="badge badge-light">Web Developer</span>
												</div>
												{/*end::Info*/}
											</a>
											{/*end::User*/}
											{/*begin::User*/}
											<a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
												{/*begin::Avatar*/}
												<div className="symbol symbol-35px symbol-circle me-5">
													<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
												</div>
												{/*end::Avatar*/}
												{/*begin::Info*/}
												<div className="fw-semibold">
													<span className="fs-6 text-gray-800 me-2">Brian Cox</span>
													<span className="badge badge-light">UI/UX Designer</span>
												</div>
												{/*end::Info*/}
											</a>
											{/*end::User*/}
										</div>
										{/*end::Users*/}
									</div>
									{/*end::Suggestions*/}
									{/*begin::Results(add d-none to below element to hide the users list by default)*/}
									<div data-kt-search-element="results" className="d-none">
										{/*begin::Users*/}
										<div className="mh-375px scroll-y me-n7 pe-7">
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-6.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
														<div className="fw-semibold text-muted">smith@kpmg.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2" selected="selected">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
														<div className="fw-semibold text-muted">melody@altbox.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1" selected="selected">Guest</option>
														<option value="2">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
														<div className="fw-semibold text-muted">max@kt.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2">Owner</option>
														<option value="3" selected="selected">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
														<div className="fw-semibold text-muted">sean@dellito.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2" selected="selected">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
														<div className="fw-semibold text-muted">brian@exchange.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2">Owner</option>
														<option value="3" selected="selected">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
														<div className="fw-semibold text-muted">mik@pex.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2" selected="selected">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-9.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
														<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2">Owner</option>
														<option value="3" selected="selected">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
														<div className="fw-semibold text-muted">olivia@corpmail.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2" selected="selected">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
														<div className="fw-semibold text-muted">owen.neil@gmail.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1" selected="selected">Guest</option>
														<option value="2">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-23.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
														<div className="fw-semibold text-muted">dam@consilting.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2">Owner</option>
														<option value="3" selected="selected">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
														<div className="fw-semibold text-muted">emma@intenso.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2" selected="selected">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-12.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
														<div className="fw-semibold text-muted">ana.cf@limtel.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1" selected="selected">Guest</option>
														<option value="2">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
														<div className="fw-semibold text-muted">robert@benko.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2">Owner</option>
														<option value="3" selected="selected">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-13.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
														<div className="fw-semibold text-muted">miller@mapple.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2">Owner</option>
														<option value="3" selected="selected">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<span className="symbol-label bg-light-success text-success fw-semibold">L</span>
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
														<div className="fw-semibold text-muted">lucy.m@fentech.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2" selected="selected">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-21.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
														<div className="fw-semibold text-muted">ethan@loop.com.au</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1" selected="selected">Guest</option>
														<option value="2">Owner</option>
														<option value="3">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
											{/*begin::Separator*/}
											<div className="border-bottom border-gray-300 border-bottom-dashed"></div>
											{/*end::Separator*/}
											{/*begin::User*/}
											<div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
												{/*begin::Details*/}
												<div className="d-flex align-items-center">
													{/*begin::Checkbox*/}
													<label className="form-check form-check-custom form-check-solid me-5">
														<input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
													</label>
													{/*end::Checkbox*/}
													{/*begin::Avatar*/}
													<div className="symbol symbol-35px symbol-circle">
														<img alt="Pic" src="assets/media/avatars/300-23.jpg" />
													</div>
													{/*end::Avatar*/}
													{/*begin::Details*/}
													<div className="ms-5">
														<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
														<div className="fw-semibold text-muted">dam@consilting.com</div>
													</div>
													{/*end::Details*/}
												</div>
												{/*end::Details*/}
												{/*begin::Access menu*/}
												<div className="ms-2 w-100px">
													<select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
														<option value="1">Guest</option>
														<option value="2">Owner</option>
														<option value="3" selected="selected">Can Edit</option>
													</select>
												</div>
												{/*end::Access menu*/}
											</div>
											{/*end::User*/}
										</div>
										{/*end::Users*/}
										{/*begin::Actions*/}
										<div className="d-flex flex-center mt-15">
											<button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
											<button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
										</div>
										{/*end::Actions*/}
									</div>
									{/*end::Results*/}
									{/*begin::Empty*/}
									<div data-kt-search-element="empty" className="text-center d-none">
										{/*begin::Message*/}
										<div className="fw-semibold py-10">
											<div className="text-gray-600 fs-3 mb-2">No users found</div>
											<div className="text-muted fs-6">Try to search by username, full name or email...</div>
										</div>
										{/*end::Message*/}
										{/*begin::Illustration*/}
										<div className="text-center px-5">
											<img src="assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
										</div>
										{/*end::Illustration*/}
									</div>
									{/*end::Empty*/}
								</div>
								{/*end::Wrapper*/}
							</div>
							{/*end::Search*/}
						</div>
						{/*end::Modal body*/}
					</div>
					{/*end::Modal content*/}
				</div>
				{/*end::Modal dialog*/}
			</div>

		<div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
			{/*begin::Modal dialog*/}
			<div className="modal-dialog mw-650px">
			{/*begin::Modal content*/}
			<div className="modal-content">
				{/*begin::Modal header*/}
				<div className="modal-header pb-0 border-0 justify-content-end">
				{/*begin::Close*/}
				<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
					<i className="ki-duotone ki-cross fs-1">
					<span className="path1"></span>
					<span className="path2"></span>
					</i>
				</div>
				{/*end::Close*/}
				</div>
				{/*begin::Modal header*/}
				{/*begin::Modal body*/}
				<div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
				{/*begin::Heading*/}
				<div className="text-center mb-13">
					{/*begin::Title*/}
					<h1 className="mb-3">Invite a Friend</h1>
					{/*end::Title*/}
					{/*begin::Description*/}
					<div className="text-muted fw-semibold fs-5">If you need more info, please check out 
					<a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
					{/*end::Description*/}
				</div>
				{/*end::Heading*/}
				{/*begin::Google Contacts Invite*/}
				<div className="btn btn-light-primary fw-bold w-100 mb-8">
				<img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
				{/*end::Google Contacts Invite*/}
				{/*begin::Separator*/}
				<div className="separator d-flex flex-center mb-8">
					<span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
				</div>
				{/*end::Separator*/}
				{/*begin::Textarea*/}
				<textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here"></textarea>
				{/*end::Textarea*/}
				{/*begin::Users*/}
				<div className="mb-10">
					{/*begin::Heading*/}
					<div className="fs-6 fw-semibold mb-2">Your Invitations</div>
					{/*end::Heading*/}
					{/*begin::List*/}
					<div className="mh-300px scroll-y me-n7 pe-7">
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-6.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
							<div className="fw-semibold text-muted">smith@kpmg.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2" selected="selected">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
							<div className="fw-semibold text-muted">melody@altbox.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1" selected="selected">Guest</option>
							<option value="2">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-1.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
							<div className="fw-semibold text-muted">max@kt.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2">Owner</option>
							<option value="3" selected="selected">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-5.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
							<div className="fw-semibold text-muted">sean@dellito.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2" selected="selected">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-25.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
							<div className="fw-semibold text-muted">brian@exchange.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2">Owner</option>
							<option value="3" selected="selected">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
							<div className="fw-semibold text-muted">mik@pex.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2" selected="selected">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-9.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
							<div className="fw-semibold text-muted">f.mit@kpmg.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2">Owner</option>
							<option value="3" selected="selected">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
							<div className="fw-semibold text-muted">olivia@corpmail.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2" selected="selected">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
							<div className="fw-semibold text-muted">owen.neil@gmail.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1" selected="selected">Guest</option>
							<option value="2">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-23.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
							<div className="fw-semibold text-muted">dam@consilting.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2">Owner</option>
							<option value="3" selected="selected">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
							<div className="fw-semibold text-muted">emma@intenso.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2" selected="selected">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-12.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
							<div className="fw-semibold text-muted">ana.cf@limtel.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1" selected="selected">Guest</option>
							<option value="2">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<span className="symbol-label bg-light-info text-info fw-semibold">A</span>
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
							<div className="fw-semibold text-muted">robert@benko.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2">Owner</option>
							<option value="3" selected="selected">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-13.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
							<div className="fw-semibold text-muted">miller@mapple.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2">Owner</option>
							<option value="3" selected="selected">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<span className="symbol-label bg-light-success text-success fw-semibold">L</span>
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
							<div className="fw-semibold text-muted">lucy.m@fentech.com</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2" selected="selected">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-21.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
							<div className="fw-semibold text-muted">ethan@loop.com.au</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1" selected="selected">Guest</option>
							<option value="2">Owner</option>
							<option value="3">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					{/*begin::User*/}
					<div className="d-flex flex-stack py-4">
						{/*begin::Details*/}
						<div className="d-flex align-items-center">
						{/*begin::Avatar*/}
						<div className="symbol symbol-35px symbol-circle">
							<img alt="Pic" src="assets/media/avatars/300-21.jpg" />
						</div>
						{/*end::Avatar*/}
						{/*begin::Details*/}
						<div className="ms-5">
							<a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
							<div className="fw-semibold text-muted">ethan@loop.com.au</div>
						</div>
						{/*end::Details*/}
						</div>
						{/*end::Details*/}
						{/*begin::Access menu*/}
						<div className="ms-2 w-100px">
						<select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
							<option value="1">Guest</option>
							<option value="2">Owner</option>
							<option value="3" selected="selected">Can Edit</option>
						</select>
						</div>
						{/*end::Access menu*/}
					</div>
					{/*end::User*/}
					</div>
					{/*end::List*/}
				</div>
				{/*end::Users*/}
				{/*begin::Notice*/}
				<div className="d-flex flex-stack">
					{/*begin::Label*/}
					<div className="me-5 fw-semibold">
					<label className="fs-6">Adding Users by Team Members</label>
					<div className="fs-7 text-muted">If you need more info, please check budget planning</div>
					</div>
					{/*end::Label*/}
					{/*begin::Switch*/}
					<label className="form-check form-switch form-check-custom form-check-solid">
					<input className="form-check-input" type="checkbox" value="1" checked="checked" />
					<span className="form-check-label fw-semibold text-muted">Allowed</span>
					</label>
					{/*end::Switch*/}
				</div>
				{/*end::Notice*/}
				</div>
				{/*end::Modal body*/}
			</div>
			{/*end::Modal content*/}
			</div>
		</div>
			<script src="./assets/plugins/global/plugins.bundle.js"></script>
			<script src="./assets/js/scripts.bundle.js"></script>
			<script src="./assets/plugins/custom/datatables/datatables.bundle.js"></script>
			<script src="./assets/js/custom/pages/user-profile/general.js"></script>
			<script src="./assets/js/custom/account/api-keys/api-keys.js"></script>
			<script src="./assets/js/widgets.bundle.js"></script>
			<script src="./assets/js/custom/widgets.js"></script>
			<script src="./assets/js/custom/apps/chat/chat.js"></script>
			<script src="./assets/js/custom/utilities/modals/create-api-key.js"></script>
			<script src="./assets/js/custom/utilities/modals/offer-a-deal/type.js"></script>
			<script src="./assets/js/custom/utilities/modals/offer-a-deal/details.js"></script>
			<script src="./assets/js/custom/utilities/modals/offer-a-deal/finance.js"></script>
			<script src="./assets/js/custom/utilities/modals/offer-a-deal/complete.js"></script>
			<script src="./assets/js/custom/utilities/modals/offer-a-deal/main.js"></script>
			<script src="./assets/js/custom/utilities/modals/users-search.js"></script>
			<script src="./assets/js/custom/utilities/modals/users-search.js"></script>
		</div>
  	);
}

export default App;
