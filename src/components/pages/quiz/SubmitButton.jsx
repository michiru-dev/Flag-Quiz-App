import Button from "../../common/Button"


function Submit({ handleSubmit, selectedOption }) {


    return (
        <div>
            {/* <button className="submitButton" type='button'
                onClick={handleSubmit} disabled={selectedOption === null}>Answer</button> */}
            <Button text={"Answer"} onClick={handleSubmit} disabled={selectedOption === null}
                className={"submitButton"} ></Button>
        </div>

    )

}


export default Submit