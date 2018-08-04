import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            待办事项列表
                        </h1>
                        <h2 className="subtitle">
                            今日事！今日毕！
                       </h2>
                    </div>
                </div>
            </section>
        )
    }
}
