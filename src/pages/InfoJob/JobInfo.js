import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import InfoContent from './InfoContent';
import DataContext from '../../contexts/DataContext';
import PageLoading from '../../layout/PageLoading';

const JobInfo = () => {

    const {isLoading, fetchError, allData} = useContext(DataContext);
    let {id} = useParams();
    const jobData = allData.find(post => (post.id).toString() === id);
    document.getElementById("web_icon").href = "../../images/JOBFINDER.png";

    return (
        <div>
            <PageLoading />
            {!fetchError && !isLoading && 
                <>
                    <InfoContent jobData={jobData} />
                </>
            }
        </div>
    )
}

export default JobInfo;