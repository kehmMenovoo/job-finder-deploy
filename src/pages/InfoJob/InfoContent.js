import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";
import format from 'date-fns/format';

const InfoContent = ({jobData}) => {
    
    const {history, handleDelete} = useContext(DataContext);

    function titleCase(str) {
        var splitStr = str.split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
    }

    const goBack = () => {
        history.push('/jobtype');
    }
    const goTop = () => {
        window.scrollTo(0, 0);
    }

    
    return (
        <div className="info-job">
            <div className="job-sidebar">
                <>
                    <div className="tools">
                        <div className="back-btn" onClick={goBack}>
                            <span className="iconify" data-icon="bi:arrow-left-short"></span>
                            <span className="iconify" data-icon="bi:arrow-left-circle-fill"></span>
                        </div>
                        <div className="more-tools">
                            <div className="dropdown">
                                <article className="tool" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="iconify" data-icon="bi:three-dots-vertical"></span>
                                </article>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><article className="dropdown-item" onClick={() => handleDelete(jobData.id)}>Delete</article></li>
                                    <li><Link to={`/edit/${jobData.id}`} className="dropdown-item" >Edit</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="info-logo">
                        <div>
                            <img src={jobData.avatar} alt={jobData.id} />
                        </div>
                        <div className="company">
                            <h5>{jobData.company}</h5>
                            <p style={{color: "gray", fontSize: "13px"}}>Published: {jobData.postDate}</p>
                        </div>
                    </div><br />
                    <div className="info-position">
                        <p><b>We are hiring:</b></p>
                        <p style={{color: "rgb(43, 149, 255)"}}>{jobData.position}</p>
                    </div>
                </>
                <div className="button-apply">
                    <div className="apply">
                        <form>
                            <button>
                                <span className="iconify" data-icon="bi:send-check"></span>
                                <span className="iconify" data-icon="bi:send-check-fill"></span>
                            </button>
                        </form>
                    </div>
                    <div className="add-fav">
                        <form>
                            <button>
                                <span className="iconify" data-icon="ant-design:heart-outlined"></span>
                                <span className="iconify" data-icon="ant-design:heart-filled"></span>
                            </button>
                        </form>
                    </div>
                    <div className="share-job">
                        <form>
                            <button>
                                <span className="iconify" data-icon="fluent:share-28-regular"></span>
                                <span className="iconify" data-icon="fluent:share-48-filled"></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <>
                <div className="info-content">
                    <table>
                        <tr>
                            <td><b>Published Date </b></td>
                            <td>: {titleCase(jobData.postDate)}</td>
                        </tr>
                        <tr>
                            <td><b>Closing Date </b></td>
                            <td>: <span className="closing">{titleCase(format(new Date(jobData.due), 'MMM dd, yyyy'))}</span></td>
                        </tr>
                        <tr>
                            <td><b>Job Type </b></td>
                            <td>: {titleCase(jobData.typeJob)}</td>
                        </tr>
                        <tr>
                            <td><b>Entry Level </b></td>
                            <td>: {titleCase(jobData.entryLevel)}</td>
                        </tr>
                        <tr>
                            <td><b>Duration Type </b></td>
                            <td>: {titleCase(jobData.durationType)}</td>
                        </tr>
                        <tr>
                            <td><b>Job Location </b></td>
                            <td>: {titleCase(jobData.location)}</td>
                        </tr>
                        {jobData.department ? ( 
                            <tr>
                                <td><b>Department </b></td>
                                <td>: {titleCase(jobData.department)}</td>
                            </tr>) 
                            : null
                        }
                        {jobData.subDepartment ? (
                             <tr>
                                <td><b>Sub-department </b></td>
                                <td>: {titleCase(jobData.subDepartment)}</td>
                            </tr>)
                            : null
                        }
                        {jobData.report ? (
                            <tr>
                                <td><b>Report to </b></td>
                                <td>: {titleCase(jobData.Report)}</td>
                            </tr>)
                            : null
                        }
                    </table>
                    <br />

                    <div className="job-description">
                        <h4>Job Description</h4>
                        <div className="detailed" id="info">
                            {jobData.description ? jobData.description:"No description!"}
                        </div>
                    </div>
                </div>

                <footer className="copyright">
                    <div className="container">
                        <div className="know-us">
                            <Link to="/about" onClick={goTop}>About Us</Link> | 
                            <Link to="/privacy" onClick={goTop}> Privacy Policy</Link> |
                            <Link to="/termofuse" onClick={goTop}> Term of Use</Link>
                        </div>
                        <div className="c-right">
                            <p>Copyright 2022 <a href="/">Khom Rok</a> all rights reserved</p>
                        </div>
                    </div>
                </footer>
            </>
        </div>
    )
}

export default InfoContent