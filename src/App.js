import { Route, Routes } from "react-router-dom";
import {
  DashboardPage as AdminDashboardPage,
  BusinessPage as AdminBusinessPage,
  ProductPage as AdminProductPage,
  NewsPage as AdminNewsPage,
  QuestionPage as AdminQuestionPage,
} from "./board/pages";

import {
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

function App() {
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
        <LandingBusinessHightlightsPage />
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
        <LandingMediaPage />
      } />
      <Route path={RouteName.mediaPreview} element={
        <LandingMediaPreviewPage />
      } />
      <Route path={RouteName.mediaMarketing} element={
        <LandingMediaMarketingPage />
      } />
      <Route path={RouteName.contact} element={
        <LandingContactPage />
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
      <Route path={RouteName.adminDashboard} element={
        <AdminDashboardPage />
      } />
      <Route path={RouteName.adminBusiness} element={
        <AdminBusinessPage />
      } />
      <Route path={RouteName.adminProduct} element={
        <AdminProductPage />
      } />
      <Route path={RouteName.adminNews} element={
        <AdminNewsPage />
      } />
      <Route path={RouteName.adminQuestion} element={
        <AdminQuestionPage />
      } />
    </Routes>
  );
}

export default App;
