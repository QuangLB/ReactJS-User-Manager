import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
    return (

        <div>
            <div className="container marketing">
                {/* Three columns of text below the carousel */}

                {/* START THE FEATURETTES */}
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img style={{ width: "300px" }} src="https://vcdn-thethao.vnecdn.net/2021/06/07/e2pcodrx0aiefdj-jpeg-162304073-4092-2311-1623040842.jpg" />
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img style={{ width: "300px" }} src="https://static.bongda24h.vn/medias/standard/2016/2/3/Cau-chuyen-ve-tien-ve-Xabi-Alonso-cua-Liverpool-Tren-duong-Pitch-hinh-anh.jpg" />

                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div className="col-md-5">
                        <img style={{ width: "300px" }} src="https://evbn.org/wp-content/uploads/282476031b7eef20b66f6.jpg" />

                    </div>
                </div>
                <hr className="featurette-divider" />

            </div>
        </div>

    )
}