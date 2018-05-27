import React from 'react';
import Slider from '../components/react/Slider';
import styles from './shared/styles.css';

class SliderWrapper extends React.Component {
  render() {
    return (
      <div id="components-container">
        <h3>Slider</h3>
        <h4>Base Slider</h4>
        <div>
          <Slider value={15} />
        </div>
        <h4>Update when dragging</h4>
        <div>
          <Slider value={15} updateWhenDrag />
        </div>
        <h4>Custom (Without tip, curstom dragger style)</h4>
        <div>
          <Slider
            value={24}
            max={24}
            min={1}
            useTipso={false}
            draggerClass={styles.dragger}
          />
        </div>
        <h4>Jump Slider</h4>
        <div>
          <Slider
            jump
            value={1}
            max={6}
            min={1}
            draggerClass={styles.dragger}
            tipsoClass={styles.tipsoClass}
            tipFormatter={index => index}
          />
        </div>
        <h4>Jump Slider (with drag section)</h4>
        <div>
          <Slider
            jump
            value={1}
            max={12}
            min={1}
            clickable
            draggerClass={styles.dragger}
            tipsoClass={styles.tipsoClass}
            tipFormatter={index => index}
          />
        </div>
        <h4>Range Slider</h4>
        <div>
          <Slider value={[15, 35]} />
          <Slider value={[10, 35, 60]} />
        </div>
        <h4>...with min range</h4>
        <div>
          <Slider value={[15, 35]} minRange={5}/>
        </div>
        <h4>...with jump</h4>
        <div>
          <Slider
            jump
            min={0}
            max={20}
            value={[2, 8]}
            minRange={1}
            minJump={2}
          />
        </div>
        <h4>...with drag section</h4>
        <div>
          <Slider
            jump
            min={0}
            max={20}
            clickable
            value={[2, 8]}
            minRange={1}
            minJump={2}
          />
        </div>
        <h4>Multi drag with section</h4>
        <div>
          <Slider
            jump
            min={0}
            max={20}
            clickable
            value={[2, 6, 10, 15]}
            minRange={1}
            minJump={2}
          />
        </div>
      </div>
    );
  }
}

export default SliderWrapper;
