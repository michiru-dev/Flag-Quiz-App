
const getSpacedTextAsNeeded = (num) => {
    if (num < 10) {
        return <>&ensp;{num}</>
    }
    return num;
}

const numberOfQuestionsList = [5, 10, 15]


function QuestionQuantitySelector({ setNumOfQuestions, handleNumQuestions }) {

    return (
        <div className="radiogroup" style={{ alignItems: "center" }}>
            {numberOfQuestionsList.map((num) => (
                <div key={num} onClick={() => handleNumQuestions(num)} className="wrapper">
                    <input type="radio" name='questions' id={`${num}que`} className='state' />
                    <label className="label" htmlFor={`${num}que`}>
                        <div className="indicator"></div>
                        <span className='text'>{getSpacedTextAsNeeded(num)} Questions</span>
                    </label>
                </div>
            ))}
        </div>
    )
}

export default QuestionQuantitySelector