export default function Main() {
  return (
    <main>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Thị trường chuyển nhượng</h1>
          <p className="lead fw-normal">
            Chào mừng các bạn đến với thị trường chuyển nhượng mùa đông.
          </p>
          <a className="btn btn-outline-secondary" href="/login">
            Log In
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>
    </main>
  );
}
