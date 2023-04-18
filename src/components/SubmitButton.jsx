

function Submit({ handleSubmit, selectedOption }) {


    return (
        <div>
            <button className="submitButton" type='button' onClick={handleSubmit} disabled={selectedOption === null}>Answer</button>
        </div>

    )

}

export default Submit