import { useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import PageLoading from "../../../layout/PageLoading";
import JobItems from "./JobItems";

const Contents = ({jobData}) => {
    const {fetchError, isLoading} = useContext(DataContext);

    return (
        <>
            <main id="job-content">
                <PageLoading />
                {!fetchError && !isLoading && 
                    <JobItems 
                        jobData={jobData}
                    />
                }
            </main>
        </>
    )
}

export default Contents
