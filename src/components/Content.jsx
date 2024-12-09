import React from 'react'
import Task from './Task'

export default function Content() {
  return (
    <div className='main-pic'>
    <div className="pic">
    <img className="mainimage" src="./img/Frame 427319860 (1).jpg"/>
  </div>
  <div className='word'>
    <div className='word1'>
        Welcome to
    </div>
    <div className='word2'>
    Manipal<br />Hospitals
    
  </div>
  </div>
  <div className='task'>
        <button>
          <span>Talk to our Assistant</span>
          <div ><img className='avatar' src="./img/young doctor standing with crossed arms.svg" />
          </div>
        </button>
        </div>
    </div>

  )
}
