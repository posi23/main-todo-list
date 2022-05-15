import React, { useCallback, useEffect, useRef } from 'react'

interface IProps {
  activeTab: {
    activeTab: HTMLDivElement | null,
    setActiveTab: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>
  }
}
function MainCard({ activeTab }: IProps) {

  const notificationActiveBarRef = useRef<null | HTMLDivElement>(null)
  const todoActiveBarRef = useRef<null | HTMLDivElement>(null)
  const initialActiveTab = useRef<null | HTMLDivElement>(null)

  const appointActiveBar = useCallback((element: HTMLDivElement) => {
    if (activeTab.activeTab) activeTab.activeTab.style.color = "rgb(148, 147, 150)"

    let tab = element.id
    element.style.color = "#000"
    activeTab.setActiveTab(element)
    if (notificationActiveBarRef.current && todoActiveBarRef.current) {
      switch (tab) {
        case "notification":
          notificationActiveBarRef.current.style.display = "block"
          todoActiveBarRef.current.style.display = "none"
          break;
        case "todo":
          notificationActiveBarRef.current.style.display = "none"
          todoActiveBarRef.current.style.display = "block"
          break;
        default:
          return
      }
    }
  }, [activeTab])


  useEffect(() => {
    if (initialActiveTab.current)
      appointActiveBar(initialActiveTab.current)
  }, [appointActiveBar])


  return (
    <div className='main-card'>
      <div className="tabs">
        <div className="tab" id='notification' onClick={(e) => appointActiveBar(e.currentTarget)}>
          Notifications
          <div className='notification-badge'>
            <div className='noti-count'>1</div>
          </div>
          <div ref={notificationActiveBarRef} className='active-bar'></div>
        </div>
        <div ref={initialActiveTab} className="tab" id='todo' onClick={(e) => appointActiveBar(e.currentTarget)}>
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


export default MainCard