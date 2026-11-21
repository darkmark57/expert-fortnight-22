import React, { Component } from 'react'
import style from "../styles/components/Header.module.scss"

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <img src="images (1).jfif" alt="logo" />
        <h1>Quiz App</h1>
      </header>
    )
  }
}
