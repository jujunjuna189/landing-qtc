import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  BusinessContextProvider as AdminBusinessContextProvider,
  NewsContextProvider as AdminNewsContextProvider,
  ProductContextProvider as AdminProductContextProvider,
  QuestionContextProvider as AdminQuestionContextProvider,
  DashboardContextProvider as AdminDashboardContextProvider,
  AssetsContextProvider as AdminAssetsContextProvider,
  CareerContextProvider as AdminCareerContextProvider,
  SettingsContextProvider as AdminSettingsContextProvider
} from "./board/contexts";

import {
  DashboardPage as AdminDashboardPage,
  BusinessPage as AdminBusinessPage,
  ProductPage as AdminProductPage,
  NewsPage as AdminNewsPage,
  QuestionPage as AdminQuestionPage,
  AssetsPage as AdminAssetsPage,
  CareerPage as AdminCareerPage,
  SettingsPage as AdminSettingsPage,
} from "./board/pages";
import AuthProtected from "./helper/protection/AuthProtection";

import {
  ContactContextProvider as LandingContactContextProvider,
  BusinessContextProvider as LandingBusinessContextProvider,
  BusinessPreviewContextProvider as LandingBusinessPreviewContextProvider,
  MediaContextProvider as LandingMediaContextProvider,
  MediaPreviewContextProvider as LandingMediaPreviewContextProvider,
  LoginContextProvider as LandingLoginContextProvider,
  MainContextProvider as LandingMainContextProvider,
  AboutContextProvider as LandingAboutContextProvider,
  OurImpactContextProvider as LandingOurImpactContextProvider,
  SustainabilityContextProvider as LandingSustainabilityContextProvider,
  MediaMarketingContextProvider as LandingMediaMarketingContextProvider,
  CareerExploreContextProvider as LandingCareerExploreContextProvider,
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
        <LandingMainContextProvider>
          <LandingMainPage />
        </LandingMainContextProvider>
      } />
      <Route path={RouteName.about} element={
        <LandingAboutContextProvider>
          <LandingAboutPage />
        </LandingAboutContextProvider>
      } />
      <Route path={RouteName.ourImpact} element={
        <LandingOurImpactContextProvider>
          <LandingOurImpactPage />
        </LandingOurImpactContextProvider>
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
      <Route path={`${RouteName.businessPreview}/:id`} element={
        <LandingBusinessPreviewContextProvider>
          <LandingBusinessPreviewPage />
        </LandingBusinessPreviewContextProvider>
      } />
      <Route path={RouteName.sustainability} element={
        <LandingSustainabilityContextProvider>
          <LandingSustainabilityPage />
        </LandingSustainabilityContextProvider>
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
      <Route path={`${RouteName.mediaPreview}/:id`} element={
        <LandingMediaPreviewContextProvider>
          <LandingMediaPreviewPage />
        </LandingMediaPreviewContextProvider>
      } />
      <Route path={RouteName.mediaMarketing} element={
        <LandingMediaMarketingContextProvider>
          <LandingMediaMarketingPage />
        </LandingMediaMarketingContextProvider>
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
        <LandingCareerExploreContextProvider>
          <LandingCareerExplorePage />
        </LandingCareerExploreContextProvider>
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
      <Route path={RouteName.adminAssets} element={
        <AuthProtected>
          <AdminAssetsContextProvider>
            <AdminAssetsPage />
          </AdminAssetsContextProvider>
        </AuthProtected>
      } />
      <Route path={RouteName.adminCareer} element={
        <AuthProtected>
          <AdminCareerContextProvider>
            <AdminCareerPage />
          </AdminCareerContextProvider>
        </AuthProtected>
      } />
      <Route path={RouteName.adminSettings} element={
        <AuthProtected>
          <AdminSettingsContextProvider>
            <AdminSettingsPage />
          </AdminSettingsContextProvider>
        </AuthProtected>
      } />
    </Routes>
  );
}

export default App;
