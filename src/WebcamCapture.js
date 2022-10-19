import React, {useRef, useCallback} from "react"
import Webcam from "react-webcam"
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useDispatch} from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import './WebcamCapture.css'
import {useNavigate} from "react-router-dom"

const videoConstraints ={
    width : 250,
    height: 400,
    facingMode: 'user',

}

function WebcamCapture(){
    const webcamRef = useRef(null)
    const dispatch = useDispatch();
    const history = useNavigate();

    const capture = useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history('/preview')
        
    },[webcamRef])

    return (<div className="webcamCapture">
        <Webcam 
        audio = {false}
        height = {videoConstraints.height}
        ref = {webcamRef}
        screenshotFormat = "image/jpeg"
        width = {videoConstraints.width}
        videoConstraints={videoConstraints}
        />

        <RadioButtonCheckedIcon 
        className='webcamCapture__button'
        onClick={capture}
        />
        
        
    </div>)
}

export default  WebcamCapture;