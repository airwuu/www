import { CowProvider } from "./Context/CowProvider"; 
import TimeProvider from "./Context/TimeProvider";

import Irregularities from "./Irregularities/Irregularities";
import GridContainer from "./Grid/GridContainer";
import MooGuard from "./MooGuard/MooGuard";
import SliderContainer from "./SliderContainer/SliderContainer";

export default function Dashboard() {
  return (
    <CowProvider>
      <TimeProvider> 
        <p className="text-4xl ml-10 mt-5">Dashboard</p>

        <div className="flex justify-between px-10 mt-5 ml-10">
          {/* left should flex to be as tall as mooguard */}
          {/* also grid should flex to be as large as irregularities */}
          <div className="flex flex-col gap-5 w-1/2">
            <Irregularities />
            <GridContainer />
          </div>

          <div className="flex flex-col h-full">
            <MooGuard />
            <SliderContainer /> 
          </div>
        </div>

      </TimeProvider>
    </CowProvider>
  )
}