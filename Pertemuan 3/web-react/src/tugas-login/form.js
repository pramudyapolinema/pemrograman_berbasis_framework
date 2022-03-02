import React from "react";
import './form.css';

const Loginform = () => {
    return (
        <div className="container">
            <h2>Form Login</h2>
            <div className="form-login">
                <h1>Tugas Pertemuan Ketiga</h1>
                <form action="" method="POST">
                    Username<input type="text" placeholder="Masukkan username anda"></input>
                    Password<input type="password" placeholder="Masukkan password anda"></input>
                    <button className="login">Login</button>
                </form>
                <input type="checkbox"></input>Remember Me<br/>
                <button className="cancel-login">Cancel</button>
            </div>
        </div>
    )
}

export default Loginform;