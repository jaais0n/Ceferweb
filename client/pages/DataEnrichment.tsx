import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function DataEnrichment() {
  const features = [
    {
      icon: (
        <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L14 16.3084V28.5518L21 32V16.3084L35 0H0Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "Bulk Enrichment in Minutes",
      description: "Upload any CSV or connect your CRM  Cefer.io enriches thousands of records automatically with verified business data."
    },
    {
      icon: (
        <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.8787 0.527498C15.7977 -0.574773 17.5878 0.178494 17.4424 1.6065L16.4157 11.6375H24.7206C24.9969 11.6376 25.2674 11.7164 25.5006 11.8647C25.7337 12.013 25.9198 12.2247 26.0369 12.4749C26.1541 12.7252 26.1976 13.0036 26.1623 13.2777C26.1269 13.5517 26.0142 13.81 25.8374 14.0223L11.2955 31.4725C10.3765 32.5748 8.5864 31.8215 8.73182 30.3935L9.75848 20.3625H1.45364C1.17732 20.3624 0.906756 20.2836 0.673621 20.1353C0.440486 19.987 0.254433 19.7753 0.137249 19.5251C0.0200657 19.2748 -0.0233983 18.9964 0.0119471 18.7224C0.0472926 18.4483 0.159984 18.19 0.336826 17.9777L14.8787 0.527498Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "Real-Time Data Updates",
      description:
        "Keep your data fresh and relevant. Cefer.io continuously updates contact and company records as information changes."
    },
    {
      icon: (
        <div data-svg-wrapper data-layer="Group" className="Group" style={{position: 'relative'}}>
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9769 5.88907C12.9983 2.90013 17.1282 2.80961 18.3391 5.61751L18.4416 5.89078L19.8199 9.92159C20.1358 10.846 20.6462 11.6919 21.3168 12.4023C21.9874 13.1126 22.8025 13.6709 23.7072 14.0395L24.0779 14.1778L28.1087 15.5545C31.0976 16.5758 31.1881 20.7057 28.382 21.9166L28.1087 22.0191L24.0779 23.3975C23.1531 23.7131 22.3069 24.2235 21.5962 24.8941C20.8856 25.5647 20.327 26.3799 19.9583 27.2848L19.8199 27.6537L18.4433 31.6862C17.4219 34.6752 13.2921 34.7657 12.0828 31.9595L11.9769 31.6862L10.6003 27.6554C10.2846 26.7307 9.77427 25.8844 9.10367 25.1738C8.43307 24.4631 7.61783 23.9045 6.71296 23.5358L6.34404 23.3975L2.31323 22.0208C-0.677418 20.9995 -0.76794 16.8696 2.03996 15.6604L2.31323 15.5545L6.34404 14.1778C7.26845 13.862 8.11437 13.3515 8.82473 12.6809C9.5351 12.0103 10.0934 11.1952 10.462 10.2905L10.6003 9.92159L11.9769 5.88907ZM28.8738 3.08609e-07C29.1934 -4.03033e-07 29.5065 0.0896313 29.7776 0.258709C30.0487 0.427786 30.267 0.669528 30.4076 0.956462L30.4896 1.15629L31.0874 2.90867L32.8415 3.50646C33.1617 3.61525 33.4424 3.81665 33.648 4.08514C33.8536 4.35364 33.9749 4.67713 33.9965 5.01463C34.0181 5.35213 33.939 5.68844 33.7693 5.98094C33.5995 6.27344 33.3467 6.50896 33.043 6.65766L32.8415 6.73964L31.0891 7.33743L30.4913 9.09151C30.3823 9.41164 30.1808 9.6922 29.9122 9.89766C29.6436 10.1031 29.32 10.2242 28.9825 10.2456C28.6451 10.267 28.3088 10.1878 28.0164 10.0179C27.724 9.848 27.4886 9.59514 27.3401 9.29135L27.2581 9.09151L26.6603 7.33914L24.9062 6.74135C24.586 6.63256 24.3053 6.43116 24.0997 6.16267C23.8941 5.89417 23.7728 5.57068 23.7512 5.23318C23.7296 4.89568 23.8087 4.55937 23.9784 4.26687C24.1482 3.97437 24.401 3.73885 24.7047 3.59015L24.9062 3.50817L26.6586 2.91038L27.2564 1.15629C27.3716 0.818844 27.5895 0.525898 27.8795 0.318534C28.1696 0.11117 28.5173 -0.000213977 28.8738 3.08609e-07Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "Over 80+ Data Points",
      description: "Address, firmographics like phone, company size, revenue, location, LinkedIn, technologies used, and dozens more."
    },
    {
      icon: (
        <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 17.0775V34.1539C31 34.9088 30.7031 35.6327 30.1746 36.1664C29.6461 36.7001 28.9292 37 28.1818 37H2.81818C2.07075 37 1.35394 36.7001 0.825426 36.1664C0.296915 35.6327 0 34.9088 0 34.1539V17.0775C0 16.3227 0.296915 15.5988 0.825426 15.0651C1.35394 14.5313 2.07075 14.2315 2.81818 14.2315H14.0909V22.7697C14.0909 23.1471 14.2394 23.509 14.5036 23.7759C14.7679 24.0428 15.1263 24.1927 15.5 24.1927C15.8737 24.1927 16.2321 24.0428 16.4964 23.7759C16.7606 23.509 16.9091 23.1471 16.9091 22.7697V14.2315H28.1818C28.9292 14.2315 29.6461 14.5313 30.1746 15.0651C30.7031 15.5988 31 16.3227 31 17.0775ZM16.9091 4.859L21.5485 9.54612C21.8129 9.81314 22.1715 9.96315 22.5455 9.96315C22.9194 9.96315 23.278 9.81314 23.5424 9.54612C23.8068 9.2791 23.9553 8.91695 23.9553 8.53932C23.9553 8.1617 23.8068 7.79955 23.5424 7.53253L16.4969 0.417357C16.3661 0.285048 16.2107 0.180087 16.0396 0.108473C15.8685 0.0368602 15.6852 0 15.5 0C15.3148 0 15.1315 0.0368602 14.9604 0.108473C14.7893 0.180087 14.6339 0.285048 14.5031 0.417357L7.45761 7.53253C7.19321 7.79955 7.04467 8.1617 7.04467 8.53932C7.04467 8.91695 7.19321 9.2791 7.45761 9.54612C7.72202 9.81314 8.08062 9.96315 8.45455 9.96315C8.82847 9.96315 9.18707 9.81314 9.45148 9.54612L14.0909 4.859V14.2315H16.9091V4.859Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "Smart Matching Engine",
      description: "Our AI automatically identifies and merges duplicate or outdated records  ensuring your CRM stays clean and accurate."
    },
    {
      icon: (
        <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.817 1.21156e-05H2.17998C0.97599 1.21156e-05 0 0.991521 0.00133332 2.21132L0 25.7887V25.7927C0 27.0125 0.977323 28 2.17998 28H29.8197C31.025 28 31.9997 27.0085 31.9997 25.7887V2.21132C32.021 1.00908 30.9864 -0.00404037 29.817 1.21156e-05ZM5.30528 1.68855C5.96127 1.00368 7.0106 2.06678 6.33194 2.73139C5.67728 3.41761 4.62795 2.35451 5.30528 1.6899V1.68855ZM2.39998 1.69395C3.07597 1.00638 4.10663 2.05192 3.4293 2.73544C2.77197 3.41356 1.73065 2.35721 2.39998 1.69395ZM31.333 25.79C31.349 26.6154 30.6344 27.3408 29.817 27.3246H2.17998C1.77838 27.3239 1.39346 27.1617 1.10974 26.8738C0.826013 26.5858 0.666659 26.1956 0.66666 25.7887L0.667993 4.42263H31.333V25.79ZM14.6665 19.6181L22.5944 13.4354C22.9078 13.1652 23.3624 13.6096 23.1131 13.9379L23.1104 13.9352L17.8625 22.5129C17.699 22.7846 17.4797 23.0173 17.2194 23.1952C16.9591 23.3732 16.664 23.4922 16.3542 23.5441C16.0444 23.596 15.7272 23.5797 15.4242 23.4961C15.1213 23.4126 14.8396 23.2638 14.5985 23.06C13.5519 22.1577 13.5172 20.5812 14.6652 19.6181H14.6665ZM21.0171 18.605C21.1371 18.378 23.6864 14.308 23.7638 14.0797C26.5051 16.5288 27.8024 19.999 27.6277 23.5706H22.5358C22.6331 21.693 22.1491 19.9531 21.0171 18.605ZM9.44524 23.5787H4.37062C3.89463 14.0932 13.9012 7.72675 22.2238 12.8802L17.6092 16.4166C13.2092 15.3873 9.12391 18.7266 9.44524 23.5787Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "Seamless Integrations",
      description:
        "Sync enriched data directly with HubSpot, Salesforce, Pipedrive, or export it instantly for outbound campaigns."
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
                Turn Basic Leads Into <span className="text-gradient-cefer">Powerful Insights</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto">
                Don't just collect contactsenrich them.
              </p>
              <p className="text-base text-gray-700 max-w-5xl mx-auto">
                Cefer Data Enrichment instantly fills in missing details like company info, job title, revenue, location, tech stack, and social links  so your CRM stays accurate, actionable, and ready to close deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Data Enrichment */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What Is <span className="text-gradient-cefer">Data Enrichment?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Data Enrichment in Cefer.io enhances every contact and company record with verified, up-to-date information from our global database. Whether you upload your own list or integrate your CRM, Cefer.io automatically adds verified data points that make your outreach smarter and more personal.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            No more manual research. No more incomplete profiles. Just clean, complete, and sales-ready data at your fingertips.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key <span className="text-gradient-cefer">Features</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Enrich your data with precision and speed</p>
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
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              A B2B SaaS startup uploads 5,000 cold contacts into Cefer.io. Within minutes, Cefer.io enriches them with job titles, company names, revenue, and LinkedIn URLs  turning cold contacts into warm, targeted prospects.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              In the first week, their SDR team sees a 30% increase in response rates.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Incomplete data slows your sales momentum.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mt-10 max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg className="w-8 h-8" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.49777 29C1.11738 29 0.77266 28.8429 0.463596 28.5287C0.154532 28.2146 0 27.8642 0 27.4775V23.6713C0 21.4963 0.665676 19.575 1.99703 17.9075C3.32838 16.24 5.04012 15.1767 7.13224 14.7175C6.18128 15.3942 5.44428 16.2458 4.92125 17.2724C4.39822 18.299 4.1367 19.4049 4.1367 20.59V27.4775C4.1367 27.7433 4.17236 28.0092 4.24369 28.275C4.31501 28.5408 4.43388 28.7825 4.6003 29H1.49777ZM6.73997 29C6.33581 29 5.98538 28.8492 5.68868 28.5476C5.39198 28.246 5.24315 27.8893 5.2422 27.4775V20.59C5.2422 18.8983 5.83085 17.4604 7.00814 16.2763C8.18544 15.0921 9.60571 14.5 11.2689 14.5H18.0089C19.6731 14.5 21.0877 15.0921 22.2526 16.2763C23.4175 17.4604 24 18.8983 24 20.59V22.91C24 24.6017 23.4175 26.0396 22.2526 27.2238C21.0877 28.4079 19.6731 29 18.0089 29H6.73997ZM12.0178 11.455C10.4487 11.455 9.11738 10.8992 8.02378 9.7875C6.93016 8.67583 6.38336 7.3225 6.38336 5.7275C6.38336 4.1325 6.93016 2.77917 8.02378 1.6675C9.11738 0.555834 10.4487 0 12.0178 0C13.5869 0 14.9183 0.555834 16.0119 1.6675C17.1055 2.77917 17.6523 4.1325 17.6523 5.7275C17.6523 7.3225 17.1055 8.67583 16.0119 9.7875C14.9183 10.8992 13.5869 11.455 12.0178 11.455Z" fill="#0E7BF5"/>
    </svg>
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">5,000</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Contacts Enriched</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg className="w-8 h-8" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.875 0.9375C1.875 0.68886 1.77623 0.450403 1.60041 0.274587C1.4246 0.098772 1.18614 0 0.9375 0C0.68886 0 0.450403 0.098772 0.274587 0.274587C0.098772 0.450403 0 0.68886 0 0.9375V22.3125C0 23.5557 0.49386 24.748 1.37294 25.6271C2.25201 26.5061 3.4443 27 4.6875 27H26.0625C26.3111 27 26.5496 26.9012 26.7254 26.7254C26.9012 26.5496 27 26.3111 27 26.0625C27 25.8139 26.9012 25.5754 26.7254 25.3996C26.5496 25.2238 26.3111 25.125 26.0625 25.125H4.6875C3.94158 25.125 3.22621 24.8287 2.69876 24.3012C2.17132 23.7738 1.875 23.0584 1.875 22.3125V0.9375ZM16.5 5.4375C16.5 4.92 16.92 4.5 17.4375 4.5H24.9375C25.455 4.5 25.875 4.92 25.875 5.4375V12.9375C25.875 13.0606 25.8508 13.1825 25.8036 13.2963C25.7565 13.41 25.6875 13.5134 25.6004 13.6004C25.5134 13.6875 25.41 13.7565 25.2963 13.8036C25.1825 13.8508 25.0606 13.875 24.9375 13.875C24.8144 13.875 24.6925 13.8508 24.5787 13.8036C24.465 13.7565 24.3616 13.6875 24.2746 13.6004C24.1875 13.5134 24.1185 13.41 24.0714 13.2963C24.0242 13.1825 24 13.0606 24 12.9375V7.701L16.413 15.288C16.2425 15.4583 16.013 15.5564 15.7721 15.562C15.5312 15.5676 15.2974 15.4802 15.1193 15.318L11.6558 12.1702L6.1005 17.7255C5.92466 17.9013 5.68617 18.0001 5.4375 18.0001C5.18883 18.0001 4.95034 17.9013 4.7745 17.7255C4.59866 17.5497 4.49988 17.3112 4.49988 17.0625C4.49988 16.8138 4.59866 16.5753 4.7745 16.3995L10.962 10.212C11.1325 10.0417 11.362 9.94356 11.6029 9.93797C11.8438 9.93239 12.0776 10.0198 12.2557 10.182L15.7192 13.3298L22.674 6.375H17.4375C16.92 6.375 16.5 5.955 16.5 5.4375Z" fill="#0E7BF5"/>
    </svg>
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">30%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Increase in Response Rate</div>
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
          <p className="text-xl text-gray-600 mb-8">Stop guessing who to contact.</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            With Cefer Data Enrichment, every record is more accurate, complete, and engagement-ready - so your team can convert faster and build stronger relationships.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Enrich Your Data Today
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Upgrade your CRM with verified, complete contact insights.
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
