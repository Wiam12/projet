import { Fragment, useEffect, useRef, useState } from 'react';
import { Badge, Dropdown, Form, ListGroup, Modal, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MenuItems } from '../sidebar/sidemenu/sidemenu';
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import logo1 from '../../../assets/images/brand-logos/desktop-logo.png';
import logo2 from '../../../assets/images/brand-logos/toggle-logo.png'
import logo3 from '../../../assets/images/brand-logos/desktop-dark.png'
import logo4 from '../../../assets/images/brand-logos/toggle-dark.png'
import us from "../../../assets/images/flags/us_flag.jpg";
import spain from "../../../assets/images/flags/spain_flag.jpg";
import french from "../../../assets/images/flags/french_flag.jpg";
import germany from "../../../assets/images/flags/germany_flag.jpg";
import italy from "../../../assets/images/flags/italy_flag.jpg";
import russia from "../../../assets/images/flags/russia_flag.jpg";
import product1 from "../../../assets/images/ecommerce/cart/1.png";
import product3 from "../../../assets/images/ecommerce/cart/2.png";
import product5 from "../../../assets/images/ecommerce/cart/3.png";
import product4 from "../../../assets/images/ecommerce/cart/4.png";
import product6 from "../../../assets/images/ecommerce/cart/5.png";
import face6 from "../../../../src/assets/images/faces/6.jpg";
import store from '../../../redux/store';

const Header = ({ local_varaiable, ThemeChanger }) => {

    ///****fullscreeen */
    const [fullScreen, setFullScreen] = useState(false);

    const toggleFullScreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(() => setFullScreen(true));
        } else {
            document.exitFullscreen().then(() => setFullScreen(false));
        }
    };

    //Search functionality
    const [show1, setShow1] = useState(false);
    const [showa, setShowa] = useState(false);
    const [InputValue, setInputValue] = useState("");
    const [show2, setShow2] = useState(false);
    const [searchcolor, setsearchcolor] = useState("text-dark");
    const [searchval, setsearchval] = useState("Type something");
    const [NavData, setNavData] = useState([]);

    const searchResultRef = useRef(null);

    const myfunction = (inputValue) => {
        if (searchResultRef.current) {
            searchResultRef.current.classList.remove("d-none");
        }

        const i = [];
        const allElement2 = [];
        MenuItems.forEach((mainLevel) => {
            if (mainLevel.children) {
                setShowa(true);
                mainLevel.children.forEach((subLevel) => {
                    i.push(subLevel);
                    if (subLevel.children) {
                        subLevel.children.forEach((subLevel1) => {
                            i.push(subLevel1);
                            if (subLevel1.children) {
                                subLevel1.children.forEach((subLevel2) => {
                                    i.push(subLevel2);
                                });
                            }
                        });
                    }
                });
            }
        });

        for (const allElement of i) {
            if (allElement.title.toLowerCase().includes(inputValue.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(inputValue.toLowerCase())) {
                    setShow2(true);

                    // Check if the element has a path and doesn't already exist in allElement2 before pushing
                    if (allElement.path && !allElement2.some((el) => el.title === allElement.title)) {
                        allElement2.push(allElement);
                    }
                }
            }
        }

        if (!allElement2.length || inputValue === "") {
            if (inputValue === "") {
                setShow2(false);
                setsearchval("Type something");
                setsearchcolor("text-dark");
            }
            if (!allElement2.length) {
                setShow2(false);
                setsearchcolor("text-danger");
                setsearchval("There is no component with this name");
            }
        }

        setNavData(allElement2);
    };

	const SwithcerClass = (selector) => document.getElementsByClassName(selector);

    const Switchericon = () => {
        const offcanvasEnd = SwithcerClass("offcanvas-end")[0];
        const switcherBackdrop = SwithcerClass("switcher-backdrop")[0];

        offcanvasEnd?.classList.toggle("show");
        offcanvasEnd.style.insetInlineEnd = "0px";

        if (switcherBackdrop?.classList.contains('d-none')) {
            switcherBackdrop.classList.add("d-block");
            switcherBackdrop.classList.remove("d-none");
        }
    };

    //Dark Model
    const ToggleDark = () => {

        ThemeChanger({
            ...local_varaiable,
            "dataThemeMode": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.dataThemeMode == 'gradient' ? 'dark' : 'gradient',
            "dataMenuStyles": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',

        });
        const theme = store.getState();

        if (theme.dataThemeMode != 'dark') {

            ThemeChanger({
                ...theme,
                "bodyBg1": '',
                "bodyBg2": '',
                "darkBg": '',
                "inputBorder": '',
            });
            localStorage.removeItem("aziradarktheme");
            localStorage.removeItem("darkBgRGB1");
            localStorage.removeItem("darkBgRGB2");
            localStorage.removeItem("darkBgRGB3");
            localStorage.removeItem("darkBgRGB4");
            localStorage.removeItem("aziraMenu");
            localStorage.removeItem("aziraHeader");
        }
        else {
            localStorage.setItem("aziradarktheme", "dark");
            localStorage.removeItem("aziralighttheme");
            localStorage.removeItem("aziraHeader");
            localStorage.removeItem("aziraMenu");

        }

    };

    function menuClose() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close" });
    }

    const overlayRef = useRef(null);

    const toggleSidebar = () => {
        const theme = store.getState();
        const sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === 'vertical') {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "close-menu-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "close-menu-close" });
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-overlay-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            if (window.innerWidth >= 992) {
                                ThemeChanger({ ...theme, "toggled": "icon-overlay-close" });
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-text-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-text-close" });
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                        } else {
                            if (theme.activeMenuItem) {
                                const activeIndex = theme.menuItems.findIndex(item => item.id === theme.activeMenuItem);

                                if (activeIndex !== -1 && theme.menuItems[activeIndex].next) {
                                    ThemeChanger({
                                        ...theme,
                                        "toggled": "double-menu-open",
                                        activeMenuItem: theme.menuItems[activeIndex].next.id,
                                    });
                                }
                                else {
                                    ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                                }
                            }
                        }

                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "detached-close" });
                        }
                        break;
                    // default
                    case "default":
                        ThemeChanger({ ...theme, "toggled": "" });

                }
                switch (navStyle) {
                    case "menu-click":
                        if (theme.toggled === "menu-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        }
                        else {
                            ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.toggled === "menu-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

                        }
                        break;
                    case "icon-click":
                        if (theme.toggled === "icon-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

                        }
                        break;
                    case "icon-hover":
                        if (theme.toggled === "icon-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

                        }
                        break;
                }
            }
        }
        else {
            if (theme.toggled === "close") {
                ThemeChanger({ ...theme, "toggled": "open" });

                setTimeout(() => {
                    if (theme.toggled == "open") {
                        if (overlayRef.current) {
                            overlayRef.current.classList.remove("active");
                        }

                        if (overlayRef) {
                            overlayRef.classList.add("active");
                            overlayRef.addEventListener("click", () => {
                                if (overlayRef.current) {
                                    overlayRef.current.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }

                    window.addEventListener("resize", () => {
                        if (window.screen.width >= 992) {
                            if (overlayRef.current) {
                                overlayRef.current.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                ThemeChanger({ ...theme, "toggled": "close" });
            }
        }
    };
    const cartProduct = [
        {
            id: 1,
            src: product1,
            name: 'Glass Decor Item',
            price: '$1,229',
        },
        {
            id: 2,
            src: product3,
            name: 'Modern Chair',
            price: '$219',
        },
        {
            id: 3,
            src: product5,
            name: 'Branded Black Headset',
            price: '$39.99',
        },
        {
            id: 4,
            src: product4,
            name: 'Sun Glasses',
            price: '$439.8',
        },
        {
            id: 5,
            src: product6,
            name: 'Coffe Cup',
            price: '$225.2',
        },
    ];

    const [cartItems, setCartItems] = useState(cartProduct);
    const [cartItemCount, setCartItemCount] = useState(cartProduct.length);

    const handleRemove = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
        setCartItemCount(updatedCart.length);
    };

    const initialNotifications = [
        { id: 1, icon: 'la la-shopping-basket', color: 'success', text: 'New Order Received', time: '1 hour ago', },
        { id: 2, icon: 'la la-user-check', color: 'danger', text: '22 Verified registrations', time: '2 hours ago' },
        { id: 3, icon: 'la la-check-circle', color: 'primary', text: 'Project has been approved', time: '4 hours ago' },
        { id: 4, icon: 'la la-file-alt', color: 'pink', text: 'New files available', time: '10 hours ago' },
        { id: 5, icon: 'la la-envelope-open', color: 'warning', text: 'New review received', time: '1 day ago' },
        { id: 6, icon: 'la la-gem', color: 'purple', text: 'Updates available', time: '2 days ago' }
    ];

    const [notifications, setNotifications] = useState([...initialNotifications]);

    //Time
    const [time, setTime] = useState(new Date());

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    //Date
    const [date, setDate] = useState(new Date());

    const getOrdinalSuffix = (day) => {
        if (day >= 11 && day <= 13) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const formatDate = (date) => {
        const weekdayOptions = { weekday: 'long' };
        const day = date.getDate();
        const monthOptions = { month: 'long' };
        const year = date.getFullYear();

        const weekday = date.toLocaleDateString(undefined, weekdayOptions);
        const month = date.toLocaleDateString(undefined, monthOptions);
        const suffix = getOrdinalSuffix(day);

        return `${weekday}, ${month} ${day}${suffix} ${year}`;
    };

    useEffect(() => {
        const intervalId1 = setInterval(() => {
            setDate(new Date());
        }, 1000 * 60 * 60 * 24); 
    
        const intervalId = setInterval(() => {
            setTime(new Date()); 
        }, 1000);
    
        const clickHandler = (event) => {
            if (searchResultRef.current && !searchResultRef.current.contains(event.target)) {
                searchResultRef.current.classList.add("d-none");
            }
        };
    
        document.addEventListener("click", clickHandler);
		window.addEventListener("scroll", handleScroll);
    
        return () => {
            document.removeEventListener("click", clickHandler);
		   window.removeEventListener("scroll", handleScroll);
            clearInterval(intervalId);
            clearInterval(intervalId1);
        };
    }, []);

    
    //offcanvas right
    const [showr, setShowr] = useState(false);

    const handleCloser = () => setShowr(false);
    const handleShowr = () => setShowr(true);

    const [showr1, setShowr1] = useState(false);

    const handleCloser1 = () => setShowr1(false);
    const handleShowr1 = () => setShowr1(true);

    // for search modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const headerRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 30) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

    return (
        <Fragment>
            <header ref={headerRef} className={`app-header ${isSticky ? "sticky-pin" : ""}`}>
                <div className="main-header-container container-fluid">
                    <div className="header-content-left">
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}dashboard`} className="header-logo">
                                    <img src={logo1} alt="logo" className="desktop-logo" />
                                    <img src={logo2} alt="logo" className="toggle-logo" />
                                    <img src={logo3} alt="logo" className="desktop-dark" />
                                    <img src={logo4} alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element">
                            <Link aria-label="Hide Sidebar" onClick={() => toggleSidebar()}
                                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                                data-bs-toggle="sidebar" to="#"><span><i className="fe fe-align-left header-link-icon border-0"></i>
                                </span>
                            </Link>
                        </div>
                        <Dropdown className="header-element settings-dropdown d-xl-flex d-none" autoClose="outside">
                            <Dropdown.Toggle as='a' className="header-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fe fe-settings me-1"></i>Settings
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown  dropdown-menu-arrow  border-0 dropdown-menu-start" data-popper-placement="none">
                                <div className="p-3 menu-header-content">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p className="mb-0 fs-17 fw-semibold text-fixed-white">Settings</p>
                                            <p className="mb-0 fw-semibold text-fixed-white">Overview of theme</p>
                                        </div>
                                        <span className="badge bg-warning rounded-pill">View all</span>
                                    </div>
                                </div>
                                <div><hr className="dropdown-divider" /></div>
                                <ul className="list-unstyled mb-0 setting-menu">
                                    <Dropdown.Item as="li">
                                        <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="fw-normal"><i className="mdi mdi-account-outline fs-16 me-2 mt-1"></i>Profile</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link to={`${import.meta.env.BASE_URL}apps/contacts`} className="fw-normal"><i className="mdi mdi-account-box-outline fs-16 me-2"></i>Contacts</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link to={`${import.meta.env.BASE_URL}pages/setting`} className="fw-normal"><i className="mdi mdi-account-location fs-16 me-2"></i>Accounts</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link to={`${import.meta.env.BASE_URL}pages/aboutus`} className="fw-normal"><i className="mdi mdi-briefcase fs-16 me-2"></i>About us</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li">
                                        <Link to="#" className="fw-normal"><i className="mdi mdi-application fs-16 me-2"></i>Getting start</Link >
                                    </Dropdown.Item>
                                </ul>
                                <div className="px-3 py-2 empty-header-item border-top">
                                    <div>
                                        <Link to="#" className="btn btn-sm btn-success">Cancel</Link>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                            {/* <!-- End::main-header-dropdown --> */}
                        </Dropdown>

                        <Dropdown className="header-element projects-dropdown ms-4 d-xl-flex d-none" autoClose="outside">
                            <Dropdown.Toggle as='a' className="header-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fe fe-briefcase me-1"></i>Projects
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown  dropdown-menu-arrow border-0 dropdown-menu-start" data-popper-placement="none">
                                <div className="p-3 menu-header-content">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <p className="mb-0 fs-17 fw-semibold text-fixed-white">Projects</p>
                                            <p className="mb-0 fw-semibold text-fixed-white">Overview of Projects</p>
                                        </div>
                                        <span className="badge bg-warning rounded-pill">View all</span>
                                    </div>
                                </div>
                                <div><hr className="dropdown-divider" /></div>
                                <ul className="list-unstyled mb-0">
                                    <Dropdown.Item className="dropdown-item border-0 py-2" as="li">
                                        <Link to="#" className="fw-normal">Mobile application</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item border-0 py-2" as="li">
                                        <Link to="#" className="fw-normal">PSD Projects</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item py-2" as="li">
                                        <Link to="#" className="fw-normal">PHP Project</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item border-0 py-2" as="li">
                                        <Link to="#" className="fw-normal">Wordpress Projects</Link >
                                    </Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item border-0 py-2" as="li">
                                        <Link to="#" className="fw-normal">HTML & CSS3 Projects</Link >
                                    </Dropdown.Item>
                                </ul>
                            </Dropdown.Menu>
                            {/* <!-- End::main-header-dropdown --> */}
                        </Dropdown>

                    </div>
                    <div className="header-content-right">
                        <div className="header-element header-search d-sm-flex d-none">
                            <Link to="#" className="header-link" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleShow}>
                                <i className="fe fe-search header-link-icon"></i>
                            </Link>
                        </div>
                        <Dropdown className="header-element country-selector" autoClose="outside">
                            <Dropdown.Toggle as='a' variant='' className="header-link" >
                                <i className="fe fe-globe header-link-icon"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" as="ul" className="main-header-dropdown">
                                <Dropdown.Item as="li" className="d-flex align-items-center" >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={us} alt="img" />
                                    </span>
                                    English
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex align-items-center" >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={spain} alt="img" />
                                    </span>
                                    Spanish
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex align-items-center" >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={french} alt="img" />
                                    </span>
                                    French
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex align-items-center" >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={germany} alt="img" />
                                    </span>
                                    German
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex align-items-center" >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={italy} alt="img" />
                                    </span>
                                    Italian
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="d-flex align-items-center" >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={russia} alt="img" />
                                    </span>
                                    Russian
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="header-element header-theme-mode">
                            <Link to="#" className="header-link layout-setting" onClick={() => ToggleDark()}>
                                <span className="light-layout">
                                    <i className="fe fe-moon bx-flip-horizontal header-link-icon ionicon light-layout"></i>
                                </span>
                                <span className="dark-layout">
                                    <i className="bx bx-sun header-link-icon"></i>
                                </span>
                            </Link>
                        </div>
                        <Dropdown align="end" className="header-element cart-dropdown" autoClose="outside">
                            <Dropdown.Toggle as='a' className="header-link" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <i className="fe fe-shopping-cart header-link-icon ionicon"></i>
                                <Badge bg="primary" className="badge bg-danger rounded-pill header-icon-badge" id="cart-icon-badge">
                                    {cartItemCount}
                                </Badge>
                            </Dropdown.Toggle>

                            {/* Start::main-header-dropdown */}
                            <Dropdown.Menu className="main-header-dropdown dropdown-menu-arrow border-0 dropdown-menu-end" data-popper-placement="none">
                                <div className="p-3 menu-header-content">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold text-fixed-white">Cart Items</p>
                                        <span className="badge bg-success" id="cart-data">
                                            {cartItemCount} Item{cartItemCount !== 1 ? 's' : ''}
                                        </span>
                                    </div>
                                </div>
                                <div><hr className="dropdown-divider" /></div>
                                <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                    {cartItems.map((item) => (
                                        <Dropdown.Item as='li' key={item.id}>
                                            <div className="d-flex align-items-start cart-dropdown-item">
                                                <span className="avatar avatar-md bd-gray-200 p-1">
                                                    <img src={item.src} alt={item.name} />
                                                </span>
                                                <div className="flex-grow-1 ms-3">
                                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                                        <div className="fs-15 fw-semibold">
                                                            <Link to={`${import.meta.env.BASE_URL}ecommerce/cart`}>{item.name}</Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="#"
                                                                aria-label="Remove"
                                                                className="header-cart-remove float-end dropdown-item-close"
                                                                onClick={() => handleRemove(item.id)}
                                                            >
                                                                <i className="fe fe-trash-2"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content align-items-start">
                                                        <div className="fs-13">{item.price}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </ul>
                                <div className="p-3 empty-header-item border-top">
                                    <div className="d-grid">
                                        <Link to={`${import.meta.env.BASE_URL}ecommerce/checkout`} className="btn btn-primary">Checkout</Link>
                                    </div>
                                </div>
                                <div className={`p-5 empty-item ${cartItemCount === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xxl avatar-rounded bg-warning-transparent">
                                            <i className="bx bx-cart bx-tada fs-2"></i>
                                        </span>
                                        <h6 className="fw-bold mb-2 mt-3">Your Cart is Empty</h6>
                                        <Link to={`${import.meta.env.BASE_URL}ecommerce/products`} className="btn btn-primary btn-wave btn-sm m-1">Continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                            {/* End::main-header-dropdown */}
                        </Dropdown>
                        <Dropdown align="end" className="header-element notifications-dropdown" autoClose="outside">
                            <Dropdown.Toggle as='a' className="header-link" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" >
                                <i className="fe fe-bell header-link-icon ionicon"></i>
                                <Badge bg="secondary" className="badge bg-info rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">
                                    {notifications.length}
                                </Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown  dropdown-menu-arrow border-0 dropdown-menu-end" data-popper-placement="none">
                                <div className="p-3 menu-header-content">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold text-fixed-white">Notifications</p>
                                        <span className="badge bg-warning" id="notifiation-data">
                                            {`${notifications.length} Unread`}
                                        </span>
                                    </div>
                                </div>
                                <div className="dropdown-divider"></div>
                                <ul className="list-unstyled mb-0" id="header-notification-scroll" style={{ overflowY: 'scroll', height: '350px' }}>
                                    {initialNotifications.map((idx) => (
                                        <Dropdown.Item as="li" className="p-3" key={idx.id}>
                                            <div className="d-flex align-items-start" >
                                                <div className="pe-2">
                                                    <span className={`avatar avatar-md bg-${idx.color}-transparent avatar-rounded`}><i className={` ${idx.icon} text-${idx.color} fs-21`}></i></span>
                                                </div>
                                                <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <p className="mb-0 fs-14 fw-semibold"><Link to={`${import.meta.env.BASE_URL}apps/notification`}>{idx.text}</Link></p>
                                                        <span className="text-muted fw-normal fs-12 header-notification-text">{idx.time}</span>
                                                    </div>
                                                    <div>
                                                        <Link to="#" className="min-w-fit-content text-muted me-1"><i className="las la-angle-right fs-13"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </ul>
                                <div className={`p-3 empty-header-item1 border-top ${notifications.length === 0 ? 'd-none' : 'd-block'}`}>
                                    <div className="d-grid">
                                        <Link to={`${import.meta.env.BASE_URL}apps/notification`} className="btn btn-primary">View All</Link>
                                    </div>
                                </div>
                                <div className={`p-5 empty-item1 ${notifications.length === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="bx bx-bell-off bx-tada fs-2"></i>
                                        </span>
                                        <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                            {/* <!-- End::main-header-dropdown --> */}
                        </Dropdown>
                        <div className="header-element d-flex header-settings header-shortcuts-dropdown">
                            <Link to="#" className="header-link" type="button" data-bs-toggle="offcanvas" onClick={handleShowr1}
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className="fe fe-grid  header-link-icon"></i>
                            </Link>
                        </div>
                        <Offcanvas placement='end' show={showr1} onHide={handleCloser1} className="sidebar  offcanvas-end sidebar-right" tabIndex={-1} id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel1">
                            <Offcanvas.Header className="border-bottom">
                                <h5 id="appsLabel" className="mb-0 fs-18">Related Apps</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloser1}>
                                    <i className="bx bx-x   apps-btn-close"></i>
                                </button>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div className="p-3">
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <Link to={`${import.meta.env.BASE_URL}apps/full-calendar`}>
                                                <div className="text-center p-3 related-app border">
                                                    <span className="avatar fs-23 bg-success-transparent p-2 mb-2">
                                                        <i className="bx bx-calendar text-success"></i>
                                                    </span>
                                                    <span className="d-block fs-13 text-muted fw-semibold">Calendar</span>
                                                </div>
                                            </Link >
                                        </div>
                                        <div className="col-6">
                                            <Link to={`${import.meta.env.BASE_URL}apps/mail/mail`}>
                                                <div className="text-center p-3 related-app border">
                                                    <span className="avatar  fs-23 bg-info-transparent p-2 mb-2">
                                                        <i className="bx bx-envelope  text-info"></i>
                                                    </span>
                                                    <span className="d-block fs-13 text-muted fw-semibold">Mail</span>
                                                </div>
                                            </Link >
                                        </div>
                                        <div className="col-6">
                                            <Link to={`${import.meta.env.BASE_URL}pages/profile`}>
                                                <div className="text-center p-3 related-app border">
                                                    <span className="avatar bg-warning-transparent fs-23 bg p-2 mb-2">
                                                        <i className="bx bx-user  text-warning"></i>
                                                    </span>
                                                    <span className="d-block fs-13 text-muted fw-semibold">Profile</span>
                                                </div>
                                            </Link >
                                        </div>
                                        <div className="col-6">
                                            <Link to={`${import.meta.env.BASE_URL}apps/mail/chat`}>
                                                <div className="text-center p-3 related-app border">
                                                    <span className="avatar    bg-pink-transparent fs-23 bg p-2 mb-2">
                                                        <i className="bx bx-chat text-pink"></i>
                                                    </span>
                                                    <span className="d-block fs-13 text-muted fw-semibold">Chat</span>
                                                </div>
                                            </Link >
                                        </div>
                                        <div className="col-6">
                                            <Link to={`${import.meta.env.BASE_URL}apps/contacts`}>
                                                <div className="text-center p-3 related-app border">
                                                    <span className="avatar    bg-secondary-transparent fs-23 bg p-2 mb-2">
                                                        <i className="bx bx-phone text-secondary"></i>
                                                    </span>
                                                    <span className="d-block fs-13 text-muted fw-semibold">Contacts</span>
                                                </div>
                                            </Link >
                                        </div>
                                        <div className="col-6">
                                            <Link to={`${import.meta.env.BASE_URL}apps/mail/mailsetting`}>
                                                <div className="text-center p-3 related-app border">
                                                    <span className="avatar    bg-teal-transparent fs-23 bg p-2 mb-2">
                                                        <i className="bx bx-cog text-teal"></i>
                                                    </span>
                                                    <span className="d-block fs-13 text-muted fw-semibold">Settings</span>
                                                </div>
                                            </Link >
                                        </div>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <div className="header-element header-fullscreen">
                            <Link onClick={toggleFullScreen} to="#" className="header-link">
                                {fullScreen ? (
                                    <i className="fe fe-minimize header-link-icon full-screen-close "></i>
                                ) : (

                                    <i className="fe fe-maximize header-link-icon  full-screen-open"></i>
                                )}
                            </Link>
                        </div>
                        <Dropdown className="header-element mainuserProfile">
                            {/* <!-- Start::header-link|dropdown-toggle --> */}
                            <Dropdown.Toggle as='a' className="header-link " id="mainHeaderProfile"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <div className="d-sm-flex wd-100p lh-0">
                                        <div className="avatar avatar-md"><img alt="avatar" className="rounded-circle"
                                            src={face6} /></div>
                                        <div className="ms-2 my-auto d-none d-xl-flex">
                                            <h6 className=" font-weight-semibold mb-0 fs-13 user-name d-sm-block d-none">Petey
                                                Cruiser</h6>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            {/* <!-- End::header-link|dropdown-toggle --> */}
                            <Dropdown.Menu className="main-header-dropdown  pt-0 border-0 header-profile-dropdown dropdown-menu-end dropdown-menu-arrow"
                                aria-labelledby="mainHeaderProfile" align='end'>
                                <div className="p-3 menu-header-content text-fixed-white rounded-top text-center">
                                    <div className="">
                                        <div className="avatar avatar-xl rounded-circle">
                                            <img alt="" className="rounded-circle" src={face6} />
                                        </div>
                                        <p className="text-fixed-white fs-18 fw-semibold mb-0">Petey Cruiser</p>
                                        <span className="fs-13 text-fixed-white">Premium Member</span>
                                    </div>
                                </div>
                                <div>
                                    <hr className="dropdown-divider" />
                                </div>
                                <div>
                                    <Link className='dropdown-item' to={`${import.meta.env.BASE_URL}pages/profile`}><i className="fa fa-user me-1"></i> My Profile
                                    </Link>
                                    <Link className='dropdown-item' to={`${import.meta.env.BASE_URL}pages/editprofile`}><i className="fa fa-edit me-1"></i> Edit Profile
                                    </Link>
                                    <Link className='dropdown-item' to={`${import.meta.env.BASE_URL}apps/notification`}><i className="fa fa-clock me-1"></i> Activity Logs
                                    </Link>
                                    <Link className='dropdown-item' to={`${import.meta.env.BASE_URL}pages/setting`}><i className="fa fa-sliders-h me-1"></i> Account Settings
                                    </Link>
                                    <Link className='dropdown-item' to={`${import.meta.env.BASE_URL}custompages/sign-in`}><i className="fa fa-sign-out-alt me-1"></i> Sign Out
                                    </Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className='header-element d-flex header-settings'>
                            <Link className="header-link nav-link icon me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowr}
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className="fe fe-align-right header-link-icon"></i>
                            </Link>
                        </div>
                        <Offcanvas placement='end' show={showr} onHide={handleCloser} className="sidebar  offcanvas-end sidebar-right" tabIndex={-1} id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel1">
                            <Offcanvas.Body className=" position-relative p-0">
                                <ul className="Date-time">
                                    <li className="time">
                                        <h1 className="animated "> {formatTime(time)}</h1>
                                        <p className="animated "> {formatDate(date)}</p>
                                    </li>
                                </ul>
                                <div className="card-body p-4 latest-tasks">
                                    <p className="events-title"><span>Events For Week </span></p>
                                    <div className="event">
                                        <div className="Day">Monday 20 Jan</div> <Link to="#" >No Events Today</Link >
                                    </div>
                                    <div className="event">
                                        <div className="Day">Tuesday 21 Jan</div> <Link to="#" >No Events Today</Link >
                                    </div>
                                    <div className="event">
                                        <div className="Day">Wednessday 22 Jan</div>
                                        <div className="tasks">
                                            <div className=" task-line primary">
                                                <Link to="#" className="label"> XML Import &amp; Export </Link >
                                                <div className="time"> 12:00 PM </div>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="" defaultChecked />
                                            </div>
                                        </div>
                                        <div className="tasks">
                                            <div className="task-line danger">
                                                <Link to="#" className="label"> Connect API to pages </Link >
                                                <div className="time"> 08:00 AM </div>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <div className="Day">Thursday 23 Jan</div>
                                        <div className="tasks">
                                            <div className="task-line success">
                                                <Link className="label"> Create Wireframes </Link >
                                                <div className="time"> 06:20 PM </div>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <div className="Day">Friday 24 Jan</div>
                                        <div className="tasks">
                                            <div className="task-line warning">
                                                <Link to="#" className="label"> Test new features in tablets</Link >
                                                <div className="time"> 02: 00 PM </div>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="" />
                                            </div>
                                        </div>
                                        <div className="tasks">
                                            <div className="task-line teal">
                                                <Link to="#" className="label"> Design Ecommerce </Link >
                                                <div className="time"> 10: 00 PM </div>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="" />
                                            </div>
                                        </div>
                                        <div className="tasks mb-0">
                                            <div className="task-line purple">
                                                <Link className="label"> Fix Validation Issues </Link >
                                                <div className="time"> 12: 00 AM </div>
                                            </div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex pagination wd-100p">
                                        <Link to="#" >Previous</Link >
                                        <Link to="#" className="ms-auto">Next</Link >
                                    </div>
                                </div>
                                <div className="card-body border-top p-4">
                                    <div className="row">
                                        <div className="col-4 text-center">
                                            <Link to="#" className="text-primary" ><i
                                                className="dropdown-icon mdi  mdi-message-outline fs-20 m-0"></i></Link >
                                            <div>Inbox</div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <Link to="#" className="text-primary" ><i className="dropdown-icon mdi mdi-tune fs-20 m-0"></i></Link >
                                            <div>Settings</div>
                                        </div>
                                        <div className="col-4 text-center">
                                            <Link to="#" className="text-primary" ><i
                                                className="dropdown-icon mdi mdi-logout-variant fs-20 m-0"></i></Link >
                                            <div>Sign out</div>
                                        </div>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <div className="header-element">
                            <Link to="#" className="header-link switcher-icon ms-1 " data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas"
                                onClick={() => Switchericon()}
                            >
                                <i className="fe fe-settings fe-spin header-link-icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>

            </header>
            <Modal className="fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModal" show={show} onHide={handleClose}>
                <Modal.Body>
                    <span className="input-group">
                        <Form.Control type="search" className="px-2 " placeholder="Search..." aria-label="Username"
                            onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value); })} />
                        <Link to="#" className="input-group-text btn btn-primary" id="Search-Grid"><i className="fe fe-search header-link-icon fs-18"></i></Link>
                    </span>
                    {showa ?
                        <div ref={searchResultRef} className="card search-result position-relative z-index-9 search-fix  border mt-1">
                            <div className="card-header">
                                <div className="card-title me-2 text-break">Search result of {InputValue}</div>
                            </div>
                            <ListGroup className='my-2 mx-3'>
                                {show2 ?
                                    NavData.map((e) =>
                                        <ListGroup.Item key={e.id} className="">
                                            <Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue(""); }}>{e.title}</Link>
                                        </ListGroup.Item>
                                    )
                                    : <b className={`${searchcolor} `}>{searchval}</b>}
                            </ListGroup>

                        </div>
                        : ""}
                    <div className="mt-3">
                        <div className="">
                            <p className="fw-semibold text-muted mb-2 fs-13">Recent Searches</p>
                            <div className="ps-2">
                                <Link to="#" className="search-tags me-1"><i className="fe fe-search me-2"></i>People<span></span></Link>
                                <Link to="#" className="search-tags me-1"><i className="fe fe-search me-2"></i>Pages<span></span></Link>
                                <Link to="#" className="search-tags me-1"><i className="fe fe-search me-2"></i>Articles<span></span></Link>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="fw-semibold text-muted mb-2 fs-13">Apps and pages</p>
                            <ul className="ps-2">
                                <li className="p-1 d-flex align-items-center text-muted mb-2 search-app">
                                    <Link to={`${import.meta.env.BASE_URL}apps/full-calendar`}><span><i className='bx bx-calendar me-2 fs-14 bg-primary-transparent p-2 rounded-circle '></i>Calendar</span></Link>
                                </li>
                                <li className="p-1 d-flex align-items-center text-muted mb-2 search-app">
                                    <Link to={`${import.meta.env.BASE_URL}apps/mail/mail`}><span><i className='bx bx-envelope me-2 fs-14 bg-primary-transparent p-2 rounded-circle'></i>Mail</span></Link>
                                </li>
                                <li className="p-1 d-flex align-items-center text-muted mb-2 search-app">
                                    <Link to={`${import.meta.env.BASE_URL}elements/buttons`}><span><i className='bx bx-dice-1 me-2 fs-14 bg-primary-transparent p-2 rounded-circle '></i>Buttons</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            <p className="fw-semibold text-muted mb-2 fs-13">Links</p>
                            <ul className="ps-2 list-unstyled">
                                <li className="p-1 align-items-center  mb-1 search-app">
                                    <Link to="#" className="text-primary"><u>http://spruko/html/spruko.com</u></Link>
                                </li>
                                <li className="p-1 align-items-center mb-1 search-app">
                                    <Link to="#" className="text-primary"><u>http://spruko/demo/spruko.com</u></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-block">
                    <div className="text-center">
                        <Link to="#" className="text-primary text-decoration-underline fs-15">View all results</Link>
                    </div>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
