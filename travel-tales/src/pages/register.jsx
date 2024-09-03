import Header from '../components/Header';


function Register() {
    return(

        
        <div class={classes.container}>
        <div class={classes.title}>
            <p>Registration</p>
        </div>

        <form action="#">
            <div class={classes.user_details}>
                <div class={classes.input_box}>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required/>
                </div>
                <div class={classes.input_box}>
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" required/>
                </div>
                <div class={classes.input_box}>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
                <div class={classes.input_box}>
                    <label for="phone">Phone Number</label>
                    <input type="number" id="phone" placeholder="Enter your number" required/>
                </div>
                <div class={classes.input_box}>
                    <label for="pass">Password</label>
                    <input type="password" id="pass" placeholder="Enter your password" required/>
                </div>
                <div class={classes.input_box}>
                    <label for="confirmPass">Confirm Password</label>
                    <input type="password" id="confirmPass" placeholder="Confirm your password" required/>
                </div>
            </div>
            
            <div class={classes.reg_btn}>
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
    )
}


export default Register;