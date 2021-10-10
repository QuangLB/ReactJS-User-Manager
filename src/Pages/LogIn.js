export default function () {
    return (
        <div align="center">
            <div style={{ height: "2rem" }}></div>

            <form style={{ width: "32%" }}>
                <div>
                <h2 className="card-title" style={{ color:"#426ec7"}}>Log In</h2>
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" placeholder="Input Email" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Input Password"/>
                        </div>
                    </div>
                </div>
                <div class="" align="right">
                    <button  class="btn btn-primary me-md-1" type="button">Log In</button>
                    <button  class="btn btn-outline-danger" type="button">Cancel</button>
                </div>
            </form>


            <div style={{ height: "2rem" }}></div>

        </div>
    )
}