import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function DataPointsCoverage() {
  const whatWeProvide = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Real-Time Buying Signals",
      items: [
        "Full Name & Job Title",
        "Department & Seniority Level",
        "Verified Business Email",
        "LinkedIn Profile & Social Links",
        "Direct Phone Number (where available)",
      ],
    },
    {
      icon: (
       <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0374 5.04052L15.0099 5.04296C10.8478 5.62793 7.04095 7.65424 4.28632 10.751C2.7151 12.5086 1.53205 14.5628 0.810851 16.7854C0.089653 19.0081 -0.15424 21.3517 0.0943638 23.6702C0.526312 27.8139 2.49926 31.6603 5.641 34.4837C8.78274 37.3071 12.876 38.9123 17.1487 38.9965C21.4213 39.0807 25.5779 37.6381 28.8342 34.9408C32.0905 32.2435 34.2214 28.4781 34.8249 24.3548V24.3304C34.8786 23.9664 34.9203 23.6008 34.9498 23.2341C34.9626 23.067 34.9398 22.899 34.8828 22.7408C34.8259 22.5827 34.7361 22.4376 34.619 22.3148C34.5019 22.192 34.3601 22.0941 34.2024 22.0272C34.0447 21.9602 33.8745 21.9258 33.7025 21.9259H21.2516C20.7592 21.9259 20.2717 21.8314 19.8167 21.6477C19.3618 21.4641 18.9485 21.1949 18.6003 20.8556C18.2521 20.5162 17.976 20.1134 17.7875 19.67C17.5991 19.2267 17.5021 18.7515 17.5021 18.2716V6.13681C17.5023 5.96896 17.4668 5.80288 17.398 5.64901C17.3292 5.49513 17.2285 5.35678 17.1022 5.24263C16.9759 5.12849 16.8268 5.04101 16.6642 4.98568C16.5016 4.93036 16.329 4.90839 16.1573 4.92114C15.7807 4.95038 15.4074 4.99017 15.0374 5.04052ZM39.9967 17.3848C39.9717 18.598 38.8968 19.4897 37.6545 19.4897H22.5015C21.8385 19.4897 21.2027 19.233 20.7339 18.7761C20.2651 18.3193 20.0018 17.6996 20.0018 17.0535V2.28517C20.0018 1.07193 20.9167 0.0267982 22.1615 0.00243605L22.5015 1.79623e-08C24.828 -0.000104047 27.1311 0.451971 29.2762 1.32978C31.4213 2.20758 33.3653 3.49349 34.9944 5.11228C36.6234 6.73107 37.9049 8.65023 38.7638 10.7575C39.6228 12.8647 40.0419 15.1178 39.9967 17.3848Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Company-Level Data",
      items: [
        "Company Name & Domain",
        "Industry & Sub-Industry",
        "Company Size & Revenue",
        "Location & Headquarters",
        "Funding Information & Investors",
        "Technologies Used",
      ],
    },
    {
      icon: (
       <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M27.6818 27.6818V29C27.6818 29.3496 27.5429 29.6849 27.2957 29.9321C27.0485 30.1793 26.7132 30.3182 26.3636 30.3182H23.7273C23.3777 30.3182 23.0424 30.1793 22.7952 29.9321C22.548 29.6849 22.4091 29.3496 22.4091 29V2.63636C22.4091 2.28675 22.548 1.95147 22.7952 1.70426C23.0424 1.45706 23.3777 1.31818 23.7273 1.31818H26.3636C26.7132 1.31818 27.0485 1.45706 27.2957 1.70426C27.5429 1.95147 27.6818 2.28675 27.6818 2.63636V27.6818ZM15.8182 30.3182C16.1678 30.3182 16.5031 30.1793 16.7503 29.9321C16.9975 29.6849 17.1364 29.3496 17.1364 29V10.5454C17.1364 10.1958 16.9975 9.86056 16.7503 9.61335C16.5031 9.36615 16.1678 9.22727 15.8182 9.22727H13.1818C12.8322 9.22727 12.4969 9.36615 12.2497 9.61335C12.0025 9.86056 11.8636 10.1958 11.8636 10.5454V29C11.8636 29.3496 12.0025 29.6849 12.2497 29.9321C12.4969 30.1793 12.8322 30.3182 13.1818 30.3182H15.8182ZM5.27272 30.3182C5.62232 30.3182 5.95761 30.1793 6.20482 29.9321C6.45202 29.6849 6.5909 29.3496 6.5909 29V18.4545C6.5909 18.1049 6.45202 17.7697 6.20482 17.5224C5.95761 17.2752 5.62232 17.1364 5.27272 17.1364H2.63636C2.28675 17.1364 1.95147 17.2752 1.70426 17.5224C1.45706 17.7697 1.31818 18.1049 1.31818 18.4545V29C1.31818 29.3496 1.45706 29.6849 1.70426 29.9321C1.95147 30.1793 2.28675 30.3182 2.63636 30.3182H5.27272Z" fill="#0E7BF5"/>
<path d="M29 29V27.6818H26.3636V29H29ZM23.7273 31.6364H26.3636V29H23.7273V31.6364ZM21.0909 27.6818V29H23.7273V27.6818H21.0909ZM21.0909 3.95455V27.6818H23.7273V3.95455H21.0909ZM21.0909 2.63636V3.95455H23.7273V2.63636H21.0909ZM26.3636 0H23.7273V2.63636H26.3636V0ZM29 3.95455V2.63636H26.3636V3.95455H29ZM29 27.6818V3.95455H26.3636V27.6818H29ZM15.8182 27.6818V29H18.4545V27.6818H15.8182ZM15.8182 11.8636V27.6818H18.4545V11.8636H15.8182ZM15.8182 10.5455V11.8636H18.4545V10.5455H15.8182ZM13.1818 10.5455H15.8182V7.90909H13.1818V10.5455ZM13.1818 11.8636V10.5455H10.5455V11.8636H13.1818ZM13.1818 27.6818V11.8636H10.5455V27.6818H13.1818ZM13.1818 29V27.6818H10.5455V29H13.1818ZM15.8182 29H13.1818V31.6364H15.8182V29ZM5.27273 27.6818V29H7.90909V27.6818H5.27273ZM5.27273 19.7727V27.6818H7.90909V19.7727H5.27273ZM5.27273 18.4545V19.7727H7.90909V18.4545H5.27273ZM2.63636 18.4545H5.27273V15.8182H2.63636V18.4545ZM2.63636 19.7727V18.4545H0V19.7727H2.63636ZM2.63636 27.6818V19.7727H0V27.6818H2.63636ZM2.63636 29V27.6818H0V29H2.63636ZM5.27273 29H2.63636V31.6364H5.27273V29ZM7.90909 18.4545C7.90909 17.7553 7.63133 17.0848 7.13692 16.5904C6.6425 16.0959 5.97193 15.8182 5.27273 15.8182V18.4545H7.90909ZM10.5455 29C10.5455 29.6992 10.8232 30.3698 11.3176 30.8642C11.812 31.3586 12.4826 31.6364 13.1818 31.6364V29H10.5455ZM13.1818 7.90909C12.4826 7.90909 11.812 8.18685 11.3176 8.68126C10.8232 9.17568 10.5455 9.84625 10.5455 10.5455H13.1818V7.90909ZM2.63636 15.8182C1.93716 15.8182 1.26659 16.0959 0.772173 16.5904C0.277759 17.0848 0 17.7553 0 18.4545H2.63636V15.8182ZM15.8182 29V31.6364C16.5174 31.6364 17.188 31.3586 17.6824 30.8642C18.1768 30.3698 18.4545 29.6992 18.4545 29H15.8182ZM5.27273 29V31.6364C5.97193 31.6364 6.6425 31.3586 7.13692 30.8642C7.63133 30.3698 7.90909 29.6992 7.90909 29H5.27273ZM26.3636 2.63636H29C29 1.93716 28.7222 1.26659 28.2278 0.772174C27.7334 0.277759 27.0628 0 26.3636 0V2.63636ZM23.7273 29H21.0909C21.0909 29.6992 21.3687 30.3698 21.8631 30.8642C22.3575 31.3586 23.0281 31.6364 23.7273 31.6364V29ZM23.7273 2.63636V0C23.0281 0 22.3575 0.277759 21.8631 0.772174C21.3687 1.26659 21.0909 1.93716 21.0909 2.63636H23.7273ZM18.4545 10.5455C18.4545 9.84625 18.1768 9.17568 17.6824 8.68126C17.188 8.18685 16.5174 7.90909 15.8182 7.90909V10.5455H18.4545ZM0 29C0 29.6992 0.277759 30.3698 0.772173 30.8642C1.26659 31.3586 1.93716 31.6364 2.63636 31.6364V29H0ZM26.3636 29V31.6364C27.0628 31.6364 27.7334 31.3586 28.2278 30.8642C28.7222 30.3698 29 29.6992 29 29H26.3636Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Intent & Engagement Signals",
      items: [
        "Topics of Interest & Recent Research Activity",
        "Buying Intent Based on Online Behavior",
        "Engagement Scores for Prioritization",
        "Location & Headquarters",
        "Funding Information & Investors",
        "Technologies Used",
      ],
    },
  ];

  const coverageHighlights = [
    {
      icon: (
       <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.8 0H3.2C1.44 0 0.016 1.4625 0.016 3.25L0 22.75C0 24.5375 1.44 26 3.2 26H28.8C30.56 26 32 24.5375 32 22.75V3.25C32 1.4625 30.56 0 28.8 0ZM28.8 6.5L16 14.625L3.2 6.5V3.25L16 11.375L28.8 3.25V6.5Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Global Reach",
      description: "Over 300 million B2B contacts across 50+ countries, spanning SMBs to enterprise organizations.",
    },
    {
      icon: (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.16" d="M14.7775 1.50024C18.2988 1.50024 21.6762 2.89905 24.1662 5.38892C26.6562 7.87889 28.0558 11.2562 28.0558 14.7776C28.0558 18.299 26.6562 21.6762 24.1662 24.1663C21.6762 26.6563 18.299 28.0559 14.7775 28.0559C11.2562 28.0558 7.87883 26.6562 5.38885 24.1663C2.89899 21.6763 1.50018 18.2989 1.50018 14.7776C1.50026 11.2562 2.89888 7.87889 5.38885 5.38892C7.87883 2.89894 11.2562 1.50032 14.7775 1.50024Z" fill="#0E7BF5" fillOpacity="0.1" stroke="#0E7BF5"/>
<path d="M32 32L24.5205 24.5205L32 32ZM24.5205 24.5205C25.7999 23.2411 26.8148 21.7222 27.5072 20.0506C28.1996 18.379 28.556 16.5873 28.556 14.778C28.556 12.9686 28.1996 11.177 27.5072 9.50537C26.8148 7.83375 25.7999 6.31488 24.5205 5.03548C23.2411 3.75607 21.7222 2.74119 20.0506 2.04879C18.379 1.35638 16.5873 1 14.778 1C12.9686 1 11.177 1.35638 9.50537 2.04879C7.83375 2.74119 6.31488 3.75607 5.03548 5.03548C2.4516 7.61935 1 11.1238 1 14.778C1 18.4321 2.4516 21.9366 5.03548 24.5205C7.61935 27.1043 11.1238 28.556 14.778 28.556C18.4321 28.556 21.9366 27.1043 24.5205 24.5205Z" fill="#0E7BF5" fillOpacity="0.1"/>
<path d="M32 32L24.5205 24.5205M24.5205 24.5205C25.7999 23.2411 26.8148 21.7222 27.5072 20.0506C28.1996 18.379 28.556 16.5873 28.556 14.778C28.556 12.9686 28.1996 11.177 27.5072 9.50537C26.8148 7.83375 25.7999 6.31488 24.5205 5.03548C23.2411 3.75607 21.7222 2.74119 20.0506 2.04879C18.379 1.35638 16.5873 1 14.778 1C12.9686 1 11.177 1.35638 9.50537 2.04879C7.83375 2.74119 6.31488 3.75607 5.03548 5.03548C2.4516 7.61935 1 11.1238 1 14.778C1 18.4321 2.4516 21.9366 5.03548 24.5205C7.61935 27.1043 11.1238 28.556 14.778 28.556C18.4321 28.556 21.9366 27.1043 24.5205 24.5205Z" stroke="#0E7BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
      title: "Industry Depth",
      description: "Coverage across 500+ industries, from healthcare and finance to tech, retail, and manufacturing.",
    },
    {
      icon: (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M23.128 1.30999C22.8201 0.818096 22.3666 0.434418 21.8305 0.212367C21.2944 -0.00968415 20.7025 -0.0590607 20.137 0.0711122L16.1237 0.993018C15.7124 1.08756 15.2851 1.08756 14.8738 0.993018L10.8605 0.0711122C10.295 -0.0590607 9.70306 -0.00968415 9.16697 0.212367C8.63088 0.434418 8.17735 0.818096 7.86952 1.30999L5.68209 4.80118C5.45888 5.15833 5.15755 5.45968 4.80042 5.68514L1.30946 7.87271C0.818444 8.18029 0.435353 8.63311 0.213364 9.16832C-0.00862482 9.70352 -0.0585008 10.2946 0.0706592 10.8594L0.992505 14.8774C1.0867 15.288 1.0867 15.7146 0.992505 16.1252L0.0706592 20.141C-0.0590028 20.7061 -0.00937781 21.2977 0.212635 21.8333C0.434648 22.369 0.81802 22.8222 1.30946 23.1299L4.80042 25.3175C5.15755 25.5407 5.45888 25.8421 5.68432 26.1992L7.87175 29.6904C8.5012 30.6971 9.70205 31.1949 10.8605 30.9293L14.8738 30.0074C15.2851 29.9128 15.7124 29.9128 16.1237 30.0074L20.1392 30.9293C20.7044 31.0589 21.2959 31.0093 21.8315 30.7873C22.3671 30.5653 22.8203 30.1819 23.128 29.6904L25.3154 26.1992C25.5386 25.8421 25.8399 25.5407 26.1971 25.3175L29.6903 23.1299C30.1817 22.8217 30.5649 22.3681 30.7865 21.832C31.0082 21.2959 31.0572 20.704 30.9268 20.1387L30.0072 16.1252C29.9127 15.7139 29.9127 15.2865 30.0072 14.8752L30.9291 10.8594C31.0589 10.2945 31.0096 9.70311 30.788 9.16747C30.5664 8.63183 30.1835 8.1785 29.6925 7.87048L26.1993 5.68291C25.8427 5.45927 25.5412 5.15784 25.3176 4.80118L23.128 1.30999ZM22.0052 10.5224C22.1433 10.2685 22.1775 9.97094 22.1007 9.69235C22.0238 9.41376 21.8419 9.17584 21.5932 9.02865C21.3446 8.88145 21.0485 8.83646 20.7673 8.90314C20.4861 8.96982 20.2418 9.14296 20.0857 9.38615L14.2488 19.2659L10.7243 15.8908C10.6198 15.7835 10.4947 15.6983 10.3565 15.6403C10.2183 15.5823 10.0698 15.5528 9.91996 15.5534C9.7701 15.5541 9.6219 15.5849 9.48422 15.6441C9.34653 15.7033 9.22217 15.7896 9.11855 15.8978C9.01493 16.0061 8.93418 16.1341 8.88111 16.2743C8.82804 16.4145 8.80374 16.5639 8.80966 16.7136C8.81558 16.8634 8.8516 17.0104 8.91556 17.1459C8.97953 17.2815 9.07014 17.4027 9.18198 17.5025L13.722 21.8531C13.8435 21.9693 13.9897 22.0565 14.1497 22.1083C14.3096 22.1601 14.4792 22.175 14.6457 22.152C14.8123 22.1291 14.9715 22.0688 15.1115 21.9757C15.2514 21.8825 15.3686 21.759 15.4541 21.6142L22.0052 10.5224Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Role-Specific Accuracy",
      description: "Focus on decision-makers and influencers   C-level, VP, Director, and Manager roles across sales, marketing, IT, operations, and more.",
    },
    {
      icon: (
        <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6V3C15 1.35 13.65 0 12 0H3C1.35 0 0 1.35 0 3V24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V9C30 7.35 28.65 6 27 6H15ZM6 24H3V21H6V24ZM6 18H3V15H6V18ZM6 12H3V9H6V12ZM6 6H3V3H6V6ZM12 24H9V21H12V24ZM12 18H9V15H12V18ZM12 12H9V9H12V12ZM12 6H9V3H12V6ZM25.5 24H15V21H18V18H15V15H18V12H15V9H25.5C26.325 9 27 9.675 27 10.5V22.5C27 23.325 26.325 24 25.5 24ZM24 12H21V15H24V12ZM24 18H21V21H24V18Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Data Freshness",
      description: "Each contact is verified, pruned, and updated periodically   so you never rely on outdated information.",
    },
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
                Data Points & <span className="text-gradient-cefer">Coverage</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto font-semibold">
                Everything You Need to Know About Your Prospects
              </p>
              <p className="text-base text-gray-700 max-w-4xl mx-auto mb-2">
                Cefer gives you comprehensive insights into companies and decision-makers, so you can target the right prospects with precision.
              </p>
              <p className="text-base text-gray-700 max-w-4xl mx-auto">
                From contact info to technographics and buying intent, our database is designed to power smarter outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Data Do We Provide */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            What Data Do <span className="text-gradient-cefer">We Provide?</span>
          </h2>
          <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
            Our data is organized into contact-level and company-level information, enriched and verified for accuracy.
          </p>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Cefer aggregates first-party and third-party intent signals to help sales and marketing teams prioritize leads and time their outreach for maximum impact.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {whatWeProvide.map((col, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="mb-4">{col.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Coverage Highlights */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key Coverage <span className="text-gradient-cefer">Highlights</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Comprehensive data across the globe and every industry</p>
          <div className="grid md:grid-cols-2 gap-8">
            {coverageHighlights.map((item, index) => (
              <div key={index} className="flex gap-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">SaaS Team Targets Healthcare CIOs</h3>
            <p className="text-gray-700 leading-relaxed mb-2 text-center max-w-3xl mx-auto">
              A SaaS sales team wants to target CIOs in mid-market healthcare companies using Salesforce.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              With Cefer, they filter by job title, industry, company size, and tech stack   instantly accessing 5,000 verified leads ready for outreach.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49777 29C1.11738 29 0.77266 28.8429 0.463596 28.5287C0.154532 28.2146 0 27.8642 0 27.4775V23.6713C0 21.4963 0.665676 19.575 1.99703 17.9075C3.32838 16.24 5.04012 15.1767 7.13224 14.7175C6.18128 15.3942 5.44428 16.2458 4.92125 17.2724C4.39822 18.299 4.1367 19.4049 4.1367 20.59V27.4775C4.1367 27.7433 4.17236 28.0092 4.24369 28.275C4.31501 28.5408 4.43388 28.7825 4.6003 29H1.49777ZM6.73997 29C6.33581 29 5.98538 28.8492 5.68868 28.5476C5.39198 28.246 5.24315 27.8893 5.2422 27.4775V20.59C5.2422 18.8983 5.83085 17.4604 7.00814 16.2763C8.18544 15.0921 9.60571 14.5 11.2689 14.5H18.0089C19.6731 14.5 21.0877 15.0921 22.2526 16.2763C23.4175 17.4604 24 18.8983 24 20.59V22.91C24 24.6017 23.4175 26.0396 22.2526 27.2238C21.0877 28.4079 19.6731 29 18.0089 29H6.73997ZM12.0178 11.455C10.4487 11.455 9.11738 10.8992 8.02378 9.7875C6.93016 8.67583 6.38336 7.3225 6.38336 5.7275C6.38336 4.1325 6.93016 2.77917 8.02378 1.6675C9.11738 0.555834 10.4487 0 12.0178 0C13.5869 0 14.9183 0.555834 16.0119 1.6675C17.1055 2.77917 17.6523 4.1325 17.6523 5.7275C17.6523 7.3225 17.1055 8.67583 16.0119 9.7875C14.9183 10.8992 13.5869 11.455 12.0178 11.455Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">5,000</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Leads</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9.79985C15.1598 9.79985 16.1 8.85965 16.1 7.69985C16.1 6.54006 15.1598 5.59985 14 5.59985C12.8402 5.59985 11.9 6.54006 11.9 7.69985C11.9 8.85965 12.8402 9.79985 14 9.79985Z" fill="#0E7BF5"/>
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35942C3.91973 3.89776 2.12532 6.08426 1.06569 8.64243C0.00606597 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05844 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 12.1615 27.6379 10.341 26.9343 8.64243C26.2307 6.94387 25.1995 5.40052 23.8995 4.1005C22.5995 2.80048 21.0561 1.76925 19.3576 1.06569C17.659 0.362121 15.8385 0 14 0ZM14 25.2C11.7849 25.2 9.61945 24.5431 7.77762 23.3125C5.93579 22.0818 4.50026 20.3326 3.65255 18.286C2.80485 16.2395 2.58306 13.9876 3.01521 11.815C3.44736 9.6424 4.51406 7.64675 6.08041 6.0804C7.64676 4.51405 9.6424 3.44736 11.815 3.0152C13.9876 2.58305 16.2395 2.80485 18.2861 3.65255C20.3326 4.50025 22.0818 5.93578 23.3125 7.77761C24.5431 9.61944 25.2 11.7848 25.2 14C25.2 16.9704 24.02 19.8192 21.9196 21.9196C19.8192 24.02 16.9704 25.2 14 25.2Z" fill="#0E7BF5"/>
<path d="M20.3 11.9L19.6 9.80005L15.4 11.2H12.6L8.40001 9.80005L7.70001 11.9L11.9 13.3V15.4L9.80001 21.35L11.9 22.4L13.65 17.5H14.35L16.1 22.4L18.2 21.35L16.1 15.4V13.3L20.3 11.9Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">Instant</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Access</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="20" height="29" viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.636 3.625C13.636 2.66359 13.2531 1.74156 12.5714 1.06174C11.8897 0.381919 10.9652 0 10.0012 0C9.03714 0 8.1126 0.381919 7.43093 1.06174C6.74927 1.74156 6.36631 2.66359 6.36631 3.625C6.36631 4.58641 6.74927 5.50844 7.43093 6.18826C8.1126 6.86808 9.03714 7.25 10.0012 7.25C10.9652 7.25 11.8897 6.86808 12.5714 6.18826C13.2531 5.50844 13.636 4.58641 13.636 3.625ZM7.7805 9.58926C6.43446 9.11348 5.25313 8.21289 4.44097 6.99512L3.33347 5.33555C2.77688 4.50293 1.65235 4.28203 0.811787 4.83711C-0.0287744 5.39219 -0.250274 6.51934 0.306314 7.35195L1.41949 9.00586C2.44747 10.5408 3.8503 11.7473 5.45759 12.5402V27.1875C5.45759 28.19 6.26976 29 7.27502 29C8.28029 29 9.09245 28.19 9.09245 27.1875V21.75H10.9099V27.1875C10.9099 28.19 11.722 29 12.7273 29C13.7326 29 14.5447 28.19 14.5447 27.1875V12.5516C16.1975 11.7473 17.6344 10.5012 18.6737 8.91523L19.7074 7.33496C20.2526 6.49668 20.0141 5.3752 19.1735 4.82578C18.333 4.27637 17.2084 4.51426 16.6575 5.3582L15.6238 6.93281C14.3857 8.82461 12.2786 9.96875 10.0125 9.96875C9.29691 9.96875 8.59834 9.85547 7.93384 9.64023C7.88273 9.62324 7.83161 9.60059 7.7805 9.58926Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">100%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ready for Outreach</div>
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
          <p className="text-xl font-semibold text-gray-800 mb-4">
            The depth and accuracy of your data determine how successful your campaigns are.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Cefer ensures you never waste time on unqualified leads, giving you the right information to make every outreach count.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Explore Our Coverage
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Find verified contacts with complete data points to fuel your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started Today
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
