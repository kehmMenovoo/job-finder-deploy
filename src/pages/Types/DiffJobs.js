const DiffJobs = ({jobType, setJobType}) => {
    const getValueType = (e) => {
        setJobType(e.target.value)
        window.scrollTo(0, 0);
    }

    return (
        <>
            <select className="form-select" aria-label="Default select job-type" value={jobType} onChange={e => getValueType(e)}>
                <option value="">All Types</option>
                <option value="Agriculture, Food, and Natural Resources">Agriculture, Food, and Natural Resources</option>
                <option value="Architecture and Construction">Architecture and Construction</option>
                <option value="Arts, Audio/Video Technology, and Communication">Arts, Audio/Video Technology, and Communication</option>
                <option value="Business and Finance">Business and Finance</option>
                <option value="Education and Training">Education and Training</option>
                <option value="Government and Public Administration">Government and Public Administration</option>
                <option value="Health Science">Health Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Law, Public Safety, Corrections, and Security">Law, Public Safety, Corrections, and Security</option>
                <option value="Marketing">Marketing</option>
                <option value="Science, Technology, Engineering, and Math">Science, Technology, Engineering, and Math</option>
                <option value="unknown">Others</option>
            </select>
        </>
    )
}

export default DiffJobs
