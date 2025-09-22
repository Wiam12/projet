import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './pages/App.jsx';
import './index.scss'
import Auth from './firebase/auth.jsx';
import Login from './firebase/login.jsx';
import Signup from './firebase/signup.jsx';
import Aboutus from './container/pages/aboutUs/aboutUs.jsx';
import Accordionscollapse from './container/advanced-ui/accordionscollapse/accordionscollapse.jsx';
import Carousels from './container/advanced-ui/carousel/carousel.jsx';
import Modalscloses from './container/advanced-ui/modalscloses/modalscloses.jsx';
import Navbars from './container/advanced-ui/navbar/navbar.jsx';
import Offcanva from './container/advanced-ui/offcanvas/offcanvas.jsx';
import Placeholders from './container/advanced-ui/placeholders/placeholders.jsx';
import Chat from './container/app/mail/chat/chat.jsx';
import Readmail from './container/app/mail/readmail/readmail.jsx';
import Leafletmaps from './container/app/maps/leaflet/leaflet.jsx';
import Vectormaps from './container/app/maps/vector/vector.jsx';
import Notifications from './container/app/notifications/notifications.jsx';
import Treeview from './container/app/treeview/treeview.jsx';
import Widgetnotifications from './container/app/widgetnotifications/widgetnotifications.jsx';
import Widgets from './container/app/widgets/widgets.jsx';
import Forgotpassword from './container/custompages/forgotpassword/forgotpassword.jsx';
import Lockscreen from './container/custompages/lockscreen/lockscreen.jsx';
import Resetpassword from './container/custompages/resetpassword/resetpassword.jsx';
import Avatars from './container/elements/avatars/avatars.jsx';
import Badges from './container/elements/badge/badge.jsx';
import Objectfit from './container/elements/objectfit/objectfit.jsx';
import Dropdowns from './container/elements/dropdowns/dropdowns.jsx';
import Imagesfigures from './container/elements/imagesfigures/imagesfigures.jsx';
import Listgroup from './container/elements/listgroup/listgroup.jsx';
import Navtabs from './container/elements/navstabs/navstabs.jsx';
import Paginations from './container/elements/pagination/pagination.jsx';
import Popovers from './container/elements/popovers/popovers.jsx';
import Progress from './container/elements/progress/progress.jsx';
import Spinners from './container/elements/spinners/spinners.jsx';
import Toasts from './container/elements/toasts/toasts.jsx';
import Tooltips from './container/elements/tooltips/tooltips.jsx';
import Typography from './container/elements/typography/typography.jsx';
import Icons from './container/icons/icons.jsx';
import Sweetalerts from './container/advanced-ui/sweetalerts/sweetalerts.jsx';
import Ratings from './container/advanced-ui/ratings/ratings.jsx';
import Inputs from './container/forms/formelements/inputs/inputs.jsx';
import Checksradios from './container/forms/formelements/checksradios/checksradios.jsx';
import Inputgroup from './container/forms/formelements/inputgroup/inputgroup.jsx';
import Formselect from './container/forms/formelements/formselect/formselect.jsx';
import Rangeslider from './container/forms/formelements/rangeslider/rangeslider.jsx';
import Fileuploads from './container/forms/formelements/fileuploads/fileuploads.jsx';
import Datetimepicker from './container/forms/formelements/datetimepickers/datetimepickers.jsx';
import Floatinglabel from './container/forms/floatinglabels/floatinglabels.jsx';
import Formlayouts from './container/forms/formslayout/formslayout.jsx';
import Validation from './container/forms/validation/validation.jsx';
import Select2 from './container/forms/select2/select2.jsx';
import Blog from './container/pages/blogpages/blog/blog.jsx';
import Blogdetails from './container/pages/blogpages/blogdetails/blogdetails.jsx';
import Blogedit from './container/pages/blogpages/blogedit/blogedit.jsx';
import Profile from './container/pages/profile/profile.jsx';
import Eiditprofile from './container/pages/eiditprofile/eiditprofile.jsx';
import Setting from './container/pages/setting/setting.jsx';
import Invoice from './container/pages/invoice/invoice.jsx';
import Pricing from './container/pages/pricing/pricing.jsx';
import Gallery from './container/pages/gallery/gallery.jsx';
import Todotask from './container/pages/todotask/todotask.jsx';
import Faqs from './container/pages/faqs/faqs.jsx';
import Emptypages from './container/pages/emptypages/emptypages.jsx';
import Tables from './container/pages/tables/tables/tables.jsx';
import Gridjstables from './container/pages/tables/gridjstables/gridjstables.jsx';
import Datatables from './container/pages/tables/datatables/datatables.jsx';
import Products from './container/ecommerce/products/products.jsx';
import Productdetails from './container/ecommerce/productdetails/productdetails.jsx';
import Cart from './container/ecommerce/cart/cart.jsx';
import Checkout from '../src/container/ecommerce/checkout/checkout.jsx';
import Wishlist from './container/ecommerce/wishlist/wishlist.jsx';
import Borders from './container/utilities/borders/borders.jsx';
import Breakpoints from './container/utilities/breakpoints/breakpoints.jsx';
import Colors from './container/utilities/colors/colors.jsx';
import Columns from './container/utilities/columns/columns.jsx';
import Flex from './container/utilities/flex/flex.jsx';
import Gutters from './container/utilities/gutters/gutters.jsx';
import Helpers from './container/utilities/helpers/helpers.jsx';
import Position from './container/utilities/positions/positions.jsx';
import Additionalcontent from './container/utilities/additionalcontent/additionalcontent.jsx';
import Underconstruction from './container/custompages/underconstruction/underconstruction.jsx';
import Error500 from './container/custompages/error500/error500.jsx';
import Error404 from './container/custompages/error404/error404.jsx';
import Linecharts from './container/charts/apexcharts/linecharts/linecharts.jsx';
import Areacharts from './container/charts/apexcharts/areacharts/areacharts.jsx';
import Columncharts from './container/charts/apexcharts/columncharts/columncharts.jsx';
import Barcharts from './container/charts/apexcharts/barcharts/barcharts.jsx';
import Mixedcharts from './container/charts/apexcharts/mixedcharts/mixedcharts.jsx';
import Rangeareacharts from './container/charts/apexcharts/rangeareacharts/rangeareacharts.jsx';
import Timelinecharts from './container/charts/apexcharts/timelinecharts/timelinecharts.jsx';
import Candlestickcharts from './container/charts/apexcharts/candlestickcharts/candlestickcharts.jsx';
import Boxplotcharts from './container/charts/apexcharts/boxplotcharts/boxplotcharts.jsx';
import Bubblecharts from './container/charts/apexcharts/bubblecharts/bubblecharts.jsx';
import Scattercharts from './container/charts/apexcharts/scattercharts/scattercharts.jsx';
import Heatmapcharts from './container/charts/apexcharts/heatmapcharts/heatmapcharts.jsx';
import Treemapcharts from './container/charts/apexcharts/treemapcharts/treemapcharts.jsx';
import Piecharts from './container/charts/apexcharts/piecharts/piecharts.jsx';
import Radialbarcharts from './container/charts/apexcharts/radialbarcharts/radialbarcharts.jsx';
import Radarcharts from './container/charts/apexcharts/radarcharts/radarcharts.jsx';
import Polarareacharts from './container/charts/apexcharts/polarareacharts/polarareacharts.jsx';
import Chartjscharts from './container/charts/chartjscharts/chartjscharts.jsx';
import Echartscharts from './container/charts/echartscharts/echartscharts.jsx';
import Signinbasic from './container/custompages/signin/signin.jsx';
import Signupbasic from './container/custompages/signup/signup.jsx';
import Dashboard from './container/dashboard/dashboard.jsx';
import Filemangerlist from './container/app/filemanager/filemangerlist/filemangerlist.jsx';
import Filemanger from './container/app/filemanager/filemanger/filemanger.jsx';
import Draggablecards from './container/app/draggable-cards/draggable-cards.jsx';
import Contacts from './container/app/contacts/contacts.jsx';

import Userlist from './container/advanced-ui/userlist/userlist.jsx';
import Timeline from './container/advanced-ui/timeline/timeline.jsx';
import Mail from './container/app/mail/mail/mail.jsx';
import Swiperjs from './container/advanced-ui/swiperjs/swiperjs.jsx';
import Mailcompose from './container/app/mail/mailcompose/mailcompose.jsx';
import Mailsettings from './container/app/mail/mailsettings/mailsettings.jsx';
import Filemangerdetails from './container/app/filemanager/filemangerdetails/filemangerdetails.jsx';
import Fullcalendar from './container/app/fullCalendar/full-calendar.jsx';
import Authenticationlayout from './pages/authenticationlayout.jsx';
import Buttons from './container/elements/buttons/buttons.jsx';
import Breadcrumbs from './container/elements/breadcumbs/breadcumbs.jsx';
import Alerts from './container/elements/alerts/alerts.jsx';
import Buttongroup from './container/elements/buttongroup/buttongroup.jsx';
import Editor from './container/forms/formeidtors/editor/editor.jsx';
import Inputmaskses from './container/forms/formelements/inputmasks/inputmasks.jsx';
import AccountProjectName from "./container/app/Subdatabase/Account-ProjectName.jsx";
import CategoryItems from "./container/app/Subdatabase/Category-Item.jsx";
import AcceptanceTerm from "./container/app/Subdatabase/Acceptance-Term.jsx";

 


window.global = window; // Polyfill for global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
            <Route index element={<Login />} />
            <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
            <Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<Signup />} />
          </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />} >
            <Route path={`${import.meta.env.BASE_URL}dashboard`} element={<Dashboard />} />
            <Route path={`${import.meta.env.BASE_URL}Subdatabase/Account-ProjectName`} element={<AccountProjectName />} />
            <Route path={`${import.meta.env.BASE_URL}Subdatabase/Category-Item`} element={<CategoryItems/>} />
           <Route path={`${import.meta.env.BASE_URL}Subdatabase/AcceptanceTerm`} element={<AcceptanceTerm/>} />
            <Route path={`${import.meta.env.BASE_URL}apps/draggable-cards`} element={<Draggablecards />} />
            <Route path={`${import.meta.env.BASE_URL}apps/full-calendar`} element={<Fullcalendar />} />
            <Route path={`${import.meta.env.BASE_URL}apps/notification`} element={<Notifications />} />
            <Route path={`${import.meta.env.BASE_URL}apps/widget-notification`} element={<Widgetnotifications />} />
            <Route path={`${import.meta.env.BASE_URL}apps/treeview`} element={<Treeview />} />
            <Route path={`${import.meta.env.BASE_URL}apps/widgets`} element={<Widgets />} />
            <Route path={`${import.meta.env.BASE_URL}apps/contacts`} element={<Contacts />} />
            <Route path={`${import.meta.env.BASE_URL}apps/mail/mail`} element={<Mail />} />
            <Route path={`${import.meta.env.BASE_URL}apps/mail/mail-compose`} element={<Mailcompose />} />
            <Route path={`${import.meta.env.BASE_URL}apps/mail/read-mail`} element={<Readmail />} />
            <Route path={`${import.meta.env.BASE_URL}apps/mail/mailsetting`} element={<Mailsettings />} />
            <Route path={`${import.meta.env.BASE_URL}apps/mail/chat`} element={<Chat />} />
            <Route path={`${import.meta.env.BASE_URL}apps/maps/leafletmaps`} element={<Leafletmaps />} />
            <Route path={`${import.meta.env.BASE_URL}apps/maps/vectormap`} element={<Vectormaps />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanager`} element={<Filemanger />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerlist`} element={<Filemangerlist />} />
            <Route path={`${import.meta.env.BASE_URL}apps/filemanager/filemanagerdetails`} element={<Filemangerdetails />} />
            <Route path={`${import.meta.env.BASE_URL}icons`} element={<Icons />} />
            <Route path={`${import.meta.env.BASE_URL}elements/alerts`} element={<Alerts />} />
            <Route path={`${import.meta.env.BASE_URL}elements/avatars`} element={<Avatars />} />
            <Route path={`${import.meta.env.BASE_URL}elements/breadcrumbs`} element={<Breadcrumbs />} />
            <Route path={`${import.meta.env.BASE_URL}elements/buttons`} element={<Buttons />} />
            <Route path={`${import.meta.env.BASE_URL}elements/buttongroup`} element={<Buttongroup />} />
            <Route path={`${import.meta.env.BASE_URL}elements/badge`} element={<Badges />} />
            <Route path={`${import.meta.env.BASE_URL}elements/dropdowns`} element={<Dropdowns />} />
            <Route path={`${import.meta.env.BASE_URL}elements/imagesfigures`} element={<Imagesfigures />} />
            <Route path={`${import.meta.env.BASE_URL}elements/listgroup`} element={<Listgroup />} />
            <Route path={`${import.meta.env.BASE_URL}elements/navtabs`} element={<Navtabs />} />
            <Route path={`${import.meta.env.BASE_URL}elements/pagination`} element={<Paginations />} />
            <Route path={`${import.meta.env.BASE_URL}elements/popovers`} element={<Popovers />} />
            <Route path={`${import.meta.env.BASE_URL}elements/progress`} element={<Progress />} />
            <Route path={`${import.meta.env.BASE_URL}elements/spinners`} element={<Spinners />} />
            <Route path={`${import.meta.env.BASE_URL}elements/objectfit`} element={<Objectfit />} />
            <Route path={`${import.meta.env.BASE_URL}elements/typography`} element={<Typography />} />
            <Route path={`${import.meta.env.BASE_URL}elements/tooltips`} element={<Tooltips />} />
            <Route path={`${import.meta.env.BASE_URL}elements/toasts`} element={<Toasts />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/accordionscollapse`} element={<Accordionscollapse />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/carousel`} element={<Carousels />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/modalcloses`} element={<Modalscloses />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/timeline`} element={<Timeline />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/sweetalerts`} element={<Sweetalerts />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/rating`} element={<Ratings />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/userlist`} element={<Userlist />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/navbar`} element={<Navbars />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/offcanvas`} element={<Offcanva />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/placeholders`} element={<Placeholders />} />
            <Route path={`${import.meta.env.BASE_URL}advancedui/swiperjs`} element={<Swiperjs />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputs`} element={<Inputs />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/checksradio`} element={<Checksradios />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputgroup`} element={<Inputgroup />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/formselect`} element={<Formselect />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/rangeslider`} element={<Rangeslider />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputmasks`} element={<Inputmaskses />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/fileuploads`} element={<Fileuploads />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formelements/datetimepicker`} element={<Datetimepicker />} />
            <Route path={`${import.meta.env.BASE_URL}forms/formlayout`} element={<Formlayouts />} />
            <Route path={`${import.meta.env.BASE_URL}forms/floatinglabels`} element={<Floatinglabel />} />
            <Route path={`${import.meta.env.BASE_URL}forms/form_eidtors/editor`} element={<Editor />} />
            <Route path={`${import.meta.env.BASE_URL}forms/validation`} element={<Validation />} />
            <Route path={`${import.meta.env.BASE_URL}forms/select2`} element={<Select2 />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blogpages/blog`} element={<Blog />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blogpages/blogdetails`} element={<Blogdetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/blogpages/blogedit`} element={<Blogedit />} />
            <Route path={`${import.meta.env.BASE_URL}pages/profile`} element={<Profile />} />
            <Route path={`${import.meta.env.BASE_URL}pages/editprofile`} element={<Eiditprofile />} />
            <Route path={`${import.meta.env.BASE_URL}pages/aboutus`} element={<Aboutus />} />
            <Route path={`${import.meta.env.BASE_URL}pages/setting`} element={<Setting />} />
            <Route path={`${import.meta.env.BASE_URL}pages/invoice`} element={<Invoice />} />
            <Route path={`${import.meta.env.BASE_URL}pages/pricing`} element={<Pricing />} />
            <Route path={`${import.meta.env.BASE_URL}pages/gallery`} element={<Gallery />} />
            <Route path={`${import.meta.env.BASE_URL}pages/todotask`} element={<Todotask />} />
            <Route path={`${import.meta.env.BASE_URL}pages/faq's`} element={<Faqs />} />
            <Route path={`${import.meta.env.BASE_URL}pages/emptypages`} element={<Emptypages />} />
            <Route path={`${import.meta.env.BASE_URL}pages/tables/tables`} element={<Tables />} />
            <Route path={`${import.meta.env.BASE_URL}pages/tables/gridjstables`} element={<Gridjstables />} />
            <Route path={`${import.meta.env.BASE_URL}pages/tables/datatables`} element={<Datatables />} />
            <Route path={`${import.meta.env.BASE_URL}ecommerce/products`} element={<Products />} />
            <Route path={`${import.meta.env.BASE_URL}ecommerce/productsdetails`} element={<Productdetails />} />
            <Route path={`${import.meta.env.BASE_URL}ecommerce/cart`} element={<Cart />} />
            <Route path={`${import.meta.env.BASE_URL}ecommerce/checkout`} element={<Checkout />} />
            <Route path={`${import.meta.env.BASE_URL}ecommerce/wishlist`} element={<Wishlist />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/borders`} element={<Borders />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/breakpoints`} element={<Breakpoints />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/colors`} element={<Colors />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/columns`} element={<Columns />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/flex`} element={<Flex />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/gutters`} element={<Gutters />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/helpers`} element={<Helpers />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/positions`} element={<Position />} />
            <Route path={`${import.meta.env.BASE_URL}utilities/additionalcontent`} element={<Additionalcontent />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/linecharts`} element={<Linecharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/areacharts`} element={<Areacharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/columncharts`} element={<Columncharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/barcharts`} element={<Barcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/mixedcharts`} element={<Mixedcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/rangeareacharts`} element={<Rangeareacharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/timelinecharts`} element={<Timelinecharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/candlestickcharts`} element={<Candlestickcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/boxplotcharts`} element={<Boxplotcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/bubblecharts`} element={<Bubblecharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/scattercharts`} element={<Scattercharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/heatmapcharts`} element={<Heatmapcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/treemapcharts`} element={<Treemapcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/piecharts`} element={<Piecharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/radialbarcharts`} element={<Radialbarcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/radarcharts`} element={<Radarcharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/apexcharts/polarareacharts`} element={<Polarareacharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/chartjscharts`} element={<Chartjscharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/chartjscharts`} element={<Chartjscharts />} />
            <Route path={`${import.meta.env.BASE_URL}charts/echartcharts`} element={<Echartscharts />} />
             
          </Route>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Authenticationlayout />}>
            <Route path={`${import.meta.env.BASE_URL}custompages/sign-in`} element={<Signinbasic />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/sign-up`} element={<Signupbasic />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/forgotpassword`} element={<Forgotpassword />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/resetpassword`} element={<Resetpassword />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/lockscreen`} element={<Lockscreen />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/underconstruction`} element={<Underconstruction />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/error-404`} element={<Error404 />} />
            <Route path={`${import.meta.env.BASE_URL}custompages/error-500`} element={<Error500 />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.Fragment>
);


