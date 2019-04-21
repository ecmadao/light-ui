import React from 'react'
import InfoCard from '../components/react/Card/InfoCard'
import ClassicCard from '../components/react/Card/ClassicCard'
import CardGroup from '../components/react/Card/CardGroup'
import styles from './shared/styles.css';

class CardWrapper extends React.Component {
  render() {
    return (
      <div id="componentsContainer">
        <h3>Min Info Card</h3>
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
          <ClassicCard>
            <InfoCard
              mainText="Classic Theme"
              subText="classic theme demo"
              style={{
                margin: '0px'
              }}
            />
          </ClassicCard>
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
        <h3>Min Info Card with Tipso</h3>
        <div>
          <InfoCard
            mainText="Material Theme"
            subText="2017"
            style={{ textAlign: 'left' }}
            tipso={{
              text: 'This is material theme'
            }}
          />
          <InfoCard
            mainText="Material Theme"
            subText="2017"
            style={{ textAlign: 'left' }}
            tipsoTheme="dark"
            tipso={{
              text: 'This is material theme'
            }}
          />
        </div>
        <h3>Inject custom node on card</h3>
        <div>
          <InfoCard
            mainText="Material Theme"
            subText="2017"
            style={{ textAlign: 'left' }}
            tipso={(
              <div className={styles.customIcon}>
                <i className="fa fa-github" aria-hidden="true" />
              </div>
            )}
          />
        </div>
        <h3>Card Group</h3>
        <div>
          <CardGroup >
            <InfoCard
              mainText="Card Group 1"
              subText="2017"
              style={{ textAlign: 'left' }}
              tipso={{
                text: 'This card is in group'
              }}
            />
            <InfoCard
              mainText="Card Group 2"
              subText="2017"
              style={{ textAlign: 'left' }}
            />
          </CardGroup>
        </div>
        <div>
          <CardGroup>
            <CardGroup>
              <InfoCard
                mainText="Card Group 1"
                subText="2017"
                style={{ textAlign: 'left' }}
                tipso={{
                  text: 'This card is in group'
                }}
              />
              <InfoCard
                mainText="Card Group 2"
                subText="2017"
                style={{ textAlign: 'left' }}
              />
              <InfoCard
                mainText="Card Group 3"
                subText="2017"
                style={{ textAlign: 'left' }}
              />
            </CardGroup>
            <CardGroup>
              <InfoCard
                mainText="Card Group 4"
                subText="2017"
                style={{ textAlign: 'left' }}
                tipso={{
                  text: 'This card is in group'
                }}
              />
              <InfoCard
                mainText="Card Group 5"
                subText="2017"
                style={{ textAlign: 'left' }}
              />
            </CardGroup>
          </CardGroup>
        </div>
        <div>
          <CardGroup theme="material">
            <CardGroup>
              <InfoCard
                mainText="Card Group 1"
                subText="2017"
                style={{ textAlign: 'left' }}
                tipso={{
                  text: 'This card is in group'
                }}
              />
              <InfoCard
                mainText="Card Group 2"
                subText="2017"
                style={{ textAlign: 'left' }}
              />
              <InfoCard
                mainText="Card Group 3"
                subText="2017"
                style={{ textAlign: 'left' }}
              />
            </CardGroup>
            <CardGroup>
              <InfoCard
                mainText="Card Group 4"
                subText="2017"
                style={{ textAlign: 'left' }}
                tipso={{
                  text: 'This card is in group'
                }}
              />
              <InfoCard
                mainText="Card Group 5"
                subText="2017"
                style={{ textAlign: 'left' }}
              />
            </CardGroup>
          </CardGroup>
        </div>
      </div>
    );
  }
}

export default CardWrapper;
