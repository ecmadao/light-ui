import React from 'react';
import Button from '../components/react/Button/Button';
import Tipso from '../components/react/Tipso/Tipso';


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
                  width: '100px',
                  textAlign: 'center'
              }}>This is example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>
          <Tipso
            theme="dark"
            tipsoContent={(
              <div style={{
                  width: '100px',
                  textAlign: 'center'
              }}>This is example</div>
            )}>
            <Button
              value="hover to show"
            />
          </Tipso>
        </div>
        <h4>Use click as trigger</h4>
        <div>
          <Tipso
            trigger="click"
            tipsoContent={(
              <div style={{
                  width: '100px',
                  textAlign: 'center'
              }}>This is example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>
          <Tipso
            theme="dark"
            trigger="click"
            tipsoContent={(
              <div style={{
                  width: '80px',
                  textAlign: 'center'
              }}>This is example</div>
            )}>
            <Button
              value="click to show"
            />
          </Tipso>
        </div>
      </div>
    )
  }
}

export default TipsoWrapper
