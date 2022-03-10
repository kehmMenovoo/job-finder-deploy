const Seniority = ({jobLevel, setJobLevel}) => {
    const getValueType = (e) => {
        setJobLevel(e.target.value)
        window.scrollTo(0, 0);
    }
    return (
        <>
            <select className="form-select" aria-label="Default select seniority" value={jobLevel} onChange={e => getValueType(e)}>
                <option value="">Default Level</option>
                <option value="entry-Level">Entry-Level</option>
                    <option value="experienced Level">Experienced Level</option>
                    <option value="executive">Executive</option>
                    <option value="senior Executive">Senior Executive</option>
                    <option value="Manager/Supervisor">Manager/Supervisor</option>
                    <option value="Senior Manager/Supervisor">Senior Manager/Supervisor</option>
                    <option value="Unknown">Others</option>
            </select>
        </>
    )
}

export default Seniority
