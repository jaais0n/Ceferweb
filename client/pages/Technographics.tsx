import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function Technographics() {
  const features = [
    {
      icon: (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9769 5.88907C12.9983 2.90013 17.1282 2.80961 18.3391 5.61751L18.4416 5.89078L19.8199 9.92159C20.1358 10.846 20.6462 11.6919 21.3168 12.4023C21.9874 13.1126 22.8025 13.6709 23.7072 14.0395L24.0779 14.1778L28.1087 15.5545C31.0976 16.5758 31.1881 20.7057 28.382 21.9166L28.1087 22.0191L24.0779 23.3975C23.1531 23.7131 22.3069 24.2235 21.5962 24.8941C20.8856 25.5647 20.327 26.3799 19.9583 27.2848L19.8199 27.6537L18.4433 31.6862C17.4219 34.6752 13.2921 34.7657 12.0828 31.9595L11.9769 31.6862L10.6003 27.6554C10.2846 26.7307 9.77427 25.8844 9.10367 25.1738C8.43307 24.4631 7.61783 23.9045 6.71296 23.5358L6.34404 23.3975L2.31323 22.0208C-0.677418 20.9995 -0.76794 16.8696 2.03996 15.6604L2.31323 15.5545L6.34404 14.1778C7.26845 13.862 8.11437 13.3515 8.82473 12.6809C9.5351 12.0103 10.0934 11.1952 10.462 10.2905L10.6003 9.92159L11.9769 5.88907ZM28.8738 3.08609e-07C29.1934 -4.03033e-07 29.5065 0.0896313 29.7776 0.258709C30.0487 0.427786 30.267 0.669528 30.4076 0.956462L30.4896 1.15629L31.0874 2.90867L32.8415 3.50646C33.1617 3.61525 33.4424 3.81665 33.648 4.08514C33.8536 4.35364 33.9749 4.67713 33.9965 5.01463C34.0181 5.35213 33.939 5.68844 33.7693 5.98094C33.5995 6.27344 33.3467 6.50896 33.043 6.65766L32.8415 6.73964L31.0891 7.33743L30.4913 9.09151C30.3823 9.41164 30.1808 9.6922 29.9122 9.89766C29.6436 10.1031 29.32 10.2242 28.9825 10.2456C28.6451 10.267 28.3088 10.1878 28.0164 10.0179C27.724 9.848 27.4886 9.59514 27.3401 9.29135L27.2581 9.09151L26.6603 7.33914L24.9062 6.74135C24.586 6.63256 24.3053 6.43116 24.0997 6.16267C23.8941 5.89417 23.7728 5.57068 23.7512 5.23318C23.7296 4.89568 23.8087 4.55937 23.9784 4.26687C24.1482 3.97437 24.401 3.73885 24.7047 3.59015L24.9062 3.50817L26.6586 2.91038L27.2564 1.15629C27.3716 0.818844 27.5895 0.525898 27.8795 0.318534C28.1696 0.11117 28.5173 -0.000213977 28.8738 3.08609e-07Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Technology Stack Detection",
      description: "Identify the technologies companies use   from CRM and marketing automation to analytics, hosting, and payment processors."
    },
    {
      icon: (
        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L14 16.3084V28.5518L21 32V16.3084L35 0H0Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Advanced Filtering",
      description: "Target companies based on specific tech stack criteria   find businesses using HubSpot, Salesforce, Shopify, and 10,000+ other tools."
    },
    {
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M16.1327 19.9931C17.3807 19.2743 18.471 18.3129 19.3387 17.1661C19.059 16.7329 18.86 16.253 18.7513 15.7494L18.7104 15.5608C18.5932 15.0223 18.3171 14.531 17.9177 14.1499C17.5182 13.7688 17.0135 13.5153 16.4684 13.4218C12.0102 12.6503 12.0102 6.2762 16.4684 5.50248C16.9949 5.4122 17.4841 5.17246 17.8772 4.81205C18.2703 4.45164 18.5507 3.98588 18.6846 3.47066C17.6362 2.33273 16.3533 1.43397 14.9238 0.835942C13.4942 0.237916 11.9518 -0.0452401 10.4022 0.00586979C8.85251 0.0569797 7.33226 0.441148 5.94555 1.13206C4.55885 1.82297 3.33845 2.80429 2.36797 4.00881C1.39749 5.21333 0.699856 6.61257 0.322858 8.11069C-0.0541406 9.6088 -0.101594 11.1704 0.183749 12.6885C0.469091 14.2066 1.08049 15.6453 1.97605 16.9061C2.87162 18.1668 4.03019 19.2199 5.37241 19.9931V22.4986C5.37241 23.067 5.5991 23.6121 6.00261 24.0141C6.40612 24.416 6.95339 24.6418 7.52404 24.6418H13.9789C14.5496 24.6418 15.0969 24.416 15.5004 24.0141C15.9039 23.6121 16.1306 23.067 16.1306 22.4986L16.1327 19.9931ZM5.37456 28.3926C5.37456 27.9662 5.54458 27.5574 5.84721 27.2559C6.14984 26.9545 6.5603 26.7851 6.98828 26.7851H14.519C14.947 26.7851 15.3574 26.9545 15.6601 27.2559C15.9627 27.5574 16.1327 27.9662 16.1327 28.3926C16.1327 28.8189 15.9627 29.2277 15.6601 29.5292C15.3574 29.8306 14.947 30 14.519 30H6.98828C6.5603 30 6.14984 29.8306 5.84721 29.5292C5.54458 29.2277 5.37456 28.8189 5.37456 28.3926ZM21.0384 3.67427C21.4322 1.8825 23.9926 1.87179 24.4015 3.65927L24.4208 3.745L24.4595 3.91218C24.6918 4.89119 25.2071 5.78088 25.9418 6.47115C26.6764 7.16142 27.5981 7.62196 28.5928 7.79577C30.4691 8.12155 30.4691 10.8049 28.5928 11.1307C27.5924 11.3053 26.6658 11.7699 25.9291 12.4664C25.1924 13.1629 24.6782 14.0603 24.4509 15.0464L24.4015 15.2651C23.9926 17.0547 21.43 17.044 21.0341 15.25L20.9933 15.0636C20.7763 14.0737 20.2684 13.1706 19.5342 12.4694C18.8 11.7682 17.8727 11.3006 16.8707 11.1264C14.9967 10.8028 14.9967 8.12369 16.8707 7.79792C17.8692 7.62495 18.7938 7.16074 19.5272 6.46407C20.2607 5.76739 20.7702 4.86958 20.9911 3.88431L21.0234 3.745L21.0384 3.67427Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Competitive Intelligence",
      description: "See what technologies your target companies are using and identify opportunities to sell complementary or replacement solutions."
    },
    {
      icon: (
       <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 0C19.068 0 20.587 0.2065 22.0325 0.59325L18.312 4.312C18.0297 4.59538 17.7808 4.91009 17.57 5.25H17.5C15.0772 5.25 12.7088 5.96845 10.6943 7.3145C8.67976 8.66054 7.10965 10.5737 6.18248 12.8121C5.2553 15.0505 5.01271 17.5136 5.48538 19.8899C5.95805 22.2661 7.12475 24.4489 8.83794 26.1621C10.5511 27.8752 12.7339 29.042 15.1101 29.5146C17.4864 29.9873 19.9495 29.7447 22.1879 28.8175C24.4263 27.8904 26.3395 26.3202 27.6855 24.3057C29.0316 22.2912 29.75 19.9228 29.75 17.5V17.43C30.0883 17.22 30.4004 16.9721 30.6862 16.6862L34.4067 12.9675C34.7935 14.413 35 15.932 35 17.5C35 27.1652 27.1652 35 17.5 35C7.83475 35 0 27.1652 0 17.5C0 7.83475 7.83475 0 17.5 0ZM16.7755 8.77975C16.7755 10.269 16.702 11.7793 16.7825 13.2668L15.8375 14.2118C15.5124 14.5368 15.2546 14.9227 15.0786 15.3475C14.9027 15.7722 14.8122 16.2274 14.8122 16.6871C14.8122 17.1468 14.9027 17.6021 15.0786 18.0268C15.2546 18.4515 15.5124 18.8374 15.8375 19.1625C16.1626 19.4876 16.5485 19.7454 16.9732 19.9214C17.3979 20.0973 17.8532 20.1878 18.3129 20.1878C18.7726 20.1878 19.2278 20.0973 19.6525 19.9214C20.0773 19.7454 20.4632 19.4876 20.7882 19.1625L21.7332 18.2175C23.2207 18.298 24.7292 18.2245 26.2202 18.2245C26.082 19.8876 25.4711 21.4765 24.4594 22.8037C23.4478 24.131 22.0778 25.1413 20.5108 25.7155C18.9439 26.2897 17.2454 26.4037 15.6157 26.0443C13.9861 25.6849 12.4932 24.8669 11.3131 23.6869C10.1331 22.5068 9.31512 21.0139 8.95569 19.3843C8.59625 17.7546 8.71035 16.0561 9.28452 14.4892C9.85869 12.9222 10.869 11.5522 12.1963 10.5406C13.5235 9.52894 15.1124 8.91799 16.7755 8.77975ZM28.882 0.22225C29.2014 0.354688 29.4745 0.57879 29.6666 0.866266C29.8588 1.15374 29.9615 1.49171 29.9618 1.8375V5.04H33.1625C33.5086 5.04007 33.8468 5.14275 34.1346 5.33505C34.4223 5.52734 34.6465 5.80063 34.7789 6.12035C34.9114 6.44008 34.946 6.79189 34.8785 7.13131C34.811 7.47072 34.6444 7.78251 34.3997 8.02725L28.21 14.21C27.8819 14.5382 27.4368 14.7227 26.9727 14.7227H22.75L19.551 17.9235C19.2226 18.2519 18.7773 18.4363 18.3129 18.4363C17.8485 18.4363 17.4031 18.2519 17.0747 17.9235C16.7464 17.5951 16.5619 17.1498 16.5619 16.6854C16.5619 16.221 16.7464 15.7756 17.0747 15.4472L20.2755 12.25V8.0255C20.2753 7.79541 20.3205 7.56754 20.4085 7.35494C20.4965 7.14234 20.6255 6.94917 20.7882 6.7865L26.9745 0.60025C27.2192 0.355368 27.5311 0.188577 27.8706 0.12098C28.2102 0.0533827 28.5621 0.0880165 28.882 0.2205" fill="#0E7BF5"/>
</svg>
      ),
      title: "Real-Time Updates",
      description: "Get notified when companies adopt new technologies or change their tech stack   perfect for timely outreach."
    },
    {
      icon: (
        <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.36566 9.76889L3.31144 7.94489C3.07402 7.5399 2.68604 7.24526 2.23218 7.12527C1.77833 7.00527 1.29543 7.06967 0.888874 7.3044C0.482318 7.53913 0.185111 7.92514 0.0621101 8.3782C-0.0608908 8.83125 0.000300169 9.31456 0.23233 9.72267L3.34344 15.1111C3.5792 15.5194 3.96749 15.8174 4.42291 15.9394C4.87833 16.0614 5.36357 15.9975 5.77188 15.7618L11.1603 12.6507C11.5653 12.4132 11.86 12.0253 11.98 11.5714C12.0999 11.1176 12.0355 10.6347 11.8008 10.2281C11.5661 9.82154 11.1801 9.52434 10.727 9.40133C10.274 9.27833 9.79065 9.33953 9.38255 9.57156L8.00655 10.3662C9.20266 8.00899 11.1183 6.09386 13.4758 4.89836C15.8334 3.70287 18.5104 3.28912 21.1188 3.71708C23.7273 4.14504 26.1317 5.39247 27.9837 7.27859C29.8356 9.16472 31.0389 11.5916 31.4191 14.2074C31.7993 16.8233 31.3367 19.4922 30.0983 21.8275C28.8599 24.1628 26.9101 26.0431 24.5314 27.1959C22.1527 28.3488 19.4687 28.7142 16.8683 28.2393C14.268 27.7644 11.8864 26.4739 10.0688 24.5547C9.74438 24.2124 9.2973 24.0129 8.82588 24.0003C8.35445 23.9876 7.8973 24.1627 7.555 24.4871C7.21269 24.8115 7.01327 25.2586 7.0006 25.73C6.98793 26.2014 7.16305 26.6586 7.48744 27.0009C9.30925 28.9249 11.5804 30.3664 14.0969 31.1958C16.6134 32.0253 19.2966 32.2168 21.9054 31.7531C24.5142 31.2895 26.967 30.1851 29.0436 28.5393C31.1202 26.8935 32.7555 24.7578 33.8028 22.3238C34.8501 19.8899 35.2765 17.2339 35.0437 14.5945C34.8109 11.955 33.9263 9.41472 32.4692 7.20161C31.0122 4.9885 29.0283 3.1719 26.6957 1.91492C24.3631 0.657948 21.7549 -5.4116e-05 19.1052 6.42627e-07C15.9599 -0.000890605 12.8841 0.925279 10.2623 2.66275C7.64041 4.40022 5.59058 6.87191 4.36566 9.76889Z" fill="#0E7BF5"/>
<path d="M19.1053 7.11121C19.5768 7.11121 20.0289 7.29851 20.3623 7.63191C20.6957 7.9653 20.883 8.41749 20.883 8.88898V15.2641L23.9177 18.2988C24.2415 18.6341 24.4207 19.0831 24.4167 19.5493C24.4126 20.0154 24.2257 20.4613 23.896 20.7909C23.5664 21.1205 23.1205 21.3075 22.6544 21.3115C22.1883 21.3156 21.7392 21.1364 21.4039 20.8125L17.8484 17.257C17.515 16.9237 17.3276 16.4716 17.3275 16.0001V8.88898C17.3275 8.41749 17.5148 7.9653 17.8482 7.63191C18.1816 7.29851 18.6338 7.11121 19.1053 7.11121Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Comprehensive Coverage",
      description: "Access technographic data for millions of companies worldwide across 100+ technology categories."
    }
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
                Know What Tools <span className="text-gradient-cefer">Your Prospects Use</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto">
                Get behind the scenes of every company. Cefer's Technographics reveal the technologies your target companies use   from CRMs and marketing tools to cloud platforms and payment systems   so you can personalize your outreach and target smarter.
              </p>
              <p className="text-lg text-gray-700 max-w-5xl mx-auto">
                Stop guessing. Start selling with insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Technographics */}
      <section className="py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:whitespace-nowrap">
            What Is <span className="text-gradient-cefer">Technographics?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Technographics from Cefer.io is a technology intelligence tool that identifies the software, platforms, and tools companies use across their websites and digital infrastructure   giving you insights into their tech stack to inform your sales and marketing strategies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Whether you're selling software, services, or integrations   Technographics helps you find companies already using (or ready to switch from) specific technologies.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key <span className="text-gradient-cefer">Features</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Everything you need to understand tech usage</p>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center ${
                  index === features.length - 1 ? "md:col-span-2 mx-auto max-w-3xl" : ""
                }`}
              >
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#0e7bf5]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Example Use Case</h3>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              A SaaS company selling CRM integrations uses Cefer Technographics to find businesses already using Salesforce and Slack. They build a highly targeted campaign and achieve a 2x higher conversion rate compared to generic outreach.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49777 29C1.11738 29 0.77266 28.8429 0.463596 28.5287C0.154532 28.2146 0 27.8642 0 27.4775V23.6713C0 21.4963 0.665676 19.575 1.99703 17.9075C3.32838 16.24 5.04012 15.1767 7.13224 14.7175C6.18128 15.3942 5.44428 16.2458 4.92125 17.2724C4.39822 18.299 4.1367 19.4049 4.1367 20.59V27.4775C4.1367 27.7433 4.17236 28.0092 4.24369 28.275C4.31501 28.5408 4.43388 28.7825 4.6003 29H1.49777ZM6.73997 29C6.33581 29 5.98538 28.8492 5.68868 28.5476C5.39198 28.246 5.24315 27.8893 5.2422 27.4775V20.59C5.2422 18.8983 5.83085 17.4604 7.00814 16.2763C8.18544 15.0921 9.60571 14.5 11.2689 14.5H18.0089C19.6731 14.5 21.0877 15.0921 22.2526 16.2763C23.4175 17.4604 24 18.8983 24 20.59V22.91C24 24.6017 23.4175 26.0396 22.2526 27.2238C21.0877 28.4079 19.6731 29 18.0089 29H6.73997ZM12.0178 11.455C10.4487 11.455 9.11738 10.8992 8.02378 9.7875C6.93016 8.67583 6.38336 7.3225 6.38336 5.7275C6.38336 4.1325 6.93016 2.77917 8.02378 1.6675C9.11738 0.555834 10.4487 0 12.0178 0C13.5869 0 14.9183 0.555834 16.0119 1.6675C17.1055 2.77917 17.6523 4.1325 17.6523 5.7275C17.6523 7.3225 17.1055 8.67583 16.0119 9.7875C14.9183 10.8992 13.5869 11.455 12.0178 11.455Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">2x</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Higher Conversion Rate</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#0e7bf5]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">100%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Targeted Touchbacks</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 0C19.068 0 20.587 0.2065 22.0325 0.59325L18.312 4.312C18.0297 4.59538 17.7808 4.91009 17.57 5.25H17.5C15.0772 5.25 12.7088 5.96845 10.6943 7.3145C8.67976 8.66054 7.10965 10.5737 6.18248 12.8121C5.2553 15.0505 5.01271 17.5136 5.48538 19.8899C5.95805 22.2661 7.12475 24.4489 8.83794 26.1621C10.5511 27.8752 12.7339 29.042 15.1101 29.5146C17.4864 29.9873 19.9495 29.7447 22.1879 28.8175C24.4263 27.8904 26.3395 26.3202 27.6855 24.3057C29.0316 22.2912 29.75 19.9228 29.75 17.5V17.43C30.0883 17.22 30.4004 16.9721 30.6862 16.6862L34.4067 12.9675C34.7935 14.413 35 15.932 35 17.5C35 27.1652 27.1652 35 17.5 35C7.83475 35 0 27.1652 0 17.5C0 7.83475 7.83475 0 17.5 0ZM16.7755 8.77975C16.7755 10.269 16.702 11.7793 16.7825 13.2668L15.8375 14.2118C15.5124 14.5368 15.2546 14.9227 15.0786 15.3475C14.9027 15.7722 14.8122 16.2274 14.8122 16.6871C14.8122 17.1468 14.9027 17.6021 15.0786 18.0268C15.2546 18.4515 15.5124 18.8374 15.8375 19.1625C16.1626 19.4876 16.5485 19.7454 16.9732 19.9214C17.3979 20.0973 17.8532 20.1878 18.3129 20.1878C18.7726 20.1878 19.2278 20.0973 19.6525 19.9214C20.0773 19.7454 20.4632 19.4876 20.7882 19.1625L21.7332 18.2175C23.2207 18.298 24.7292 18.2245 26.2202 18.2245C26.082 19.8876 25.4711 21.4765 24.4594 22.8037C23.4478 24.131 22.0778 25.1413 20.5108 25.7155C18.9439 26.2897 17.2454 26.4037 15.6157 26.0443C13.9861 25.6849 12.4932 24.8669 11.3131 23.6869C10.1331 22.5068 9.31512 21.0139 8.95569 19.3843C8.59625 17.7546 8.71035 16.0561 9.28452 14.4892C9.85869 12.9222 10.869 11.5522 12.1963 10.5406C13.5235 9.52894 15.1124 8.91799 16.7755 8.77975ZM28.882 0.22225C29.2014 0.354688 29.4745 0.57879 29.6666 0.866266C29.8588 1.15374 29.9615 1.49171 29.9618 1.8375V5.04H33.1625C33.5086 5.04007 33.8468 5.14275 34.1346 5.33505C34.4223 5.52734 34.6465 5.80063 34.7789 6.12035C34.9114 6.44008 34.946 6.79189 34.8785 7.13131C34.811 7.47072 34.6444 7.78251 34.3997 8.02725L28.21 14.21C27.8819 14.5382 27.4368 14.7227 26.9727 14.7227H22.75L19.551 17.9235C19.2226 18.2519 18.7773 18.4363 18.3129 18.4363C17.8485 18.4363 17.4031 18.2519 17.0747 17.9235C16.7464 17.5951 16.5619 17.1498 16.5619 16.6854C16.5619 16.221 16.7464 15.7756 17.0747 15.4472L20.2755 12.25V8.0255C20.2753 7.79541 20.3205 7.56754 20.4085 7.35494C20.4965 7.14234 20.6255 6.94917 20.7882 6.7865L26.9745 0.60025C27.2192 0.355368 27.5311 0.188577 27.8706 0.12098C28.2102 0.0533827 28.5621 0.0880165 28.882 0.2205" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">Targeted</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Campaigns</div>
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
          <p className="text-xl text-gray-600 mb-8">Technology tells you who's ready to buy.</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With Technographics, you <span className="font-semibold">identify the best-fit prospects</span> based on their current tools and infrastructure   so you can personalize outreach and close deals faster.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Start Prospecting with Tech Data Today
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Find companies using the technologies that matter to your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Try Cefer.io Free
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
