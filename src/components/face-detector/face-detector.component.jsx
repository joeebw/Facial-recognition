import './face-detector.styles.scss';

const FaceDetector = ({imgUrl, boxesFace}) => {
    return(
        <div className='container-faceDetector'>
            <div className='faceDetector-row'>
                <img alt='' src={imgUrl} id='input-image'/>

                {
                  boxesFace.length > 0 &&  boxesFace.map((boxFace, i) => {
                    const {leftCol, topRow, rightCol, bottomRow} = boxFace;
                    return(
                        <div className='box-boundaring' key={i}  style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
                        
                    )
                })
                }
            </div>
        </div>
    )
};

export default FaceDetector;