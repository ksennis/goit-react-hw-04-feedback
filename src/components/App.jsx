import { Component } from "react"
import { Statistics } from "./Statistics"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Section } from "./Section"
import { Notification } from "./Notification"

const feedbackName = [
  {id: 'good', name: 'Good'}, 
  {id: 'neutral', name: 'Neutral'}, 
  {id: 'bad', name: 'Bad'}]

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = evt => {
      const {name} = evt.target;
      
      this.setState(prevState => ({
        [name]: prevState[name] + 1,
      }));
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    if(!this.countTotalFeedback()) {
        return 0;
    }
    
    return Number((this.state.good / this.countTotalFeedback() * 100).toFixed(0));
  }
    
  render() {
    const countTotal = this.countTotalFeedback();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={feedbackName} 
          onLeaveFeedback={this.handleClick}
        />
        {countTotal === 0 && <Notification message="There is no feedback"></Notification>}
        {countTotal > 0 && 
          <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} 
          />
        }
      </Section>
    ) 
  }
};
