import React, { Component } from 'react';
import GetWorkText from './GetWorkText';

class GetWork extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  text = [
    {
      id: 1,
      main: 'Find the Right Freelance Professional',
      sub:
        'Post your task or search and chat real-time with your preferred talent',
      active: true,
    },
    {
      id: 2,
      main: 'Hire the Right Freelance Professional',
      sub:
        'Receive quotes from interested freelancers, compare and hire the best fit',
      active: false,
    },
    {
      id: 3,
      main: 'Work Efficiently with Your Freelancer',
      sub:
        'Provide inputs, chat real-time, track progress with our work management tools',
      active: false,
    },
    {
      id: 4,
      main: 'Pay with Ease and Assurance',
      sub:
        'Review and approve freelancer’s payment only when you are 100% satisfied',
      active: false,
    },
  ];

  componentDidMount = () => {
    this.countInterval = setInterval(this.setCurrentCount, 3500);
  };

  componentWillUnmount = () => {
    clearInterval(this.countInterval);
  };

  setCurrentCount = () => {
    this.setState((prevState) => {
      let newCount = prevState.count + 1;
      if (newCount > 3) {
        newCount = 0;
      }
      return { count: newCount };
    }, this.setActiveText);
  };

  setActiveText = () => {
    this.setState((prevState) => {
      const { count } = prevState;
      let newText = [...this.text];
      newText.forEach((item, index) => {
        if (index === count) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    });
  };

  render() {
    return (
      <ul className="get_work--carousel--text">
        {this.text.map((text) => {
          return (
            <GetWorkText
              id={text.id}
              key={text.id}
              main={text.main}
              sub={text.sub}
              active={text.active}
            />
          );
        })}
      </ul>
    );
  }
}

export default GetWork;
