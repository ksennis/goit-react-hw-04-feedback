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
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = evt => {
    const {name} = evt.target;
    
    switch(name) {
      case 'good': { setGood(good + 1); break; }
      case 'neutral': { setNeutral(neutral + 1); break; }
      default: { setBad(bad + 1); }
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if(!countTotalFeedback()) {
        return 0;
    }
    
    return Number((good / countTotalFeedback() * 100).toFixed(0));
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
          good={good} 
          neutral={neutral} 
          bad={bad}  
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()} 
        />
      }
    </Section>
  )
}