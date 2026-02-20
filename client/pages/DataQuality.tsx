import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function DataQuality() {
  const qualityBenefits = [
    "Better campaign deliverability",
    "Higher engagement rates",
    "Faster sales cycles",
    "Accurate reporting and forecasting",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 py-2 bg-neutral-50 shadow-sm drop-shadow-sm">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-2">
        <div className="max-w-[1800px] mx-auto">
          <div className="relative bg-gradient-to-br from-[#dde8f8] via-[#e8f0fb] to-[#f0e8ff] rounded-3xl p-12 md:p-16 text-center shadow-lg min-h-[320px] flex flex-col items-center justify-center overflow-hidden">
            {/* Abstract Blobs */}
            <div className="hidden md:block absolute left-[-60px] top-10 w-[220px] h-[220px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-blue-500 to-purple-400 opacity-80 blur-2xl z-0 blob-float-1" />
            <div className="hidden md:block absolute right-[-60px] top-8 w-[160px] h-[160px] rounded-[50%_60%_40%_60%/60%_40%_60%_40%] bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-80 blur-2xl z-0 blob-float-2" />
            <div className="hidden md:block absolute left-24 bottom-[-40px] w-[80px] h-[80px] rounded-[60%_40%_60%_40%/50%_60%_40%_50%] bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-300 opacity-70 blur-2xl z-0 blob-float-3" />
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Verified. Accurate. <span className="text-gradient-cefer">Reliable.</span>
              </h1>
              <p className="text-base text-gray-700 max-w-4xl mx-auto mb-2">
                At Cefer, data quality isn't optional   it's our foundation.
              </p>
              <p className="text-base text-gray-700 max-w-4xl mx-auto">
                Every contact, company record, and insight goes through rigorous verification to ensure your sales and marketing teams only work with reliable information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Data Quality Matters */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Data <span className="text-gradient-cefer">Quality Matters</span>
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-2">Bad data costs time, money, and opportunities.</p>
          <p className="text-gray-600 mb-10">High-quality data ensures:</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {qualityBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-50 px-5 py-3 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#0e7bf5] shrink-0" />
                <span className="text-sm font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Cefer gives you confidence in every record, so your team can focus on closing deals instead of chasing bad leads.
          </p>
        </div>
      </section>

      {/* Our Quality Process */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Quality <span className="text-gradient-cefer">Process</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Multi-layer verification at every step</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center mx-auto mb-6">
               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.8898 1.18322C20.6117 0.738926 20.2021 0.392378 19.7179 0.191815C19.2337 -0.00874697 18.699 -0.0533451 18.1882 0.0642304L14.5634 0.896919C14.1919 0.982308 13.8059 0.982308 13.4344 0.896919L9.80948 0.0642304C9.29874 -0.0533451 8.76405 -0.00874697 8.27984 0.191815C7.79563 0.392378 7.38599 0.738926 7.10795 1.18322L5.13221 4.33655C4.9306 4.65914 4.65843 4.93133 4.33586 5.13496L1.18274 7.11084C0.73924 7.38865 0.393222 7.79765 0.192716 8.28106C-0.00779016 8.76447 -0.0528394 9.29832 0.0638212 9.8085L0.896456 13.4377C0.981531 13.8085 0.981531 14.1938 0.896456 14.5647L0.0638212 18.1918C-0.0532928 18.7023 -0.00847028 19.2366 0.192058 19.7204C0.392585 20.2043 0.738856 20.6136 1.18274 20.8915L4.33586 22.8674C4.65843 23.069 4.9306 23.3412 5.13423 23.6638L7.10997 26.8171C7.6785 27.7264 8.76314 28.1761 9.80948 27.9361L13.4344 27.1034C13.8059 27.018 14.1919 27.018 14.5634 27.1034L18.1903 27.9361C18.7007 28.0532 19.235 28.0084 19.7188 27.8079C20.2026 27.6073 20.6119 27.261 20.8898 26.8171L22.8655 23.6638C23.0671 23.3412 23.3393 23.069 23.6619 22.8674L26.817 20.8915C27.2609 20.6132 27.607 20.2034 27.8072 19.7192C28.0074 19.235 28.0517 18.7004 27.9339 18.1898L27.1033 14.5647C27.0179 14.1932 27.0179 13.8072 27.1033 13.4356L27.9359 9.8085C28.0532 9.29824 28.0087 8.7641 27.8086 8.28029C27.6084 7.79649 27.2625 7.38704 26.819 7.10882L23.6639 5.13295C23.3418 4.93096 23.0695 4.65869 22.8675 4.33655L20.8898 1.18322ZM19.8757 9.50406C20.0004 9.27475 20.0313 9.00601 19.9619 8.75438C19.8925 8.50275 19.7282 8.28786 19.5036 8.15491C19.279 8.02196 19.0115 7.98132 18.7576 8.04155C18.5036 8.10177 18.2829 8.25816 18.1419 8.47781L12.8699 17.4015L9.6865 14.353C9.59206 14.256 9.47906 14.1791 9.35424 14.1267C9.22941 14.0744 9.09532 14.0477 8.95996 14.0483C8.82461 14.0489 8.69075 14.0767 8.56639 14.1302C8.44203 14.1836 8.3297 14.2615 8.23611 14.3593C8.14252 14.4571 8.06958 14.5728 8.02165 14.6994C7.97371 14.826 7.95177 14.9609 7.95711 15.0962C7.96246 15.2314 7.99499 15.3642 8.05277 15.4867C8.11054 15.6091 8.19238 15.7186 8.2934 15.8087L12.3941 19.7383C12.5038 19.8432 12.6359 19.922 12.7803 19.9688C12.9248 20.0155 13.078 20.029 13.2284 20.0083C13.3788 19.9876 13.5226 19.9331 13.6491 19.849C13.7755 19.7649 13.8813 19.6533 13.9585 19.5225L19.8757 9.50406Z" fill="#0E7BF5"/>
</svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3-Layer Verification</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every email and contact goes through syntax, domain, and real-time SMTP verification to ensure maximum deliverability.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Continuous Refresh</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our database is continuously updated to reflect job changes, company updates, and new contacts   keeping your data fresh.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center mx-auto mb-6">
                <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M14.8787 0.527498C15.7977 -0.574773 17.5878 0.178494 17.4424 1.6065L16.4157 11.6375H24.7206C24.9969 11.6376 25.2674 11.7164 25.5006 11.8647C25.7337 12.013 25.9198 12.2247 26.0369 12.4749C26.1541 12.7252 26.1976 13.0036 26.1623 13.2777C26.1269 13.5517 26.0142 13.81 25.8374 14.0223L11.2955 31.4725C10.3765 32.5748 8.5864 31.8215 8.73182 30.3935L9.75848 20.3625H1.45364C1.17732 20.3624 0.906756 20.2836 0.673621 20.1353C0.440486 19.987 0.254433 19.7753 0.137249 19.5251C0.0200657 19.2748 -0.0233983 18.9964 0.0119471 18.7224C0.0472926 18.4483 0.159984 18.19 0.336826 17.9777L14.8787 0.527498Z" fill="#0E7BF5"/>
</svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">AI-Powered Accuracy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Machine learning models detect and remove duplicate, outdated, or inaccurate records automatically.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Use Case */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Example <span className="text-gradient-cefer">Use Case</span>
          </h2>
          <div className="py-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Sales Team Achieves 45% Better Engagement</h3>
            <p className="text-gray-700 leading-relaxed mb-2 text-center max-w-3xl mx-auto">
              A sales team launches a cold email campaign using a list of 10,000 prospects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Because Cefer ensures every contact is verified and up-to-date, bounce rates drop to less than 2%, and engagement improves by 45%   saving time and increasing ROI.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49777 29C1.11738 29 0.77266 28.8429 0.463596 28.5287C0.154532 28.2146 0 27.8642 0 27.4775V23.6713C0 21.4963 0.665676 19.575 1.99703 17.9075C3.32838 16.24 5.04012 15.1767 7.13224 14.7175C6.18128 15.3942 5.44428 16.2458 4.92125 17.2724C4.39822 18.299 4.1367 19.4049 4.1367 20.59V27.4775C4.1367 27.7433 4.17236 28.0092 4.24369 28.275C4.31501 28.5408 4.43388 28.7825 4.6003 29H1.49777ZM6.73997 29C6.33581 29 5.98538 28.8492 5.68868 28.5476C5.39198 28.246 5.24315 27.8893 5.2422 27.4775V20.59C5.2422 18.8983 5.83085 17.4604 7.00814 16.2763C8.18544 15.0921 9.60571 14.5 11.2689 14.5H18.0089C19.6731 14.5 21.0877 15.0921 22.2526 16.2763C23.4175 17.4604 24 18.8983 24 20.59V22.91C24 24.6017 23.4175 26.0396 22.2526 27.2238C21.0877 28.4079 19.6731 29 18.0089 29H6.73997ZM12.0178 11.455C10.4487 11.455 9.11738 10.8992 8.02378 9.7875C6.93016 8.67583 6.38336 7.3225 6.38336 5.7275C6.38336 4.1325 6.93016 2.77917 8.02378 1.6675C9.11738 0.555834 10.4487 0 12.0178 0C13.5869 0 14.9183 0.555834 16.0119 1.6675C17.1055 2.77917 17.6523 4.1325 17.6523 5.7275C17.6523 7.3225 17.1055 8.67583 16.0119 9.7875C14.9183 10.8992 13.5869 11.455 12.0178 11.455Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">10,000</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Prospects</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.875 0.9375C1.875 0.68886 1.77623 0.450403 1.60041 0.274587C1.4246 0.098772 1.18614 0 0.9375 0C0.68886 0 0.450403 0.098772 0.274587 0.274587C0.098772 0.450403 0 0.68886 0 0.9375V22.3125C0 23.5557 0.49386 24.748 1.37294 25.6271C2.25201 26.5061 3.4443 27 4.6875 27H26.0625C26.3111 27 26.5496 26.9012 26.7254 26.7254C26.9012 26.5496 27 26.3111 27 26.0625C27 25.8139 26.9012 25.5754 26.7254 25.3996C26.5496 25.2238 26.3111 25.125 26.0625 25.125H4.6875C3.94158 25.125 3.22621 24.8287 2.69876 24.3012C2.17132 23.7738 1.875 23.0584 1.875 22.3125V0.9375ZM16.5 5.4375C16.5 4.92 16.92 4.5 17.4375 4.5H24.9375C25.455 4.5 25.875 4.92 25.875 5.4375V12.9375C25.875 13.0606 25.8508 13.1825 25.8036 13.2963C25.7565 13.41 25.6875 13.5134 25.6004 13.6004C25.5134 13.6875 25.41 13.7565 25.2963 13.8036C25.1825 13.8508 25.0606 13.875 24.9375 13.875C24.8144 13.875 24.6925 13.8508 24.5787 13.8036C24.465 13.7565 24.3616 13.6875 24.2746 13.6004C24.1875 13.5134 24.1185 13.41 24.0714 13.2963C24.0242 13.1825 24 13.0606 24 12.9375V7.701L16.413 15.288C16.2425 15.4583 16.013 15.5564 15.7721 15.562C15.5312 15.5676 15.2974 15.4802 15.1193 15.318L11.6558 12.1702L6.1005 17.7255C5.92466 17.9013 5.68617 18.0001 5.4375 18.0001C5.18883 18.0001 4.95034 17.9013 4.7745 17.7255C4.59866 17.5497 4.49988 17.3112 4.49988 17.0625C4.49988 16.8138 4.59866 16.5753 4.7745 16.3995L10.962 10.212C11.1325 10.0417 11.362 9.94356 11.6029 9.93797C11.8438 9.93239 12.0776 10.0198 12.2557 10.182L15.7192 13.3298L22.674 6.375H17.4375C16.92 6.375 16.5 5.955 16.5 5.4375Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">&lt;2%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bounce Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                 <svg className="w-8 h-8" width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 1.43478C0 1.05425 0.148515 0.689312 0.412874 0.420238C0.677232 0.151164 1.03578 0 1.40964 0H16.4458C16.8196 0 17.1782 0.151164 17.4425 0.420238C17.7069 0.689312 17.8554 1.05425 17.8554 1.43478C17.8554 1.81531 17.7069 2.18025 17.4425 2.44933C17.1782 2.7184 16.8196 2.86957 16.4458 2.86957H1.40964C1.03578 2.86957 0.677232 2.7184 0.412874 2.44933C0.148515 2.18025 0 1.81531 0 1.43478ZM0 11C0 10.6195 0.148515 10.2545 0.412874 9.98546C0.677232 9.71638 1.03578 9.56522 1.40964 9.56522H12.6867C13.0606 9.56522 13.4192 9.71638 13.6835 9.98546C13.9479 10.2545 14.0964 10.6195 14.0964 11C14.0964 11.3805 13.9479 11.7455 13.6835 12.0145C13.4192 12.2836 13.0606 12.4348 12.6867 12.4348H1.40964C1.03578 12.4348 0.677232 12.2836 0.412874 12.0145C0.148515 11.7455 0 11.3805 0 11ZM0 20.5652C0 20.1847 0.148515 19.8197 0.412874 19.5507C0.677232 19.2816 1.03578 19.1304 1.40964 19.1304H16.4458C16.8196 19.1304 17.1782 19.2816 17.4425 19.5507C17.7069 19.8197 17.8554 20.1847 17.8554 20.5652C17.8554 20.9457 17.7069 21.3107 17.4425 21.5798C17.1782 21.8488 16.8196 22 16.4458 22H1.40964C1.03578 22 0.677232 21.8488 0.412874 21.5798C0.148515 21.3107 0 20.9457 0 20.5652ZM29.6024 20.5652C32.0948 20.5652 34.4851 19.5575 36.2475 17.7636C38.0099 15.9698 39 13.5369 39 11C39 8.46315 38.0099 6.0302 36.2475 4.23637C34.4851 2.44254 32.0948 1.43478 29.6024 1.43478C27.11 1.43478 24.7197 2.44254 22.9573 4.23637C21.1949 6.0302 20.2048 8.46315 20.2048 11C20.2048 13.5369 21.1949 15.9698 22.9573 17.7636C24.7197 19.5575 27.11 20.5652 29.6024 20.5652ZM31.012 7.17391C31.012 6.79339 30.8635 6.42844 30.5992 6.15937C30.3348 5.8903 29.9763 5.73913 29.6024 5.73913C29.2285 5.73913 28.87 5.8903 28.6056 6.15937C28.3413 6.42844 28.1928 6.79339 28.1928 7.17391V10.7054C28.1928 11.0497 28.3149 11.3845 28.5367 11.6447L30.4162 13.8523C30.5374 13.9948 30.685 14.1115 30.8505 14.1959C31.016 14.2803 31.1963 14.3307 31.3809 14.3442C31.5656 14.3577 31.751 14.3341 31.9267 14.2746C32.1024 14.2152 32.2648 14.1211 32.4048 13.9977C32.5447 13.8744 32.6594 13.7242 32.7423 13.5557C32.8253 13.3872 32.8748 13.2038 32.888 13.0159C32.9013 12.8279 32.8781 12.6391 32.8196 12.4603C32.7612 12.2815 32.6688 12.1162 32.5476 11.9737L31.012 10.1697V7.17391Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">45%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Better Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why It <span className="text-gradient-cefer">Matters</span>
          </h2>
          <p className="text-xl font-semibold text-gray-800 mb-4">The better your data, the better your results.</p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Cefer's high-quality, verified, and actionable data powers smarter outreach, stronger pipelines, and higher revenue.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Experience Trusted Data
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Work with data you can rely on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Verified Data Today
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
