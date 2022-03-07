import { Editor } from '@tinymce/tinymce-react';
// import DataContext from "../../contexts/DataContext";
// import { useContext } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import EditorState from "draft-js/lib/EditorState";
// import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const ContactContent = () => {

    const handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
    }

    return (
        <>
            <div className="wrapper">
                <div className="overlay">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-9">
                            <div className="contact-us text-center">
                                <h3 className="t-contact">Contact Us</h3>
                                <p className="feel-free mb-5">Feel free to connect with us</p>
                                <div className="row text-left">
                                    <div className="col-md-6">
                                        <div className="mt-5 text-left px-3">
                                            <div className="d-flex align-items-center"> 
                                                <span className="icons">
                                                    <i className="fa fa-map-marker"></i>
                                                </span>
                                                <div className="address"> 
                                                    <p>Address <br /><span>No. 8, St. 315, Boeng Kak 1, Tuol Kork, Phnom Penh, Cambodia</span></p>
                                                    
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i className="fa fa-phone"></i></span>
                                                <div className="address"> 
                                                    <p>Phone <br /><span>+855 61 481 979</span></p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mt-3"> <span className="icons"><i className="fa fa-envelope-o"></i></span>
                                                <div className="address"> 
                                                    <p>Email <br /><span>khomrok@gmail.com</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center px-1">
                                            <div className="forms p-4 py-5 bg-white">
                                                <h5>Send Message</h5>
                                                <form>
                                                    <div className="mt-4 inputs">
                                                        <input type="name" className="form-control" placeholder="Name" required /> 
                                                        <input type="email" className="form-control" placeholder="Email" required /><br />
                                                        <Editor
                                                            className="form-control-t"
                                                            apiKey="7cem6u4zosjen9lg7ftfsxe5j3r8pa4xiium6ury9uvjbvmw"
                                                            init={{
                                                                menubar: false,
                                                                plugins: [
                                                                    'advlist autolink lists textcolor link image autoresize', 
                                                                    'charmap print preview anchor help',
                                                                    'searchreplace visualblocks code',
                                                                    'insertdatetime media table paste wordcount'
                                                                ],
                                                                toolbar: 'undo redo bold italic underline | forecolor backcolor link strikethrough blockquote | align bullist numlist outdent indent | removeformat help autoresize',
                                                                toolbar_location: 'bottom',
                                                                statusbar: false,
                                                                placeholder: "Type your message...",

                                                            }}
                                                            onChange={handleEditorChange}
                                                        />
            
                                                        {/* <Editor
                                                            className="form-control-t"
                                                            toolbarClassName="toolbarClassName"
                                                            wrapperClassName="wrapperClassName"
                                                            editorClassName="editorClassName"
                                                            placeholder="Write something..."
                                                        /> */}

                                                        

                                                    </div>
                                                    <div className="button mt-4 text-left"> 
                                                        <button type="submit" className="btn btn-dark">Send</button> 
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ContactContent
