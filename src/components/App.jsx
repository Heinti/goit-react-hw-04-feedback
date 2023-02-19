import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allValues = {
    good,
    neutral,
    bad,
  };

  const stateValues = Object.values(allValues)
  const stateKeys = Object.keys(allValues)

  const handleIncrement = option => {

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        alert('opppppppppppps');
        break;
    }
  };

  const countTotalFeedback = () => {
    let total = 0;

    for (let i = 0; i < stateValues.length; i++) {
      total += stateValues[i];
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = (good * 100) / countTotalFeedback();

    return Math.floor(positiveFeedbackPercentage);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;

// import { useState } from 'react';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     let total = 0;
//     const totalValue = Object.values(this.state);

//     for (let i = 0; i < totalValue.length; i++) {
//       total += totalValue[i];
//     }
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const goodFeed = this.state.good;
//     const positiveFeedbackPercentage =
//       (goodFeed * 100) / this.countTotalFeedback();

//     return Math.floor(positiveFeedbackPercentage);
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>

//         <Section title="Statistic">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positiveFeedbackPercentage}
//             />
//           ): <Notification message="There is no feedback"/>}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
