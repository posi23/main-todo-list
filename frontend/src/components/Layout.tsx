import React, { useRef, useEffect, useCallback } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Layout() {

      const notificationTextRef = useRef<HTMLAnchorElement | null>(null)
      const todoTextRef = useRef<HTMLAnchorElement | null>(null)
      const notificationActiveRef = useRef<HTMLDivElement | null>(null)
      const todoActiveRef = useRef<HTMLDivElement | null>(null)

      const navigate = useNavigate()

      const appointActiveTab = useCallback((elementID: string) => {
            switch (elementID) {
                  case "notification":
                        styleAsActive(notificationTextRef, notificationActiveRef)
                        styleAsInactive(todoTextRef, todoActiveRef)
                        break
                  case "todo":
                        styleAsActive(todoTextRef, todoActiveRef)
                        styleAsInactive(notificationTextRef, notificationActiveRef)
            }
      }, [])

      const styleAsActive = (textRef: React.MutableRefObject<HTMLAnchorElement | null>, activeRef: React.MutableRefObject<HTMLDivElement | null>) => {
            if (textRef.current && activeRef.current) {
                  textRef.current.style.color = "#000"
                  activeRef.current.style.display = "block"
            }
      }

      const styleAsInactive = (textRef: React.MutableRefObject<HTMLAnchorElement | null>, activeRef: React.MutableRefObject<HTMLDivElement | null>) => {
            if (textRef.current && activeRef.current) {
                  textRef.current.style.color = "rgb(148, 147, 150)"
                  activeRef.current.style.display = "none"
            }
      }

      useEffect(() => {
            appointActiveTab("todo")
            navigate("/todo")
      }, [appointActiveTab])

      return (
            <>
                  <div className="tabs">
                        <div className="tab" id='notification' onClick={(e) => appointActiveTab(e.currentTarget.id)}>
                              <Link to="/notification" className='link' ref={notificationTextRef}>
                                    Notifications
                              </Link>
                              <div className='notification-badge'>
                                    <div className='noti-count'>1</div>
                              </div>
                              <div ref={notificationActiveRef} className="active-bar"></div>

                        </div>

                        <div className="tab" id='todo' onClick={(e) => appointActiveTab(e.currentTarget.id)}>
                              <Link to="/todo" className='link' ref={todoTextRef}>
                                    Todo
                              </Link>
                              <div className='notification-badge'>
                                    <div className='noti-count'>3</div>
                              </div>
                              <div ref={todoActiveRef} className="active-bar"></div>
                        </div>

                  </div>

                  <Outlet />
            </>
      )
}

export default Layout