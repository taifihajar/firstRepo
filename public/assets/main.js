const hostname = 'http://localhost:3000';
initAuth()
async function initAuth() {
    document.body.innerHTML += '<style>    @import url(https://fonts.googleapis.com/css?family=Roboto:300);    .login-page {        width: 360px;        padding: 8% 0 0;        margin: auto;    }    .form {        position: relative;        z-index: 1;        background: #FFFFFF;        max-width: 360px;        margin: 0 auto 100px;        padding: 45px;        text-align: center;        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);    }    .form input,    .form select {        font-family: "Roboto", sans-serif;        outline: 0;        background: #f2f2f2;        width: 100%;        border: 0;        margin: 0 0 15px;        padding: 15px;        box-sizing: border-box;        font-size: 14px;    }    .form button {        font-family: "Roboto", sans-serif;        text-transform: uppercase;        outline: 0;        background: #4CAF50;        width: 100%;        border: 0;        padding: 15px;        color: #FFFFFF;        font-size: 14px;        -webkit-transition: all 0.3 ease;        transition: all 0.3 ease;        cursor: pointer;    }    .form button:hover,    .form button:active,    .form button:focus {        background: #43A047;    }    .form .message {        margin: 15px 0 0;        color: #b3b3b3;        font-size: 12px;    }    .form .message-error {        margin: 15px 0 0;        color: #b3b3b3;        font-size: 15px;        color: red;        font-weight: bold;        display: none;    }    .form .message a {        color: #4CAF50;        text-decoration: none;    }    .form .register-form {        display: none;    }    .container {        position: relative;        z-index: 1;        max-width: 300px;        margin: 0 auto;    }    .container:before,    .container:after {        content: "";        display: block;        clear: both;    }    .container .info {        margin: 50px auto;        text-align: center;    }    .container .info h1 {        margin: 0 0 15px;        padding: 0;        font-size: 36px;        font-weight: 300;        color: #1a1a1a;    }    .container .info span {        color: #4d4d4d;        font-size: 12px;    }    .container .info span a {        color: #000000;        text-decoration: none;    }    .container .info span .fa {        color: #EF3B3A;    }    .auth-form {        display: none;        height: 100vh;        width: 100vw;        position: fixed;        left: 0;        top: 0;        background: #76b852;        /* fallback for old browsers */        background: rgb(141, 194, 111);        background: linear-gradient(90deg, rgba(141, 194, 111, 1) 0%, rgba(118, 184, 82, 1) 50%);        font-family: "Roboto", sans-serif;        -webkit-font-smoothing: antialiased;        -moz-osx-font-smoothing: grayscale;        z-index: 10000000;    }    #success-form-id{        display: none;    }    .success-form-img{        width: 80%;    }</style><div id="sso-auth-form-id" class="auth-form">    <div class="login-page">        <div class="form">            <div id="registration-form" class="register-form">                <input id="email-registration-input" type="text" placeholder="email address" />                <input id="password-registration-input" type="password" placeholder="password" />                <input id="re-password-registration-input" type="password" placeholder="re-password" />                <select id="role-registration-input">                    <option value="" hidden>Role</option>                    <option value="ROLE_USER">Role simple User</option>                    <option value="ROLE_ADMIN">Role Admin</option>                    <option value="ROLE_MANAGER">Role Manager</option>                </select>                <button onclick="signUp()">create</button>                <p class="message">Already registered? <a href="#"                        onclick="document.getElementById(\'registration-form\').style.display = \'none\';document.getElementById(\'login-form\').style.display = \'block\';">Sign                        In</a></p>                <p id="msg-error-registration" class="message-error"> Please fill all fields</p>            </div>            <div id="login-form" class="login-form">                <input id="email-login-input" type="email" placeholder="Email" />                <input id="password-login-input" type="password" placeholder="password" />                <button onclick="signIn()">login</button>                <p class="message">Not registered? <a href="#"                        onclick="document.getElementById(\'registration-form\').style.display = \'block\';document.getElementById(\'login-form\').style.display = \'none\';">Create                        an account</a></p>                <p id="msg-error-login" class="message-error"> Please fill all fields</p>            </div>            <div id="success-form-id" class="login-form">                <img class="success-form-img" src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/172-512.png" />                <br><br>                <button onclick="location.reload()">Go to Sign-in page</button>            </div>        </div>    </div></div>';
    let form = document.getElementById('sso-auth-form-id');
    let cookies = {};
    document.cookie.split('; ').map(ele => {
        cookies[ele.split('=')[0]] = ele.split('=')[1];
    })
    let data = await fetch(hostname+'/api/auth/validation-token', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: cookies['token'] })
    });
    data = await data.json()
    //let { data } = await axios.post(hostname+'/api/auth/validation-token', )
    if (!data.isRegistred) form.style.display = 'block';
}

async function signIn() {
    document.getElementById('msg-error-login').innerHTML = 'Please fill all fields'
    if (checkFields(1)) {
        let email = document.getElementById('email-login-input').value;
        let password = document.getElementById('password-login-input').value;

        //let { data } = await axios.post(hostname+'/api/auth/sign-in', { email, password })
        let data = await fetch(hostname+'/api/auth/sign-in', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        data = await data.json()
        if (data.isRegistred) {
            document.cookie = `token = ${data.token}`
            document.cookie = `role = ${data.role}`
            document.cookie = `user = ${data.user}`
            location.reload()
        } else {
            document.getElementById('msg-error-login').innerHTML = data.message
            document.getElementById('msg-error-login').style.display = 'block';
        }
    } else {
        document.getElementById('msg-error-login').style.display = 'block';
    }
}

async function signUp() {
    document.getElementById('msg-error-registration').innerHTML = 'Please fill all fields'
    if (checkFields(2)) {
        let email = document.getElementById('email-registration-input').value;
        let password = document.getElementById('password-registration-input').value;
        let role = document.getElementById('role-registration-input').value;
        //let { data } = await axios.post(hostname+'/api/auth/sign-up', { email, password, role })
        let data = await fetch(hostname+'/api/auth/sign-up', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, role })
        });
        data = await data.json()
        if (data.isRegistred) {
            document.getElementById('success-form-id').style.display = 'block';
            document.getElementById('registration-form').style.display = 'none';
            document.getElementById('login-form').style.display = 'none';
        } else {
            document.getElementById('msg-error-registration').innerHTML = data.message;
            document.getElementById('msg-error-registration').style.display = 'block';
        }
    } else {
        document.getElementById('msg-error-registration').style.display = 'block';
    }
}

function checkFields(order) {
    if (order == 1) {
        if (isValideEmail(document.getElementById('email-login-input').value) && document.getElementById('password-login-input').value.length > 0) return true;
    } else if (order == 2) {
        if (document.getElementById('email-registration-input').value?.length > 0 && document.getElementById('password-registration-input').value?.length > 0 && document.getElementById('re-password-registration-input').value === document.getElementById('password-registration-input').value && document.getElementById('role-registration-input').value?.length > 0) return true;
    }
    return false;
}

function isValideEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null;
};