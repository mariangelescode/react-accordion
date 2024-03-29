import './Accordion.css'

export default function Accordion(
  {question, answer, active, show,}: {question: string, answer: string, active: boolean, show: any,}
) {

    return (
        <div>
            <button 
                className={`btnAccordion ${ active ? 'active' : 'inactive' }` }
                onClick={show}
            >
                {question}
            </button>
            {
                active &&
                    <div className='container__answer'>
                        <p>{answer}</p>    
                    </div>
            }
        </div>
    )
}