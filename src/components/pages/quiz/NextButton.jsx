import Button from "../../common/Button"


function NextButton({ handleNextButton, progress }) {

    if (progress === 100) return null

    return (
        // <button className="nextButton" type='button' onClick={handleNextButton}>Next Question</button>
        <Button text={"Next Question"} onClick={handleNextButton}
            className={"nextButton"} ></Button>
    )
}

export default NextButton