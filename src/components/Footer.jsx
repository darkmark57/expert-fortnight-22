import React, { Component } from 'react'
import style from "../styles/components/Footer.module.scss"

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.footer}>&copy; Robocode {new Date().getFullYear()}</footer>
    )
  }
}
