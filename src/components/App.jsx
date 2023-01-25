import { useState } from "react"

import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section"
import { Notification } from "./Notification"

const feedbackName = [
  {id: 'good', name: 'Good'}, 
  {id: 'neutral', name: 'Neutral'}, 
  {id: 'bad', name: 'Bad'}
]

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleClick = evt => {
    const {name} = evt.target;
    
    setFeedback(prevState => ({ 
      ...prevState,
      [name]: prevState[name] + 1
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if(!countTotalFeedback()) {
        return 0;
    }
    
    return Number((feedback.good / countTotalFeedback() * 100).toFixed(0));
  }
  
  const countTotal = countTotalFeedback();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions 
        options={feedbackName} 
        onLeaveFeedback={handleClick}
      />
      {countTotal === 0 && <Notification message="There is no feedback"></Notification>}
      {countTotal > 0 && 
        <Statistics 
          good={feedback.good} 
          neutral={feedback.neutral} 
          bad={feedback.bad}  
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()} 
        />
      }
    </Section>
  )
}