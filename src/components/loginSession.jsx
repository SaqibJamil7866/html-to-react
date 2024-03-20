

function LoginSession(){

    return(
        <div className="card mb-5 mb-xxl-10">
        {/*begin::Card header*/}
        <div className="card-header">
            {/*begin::Heading*/}
            <div className="card-title">
                <h3>Login Sessions</h3>
            </div>
            {/*end::Heading*/}
            {/*begin::Toolbar*/}
            <div className="card-toolbar">
                <div className="my-1 me-4">
                    {/*begin::Select*/}
                    <select className="form-select form-select-sm form-select-solid w-125px" data-control="select2" data-placeholder="Select Hours" data-hide-search="true">
                        <option value="1" selected="selected">1 Hours</option>
                        <option value="2">6 Hours</option>
                        <option value="3">12 Hours</option>
                        <option value="4">24 Hours</option>
                    </select>
                    {/*end::Select*/}
                </div>
                <a href="#" className="btn btn-sm btn-primary my-1">View All</a>
            </div>
            {/*end::Toolbar*/}
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div className="card-body p-0">
            {/*begin::Table wrapper*/}
            <div className="table-responsive">
                {/*begin::Table*/}
                <table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
                    {/*begin::Thead*/}
                    <thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
                        <tr>
                            <th className="min-w-250px">Location</th>
                            <th className="min-w-100px">Status</th>
                            <th className="min-w-150px">Device</th>
                            <th className="min-w-150px">IP Address</th>
                            <th className="min-w-150px">Time</th>
                        </tr>
                    </thead>
                    {/*end::Thead*/}
                    {/*begin::Tbody*/}
                    <tbody className="fw-6 fw-semibold text-gray-600">
                        <tr>
                            <td>
                                <a href="#" className="text-hover-primary text-gray-600">USA(5)</a>
                            </td>
                            <td>
                                <span className="badge badge-light-success fs-7 fw-bold">OK</span>
                            </td>
                            <td>Chrome - Windows</td>
                            <td>236.125.56.78</td>
                            <td>2 mins ago</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="text-hover-primary text-gray-600">United Kingdom(10)</a>
                            </td>
                            <td>
                                <span className="badge badge-light-success fs-7 fw-bold">OK</span>
                            </td>
                            <td>Safari - Mac OS</td>
                            <td>236.125.56.78</td>
                            <td>10 mins ago</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="text-hover-primary text-gray-600">Norway(-)</a>
                            </td>
                            <td>
                                <span className="badge badge-light-danger fs-7 fw-bold">ERR</span>
                            </td>
                            <td>Firefox - Windows</td>
                            <td>236.125.56.10</td>
                            <td>20 mins ago</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="text-hover-primary text-gray-600">Japan(112)</a>
                            </td>
                            <td>
                                <span className="badge badge-light-success fs-7 fw-bold">OK</span>
                            </td>
                            <td>iOS - iPhone Pro</td>
                            <td>236.125.56.54</td>
                            <td>30 mins ago</td>
                        </tr>
                        <tr>
                            <td>
                                <a href="#" className="text-hover-primary text-gray-600">Italy(5)</a>
                            </td>
                            <td>
                                <span className="badge badge-light-warning fs-7 fw-bold">WRN</span>
                            </td>
                            <td>Samsung Noted 5- Android</td>
                            <td>236.100.56.50</td>
                            <td>40 mins ago</td>
                        </tr>
                    </tbody>
                    {/*end::Tbody*/}
                </table>
                {/*end::Table*/}
            </div>
            {/*end::Table wrapper*/}
        </div>
        {/*end::Card body*/}
    </div>
    )
}

export default LoginSession