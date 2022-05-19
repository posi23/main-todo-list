import React, { useRef, useEffect, useCallback } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { GrAdd } from 'react-icons/gr'
import { styleAsActive, styleAsInactive } from '../utils/utils'

interface IProps {
      newTodoCardOpen: {
            isNewTodoCardOpen: boolean,
            setIsNewTodoCardOpen: React.Dispatch<React.SetStateAction<boolean>>
      },
      todoNotification: number,
      activityNotification: number
}

function Layout({ newTodoCardOpen, todoNotification, activityNotification }: IProps) {

      const { isNewTodoCardOpen, setIsNewTodoCardOpen } = newTodoCardOpen

      const activityTextRef = useRef<HTMLAnchorElement | null>(null)
      const todoTextRef = useRef<HTMLAnchorElement | null>(null)
      const activityActiveRef = useRef<HTMLDivElement | null>(null)
      const todoActiveRef = useRef<HTMLDivElement | null>(null)
      const addIconRef = useRef<HTMLDivElement | null>(null)

      const navigate = useNavigate()

      const appointActiveTab = useCallback((elementID: string) => {
            switch (elementID) {
                  case "activity":
                        styleAsActive(activityTextRef, activityActiveRef)
                        styleAsInactive(todoTextRef, todoActiveRef)
                        break
                  case "todo":
                        styleAsActive(todoTextRef, todoActiveRef)
                        styleAsInactive(activityTextRef, activityActiveRef)
            }
      }, [])

      useEffect(() => {
            appointActiveTab("todo")
            navigate("/todo")
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [appointActiveTab])

      useEffect(() => {
            if (isNewTodoCardOpen && addIconRef.current) addIconRef.current.style.display = 'none'
            else if (!isNewTodoCardOpen && addIconRef.current) addIconRef.current.style.display = 'block'
      }, [isNewTodoCardOpen])

      return (
            <>
                  <div className='scroll-container'>

                        <div className="tabs">
                              <div className="tab" id='activity' onClick={(e) => appointActiveTab(e.currentTarget.id)}>
                                    <Link to="/activity" className='link' ref={activityTextRef}>
                                          Activity
                                    </Link>
                                    {
                                          activityNotification > 0 && <div className='notification-badge'>
                                                <div className='noti-count'>{activityNotification}</div>
                                          </div>
                                    }
                                    <div ref={activityActiveRef} className="active-bar"></div>

                              </div>

                              <div className="tab" id='todo' onClick={(e) => appointActiveTab(e.currentTarget.id)}>
                                    <Link to="/todo" className='link' ref={todoTextRef}>
                                          Todo
                                    </Link>
                                    {
                                          todoNotification > 0 && <div className='notification-badge'>
                                                <div className='noti-count'>{todoNotification}</div>
                                          </div>
                                    }
                                    <div ref={todoActiveRef} className="active-bar"></div>
                              </div>

                              <div className='add-icon' onClick={(e) => setIsNewTodoCardOpen(true)} ref={addIconRef}>
                                    <GrAdd size={25} />
                              </div>

                        </div>
                  </div>

                  <Outlet />
            </>
      )
}

export default Layout