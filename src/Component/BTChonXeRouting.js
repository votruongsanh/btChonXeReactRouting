import React, { useState } from 'react'

export default function BTChonXeRouting(props) {
    const [state, setState] = useState({
        imgSrc: "./img/car/products/silver-car.jpg",
    });

    return (
        <div className="container">
            <h1>bài tập chọn xe</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={state.imgSrc} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-light" onClick={() => {
                            setState({
                                imgSrc: "./img/car/products/silver-car.jpg"
                            })
                        }}>silver color</button>
                        <button className="btn btn-danger" onClick={() => {
                            setState({
                                imgSrc: "./img/car/products/red-car.jpg"
                            })
                        }}>red color</button>
                        <button className="btn btn-dark" onClick={() => {
                            setState({
                                imgSrc: "./img/car/products/black-car.jpg"
                            })
                        }}>black color</button>
                        <button className="btn btn-secondary" onClick={() => {
                            setState({
                                imgSrc: "./img/car/products/steel-car.jpg"
                            })
                        }}>steel color</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
