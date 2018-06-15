import React from 'react';
import Button from '../components/react/Button/Button';
import Tipso from '../components/react/Tipso/Tipso';
import styles from './shared/styles.css';

class TipsoWrapper extends React.Component {
  render() {
    return (
      <div id="components-container">
        <h3>Tipso</h3>
        <h4>Use hover as trigger</h4>
        <div>
          <Tipso
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            theme="dark"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            position="bottom"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            theme="dark"
            position="bottom"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
              className={styles.button}
            />
          </Tipso>

          <br />
          <br />

          <Tipso
            position="left"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            position="right"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="hover to show"
              className={styles.button}
            />
          </Tipso>
        </div>
        <h4>Use click as trigger</h4>
        <div>
          <Tipso
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            theme="dark"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            trigger="click"
            position="bottom"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            theme="dark"
            position="bottom"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
              className={styles.button}
            />
          </Tipso>

          <br/>
          <br />

          <Tipso
            trigger="click"
            position="left"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
              className={styles.button}
            />
          </Tipso>

          &nbsp;&nbsp;

          <Tipso
            theme="dark"
            position="right"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="click to show"
              className={styles.button}
            />
          </Tipso>

        </div>

        <h4>Always disable Tipso</h4>
        <div>
          <Tipso
            show={true}
            theme="dark"
            position="bottom"
            disabled={true}
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="tip is disabled"
              className={styles.button}
            />
          </Tipso>
        </div>

        <h4>Show Tipso in default</h4>
        <div>
          <Tipso
            show={true}
            theme="dark"
            position="bottom"
            trigger="click"
            tipsoContent={(
              <div style={{
                width: '95px',
                textAlign: 'center'
              }}>This is an example</div>
            )}>
            <Button
              value="show in default"
              className={styles.button}
            />
          </Tipso>
        </div>
      </div>
    );
  }
}

export default TipsoWrapper;
