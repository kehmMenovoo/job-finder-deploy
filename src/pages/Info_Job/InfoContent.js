import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";

const InfoContent = ({data}) => {
    
    const {history} = useContext(DataContext);

    // document.querySelector('#info').innerText = data.description ? data.description:"No description!";

    function titleCase(str) {
        var splitStr = str.split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        return splitStr.join(' '); 
    }

    const goBack = () => {
        history.goBack();
    }
    
    return (
        <>
            <div className="job-sidebar">
                <>
                    <div className="tools">
                        <div className="back-btn" onClick={goBack}>
                            <span className="iconify" data-icon="bi:arrow-left-short"></span>
                            <span className="iconify" data-icon="bi:arrow-left-circle-fill"></span>
                        </div>
                        <div className="more-tools">
                            <span class="iconify" data-icon="bi:three-dots-vertical"></span>
                        </div>
                    </div>
                    <div className="info-logo">
                        <div>
                            <img src={data.avatar} alt={data.id} />
                        </div>
                        <div className="company">
                            <h5>{data.company}</h5>
                            <p style={{color: "gray", fontSize: "13px"}}>Published: {data.postDate}</p>
                        </div>
                    </div><br />
                    <div className="info-position">
                        <p><b>We are hiring:</b></p>
                        <p style={{color: "rgb(43, 149, 255)"}}>{data.position}</p>
                    </div>
                </>
                <div className="button-apply">
                    <div className="apply">
                        <form>
                            <button type="submit">
                                <span class="iconify" data-icon="bi:send-check"></span>
                                <span class="iconify" data-icon="bi:send-check-fill"></span>
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
                            <td>: {titleCase(data.postDate)}</td>
                        </tr>
                        <tr>
                            <td><b>Closing Date </b></td>
                            <td>: <span className="closing">{titleCase(data.due)}</span></td>
                        </tr>
                        <tr>
                            <td><b>Job Type </b></td>
                            <td>: {titleCase(data.typeJob)}</td>
                        </tr>
                        <tr>
                            <td><b>Entry Level </b></td>
                            <td>: {titleCase(data.entryLevel)}</td>
                        </tr>
                        <tr>
                            <td><b>Duration Type </b></td>
                            <td>: {titleCase(data.durationType)}</td>
                        </tr>
                        <tr>
                            <td><b>Job Location </b></td>
                            <td>: {titleCase(data.location)}</td>
                        </tr>
                        {data.department ? ( 
                            <tr>
                                <td><b>Department </b></td>
                                <td>: {titleCase(data.department)}</td>
                            </tr>) 
                            : null
                        }
                        {data.subDepartment ? (
                             <tr>
                                <td><b>Sub-department </b></td>
                                <td>: {titleCase(data.subDepartment)}</td>
                            </tr>)
                            : null
                        }
                        {data.report ? (
                            <tr>
                                <td><b>Report to </b></td>
                                <td>: {titleCase(data.Report)}</td>
                            </tr>)
                            : null
                        }
                    </table>
                    <br />

                    <div className="job-description">
                        <h4>Job Description</h4>
                        <div className="detailed" id="info">
                            {data.description ? data.description:"No description!"}
                        </div>
                    </div>
                </div>

                <footer className="copyright" style={{margin: "0 10px 10px 420px", borderRadius: "10px"}}>
                    <div className="container">
                        <div className="know-us">
                            <Link to="/about">About Us</Link> | 
                            <Link to="/privacy"> Privacy Policy</Link> |
                            <Link to="/termofuse"> Term of Use</Link>
                        </div>
                        <div className="c-right">
                            <p>Copyright 2022 <a href="/">Khom Rok</a> all rights reserved</p>
                        </div>
                    </div>
                </footer>
            </>
        </>
    )
}

export default InfoContent