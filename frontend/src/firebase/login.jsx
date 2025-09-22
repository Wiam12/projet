import { Fragment, useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Form, InputGroup, Nav, Tab } from 'react-bootstrap';
import desktoplogo from "../assets/images/brand-logos/desktop-logo.png";
import firebase from "../assets/images/brand-logos/1.png";
import react from "../assets/images/brand-logos/2.png";
import google from "../assets/images/brand-logos/google.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseapi';
import { connect } from "react-redux";
import { LocalStorageBackup } from '../components/common/switcher/switcherdata';
import { ThemeChanger } from "../redux/action";

const Login = ({ ThemeChanger }) => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "adminreact@gmail.com",
        "password": "1234567890",
    });
    const { email, password } = data;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const navigate = useNavigate();
    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboard`;
        navigate(path);
    };

    const Login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => { console.log(user); routeChange(); }).catch(err => { console.log(err); setError(err.message); });
    };
    const Login1 = () => {
        if (data.email == "adminreact@gmail.com" && data.password == "1234567890") {
            routeChange();
        }
        else {
            setError("The Auction details did not Match");
            setData({
                "email": "adminreact@gmail.com",
                "password": "1234567890",
            });
        }
    };

    useEffect(() => {
        LocalStorageBackup(ThemeChanger);
    }, []);

    return (
        <Fragment>
            <div className="container-fluid" style={{ height: "100vh", padding: "0" }}>
                <div className="row justify-content-center align-items-center authentication vh-100 pt-3">
                    <Col xxl={6} xl={6} lg={7} md={8} sm={12} className="col-12">
                        <div className="my-5 d-flex justify-content-center">
                            <Link to={`${import.meta.env.BASE_URL}dashboard`}>
                                <img src={desktoplogo} alt="logo" className="desktop-logo" />
                            </Link>
                        </div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                            <Card className="shadow-lg">
                                <Nav variant="pills" className="justify-content-center authentication-tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="react"><img src={react} alt='logo2' /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="firebase"> <img src={firebase} alt='logo1' /></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="react" className='border-0 pb-2'>
                                        <div className="p-4">
                                            <p className="h5 fw-semibold mb-2 text-center">Sign In</p>
                                            <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon !</p>
                                            <div className="d-flex mb-3 justify-content-between gap-2 flex-wrap flex-lg-nowrap">
                                                <button type="button" className="btn-wave btn-light-ghost border d-flex align-items-center justify-content-center flex-fill bg-light btn btn-lg">
                                                    <span className="avatar avatar-xs flex-shrink-0">
                                                        <img src={google} alt="" />
                                                    </span><span className="lh-1 ms-2 fs-13 text-default">Signup with Google</span>
                                                </button>
                                            </div>
                                            <div className="row gy-3">
                                                {err && <Alert variant="danger">{err}</Alert>}
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="signin-username" className="form-label text-default">Email</Form.Label>
                                                    <Form.Control size="lg" className="w-100" placeholder="Enter your email" name="email" type='text' value={email} onChange={changeHandler} required />
                                                </Col>
                                                <Col xl={12} className="mb-2">
                                                    <Form.Label htmlFor="signin-password" className="form-label text-default d-block">Password
                                                        <Link to={`${import.meta.env.BASE_URL}custompages/forgotpassword`} className="float-end text-danger">Forget password ?</Link></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control size="lg" className="form-control w-100" placeholder="Enter your password" name="password" type={(passwordshow1) ? 'text' : "password"} value={password} onChange={changeHandler} required />
                                                        <Button variant='light' className="btn btn-light" type="button" onClick={() => setpasswordshow1(!passwordshow1)} id="button-addon2">
                                                            <i className={`text-dark ${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
                                                        </Button>
                                                    </InputGroup>
                                                    <div className="mt-2">
                                                        <div className="form-check">
                                                            <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                            <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                                Remember password ?
                                                            </Form.Label>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={12} className="d-grid mt-2">
                                                    <Button variant='primary' onClick={Login1} size='lg' className="btn">Sign In</Button>
                                                </Col>
                                            </div>
                                            <div className="text-center">
                                                <p className="fs-12 text-muted mt-3">Don't have an account? <Link to={`${import.meta.env.BASE_URL}firebase/signup`} className="text-primary">Sign Up</Link></p>
                                            </div>
                                            <div className="text-center my-3 authentication-barrier">
                                                <span>OR</span>
                                            </div>
                                            <div className="btn-list text-center">
                                                <Button variant='light' className="btn btn-icon">
                                                    <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                                                </Button>
                                                <Button variant='light' className="btn btn-icon">
                                                    <i className="ri-google-line fw-bold text-dark op-7"></i>
                                                </Button>
                                                <Button variant='light' className="btn btn-icon">
                                                    <i className="ri-twitter-x-line fw-bold text-dark op-7"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card>
                        </Tab.Container>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Login);
