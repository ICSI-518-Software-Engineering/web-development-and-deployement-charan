import React from "react";
import logo from "../../assets/loginImg.png"
import { Box } from "@material-ui/core";
import "./Style.css"
import SignupForm from "../SignupForm";




export default function Signup(){

    return(
        <Box className="signMain">
            <Box className="signLogo">
            <img src={logo} alt="logo"/>
            </Box>
            <Box>
                <h1 className="signHeading">Sign Up</h1>
                <SignupForm/>
                <p className="signP">Doesn't have an account? <a className="signinHere" href="/login">Login</a></p>
            </Box>
        </Box>
    )
}