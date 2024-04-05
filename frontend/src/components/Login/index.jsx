import React from "react";
import logo from "../../assets/loginImg.png"
import { Box } from "@material-ui/core";
import "./Style.css"
import LoginForm from "../LoginForm";


export default function Login(){

    return(
        <Box className="signMain">
            <Box className="signLogo">
            <img src={logo} alt="logo"/>
            </Box>
            <Box>
            <h1 className="signHeading">Login</h1>
                <LoginForm/>
                <p className="signP">Already have an account? <a className="signinHere" href="/signup">Sign up</a></p>

            </Box>
        </Box>
    )
}