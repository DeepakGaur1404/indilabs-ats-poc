import React from "react";
import LoginForm from "./pages/Login/LoginForm";
import HomePage from "./pages/Home/HomePage";
import DataPage from "./pages/Data/DataPage";
import Signup from "./pages/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import CollectionDashboar from "./pages/CollectionDashboard/index";
import Monitoring from "./pages/Monitoring";
import Diagnostics from "./pages/Diagnostics";
import Strategy from "./pages/Strategy/MainStrategy";
import Execution from "./pages/Execution";
import Portfolio from "./pages/Monitoring/Portfolio";
import Location from "./pages/Monitoring/Location";
import Distribution from "./pages/Distribution";
import SubTabs from "./components/SubTabs/SubTabs";
import MaturationCurve from "./components/Monitoring/MaturationCurve";
import Daily from "./components/Monitoring/Daily";
import Writeoffs from "./pages/Monitoring/WriteOffs";
import ProductionActivity from "./pages/Monitoring/WriteOffs/ProductionActivity";
import DailyWorkableLine from "./components/Monitoring/DailyWorkableLine";
// import WorkableVolume from "./components/Monitoring/WorkableVolume";
import PaidNotPaid from "./components/Monitoring/PaidNotPaid";
import DailyCycleLiquidation from "./components/Monitoring/DailyCycleLiquidation";
import Sidebar from "./components/common/Sidebar";
import Otp from "./pages/VeryfyOtp";
import Agency from "./pages/Monitoring/agency";
import WatchList from "./pages/Monitoring/watchlist";
import AllocationEngine from "./NewPages/AllocationEngine/AllocationEngine";
import Placements from "./pages/Monitoring/placements";
import Signout from "./pages/Signout";

import AllocationButtons from "./NewPages/AllocationEngine/AllocationButtons";
import SegVolumeBadTable from "./NewPages/AllocationEngine/segVolumeBadTable";
import TestPipeLine from "./NewPages/AllocationEngine/TestPipeLine";
import Performance from "./NewPages/AllocationEngine/performance";
import AllocationStackedBarChart from "./NewPages/AllocationEngine/allocationStackedBarChart";
import PLImpactChart from "./NewPages/AllocationEngine/PLImpactChart";
import ReviewPerformance from "./NewPages/AllocationEngine/ReviewPerformance";
import SequenceAttributes from "./NewPages/AllocationEngine/SequenceAttributes";
import InhouseXX from "./NewPages/AllocationEngine/InhouseXX";
// import SingleStackedBarChart from "./NewPages/AllocationEngine/singleStackedChart";

import "./App.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Treatment from "./NewPages/AllocationEngine/Treatments";
import TestId from "./NewPages/AllocationEngine/TestId";
import SegmentTable from "./NewPages/AllocationEngine/SegmentTable";
import StrategyNew from "./NewPages/StrategyNew";
import ReviewExecution from "./NewPages/ReviewExecution";
import StrategyRecovery from "./NewPages/StrategyRecovery";
import RecoverySimulation from "./NewPages/RecoverySimulation";
import MonitoringRecovery from "./pages/Monitoring Recovery";
import PortfolioRecovery from "./pages/Monitoring Recovery/Portfolio Recovery";
import PerformanceRecovery from "./pages/Monitoring Recovery/Performace Recovery";
import VintageRecovery from "./pages/Monitoring Recovery/Vintage Recovery";

import PlacementRecovery from "./pages/Monitoring Recovery/Placement Recovery";
import AgencyRecovery from "./pages/Monitoring Recovery/Agency Recovery";
import SettlementRecovery from "./pages/Monitoring Recovery/Settlement Recovery";
import DashboardRecoveryNew from "./pages/DashboardRecoveryNew";
import PrivateRoute from "./components/auth/PrivateRoute";
import Landingpage from "./pages/Landing Page";
import ExecutionRecovery from "./pages/Execution Recovery";
import DashboardCollectionNew from "./pages/DashboardCollectionNew";
import DiagnosticCollection from "./pages/DiagnosticCollection";
import ReviewExecutionRecovery from "./NewPages/ReviewExecutionRecovery";
import usePrevious from "./hooks/usePrevious";
import ConatctForm from "./pages/Contact Form/ContactForm";
import ConatactForm from "./pages/Contact Form/ContactForm";
import DistributionRecovery from "./pages/Monitoring Recovery/Distribution Recovery";
import NewSettlement from "./pages/Monitoring Recovery/Settlement Recovery/NewSettlement/Index";
import SettlementPool from "./pages/Monitoring Recovery/Settlement Recovery/SettlementPool/Index";
import SettlementPoolRecovery from "./pages/Monitoring Recovery/Settlement Recovery/SettlementPool/Index";
import NewSettlementRecovery from "./pages/Monitoring Recovery/Settlement Recovery/NewSettlement/Index";
import Cohort from "./pages/Monitoring Recovery/Settlement Recovery/Cohort";
import Treatments from "./NewPages/Recoveryindex";
import AgencyStrategyRecovery from "./pages/StrategyRecovery/Agency";

import StrategyOffer from "./NewPages/StrategyOffer";
import StartegyToolBox from "./NewPages/NewStartegy/StartegyToolBox";
import StrategyPerformance from "./NewPages/NewStartegy/StartegyPerformance";
// import StartegyTreatment from "./NewPages/NewStartegy/StartegyPerformance/index";
function App() {
  // console.log(process.env.REACT_APP_EMAIL, "REACT_APP_API_KEY");
  // console.log(process.env.REACT_APP_PASSWORD, "REACT_APP_API_KEY");
  const navigate = useNavigate();
  const location = useLocation();
  const [moduleName, setmoduleName] = useState<any>("Recovery");
  const [selectedSegment, setSelectedSegment] = useState<any>("Very High Risk");
  // useEffect(() => {
  //   const pathArr = location.pathname.split("/");
  //   if (pathArr.includes("recovery")) {
  //     setmoduleName("Recovery");
  //   } else {
  //     setmoduleName("Collection");
  //   }
  // }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/contactus" element={<ConatactForm />} /> */}

        <Route path="/otp" element={<Otp />} />
        <Route
          element={
            <Sidebar moduleName={moduleName} setmoduleName={setmoduleName} />
          }
        >
          <Route path="/AllocationEngine" element={<PrivateRoute />}>
            <Route path="/AllocationEngine" element={<AllocationEngine />} />
          </Route>
          <Route path="/InhouseXX" element={<PrivateRoute />}>
            <Route path="/InhouseXX" element={<InhouseXX />} />
          </Route>

          <Route path="/TestPipeline" element={<PrivateRoute />}>
            <Route path="/TestPipeline" element={<TestPipeLine />} />
          </Route>

          <Route path="/performance" element={<PrivateRoute />}>
            <Route path="/performance" element={<Performance />} />
          </Route>

          <Route path="/PLImpactChart" element={<PrivateRoute />}>
            <Route path="/PLImpactChart" element={<PLImpactChart />} />
          </Route>

          <Route path="/segmenttable" element={<PrivateRoute />}>
            <Route path="/segmenttable" element={<SegmentTable />} />
          </Route>

          {/* { {/ <Route path="/SingleStackedBarChart" element={<SingleStackedBarChart/>} /> /} } */}

          <Route path="/home/recovery" element={<PrivateRoute />}>
            <Route
              path="/home/recovery"
              element={<HomePage setmoduleName={setmoduleName} />}
            />
          </Route>

          <Route path="/data" element={<PrivateRoute />}>
            <Route path="/data" element={<DataPage />} />
          </Route>

          <Route path="/dashboard/recovery" element={<PrivateRoute />}>
            <Route
              path="/dashboard/recovery"
              element={<DashboardRecoveryNew />}
            />
          </Route>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardCollectionNew />} />
          </Route>

          <Route path="/home/collection" element={<PrivateRoute />}>
            <Route path="/home/collection" element={<CollectionDashboar />} />
          </Route>

          <Route path="/monitoring" element={<PrivateRoute />}>
            <Route path="/monitoring" element={<Monitoring />} />
          </Route>

          <Route path="/monitoring/recovery" element={<PrivateRoute />}>
            <Route
              path="/monitoring/recovery"
              element={<MonitoringRecovery />}
            />
          </Route>

          <Route path="/diagnostics/recovery" element={<PrivateRoute />}>
            <Route path="/diagnostics/recovery" element={<Diagnostics />} />
          </Route>

          <Route path="/diagnostics" element={<PrivateRoute />}>
            <Route path="/diagnostics" element={<DiagnosticCollection />} />
          </Route>

          <Route path="/reviewConstraints" element={<PrivateRoute />}>
            <Route path="/reviewConstraints" element={<Strategy />} />
          </Route>

          {/* {/ <Route path="/strategy" element={<Strategy />} /> /}
          {/ <Route path="/strategy/inhouse" element={<InhouseXX />} /> /} */}

          <Route path="/strategy" element={<PrivateRoute />}>
            <Route path="/strategy" element={<StrategyNew />} />
          </Route>
          <Route path="/strategy/performance" element={<PrivateRoute />}>
            <Route path="/strategy/performance" element={<StrategyPerformance />} />
          </Route>
        
          <Route path="/strategy/recovery" element={<PrivateRoute />}>
            <Route path="/strategy/recovery" element={<StrategyRecovery />} />
          </Route>
          <Route path="/agency/strategy/recovery" element={<PrivateRoute />}>
            <Route
              path="/agency/strategy/recovery"
              element={<AgencyStrategyRecovery />}
            />
          </Route>
          <Route path="/offer/strategy/recovery" element={<PrivateRoute />}>
            <Route
              path="/offer/strategy/recovery"
              element={<StrategyOffer />}
            />
          </Route>
          <Route path="/strategy/reviewExecution" element={<PrivateRoute />}>
            <Route
              path="/strategy/reviewExecution"
              element={<ReviewExecution />}
            />
          </Route>
          <Route
            path="/strategy/reviewExecution/recovery"
            element={<PrivateRoute />}
          >
            <Route
              path="/strategy/reviewExecution/recovery"
              element={<ReviewExecutionRecovery />}
            />
          </Route>

          <Route
            path="/strategy/simulationengine/recovery"
            element={<PrivateRoute />}
          >
            <Route
              path="/strategy/simulationengine/recovery"
              element={<RecoverySimulation />}
            />
          </Route>

          <Route path="/strategy/optimization" element={<PrivateRoute />}>
            <Route path="/strategy/optimization" element={<Strategy />} />
          </Route>

          <Route
            path="/strategy/allocationEngine/reviewPerformance"
            element={<PrivateRoute />}
          >
            <Route
              path="/strategy/allocationEngine/reviewPerformance"
              element={<ReviewPerformance />}
            />
          </Route>

          <Route
            path="/strategy/allocationEngine/reviewPerformance/recovery"
            element={<PrivateRoute />}
          >
            <Route
              path="/strategy/allocationEngine/reviewPerformance/recovery"
              element={<Treatments />}
            />
          </Route>

          <Route
            path="/strategy/allocationEngine/optimizeStrategy"
            element={<PrivateRoute />}
          >
            <Route
              path="/strategy/allocationEngine/optimizeStrategy"
              element={<ReviewPerformance />}
            />
          </Route>

          <Route path="/strategy/allocationEngine" element={<PrivateRoute />}>
            <Route
              path="/strategy/allocationEngine"
              element={<AllocationEngine />}
            />
          </Route>
          <Route path="/strategy/changeControl" element={<PrivateRoute />}>
            <Route path="/strategy/changeControl" element={<Execution />} />
          </Route>
          <Route path="/strategy/toolBox" element={<PrivateRoute />}>
            <Route path="/strategy/toolBox" element={<StartegyToolBox />} />
          </Route>
          <Route path="/strategy/treatment" element={<PrivateRoute />}>
            {/* <Route path="/strategy/treatment" element={<StartegyTreatment />} /> */}
          </Route>

          <Route path="/execution" element={<PrivateRoute />}>
            <Route path="/execution" element={<Execution />} />
          </Route>
          <Route path="/execution/recovery" element={<PrivateRoute />}>
            <Route path="/execution/recovery" element={<ExecutionRecovery />} />
          </Route>
          <Route path="/Sign out" element={<Signout />} />
          <Route path="/monitoring/portfolio" element={<PrivateRoute />}>
            <Route path="/monitoring/portfolio" element={<Portfolio />} />
          </Route>
          <Route
            path="/monitoring/recovery/portfolio"
            element={<PrivateRoute />}
          >
            <Route
              path="/monitoring/recovery/portfolio"
              element={<PortfolioRecovery />}
            />
          </Route>
          <Route path="/monitoring/agency" element={<PrivateRoute />}>
            <Route path="/monitoring/agency" element={<Agency />} />
          </Route>
          <Route path="/monitoring/recovery/vintage" element={<PrivateRoute />}>
            <Route
              path="/monitoring/recovery/vintage"
              element={<VintageRecovery />}
            />
          </Route>
          <Route
            path="/monitoring/recovery/distribution"
            element={<PrivateRoute />}
          >
            <Route
              path="/monitoring/recovery/distribution"
              element={<DistributionRecovery />}
            />
          </Route>
          <Route
            path="/monitoring/recovery/placement"
            element={<PrivateRoute />}
          >
            <Route
              path="/monitoring/recovery/placement"
              element={<PlacementRecovery />}
            />
          </Route>
          <Route path="/monitoring/recovery/agency" element={<PrivateRoute />}>
            <Route
              path="/monitoring/recovery/agency"
              element={<AgencyRecovery />}
            />
          </Route>
          <Route
            path="/monitoring/recovery/settlement"
            element={<PrivateRoute />}
          >
            <Route
              path="/monitoring/recovery/settlement"
              element={<NewSettlement />}
            />
            <Route
              path="/monitoring/recovery/settlement/new-settlement"
              element={<PrivateRoute />}
            >
              <Route
                path="/monitoring/recovery/settlement/new-settlement"
                element={<NewSettlementRecovery />}
              />
            </Route>
            <Route
              path="/monitoring/recovery/settlement/settlement-pool"
              element={<PrivateRoute />}
            >
              <Route
                path="/monitoring/recovery/settlement/settlement-pool"
                element={<SettlementPoolRecovery />}
              />
            </Route>
            <Route
              path="/monitoring/recovery/settlement/cohort"
              element={<PrivateRoute />}
            >
              <Route
                path="/monitoring/recovery/settlement/cohort"
                element={<Cohort />}
              />
            </Route>
          </Route>

          <Route path="/monitoring/placements" element={<PrivateRoute />}>
            <Route path="/monitoring/placements" element={<Placements />} />
          </Route>
          <Route path="/monitoring/watchlist" element={<PrivateRoute />}>
            <Route path="/monitoring/watchlist" element={<WatchList />} />
          </Route>
          <Route
            path="/monitoring/recovery/location"
            element={<PrivateRoute />}
          >
            <Route
              path="/monitoring/recovery/location"
              element={<PerformanceRecovery />}
            />
          </Route>
          <Route path="/monitoring/location" element={<PrivateRoute />}>
            <Route path="/monitoring/location" element={<Location />}>
              <Route
                index
                element={
                  <>
                    <PaidNotPaid />
                    {/* {/ <DailyCycleLiquidation title="Daily" data={data} />{" "} /}  */}
                  </>
                }
              />
              <Route
                path="Cycle"
                element={
                  <>
                    <PaidNotPaid />
                    {/* {/ <DailyCycleLiquidation title="Daily" data={data} />{" "} /}  */}
                  </>
                }
              />
              {/* {/ <Route path="daily" element={<Daily />} /> /}  */}
              <Route
                path="Risk Tier"
                element={
                  <>
                    <PaidNotPaid />
                    {/* <DailyCycleLiquidation title="Month" data={data} />{" "}  */}
                  </>
                }
              />

              <Route path="mob" element={<MaturationCurve />} />
            </Route>
          </Route>
          <Route path="/monitoring/agency" element={<PrivateRoute />}>
            <Route path="/monitoring/agency" element={<Distribution />} />
          </Route>
          <Route path="/monitoring/writeoffs" element={<PrivateRoute />}>
            <Route path="/monitoring/writeoffs" element={<Writeoffs />}>
              <Route
                path="Volume"
                element={
                  <>
                    {/* <WorkableVolume />  */}
                    <DailyWorkableLine />
                  </>
                }
              />
              <Route path="Activity" element={<ProductionActivity />} />

              <Route path="Outcome" element={<h1>Outcome tab</h1>} />
            </Route>
          </Route>
        </Route>

        <Route
          path="/subtab"
          element={<SubTabs isDropDown={false} tabs={[]} />}
        />
      </Routes>
    </div>
  );
}

export default App;
