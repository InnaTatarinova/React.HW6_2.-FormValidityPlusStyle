import React from "react";
import styles from './FormComp.module.css';
import { Input } from "./style"


class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
            email: '',
            persNumber: '',
            select: '',
            textarea: '',
            formSunmit: "true",
        }
        this.onChangeClick = this.onChangeClick.bind(this);
        this.clickSubmitForm = this.clickSubmitForm.bind(this);
    }

    onChangeClick(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    validateField(name, value) {
        let persNumber = this.state.persNumbValid;
        switch (name) {
            case "persNumber":
                console.log(value.length);
                persNumber = value.length === 8;
                break;
            default:
                break;
        }
        console.log(persNumber);
        return persNumber;
    }



    clickSubmitForm(e) {
        e.preventDefault();
        const validField = this.validateField("persNumber", this.state.persNumber);
        if (validField) {
            console.log("Форма отправлена " + this.state);
            this.setState({
                loginName: '',
                email: '',
                persNumber: '',
                select: '',
                textarea: '',
                formSunmit: true
            })
        } else {
            console.log("Персональный номер должен состоять из 8 цифр");
            this.setState({
                formSunmit: false
            })
        }
    }


    render() {

        return (
            <div>
                <form className={styles.Form} onSubmit={this.clickSubmitForm}>
                    <input
                        type="text"
                        name="loginName"
                        value={this.state.loginName}
                        onChange={this.onChangeClick}
                        placeholder="Your name"
                        className={styles.inputField1}
                    />

                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeClick}
                        placeholder="Email Address"
                        className={styles.inputField2}
                    />

                    <Input primary={!this.state.formSunmit}
                        type="number"
                        name="persNumber"
                        value={this.state.persNumber}
                        onChange={this.onChangeClick}
                        placeholder="Your personal number"
                    />

                    <select
                        className={styles.Select}
                        name="select"
                        value={this.state.select}
                        onChange={this.onChangeClick}>
                        <option>Woman</option>
                        <option>Men</option>

                    </select>

                    <textarea
                        className={styles.Textarea}
                        placeholder="Tell about yourself"
                        name="textarea"
                        value={this.state.textarea}
                        onChange={this.onChangeClick}>
                    </textarea>

                    <button className={styles.Button}>SUBMIT NOW</button>

                    {!this.state.formSunmit ?
                        <Error />
                        : <p></p>}
                </form>
            </div>
        )
    }
}

export default FormComponent;
const pStyle ={
    width: "100%",
    color: "red"
}

function Error() {
    return (
        <p style={pStyle}>Персональный номер должен состоять из 8 цифр </p>
    );
}


