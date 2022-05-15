import React, { useRef } from 'react';
import './App.css';

function App() {

  const notificationActiveBarRef = useRef<null | HTMLDivElement>(null)
  const todoActiveBarRef = useRef<null | HTMLDivElement>(null)

  const appointActiveBar = (activeBarRef: React.MutableRefObject<HTMLDivElement | null>) => {
    if (activeBarRef.current !== null) {
      activeBarRef.current.style.display = "block"
    }
  }

  return (
    <div className='main-card'>
      <div className="tabs">
        <div className="tab" onClick={(e) => appointActiveBar(notificationActiveBarRef)}>
          Notification
          <div className='notification-badge'>
            <div className='noti-count'>1</div>
          </div>
          <div ref={notificationActiveBarRef} className='active-bar'></div>
        </div>
        <div className="tab" onClick={(e) => appointActiveBar(todoActiveBarRef)}>
          Todo
          <div className='notification-badge'>
            <div className='noti-count'>3</div>
          </div>
          <div ref={todoActiveBarRef} className='active-bar'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
