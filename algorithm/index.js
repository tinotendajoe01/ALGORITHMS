import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import GeneratePDF from "./GeneratePDF";
import Certificate from "../components/certificate";
const App = () => {
  const ref = React.useRef();

  return (
    <div className="main h-screen">
      <div className="content mb-10" ref={ref}>
        <Certificate />
      </div>
      <GeneratePDF html={ref} />
    </div>
  );
};

// export default App;
export default dynamic(() => Promise.resolve(App), { ssr: false });
