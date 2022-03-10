import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useRef, useEffect } from 'react'
import UploadImage from "../../images/upload-logo.jpg";
import DataContext from '../../contexts/DataContext';
import Button from "@material-ui/core/Button";
import { useParams } from 'react-router-dom';

const EditInfo = () => {
    const {handleEditSave, allData, selectedImage, setSelectedImage, setEditBoost, setEditAvatar, editCompany, setEditCompany, editLocationCompany, setEditLocationCompany,
        editDue, setEditDue, editPosition, setEditPosition, editTypeJob, setEditTypeJob,
        editDurationType, setEditDurationType, editEntryLevel, setEditEntryLevel,editDepartment, setEditDepartment,
        editSubDepartment, setEditSubDepartment, editReport, setEditReport, editDescription, setEditDescription, history} = useContext(DataContext);

    const {id} = useParams();
    const info = allData.find(item => (item.id).toString() === id);
    const inputRef = useRef();

    const triggerSelect = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    // This function will be triggered when the file field change
    const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
        setEditAvatar(UploadImage);
      }
    };
  
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
      setSelectedImage();
      setEditAvatar(UploadImage);
    };

    const handleEditorChange = (e) => {
        setEditDescription(e.target.getContent());
    }
    const goBack = () => {
        history.goBack();
    }

    useEffect(() => {
        if(allData) {
            setEditBoost(info.boost);
            setSelectedImage(info.avatar);
            setEditAvatar(info.avatar);
            setEditCompany(info.company);
            setEditLocationCompany(info.location);
            setEditDue(info.due);
            setEditPosition(info.position);
            setEditTypeJob(info.typeJob);
            setEditDurationType(info.durationType);
            setEditEntryLevel(info.entryLevel);
            setEditDepartment(info.department);
            setEditSubDepartment(info.subDepartment);
            setEditReport(info.Report);
            setEditDescription(info.description);
        }
    }, [info, allData, setEditBoost, setSelectedImage, setEditAvatar, setEditCompany, setEditDepartment, setEditDescription, setEditDue, setEditDurationType,
    setEditEntryLevel, setEditLocationCompany, setEditPosition, setEditReport, setEditSubDepartment, setEditTypeJob]);
    return (
        <div className="postForm container mt-5">
            <form className="job-post" autoComplete='off' onSubmit={() => handleEditSave(info.id)} >
                <div className="back-btn mb-3" onClick={goBack}>
                    <p><i className="fa fa-angle-left"></i> Back</p>
                </div>
                <div className="form-group-heading">
                    <div className='logo-post'>
                        <div className="form-input">
                            <div className="preview" onClick={triggerSelect}>
                                <img id="img_file-preview" src={selectedImage ? selectedImage : UploadImage} alt="thumb" />
                                {!selectedImage && <p className="upload-msg">Upload Logo</p>}
                                
                            </div>
                            <input type="file" id="img_file" accept="image/*" ref={inputRef} onChange={imageChange} />
                        </div>
                        {selectedImage && 
                            <div className='image-tool'>
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    onClick={removeSelectedImage} 
                                    style={{fontSize: "12px", padding: "5px"}}
                                >
                                    Remove
                                </Button>
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    onClick={triggerSelect}
                                    style={{fontSize: "12px", padding: "5px"}}
                                >
                                    Change
                                </Button>
                            </div>}
                    </div>
                
                    <div className="form-group-content">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control box col-3 col-sm-2" 
                                required 
                                placeholder="Company/Organization..." 
                                id="job_position" 
                                value={editCompany} 
                                onChange={e => setEditCompany(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control box col-1 box-com" 
                                required 
                                placeholder="Job Positions..."
                                id="job_company" 
                                value={editPosition}
                                onChange={e => setEditPosition(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="publish-btn" id="publishTop" >
                        <input className="pub-btn" type="submit" value="Save"/>
                    </div>
                </div>

                <hr/>
                <div className="form-group row">
                    <label for="closing_date" className="col-4 col-sm-2 col-form-label">Closing Date <span style={{color: "gray"}}>*</span>:</label>
                    <div className="form-group col-2">
                        <input 
                            type="date" 
                            className="form-control selectForm box box-1" 
                            id="closing_date" 
                            value={editDue}
                            onChange={e => setEditDue(e.target.value)}
                            style={!editDue ? {paddingRight: "10px", color: "gray"} : {paddingRight: "10px"}}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_type" className="col-4 col-sm-2 col-form-label">Job Type <span style={{color: "gray"}}>*</span>:</label>
                    <div className="form-group col-2">
                        <select 
                            className="form-select selectForm box box-2" 
                            required 
                            value={editTypeJob} 
                            id="job_type" 
                            onChange={e => setEditTypeJob(e.target.value)}
                            style={editTypeJob ? {}:{color: "gray"}}
                        >
                            <option value="">Select an option</option>
                            <option value="Agriculture, Food, and Natural Resources">Agriculture, Food, and Natural Resources</option>
                            <option value="aArchitecture and Construction">Architecture and Construction</option>
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
                    </div>
                </div>
                <div className="form-group row">
                    <label for="entry_type" className="col-4 col-sm-2 col-form-label">Entry Level <span style={{color: "gray"}}>*</span>:</label>
                    <div className="form-group col-2">
                        <select className="form-select selectForm box box-2" id="entry_type" required 
                            value={editEntryLevel} onChange={e => setEditEntryLevel(e.target.value)}
                            style={editEntryLevel ? {}:{color: "gray"}}
                        >
                            <option value="">Select an option</option>
                            <option value="entry-Level">Entry-Level</option>
                            <option value="experienced">Experienced Level</option>
                            <option value="executive">Executive</option>
                            <option value="Senior Executive">Senior Executive</option>
                            <option value="Manager/Supervisor">Manager/Supervisor</option>
                            <option value="Senior Manager/Supervisor">Senior Manager/Supervisor</option>
                            <option value="Unknown">Others</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="duration_type" className="col-4 col-sm-2 col-form-label">Duration Type <span style={{color: "gray"}}>*</span>:</label>
                    <div className="form-group col-2">
                        <select className="form-select selectForm box box-2" id="duration_type" required 
                            value={editDurationType} onChange={e => setEditDurationType(e.target.value)}
                            style={editDurationType ? {}:{color: "gray"}}
                        >
                            <option value="">Select an option</option>
                            <option value="full-time">Full-Time</option>
                            <option value="part-time">Part-Time</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="internship">Internship</option>
                            <option value="contract">Contract</option>
                            <option value="temporary">Temporary</option>
                            <option value="unknown">Others</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_location" className="col-4 col-sm-2 col-form-label">Job Location <span style={{color: "gray"}}>*</span>:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Job Location..." 
                            id="job_location" 
                            value={editLocationCompany}
                            required
                            onChange={e => setEditLocationCompany(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_department" className="col-4 col-sm-2 col-form-label">Department:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Department..." 
                            id="job_department" 
                            value={editDepartment}
                            onChange={e => setEditDepartment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_subdepartment" className="col-4 col-sm-2 col-form-label">Sub-Department:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Sub-Department..."
                            id="job_subdepartment" 
                            value={editSubDepartment}
                            onChange={e => setEditSubDepartment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="job_reportto" className="col-4 col-sm-2 col-form-label">Report to:</label>
                    <div className="form-group col-4">
                        <input 
                            type="text" 
                            className="form-control box box-2 col-1" 
                            placeholder="Report to..." 
                            id="job_reportto" 
                            value={editReport}
                            onChange={e => setEditReport(e.target.value)}
                        />
                    </div>
                </div>
                <p className="col-form-label">Job Description:</p>
                <Editor
                    className="describe-job"
                    apiKey="7cem6u4zosjen9lg7ftfsxe5j3r8pa4xiium6ury9uvjbvmw"
                    initialValue={editDescription}
                    init={{
                        menubar: false,
                        plugins: [
                            'advlist autolink lists textcolor link image video autoresize', 
                            'charmap print preview anchor help',
                            'searchreplace visualblocks code',
                            'insertdatetime media table paste wordcount'
                        ],
                        toolbar: 'undo redo formatselect bold italic underline forecolor backcolor | align bullist numlist outdent indent | link strikethrough blockquote | removeformat help fullscreen | removeformat image video help autoresize',
                        toolbar_location: 'bottom',
                        statusbar: false,
                        placeholder: "Type your message...",
                    }}
                    onChange={handleEditorChange}
                />
                <br /><br />
                <div className="publish-btn">
                    <input className="pub-btn" type="submit" value="Save" />
                </div>
            </form>
        </div>
    )
}

export default EditInfo;