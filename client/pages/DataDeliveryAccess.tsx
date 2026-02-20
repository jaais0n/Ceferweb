import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function DataDeliveryAccess() {
  const accessMethods = [
    {
      icon: (
        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.8 0H3.2C1.44 0 0.016 1.4625 0.016 3.25L0 22.75C0 24.5375 1.44 26 3.2 26H28.8C30.56 26 32 24.5375 32 22.75V3.25C32 1.4625 30.56 0 28.8 0ZM28.8 6.5L16 14.625L3.2 6.5V3.25L16 11.375L28.8 3.25V6.5Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Web Platform",
      description: "Use Cefer's intuitive dashboard to search, filter, and download leads instantly. Build targeted lists, enrich your CRM, or export CSV files with a few clicks.",
    },
    {
      icon: (
       <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.16" d="M14.7775 1.50024C18.2988 1.50024 21.6762 2.89905 24.1662 5.38892C26.6562 7.87889 28.0558 11.2562 28.0558 14.7776C28.0558 18.299 26.6562 21.6762 24.1662 24.1663C21.6762 26.6563 18.299 28.0559 14.7775 28.0559C11.2562 28.0558 7.87883 26.6562 5.38885 24.1663C2.89899 21.6763 1.50018 18.2989 1.50018 14.7776C1.50026 11.2562 2.89888 7.87889 5.38885 5.38892C7.87883 2.89894 11.2562 1.50032 14.7775 1.50024Z" fill="#0E7BF5" fillOpacity="0.1" stroke="#0E7BF5"/>
<path d="M32 32L24.5205 24.5205L32 32ZM24.5205 24.5205C25.7999 23.2411 26.8148 21.7222 27.5072 20.0506C28.1996 18.379 28.556 16.5873 28.556 14.778C28.556 12.9686 28.1996 11.177 27.5072 9.50537C26.8148 7.83375 25.7999 6.31488 24.5205 5.03548C23.2411 3.75607 21.7222 2.74119 20.0506 2.04879C18.379 1.35638 16.5873 1 14.778 1C12.9686 1 11.177 1.35638 9.50537 2.04879C7.83375 2.74119 6.31488 3.75607 5.03548 5.03548C2.4516 7.61935 1 11.1238 1 14.778C1 18.4321 2.4516 21.9366 5.03548 24.5205C7.61935 27.1043 11.1238 28.556 14.778 28.556C18.4321 28.556 21.9366 27.1043 24.5205 24.5205Z" fill="#0E7BF5" fillOpacity="0.1"/>
<path d="M32 32L24.5205 24.5205M24.5205 24.5205C25.7999 23.2411 26.8148 21.7222 27.5072 20.0506C28.1996 18.379 28.556 16.5873 28.556 14.778C28.556 12.9686 28.1996 11.177 27.5072 9.50537C26.8148 7.83375 25.7999 6.31488 24.5205 5.03548C23.2411 3.75607 21.7222 2.74119 20.0506 2.04879C18.379 1.35638 16.5873 1 14.778 1C12.9686 1 11.177 1.35638 9.50537 2.04879C7.83375 2.74119 6.31488 3.75607 5.03548 5.03548C2.4516 7.61935 1 11.1238 1 14.778C1 18.4321 2.4516 21.9366 5.03548 24.5205C7.61935 27.1043 11.1238 28.556 14.778 28.556C18.4321 28.556 21.9366 27.1043 24.5205 24.5205Z" stroke="#0E7BF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
      ),
      title: "Chrome Extension",
      description: "Capture and save leads directly from LinkedIn or websites while browsing      no extra steps required.",
    },
    {
      icon: (
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.7473 26.7212C1.55034 26.9047 1.28984 27.0046 1.02067 26.9998C0.751495 26.9951 0.494676 26.886 0.304315 26.6957C0.113953 26.5053 0.00491107 26.2485 0.000161871 25.9794C-0.00458733 25.7102 0.0953268 25.4497 0.278855 25.2527L3.06336 22.4669C1.99112 20.9805 1.80548 19.3292 2.02021 17.9093C2.2668 16.2858 3.04951 14.8617 3.74217 14.169L5.82016 12.0911C6.01497 11.8965 6.27905 11.7873 6.55438 11.7873C6.82971 11.7873 7.09379 11.8965 7.2886 12.0911L14.9079 19.7102C15.0044 19.8067 15.081 19.9213 15.1333 20.0473C15.1855 20.1734 15.2124 20.3086 15.2124 20.4451C15.2124 20.5816 15.1855 20.7168 15.1333 20.8428C15.081 20.9689 15.0044 21.0835 14.9079 21.18L12.8299 23.2579C12.1372 23.9506 10.7145 24.7333 9.09091 24.9798C7.67095 25.1946 6.01964 25.0075 4.53319 23.9353L1.7473 26.7212ZM12.1372 11.483C12.0421 11.585 11.9274 11.6669 11.8 11.7237C11.6725 11.7805 11.5349 11.811 11.3954 11.8135C11.2559 11.8159 11.1174 11.7903 10.988 11.738C10.8586 11.6858 10.7411 11.608 10.6424 11.5093C10.5438 11.4107 10.466 11.2932 10.4137 11.1638C10.3615 11.0344 10.3358 10.8959 10.3383 10.7564C10.3407 10.6168 10.3713 10.4793 10.4281 10.3518C10.4848 10.2244 10.5667 10.1097 10.6688 10.0146L12.7052 7.97818L12.0541 7.3271C11.8596 7.13229 11.7503 6.86822 11.7503 6.59289C11.7503 6.31757 11.8596 6.0535 12.0541 5.85869L14.1321 3.78076C14.8248 3.08811 16.2475 2.30542 17.8711 2.05884C19.2911 1.84412 20.9424 2.03114 22.4288 3.10335L25.2133 0.317532C25.3091 0.218256 25.4237 0.139052 25.5505 0.0845418C25.6772 0.0300316 25.8135 0.00130694 25.9515 4.357e-05C26.0894 -0.0012198 26.2263 0.0250035 26.354 0.0771835C26.4817 0.129363 26.5977 0.206455 26.6953 0.30396C26.7929 0.401465 26.8701 0.517431 26.9224 0.645091C26.9747 0.772751 27.0011 0.909549 27 1.0475C26.9988 1.18546 26.9702 1.3218 26.9158 1.44859C26.8615 1.57537 26.7824 1.69005 26.6832 1.78594L23.8987 4.57314C24.9709 6.05817 25.1593 7.70944 24.9432 9.13074C24.6966 10.7529 23.9139 12.1756 23.2212 12.8683L21.1432 14.9462C20.9484 15.1408 20.6844 15.25 20.409 15.25C20.1337 15.25 19.8696 15.1408 19.6748 14.9462L19.0237 14.2951L16.9873 16.3315C16.8921 16.4336 16.7774 16.5154 16.65 16.5722C16.5225 16.629 16.385 16.6595 16.2455 16.662C16.106 16.6645 15.9674 16.6388 15.838 16.5865C15.7086 16.5343 15.5911 16.4565 15.4924 16.3579C15.3938 16.2592 15.316 16.1417 15.2638 16.0123C15.2115 15.8829 15.1858 15.7444 15.1883 15.6049C15.1908 15.4654 15.2213 15.3278 15.2781 15.2003C15.3349 15.0729 15.4167 14.9582 15.5188 14.8631L17.5553 12.8267L14.1751 9.44659L12.1372 11.483Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "API Integration",
      description: "Connect to Cefer's RESTful API for programmatic access — enrich records, trigger lookups, and sync data in real time.",
    },
    {
      icon: (
        <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6V3C15 1.35 13.65 0 12 0H3C1.35 0 0 1.35 0 3V24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V9C30 7.35 28.65 6 27 6H15ZM6 24H3V21H6V24ZM6 18H3V15H6V18ZM6 12H3V9H6V12ZM6 6H3V3H6V6ZM12 24H9V21H12V24ZM12 18H9V15H12V18ZM12 12H9V9H12V12ZM12 6H9V3H12V6ZM25.5 24H15V21H18V18H15V15H18V12H15V9H25.5C26.325 9 27 9.675 27 10.5V22.5C27 23.325 26.325 24 25.5 24ZM24 12H21V15H24V12ZM24 18H21V21H24V18Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Bulk Downloads",
      description: "Upload lists or request large datasets for campaigns      complete with verified emails, phone numbers, company info, and technographics.",
    },
  ];

  const deliveryFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Flexible Formats",
      description: "Export data in CSV, Excel, or JSON — whatever fits your tools and workflow.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Seamless CRM Sync",
      description: "Push verified contacts directly to Salesforce, HubSpot, or any CRM via native integrations.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Real-Time Updates",
      description: "Receive live data refreshes so your contact lists always reflect the latest verified information.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#0e7bf5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      title: "Customizable Access",
      description: "Set role-based permissions, usage limits, and team-level access controls for your data.",
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
                Data Delivery & <span className="text-gradient-cefer">Access</span>
              </h1>
              <p className="text-lg font-semibold text-gray-700 mb-4 max-w-5xl mx-auto">
                Your Data, Your Way
              </p>
              <p className="text-base text-gray-700 max-w-4xl mx-auto mb-2">
                Cefer makes accessing verified B2B data fast, flexible, and seamless.
              </p>
              <p className="text-base text-gray-700 max-w-4xl mx-auto">
                Whether you're a small sales team or a large enterprise, our platform ensures that the right data reaches you exactly when and how you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Access Cefer Data */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            How You Can Access <span className="text-gradient-cefer">Cefer Data</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Multiple ways to access verified data that fits your workflow</p>
          <div className="grid md:grid-cols-2 gap-8">
            {accessMethods.map((method, index) => (
              <div key={index} className="flex gap-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Delivery Features */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key Delivery <span className="text-gradient-cefer">Features</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Designed for flexibility and efficiency</p>
          <div className="grid md:grid-cols-2 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Marketing Team Enriches 50,000 Leads Instantly</h3>
            <p className="text-gray-700 leading-relaxed mb-2 text-center max-w-3xl mx-auto">
              A marketing operations team needs 50,000 verified leads for a multi-channel campaign.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              Using Cefer's API and bulk download feature, they automatically enrich and push data into Salesforce      saving weeks of manual research while ensuring high-quality, verified leads.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49777 29C1.11738 29 0.77266 28.8429 0.463596 28.5287C0.154532 28.2146 0 27.8642 0 27.4775V23.6713C0 21.4963 0.665676 19.575 1.99703 17.9075C3.32838 16.24 5.04012 15.1767 7.13224 14.7175C6.18128 15.3942 5.44428 16.2458 4.92125 17.2724C4.39822 18.299 4.1367 19.4049 4.1367 20.59V27.4775C4.1367 27.7433 4.17236 28.0092 4.24369 28.275C4.31501 28.5408 4.43388 28.7825 4.6003 29H1.49777ZM6.73997 29C6.33581 29 5.98538 28.8492 5.68868 28.5476C5.39198 28.246 5.24315 27.8893 5.2422 27.4775V20.59C5.2422 18.8983 5.83085 17.4604 7.00814 16.2763C8.18544 15.0921 9.60571 14.5 11.2689 14.5H18.0089C19.6731 14.5 21.0877 15.0921 22.2526 16.2763C23.4175 17.4604 24 18.8983 24 20.59V22.91C24 24.6017 23.4175 26.0396 22.2526 27.2238C21.0877 28.4079 19.6731 29 18.0089 29H6.73997ZM12.0178 11.455C10.4487 11.455 9.11738 10.8992 8.02378 9.7875C6.93016 8.67583 6.38336 7.3225 6.38336 5.7275C6.38336 4.1325 6.93016 2.77917 8.02378 1.6675C9.11738 0.555834 10.4487 0 12.0178 0C13.5869 0 14.9183 0.555834 16.0119 1.6675C17.1055 2.77917 17.6523 4.1325 17.6523 5.7275C17.6523 7.3225 17.1055 8.67583 16.0119 9.7875C14.9183 10.8992 13.5869 11.455 12.0178 11.455Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">50,000</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Leads</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9.79997C15.1598 9.79997 16.1 8.85977 16.1 7.69998C16.1 6.54018 15.1598 5.59998 14 5.59998C12.8402 5.59998 11.9 6.54018 11.9 7.69998C11.9 8.85977 12.8402 9.79997 14 9.79997Z" fill="#0E7BF5"/>
<path d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35942C3.91973 3.89776 2.12532 6.08426 1.06569 8.64243C0.00606597 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05844 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 12.1615 27.6379 10.341 26.9343 8.64243C26.2307 6.94387 25.1995 5.40052 23.8995 4.1005C22.5995 2.80048 21.0561 1.76925 19.3576 1.06569C17.659 0.362121 15.8385 0 14 0ZM14 25.2C11.7849 25.2 9.61945 24.5431 7.77762 23.3125C5.93579 22.0818 4.50026 20.3326 3.65255 18.286C2.80485 16.2395 2.58306 13.9876 3.01521 11.815C3.44736 9.6424 4.51406 7.64675 6.08041 6.0804C7.64676 4.51405 9.6424 3.44736 11.815 3.0152C13.9876 2.58305 16.2395 2.80485 18.2861 3.65255C20.3326 4.50025 22.0818 5.93578 23.3125 7.77761C24.5431 9.61944 25.2 11.7848 25.2 14C25.2 16.9704 24.02 19.8192 21.9196 21.9196C19.8192 24.02 16.9704 25.2 14 25.2Z" fill="#0E7BF5"/>
<path d="M20.3 11.9L19.6 9.80005L15.4 11.2H12.6L8.40001 9.80005L7.70001 11.9L11.9 13.3V15.4L9.80001 21.35L11.9 22.4L13.65 17.5H14.35L16.1 22.4L18.2 21.35L16.1 15.4V13.3L20.3 11.9Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">Weeks</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Saved in Research</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#0e7bf5]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">Automatic</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Enrichment</div>
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
            Fast access to verified data lets your team act immediately, personalize outreach, and close deals faster.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Cefer ensures your data delivery is flexible, real-time, and tailored to your workflow.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Get Your Data Instantly
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Access verified B2B contacts wherever you need them.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Start Now
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
