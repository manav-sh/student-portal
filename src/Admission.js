import React from 'react'
import './App.css';
import {useForm} from 'react-hook-form'
import {useState} from 'react';
import './Admission.css';
import {useHistory} from 'react-router-dom'

const Admission = () => {
    const history = useHistory();
    const buttonIncrease = () => {
        if(formCounter < 2) {
            setFormCounter(i => i+ 1);
            // console.log(formCounter);
        }
    }

    const buttonDecrease = () => {
        if(formCounter >= 0) {
            setFormCounter(i => i - 1);
            // console.log(formCounter);
        }
    }

    // Counter to check for num of steps in form
    const [formCounter, setFormCounter] = useState(0)
    const [section, setSection] = useState(0)
    // react hook form vars.
    const {
        watch,
        register,
        handleSubmit
    } = useForm()
    
    const renderButton = () => {
        if(setFormCounter > 2) {
            return undefined
        } else if(formCounter === 1) {
            return (
                <button type="submit" className="submit-button admission-submit" onClick={() => onSubmit()}>
                    Finish
                </button>
             )
        } else if(formCounter === 2) {
            return (
                <button type="button" className="submit-button admission-submit" onClick={(e)=> goDB(e)}>
                    Return to Home
                </button>
             )
        }
        else {
            return (
                <div className="submit-button admission-submit" onClick={buttonIncrease}>
                    Continue
                </div>
             )
        }
    }
    var progress = 50 * formCounter + 50
    var style = { "width": progress+'%', "marginTop" : "20px"}
    const goDB = (e) => {
        e.preventDefault();
        history.push("/personal");
    }
    const onSubmit = async () => {
        const formdata = watch();
        buttonIncrease();
        console.log("Submit");
        console.log(formdata);
        try {
            const res = await fetch("/academicInfo/add", {
                method: "POST", 
                    headers:{
                        Accept:"application/json",
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(formdata)
            });
            const response = await res.json();
            if(res.status === 403) {
                console.log("Error In Data insertion");
                console.log(response);
            } else {
                window.alert("Data inserted successfully");
                console.log(response);
                history.push("/personal");
            }
        } catch(err) {
            console.log("In catch");
            console.log(err);
        }
    }
    return (
        <div className="App">
            <div className="form-container">
            <form style={{backgroundColor: '#FFFFFF'}}>
                {!(formCounter === 0) && !(formCounter === 2) && (
                    <>
                        <p className="back-button" onClick={buttonDecrease}>{'<'} Back</p>
                    </>
                )}
                {!(formCounter===2) && (<div className="progressBar" style={style}></div>)}
                {/* Form First Page */}
                {formCounter === 0 &&
                    (<>
                    <p className="form-input-text admission-input-text">Admission rank</p>
                    <div className="input-group">
                        <input type="text" name="admissionRank" id="admissionRank" className="form-input" {...register('admissionRank')} />
                    </div>
                    {/* {errors.admissionRank && <p>{errors.admissionrank.message}</p>} */}
                    <p className="form-input-text admission-input-text">Admission Roll No</p>
                    <div className="input-group">
                        <input type="text" name="admissionRollNo" className="form-input" {...register('admissionRollNo')} />
                    </div>
                    <div className="two-col">
                        <div className="col">
                            <p className="form-input-text admission-input-text">Admission type</p>
                            <div className="input-group">
                                <select className="form-input form-input-col" name="admissiontType" id="admissiontype" {...register('admissionType')}>
                                    <option value="general">General</option>
                                    <option value="tfws">TFWS</option>
                                    <option value="physical">Physically Disabled</option>
                                </select>
                            </div>
                        </div>
                        <div className="col">
                            <p className="form-input-text admission-input-text">Admission Date</p>
                            <div className="input-group">
                                <input type="date" name="admissionDate" className="form-input form-input-col" {...register('admissionDate')} />
                            </div>
                        </div>
                    </div>
                    <p className="form-input-text admission-input-text">Admission Quota</p>
                    <div className="input-group">
                        <select className="form-input" name="admissionQuota" id="admission-quota" {...register('admissionQuota')} >
                            <option value="general">General</option>
                            <option value="sc">SC</option>
                            <option value="st">ST</option>
                            <option value="obc">OBC</option>
                        </select>
                    </div>
                    <p className="form-input-text admission-input-text">Did you apply for 'EWS' admission quota?</p>
                    <div className="radio-input-group">
                        <div className="radio-group">
                            <label htmlFor="yes" className="form-input-text admission-input-text">Yes</label>
                            <input type="radio" id="yes" className="radio" value="Yes" name="ewsAdmissionQuota" {...register('ewsAdmissionQuota')} />
                        </div>
                        <div className="radio-group">
                            <label htmlFor="no" className="form-input-text admission-input-text">No</label>
                            <input type="radio" className="radio" value="No" name="ewsAdmissionQuota" id="no" {...register('ewsAdmissionQuota')} selected/>
                        </div>
                    </div> 
                    <p className="form-input-text admission-input-text">Shift</p>
                    <div className="input-group">
                        <select className="form-input" name="shift" id="admission-quota" {...register('shift')} >
                            <option value="morning">Morning</option>
                            <option value="noon">Noon</option>
                        </select>
                    </div>
                    </>
                    )
                }

                {/* Form Second Page */}
                {formCounter === 1 && (
                    <> 
                        <p className="form-input-text admission-input-text">10th Result</p>
                        <div className="input-group">
                            <input type="text" name="tenThPercentage" className="form-input" {...register('tenThPercentage')} />
                        </div>
                        <div className="radio-input-group form-top-mg">
                            <div className="radio-group">
                                <label htmlFor="yes" className="form-input-text admission-input-text">12th</label>
                                <input type="radio" id="12" className="radio" value="12th" name="diplhsc" onClick={(e)=> {setSection(12)}} />
                            </div>
                            <div className="radio-group">
                                <label htmlFor="no" className="form-input-text admission-input-text">Diploma</label>
                                <input type="radio" className="radio" value="Diploma" name="diplhsc" id="dipl" onClick={(e)=> {setSection(10)}} />
                            </div>
                        </div> 
                        {/* If 12th is selected */}
                        {section === 12 && (
                        <>
                            <p className="form-input-text admission-input-text">12th Result</p>
                            <div className="input-group">
                                <input type="text" name="twelthResult" className="form-input" placeholder="%" {...register('twelthResult')} />
                            </div>
                            <p className="form-input-text admission-input-text">12th Board</p>
                            <div className="input-group">
                                <select className="form-input" {...register('board')} name="board">
                                    <option value="gseb">GSEB</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <p className="form-input-text admission-input-text">12th Group</p>
                            <div className="radio-input-group">
                                <div className="radio-group">
                                    <label htmlFor="yes" className="form-input-text admission-input-text">A</label>
                                    <input type="radio" id="A" className="radio" value="A" name="group" {...register('group')}/>
                                </div>
                                <div className="radio-group">
                                    <label htmlFor="no" className="form-input-text admission-input-text">B</label>
                                    <input type="radio" className="radio" value="B" name="group" id="B" {...register('group')}/>
                                </div>
                            </div> 
                        </> )}
                        {/* If 10th Is Selected */}
                        {section === 10 && (
                        <>
                            <p className="form-input-text admission-input-text">Diploma Enrollment Number</p>
                            <div className="input-group">
                                <input type="text" name="enNo" className="form-input" placeholder="" {...register('enNo')} />
                            </div>
                            <p className="form-input-text admission-input-text">University Name</p>
                            <div className="input-group">
                                <input type="text" name="universityName" className="form-input" placeholder="e.g  GTU" {...register('universityName')}/>
                            </div>
                            <p className="form-input-text admission-input-text">College Name</p>
                            <div className="input-group">
                                <input type="text" name="collegeName" className="form-input" placeholder="e.g  GEC Gandhinagar" {...register('collegeName')} />
                            </div>
                            <p className="form-input-text admission-input-text">Branch</p>
                            <div className="input-group">
                                <select name="branch" className="form-input" {...register('branch')}>
                                    <option value="comp">Computer</option>
                                    <option value="it">IT</option>
                                    <option value="civil">Civil</option>
                                    <option value="automobile">Automobile</option>
                                    <option value="mechanical">Mechanical</option>
                                    <option value="ec">Electronics and Comm.</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <p className="form-input-text admission-input-text">Results</p>
                            <div className="input-group">
                                <input type="text" name="diplomaResult" className="form-input" placeholder="CGPA" {...register('diplomaResult')} />
                            </div>
                        </> )}
                    </>
                )}
                {formCounter === 2 && (
                    <>
                        <i className="fa fa-check-circle thanks" aria-hidden="true"></i>
                        <p className="thanksTitle">Thank you</p>
                        <p className="thanksContent">Your response was taken.</p>
                    </>
                )}
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                    {renderButton()}
                </div>
                <br/>
            </form>
            <pre>
                {JSON.stringify(watch(), null, 1)}
            </pre>
            </div>
        </div>
    )
}

export default Admission
