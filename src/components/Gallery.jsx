import React, { Component } from 'react'
import './Gallery.css'
import config from 'animate.css/animate-config.json'
import CopyToClipboard from 'react-copy-to-clipboard'
import 'react-toastify/dist/ReactToastify.min.css'
import { toast } from 'react-toastify'
import animates from '../animates/animates.json'
import 'animate.min.css/animate.css';
import 'animate.css/animate.css';
import configMin from 'animate.min.css/animate-config.json'

function AnimateList(props) {
  const listItems = props.list.map((name) =>
    <li key={name} className="card">
      <CopyToClipboard text={animates[props.group + '/' + name]} onCopy={text => {
        window.animates = animates
        if (!text) {
          return
        }
        toast(<div>Copied from "{props.group} . {name}"</div>, { type: 'success', autoClose: 2000 })
      }}>
      <div>
        <div>
          <label>{name}</label>
        </div>
        <div className={'animated bus ' + name}>
        </div>
      </div>
      </CopyToClipboard>
    </li>
  )
  return (
    <ul>{listItems}</ul>
  )
}

class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        <ul>
          {Object.keys(config).map(key =>
            <li key={key}>
              <div>
                <label>{key}</label>
              </div>
              <div className="cards">
                <AnimateList group={key} list={config[key]}/>
              </div>
            </li>
          )}
        </ul>
        <ul>
          {Object.keys(configMin).map(key =>
            <li key={key}>
              <div>
                <label>{key}</label>
              </div>
              <div className="cards">
                <AnimateList group={key} list={configMin[key]}/>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Gallery
