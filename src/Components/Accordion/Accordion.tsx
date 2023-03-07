import './Accordion.css'

export default function Accordion(
    {question}: {question:string},
    {answer}: {answer:string},
    {active}: {active:boolean},
    {show}: {show:any},
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