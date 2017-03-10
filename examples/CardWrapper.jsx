import React from 'react';
import InfoCard from '../components/react/Card/InfoCard';

class CardWrapper extends React.Component {
  render() {
    return (
      <div id="components-container">
        <h3>Info Card</h3>
        <div>
          <InfoCard
            mainText="Material Theme"
            subText="material theme demo"
          />
          <InfoCard
            mainText="Flat Theme"
            subText="flat theme demo"
            theme="flat"
          />
          <InfoCard
            mainText="Ghost Theme"
            subText="ghost theme demo"
            theme="ghost"
          />
        </div>
        <div>
          <InfoCard
            mainText="Material Theme"
            subText="2017"
            style={{ textAlign: 'left' }}
          />
          <InfoCard
            mainText="Flat Theme"
            subText="2017"
            theme="flat"
            style={{ textAlign: 'left' }}
          />
          <InfoCard
            mainText="Ghost Theme"
            subText="2017"
            theme="ghost"
            style={{ textAlign: 'left' }}
          />
        </div>
        <div>
          <InfoCard
            icon="code-fork"
            mainText="Hacknical Components"
            subText="fork me"
            style={{ textAlign: 'left' }}
          />
          <InfoCard
            icon="cubes"
            mainText="Talk is cheap"
            subText="show me your code"
            theme="flat"
            style={{ textAlign: 'left' }}
          />
        </div>
        <h3>Info Card with Tipso</h3>
        <div>
          <InfoCard
            mainText="Material Theme"
            subText="2017"
            style={{ textAlign: 'left' }}
            tipso={{
              text: 'This is material theme'
            }}
          />
        </div>
      </div>
    )
  }
}

export default CardWrapper
