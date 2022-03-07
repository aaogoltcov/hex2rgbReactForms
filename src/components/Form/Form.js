import {Component} from "react";
import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.bodyColor = document.body.style.backgroundColor;
        this.state = {
            hex: "#34495e",
            rgb: "rgb(52, 73, 94)",
        }
        this.mistake = "Ошибка!";
    }

    changeHandler = (e) => {
        const rgbGeneration = this.convertHexToRgb(e.target.value);
        if (rgbGeneration) {
            this.setState({rgb: rgbGeneration});
            document.body.style.backgroundColor = rgbGeneration !== this.mistake ? rgbGeneration : "rgb(255, 0, 0)";
            console.log(rgbGeneration, document.body.style.backgroundColor);
        }
    }

    convertHexToRgb(hex) {
        if (hex.length === 7) {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ?
                `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
                : this.mistake;
        } else {
            return false;
        }
    }

    renderForm() {
        return (
            <form className={"form"}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Введите цвет в формате hex:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder={this.state.hex}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Перевод цвета в формат rgb:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder={this.state.rgb}
                        readOnly={"readonly"}
                        value={this.state.rgb}
                    />
                </div>
            </form>
            )
    }

    render() {
        return (
            <>{this.renderForm()}</>
        )
    }
}