import React, { useContext } from 'react';
import DataContext from "../contexts/DataContext";
import BrokenRobot from "../images/404.png";

const PageLoading = () => {
    const {isLoading, fetchError} = useContext(DataContext);
    return (
        <>
            {isLoading && 
                <div style={{width: "100%", height: "100%", position: "fixed", zIndex: "9999999", background: "white"}}>
                    <div className="d-flex justify-content-center loading" style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <div id="loading2"> 
                            <svg width="16px" height="12px">
                                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            </svg>
                        </div>
                    </div>
                    
                </div>
            }
            {fetchError && <div style={{color: "red", textAlign: "center", background: "rgb(224, 224, 224)"}}>
                <div className="not-found">
                    <div className="error-item">
                        <div>
                            <img src={BrokenRobot} alt="not found" width="250px" />
                        </div>
                        <div className="error-message">
                            <h3>{fetchError}</h3>
                            <p>Sorry, we couldn't load this page. <br />
                            We suggest to reload the page <br />
                            Or</p>
                            <br />

                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary" type="button">
                                    <a href="/">GO TO HOMEPAGE</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default PageLoading;