import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  BusinessContextProvider as AdminBusinessContextProvider,
  NewsContextProvider as AdminNewsContextProvider,
  ProductContextProvider as AdminProductContextProvider,
  QuestionContextProvider as AdminQuestionContextProvider,
  DashboardContextProvider as AdminDashboardContextProvider
} from "./board/contexts";

import {
  DashboardPage as AdminDashboardPage,
  BusinessPage as AdminBusinessPage,
  ProductPage as AdminProductPage,
  NewsPage as AdminNewsPage,
  QuestionPage as AdminQuestionPage,
  SettingsPage as AdminSettingsPage,
} from "./board/pages";
import AuthProtected from "./helper/protection/AuthProtection";

import {
  ContactContextProvider as LandingContactContextProvider,
  BusinessContextProvider as LandingBusinessContextProvider,
  MediaContextProvider as LandingMediaContextProvider,
  LoginContextProvider as LandingLoginContextProvider,
} from "./landing/contexts";
import { createViewApi } from "./landing/helpers";

import {
  LoginPage as LadingLoginPage,
  MainPage as LandingMainPage,
  AboutPage as LandingAboutPage,
  OurImpactPage as LandingOurImpactPage,
  CapitalInvestmentPage as LandingCapitalInvestmentPage,
  EPCPage as LandingEPCPage,
  RenewableEnergyPage as LandingRenewableEnergyPage,
  IndustrialPage as LandingIndustrialPage,
  IntegratedTelecomunicationPage as LandingIntegratedTelecomunicationPage,
  RealEstatePropertyPage as LandingRealEstatePropertyPage,
  DevelopmentPage as LandingDevelopmentPage,
  ResearchDevelopmentPage as LandingResearchDevelopmentPage,
  BusinessHightlightsPage as LandingBusinessHightlightsPage,
  BusinessPreviewPage as LandingBusinessPreviewPage,
  SustainabilityPage as LandingSustainabilityPage,
  CommitmentPage as LandingCommitmentPage,
  StrategicPage as LandingStrategicPage,
  PartnershipsPage as LandingPartnershipsPage,
  MediaPage as LandingMediaPage,
  MediaPreviewPage as LandingMediaPreviewPage,
  MediaMarketingPage as LandingMediaMarketingPage,
  ContactPage as LandingContactPage,
  CareerPage as LandingCareerPage,
  CareerExplorePage as LandingCareerExplorePage,
  CareerListPage as LandingCareerListPage,
} from "./landing/pages";
import { RouteName } from "./route";

function useAnalytics() {
  let location = useLocation();
  useEffect(() => {
    var title = location.pathname.split('/')?.[1];

    if (location.pathname.split('/')?.[1] === '') title = '/';

    createViewApi({
      body: {
        path: location.pathname,
        title: title,
        views: 1,
      }
    });
  }, [location]);
}

function App() {
  useAnalytics();
  return (
    <Routes>
      <Route path={RouteName.main} element={
        <LandingMainPage />
      } />
      <Route path={RouteName.about} element={
        <LandingAboutPage />
      } />
      <Route path={RouteName.ourImpact} element={
        <LandingOurImpactPage />
      } />
      <Route path={RouteName.capitalInvestment} element={
        <LandingCapitalInvestmentPage />
      } />
      <Route path={RouteName.epc} element={
        <LandingEPCPage />
      } />
      <Route path={RouteName.renewableEnergy} element={
        <LandingRenewableEnergyPage />
      } />
      <Route path={RouteName.industrial} element={
        <LandingIndustrialPage />
      } />
      <Route path={RouteName.integratedTelecomunication} element={
        <LandingIntegratedTelecomunicationPage />
      } />
      <Route path={RouteName.realEstateProperty} element={
        <LandingRealEstatePropertyPage />
      } />
      <Route path={RouteName.developer} element={
        <LandingDevelopmentPage />
      } />
      <Route path={RouteName.researchDevelopment} element={
        <LandingResearchDevelopmentPage />
      } />
      <Route path={RouteName.businessHightlights} element={
        <LandingBusinessContextProvider>
          <LandingBusinessHightlightsPage />
        </LandingBusinessContextProvider>
      } />
      <Route path={RouteName.businessPreview} element={
        <LandingBusinessPreviewPage />
      } />
      <Route path={RouteName.sustainability} element={
        <LandingSustainabilityPage />
      } />
      <Route path={RouteName.sustainabilityCommitment} element={
        <LandingCommitmentPage />
      } />
      <Route path={RouteName.sustainabilityStrategic} element={
        <LandingStrategicPage />
      } />
      <Route path={RouteName.sustainabilityPartnerships} element={
        <LandingPartnershipsPage />
      } />
      <Route path={RouteName.media} element={
        <LandingMediaContextProvider>
          <LandingMediaPage />
        </LandingMediaContextProvider>
      } />
      <Route path={RouteName.mediaPreview} element={
        <LandingMediaPreviewPage />
      } />
      <Route path={RouteName.mediaMarketing} element={
        <LandingMediaMarketingPage />
      } />
      <Route path={RouteName.contact} element={
        <LandingContactContextProvider>
          <LandingContactPage />
        </LandingContactContextProvider>
      } />
      <Route path={RouteName.career} element={
        <LandingCareerPage />
      } />
      <Route path={RouteName.careerExplore} element={
        <LandingCareerExplorePage />
      } />
      <Route path={RouteName.careerList} element={
        <LandingCareerListPage />
      } />
      {/* Admin */}
      <Route path={RouteName.login} element={
        <LandingLoginContextProvider>
          <LadingLoginPage />
        </LandingLoginContextProvider>
      } />
      <Route path={RouteName.adminDashboard} element={
        <AuthProtected>
          <AdminDashboardContextProvider>
            <AdminDashboardPage />
          </AdminDashboardContextProvider>
        </AuthProtected>
      } />
      <Route path={RouteName.adminBusiness} element={
        <AuthProtected>
          <AdminBusinessContextProvider>
            <AdminBusinessPage />
          </AdminBusinessContextProvider>
        </AuthProtected>
      } />
      <Route path={RouteName.adminProduct} element={
        <AuthProtected>
          <AdminProductContextProvider>
            <AdminProductPage />
          </AdminProductContextProvider>
        </AuthProtected>
      } />
      <Route path={RouteName.adminNews} element={
        <AuthProtected>
          <AdminNewsContextProvider>
            <AdminNewsPage />
          </AdminNewsContextProvider>
        </AuthProtected>
      } />
      <Route path={RouteName.adminQuestion} element={
        <AuthProtected>
          <AdminQuestionContextProvider>
            <AdminQuestionPage />
          </AdminQuestionContextProvider>
        </AuthProtected>
      } />
      <Route path={RouteName.adminSettings} element={
        <AuthProtected>
          <AdminSettingsPage />
        </AuthProtected>
      } />
    </Routes>
  );
}

export default App;
