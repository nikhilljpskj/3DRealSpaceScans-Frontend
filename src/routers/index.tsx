import { useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import Page404 from "containers/Page404/Page404";
import ListingStayPage from "containers/ListingStayPage/ListingStayPage";
import ListingStayMapPage from "containers/ListingStayPage/ListingStayMapPage";
import ListingExperiencesPage from "containers/ListingExperiencesPage/ListingExperiencesPage";
import ListingExperiencesMapPage from "containers/ListingExperiencesPage/ListingExperiencesMapPage";
import ListingStayDetailPage from "containers/ListingDetailPage/ListingStayDetailPage";
import ListingExperiencesDetailPage from "containers/ListingDetailPage/ListingExperiencesDetailPage";
import ListingCarPage from "containers/ListingCarPage/ListingCarPage";
import ListingCarMapPage from "containers/ListingCarPage/ListingCarMapPage";
import ListingCarDetailPage from "containers/ListingDetailPage/ListingCarDetailPage";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";
import PayPage from "containers/PayPage/PayPage";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import AccountPage from "containers/AccountPage/AccountPage";
import AccountPass from "containers/AccountPage/AccountPass";
import AccountSavelists from "containers/AccountPage/AccountSavelists";
import AccountBilling from "containers/AccountPage/AccountBilling";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import PageAddListing1 from "containers/PageAddListing1/PageAddListing1";
import PageAddListing2 from "containers/PageAddListing1/PageAddListing2";
import PageAddListing3 from "containers/PageAddListing1/PageAddListing3";
import PageAddListing4 from "containers/PageAddListing1/PageAddListing4";
import PageAddListing5 from "containers/PageAddListing1/PageAddListing5";
import PageAddListing6 from "containers/PageAddListing1/PageAddListing6";
import PageAddListing7 from "containers/PageAddListing1/PageAddListing7";
import PageAddListing8 from "containers/PageAddListing1/PageAddListing8";
import PageAddListing9 from "containers/PageAddListing1/PageAddListing9";
import PageAddListing10 from "containers/PageAddListing1/PageAddListing10";
import PageHome2 from "containers/PageHome/PageHome2";
import ListingRealEstateMapPage from "containers/ListingRealEstatePage/ListingRealEstateMapPage";
import ListingRealEstatePage from "containers/ListingRealEstatePage/ListingRealEstatePage";
import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";
import useWindowSize from "hooks/useWindowResize";
import AdminDashboard from "containers/AdminDashboard/AdminDashboard";
import BookingPage from "containers/BookingPage/BookingForm";
import ViewBooking from "containers/ViewBooking/ViewBooking";
import BookingDetails from "containers/BookingDetails/BookingDetails";
import Header from "components/Header/Header";
import UsersList from "containers/UserList/UsersList";
import Service3DVirtualTour from 'containers/BlogPage/Service3DVirtualTour';
import ServiceDigitalTwin from 'containers/BlogPage/ServiceDigitalTwin';
import ServiceVirtualStaging  from 'containers/BlogPage/ServiceVirtualStaging'
import ScanToBim from "containers/BlogPage/ServiceScanToBim";
import ScanToPlan from "containers/BlogPage/ServiceScanToPlan";
import IndustriesWeServe from "containers/BlogPage/Industries";
import FacilityManagementPage from "containers/BlogPage/FacilityManagementPage";
import ServiceLargeObject3DScanning from "containers/BlogPage/ServiceLargeObject3DScanning";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome2 },
  { path: "/#", exact: true, component: PageHome2 },

  //
  { path: "/listing-stay", component: ListingStayPage },
  { path: "/listing-stay-map", component: ListingStayMapPage },
  { path: "/listing-stay-detail", component: ListingStayDetailPage },
  //
  {
    path: "/listing-experiences",
    component: ListingExperiencesPage,
  },
  {
    path: "/listing-experiences-map",
    component: ListingExperiencesMapPage,
  },
  {
    path: "/listing-experiences-detail",
    component: ListingExperiencesDetailPage,
  },
  //
  { path: "/listing-car", component: ListingCarPage },
  { path: "/listing-car-map", component: ListingCarMapPage },
  { path: "/listing-car-detail", component: ListingCarDetailPage },
  //
  { path: "/listing-real-estate-map", component: ListingRealEstateMapPage },
  { path: "/listing-real-estate", component: ListingRealEstatePage },
  //
  { path: "/listing-flights", component: ListingFlightsPage },
  //
  { path: "/checkout", component: CheckOutPage },
  { path: "/pay-done", component: PayPage },
  //
  { path: "/author", component: AuthorPage },
  
  { path: "/account-password", component: AccountPass },
  { path: "/account-savelists", component: AccountSavelists },
  { path: "/account-billing", component: AccountBilling },
  //
  // { path: "/blog", component: BlogPage },
  // { path: "/blog-single", component: BlogSingle },
  { path: "/3d-virtual-tours", component: Service3DVirtualTour },
  { path: "/digital-twin", component: ServiceDigitalTwin },
  { path: "/virtual-staging", component: ServiceVirtualStaging },
  { path: "/scan-to-bim", component: ScanToBim },
  { path: "/scan-to-plan", component: ScanToPlan },
  { path: "/facility-management-scanning", component: FacilityManagementPage },
  { path: "/large-object-scanning", component: ServiceLargeObject3DScanning },


  { path: "/industries", component: IndustriesWeServe },
  
  
  //
  { path: "/add-listing-1", component: PageAddListing1 },
  { path: "/add-listing-2", component: PageAddListing2 },
  { path: "/add-listing-3", component: PageAddListing3 },
  { path: "/add-listing-4", component: PageAddListing4 },
  { path: "/add-listing-5", component: PageAddListing5 },
  { path: "/add-listing-6", component: PageAddListing6 },
  { path: "/add-listing-7", component: PageAddListing7 },
  { path: "/add-listing-8", component: PageAddListing8 },
  { path: "/add-listing-9", component: PageAddListing9 },
  { path: "/add-listing-10", component: PageAddListing10 },
  //
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
  //
  { path: "/booking", component: BookingPage }
];



const MyRoutes = () => {
  const WIN_WIDTH = useWindowSize().width || window.innerWidth;

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Header />
                  <Component />
                  {/* {WIN_WIDTH < 768 && <FooterNav />} */}
                  <Footer />
                </>
              }
            />
          );
        })}

        {/* Admin Route with Custom Layout, without Header and Footer */}
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/booking-details/:id" element={<BookingDetails />} />
        <Route path="/view-booking" element={<ViewBooking />} />
        <Route path="/signup" element={<PageSignUp />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/users" element={<UsersList />} />

        {/* Fallback Route */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
