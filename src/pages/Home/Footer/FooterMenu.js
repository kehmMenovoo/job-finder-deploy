import { Link } from "react-router-dom";

const FooterMenu = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="f-contact col-md-3 col-sm-4 ">
                            <h5>Contact</h5>
                            <p>
                                <span className="iconify" data-icon="foundation:telephone"></span>
                                 <span> +855 123 456 789</span>
                            </p>
                            <p>
                                <span className="iconify" data-icon="bx:bxs-envelope"></span>
                                 <span> khomrok@gmail.com</span>
                            </p>
                        </div>

                        <div className="f-menu col-md-3 col-sm-4 ">
                            <h5>job seekers</h5>
                            <p>
                                <Link to="/">Top Careers</Link>
                            </p>
                            <p>
                                <Link to="/jobtype">Discover Job Types</Link>
                            </p>
                        </div>

                        <div className="f-menu col-md-3 col-sm-4 ">
                            <h5>employers</h5>
                            <p>
                                <Link to="/post">Post a Job</Link>
                            </p>
                            <p>
                                <Link to="/boost">Package Boost</Link>
                            </p>
                        </div>

                        <div className="f-menu col-md-3 col-sm-4 ">
                            <h5>Social Media</h5>
                            <p>
                                <Link to="https://www.facebook.com/">Facebook Page</Link>
                            </p>
                            <p>
                                <Link to="https://linkedin.com/">LinkedIn</Link>
                            </p>
                            <p>
                                <Link to="https://twitter.com/">Twitter</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterMenu
