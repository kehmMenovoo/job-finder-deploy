import DataContext from "../../../contexts/DataContext";
import Job from "./Job";
import sadRobot from "../../../images/robot-sad.png";
import ReactPaginate from "react-paginate";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import PageLoading from "../../../layout/PageLoading";

const JobItems = ({jobData}) => {
    const {fetchError, isLoading, search, splitLocation, pageCount, handlePageClick, currentPage, limit} = useContext(DataContext);

    return (
        <>
            <div className="content-container">
                <div className="container-fluid mt-4 d-flex align-items-center gap-3" id="job-items">
                    <div className="count-jobs text-secondary" id="jobcount-res">
                        {search && splitLocation[1] === 'search' ? 
                            `Search for: ${search} | Found: ${jobData.length} ${jobData.length !== 1 ? "results" : "result"}`
                            : 
                            `Found: ${jobData.length} ${jobData.length !== 1 ? "results" : "result"}`
                        }
                    </div>
                </div>
                <div className="container-fluid">
                    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} layout className="row">
                        <PageLoading />
                        {!fetchError && !isLoading && 
                            <AnimatePresence>
                               {jobData.map(item => (
                                    <Job key={item.id} item={item} />
                                ))}
                                {!isLoading && jobData.length === 0 ? (
                                    <div style={{textAlign: "center", color: "gray", marginTop: "100px", marginBottom: "150px", minHeight: "40vh"}}>
                                        <img src={sadRobot} className="mb-3" alt="Not Found" width="150px"/>
                                        <h3>No Jobs Found!</h3>
                                    </div>) 
                                : ""}
                            </AnimatePresence>
                        }
                        
                    </motion.div>
                </div>
            </div>
           
           {pageCount > 1 && splitLocation[1] && jobData.length <= limit ? 
                <ReactPaginate
                    previousLabel={<><i className="fa fa-angle-left"></i><i className="fa fa-angle-left"></i></>}
                    nextLabel={<><i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></>}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    forcePage={currentPage-1}
                    onPageChange={(jobData) => handlePageClick(jobData.selected)}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />: null
            }
        </>
    )
}

export default JobItems
