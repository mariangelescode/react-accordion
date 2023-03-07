import { useEffect, useState } from 'react'

import Accordion from '../Accordion/Accordion'

import './Container.css'



const url = 'public/Data/Faqs.json'

export default function Container() {

  const [questions, setQuestions] = useState([])
  const [isActive, setIsActive] = useState(0);


  useEffect(() => {
    const getFaqs = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setQuestions(data.Preguntas)
    }
    getFaqs();
  }, [])

  return (
    <section className='container__section__faqs'>
      {
        questions.map(question => {
            return (
                <Accordion
                    key = {question.id}
                    question={question.question}
                    answer={question.answer}
                    active={isActive === question.id}
                    show={() => setIsActive(question.id)}
                />
            )
        })
      }
    </section>
  )
}