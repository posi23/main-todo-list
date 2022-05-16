import React, { useCallback, useEffect, useRef } from 'react'

interface IProps {
  activeTab: {
    activeTab: HTMLDivElement | null,
    setActiveTab: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>
  }
}
function MainCard({ activeTab }: IProps) {


  return (
    <div></div>
    // <div className='main-card'>
    //   <div className="tabs">
    //     <div className="tab" id='notification' onClick={(e) => appointActiveBar(e.currentTarget)}>
    //       Notifications
    //       <div className='notification-badge'>
    //         <div className='noti-count'>1</div>
    //       </div>
    //       <div ref={notificationActiveBarRef} className='active-bar'></div>
    //     </div>
    //     <div ref={initialActiveTab} className="tab" id='todo' onClick={(e) => appointActiveBar(e.currentTarget)}>
    //       Todo
    //       <div className='notification-badge'>
    //         <div className='noti-count'>3</div>
    //       </div>
    //       <div ref={todoActiveBarRef} className='active-bar'></div>
    //     </div>
    //   </div>
    // </div>
  );
}


export default MainCard