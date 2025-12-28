import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props.name)
  return (
    <div className='card'>
        <div><div className='top'>
          <img src={props.brandLogo}alt=''></img>
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className='center'>
          <h3>{props.name} <span>5 days ago</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
          </div></div>
        <div className='bottom'>
          <div>
              <h3>{props.pay}</h3>
              <p>Pune, India</p>
          </div>
            <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
