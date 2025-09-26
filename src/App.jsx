import { useState } from "react";
import markazDspBanner from "/markaz-dsp-banner-2.jpg";
import markazDspLogo from "/markaz-dsp-logo.png";
import { CardLinkSosmed } from "./components/fragments/CardLinkSosmed";
import { sosmedData } from "./constants/sosmedData";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-full bg-[url('/banner-cover.jpg')] bg-cover bg-no-repeat bg-center min-h-screen font-sans">
        <div className="flex items-center justify-center md:py-14 shadow-2xl">
          <div className="relative w-full h-screen md:w-1/2 md:h-1/2">
            <img
              src={markazDspBanner}
              alt="markaz-dsp-logo"
              className="w-full h-full object-cover md:rounded-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800 opacity-80 md:rounded-2xl"></div>

            <div className="absolute inset-0 mt-20 flex flex-col items-center px-10">
              <img src={markazDspLogo} alt="" className="w-1/3 mb-4" />

              <div className="text-white text-center">
                <h2 className="text-3xl font-bold text-center mb-3">
                  Markaz_DSP
                </h2>
                <p class="text-[16px] md:text-lg font-semibold">
                  Pusat sablon kaos satuan dan lusinan
                </p>

                <p class="text-[16px] md:text-lg font-semibold">
                  dengan kualitas terbaik, order tanpa minimum, dan bergaransi.
                </p>

                <div className="flex flex-row mt-3 gap-3 items-center justify-center">
                  <p className="text-sm">T-Shirt</p>
                  <span>·</span>
                  <p className="text-sm">Hoodie</p>
                  <span>·</span>
                  <p className="text-sm">Sweater</p>
                  <span>·</span>
                  <p className="text-sm">etc.</p>
                </div>
              </div>

              <div className="mt-4 w-full">
                {sosmedData.map((item, index) => (
                  <CardLinkSosmed key={index} {...item} />
                ))}
              </div>

              <p className="absolute bottom-4 text-sm mt-6 text-normal text-white">
                © {currentYear} Markaz Digital Screen Printing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
