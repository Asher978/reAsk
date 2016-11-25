import React from 'react'
import './QuestionsContainer.css'

import Questions from './Questions/Questions.jsx'

class QuestionsContainer extends React.Component {

  askQuestion() {
    const askQuestionModal = document.querySelector('.ask-question-modal')
    const coverThePage = document.querySelector('.cover-the-page')

    askQuestionModal.style.display = 'block'
    coverThePage.style.display = 'block'
  }

  // FUNCTION: takes in the array of questions fechted and stored in our state
  // and renders them one by one on the DOM with components
  // ARGS: takes the array of objects
  renderQuestions(quest) {
    // checking for content inside of array of questions
    if(quest.length === 0 ) {
      console.log('no things inside DB')
    } else {
      quest.forEach((q, i ) => {
        return (
          <Questions

          />
        );
      }) // end of forEach
    } // end of else
  } // end of renderQuestions

  render() {
    return(
      <div className='questions-container'>
        <button className='reAsk-button' onClick={this.askQuestion.bind(this)}>reAsk Something!</button>
        <div className='questions'>
          <Questions />
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
          {/*<Questions />*/}
        </div>
      </div>
    )
  }
}

export default QuestionsContainer
