import { Link } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

export default function ChromeExtension() {
  const features = [
    {
      icon: (
        <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.61235 0.0540937C8.01708 -0.0550391 8.4482 0.00234931 8.81102 0.213653C9.17383 0.424956 9.43867 0.772895 9.54735 1.18104L10.4938 4.73836C10.5476 4.9408 10.5614 5.15196 10.5343 5.35977C10.5073 5.56759 10.4399 5.768 10.3361 5.94955C10.1264 6.31621 9.78086 6.58382 9.37556 6.6935C8.97026 6.80318 8.53836 6.74596 8.17489 6.53442C7.81141 6.32288 7.54613 5.97434 7.4374 5.56549L6.4973 2.00605C6.44342 1.80374 6.42957 1.59271 6.45656 1.38501C6.48354 1.17731 6.55083 0.977005 6.65457 0.795542C6.75832 0.614078 6.89648 0.455011 7.06118 0.327426C7.22588 0.199841 7.41389 0.10624 7.61445 0.0519674M0.0536238 7.69393C-0.0545611 8.10221 0.00232891 8.53711 0.211797 8.9031C0.421265 9.2691 0.766181 9.53625 1.17078 9.64588L4.6972 10.5985C4.90018 10.6611 5.11358 10.6818 5.32468 10.6595C5.53577 10.6371 5.74024 10.5721 5.92589 10.4683C6.11154 10.3645 6.27457 10.224 6.40525 10.0553C6.53594 9.88658 6.6316 9.69304 6.68654 9.48621C6.74148 9.27939 6.75456 9.06353 6.72502 8.85149C6.69548 8.63946 6.62391 8.4356 6.51458 8.25207C6.40526 8.06854 6.26041 7.90909 6.08868 7.78324C5.91696 7.6574 5.72187 7.56772 5.51504 7.51957L1.98862 6.56486C1.58389 6.45573 1.15277 6.51311 0.789953 6.72442C0.427138 6.93572 0.162304 7.28366 0.0536238 7.6918M9.32813 11.87C9.20451 11.4956 9.18663 11.0938 9.27649 10.7097C9.36634 10.3256 9.56039 9.97435 9.83692 9.69518C10.1134 9.41602 10.4615 9.21999 10.8422 9.12904C11.2229 9.03809 11.6212 9.05581 11.9924 9.18022L27.0003 14.2302C28.9395 14.883 28.9142 17.6578 26.9623 18.2745L22.6919 19.6289L28.383 25.37C28.7783 25.7689 29.0002 26.31 29 26.874C28.9998 27.4381 28.7775 27.9789 28.382 28.3776C27.9865 28.7763 27.4501 29.0002 26.891 29C26.3318 28.9998 25.7957 28.7755 25.4004 28.3766L19.6966 22.6206L18.3434 26.9711C17.7321 28.9379 14.9793 28.9634 14.3321 27.0072L9.32813 11.87ZM4.25666 18.3255C4.1109 18.4779 3.93652 18.5994 3.74368 18.6831C3.55085 18.7668 3.34343 18.8109 3.13352 18.8128C2.92361 18.8147 2.71542 18.7745 2.5211 18.6944C2.32678 18.6143 2.15022 18.496 2.00172 18.3463C1.85321 18.1967 1.73575 18.0187 1.65617 17.8227C1.57659 17.6268 1.53649 17.4168 1.53821 17.205C1.53994 16.9933 1.58345 16.784 1.66621 16.5894C1.74897 16.3948 1.86932 16.2188 2.02024 16.0716L4.60446 13.4669C4.90414 13.1852 5.30051 13.0318 5.71007 13.0391C6.11962 13.0464 6.51039 13.2138 6.80003 13.5059C7.08968 13.7981 7.25559 14.1923 7.26281 14.6055C7.27004 15.0186 7.11802 15.4184 6.83877 15.7208L4.25666 18.3255ZM17.8733 4.31097C18.1614 4.01034 18.321 3.60758 18.3176 3.18944C18.3142 2.7713 18.1481 2.37124 17.8551 2.07543C17.5621 1.77961 17.1657 1.6117 16.7512 1.60787C16.3367 1.60404 15.9373 1.7646 15.639 2.05495L13.0548 4.65968C12.767 4.96059 12.6078 5.3635 12.6116 5.78163C12.6154 6.19977 12.7818 6.59967 13.0751 6.89521C13.3683 7.19075 13.7649 7.35827 14.1794 7.36171C14.5939 7.36514 14.9932 7.20421 15.2912 6.91357L17.8733 4.31097Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "One-Click Lead Capture",
      description: "Find someone on Linkedln or a company site? Save their verified contact details instantly with one click."
    },
    {
      icon: (
        <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.8898 1.18322C20.6117 0.738926 20.2021 0.392378 19.7179 0.191815C19.2337 -0.00874697 18.699 -0.0533451 18.1882 0.0642304L14.5634 0.896919C14.1919 0.982308 13.8059 0.982308 13.4344 0.896919L9.80948 0.0642304C9.29874 -0.0533451 8.76405 -0.00874697 8.27984 0.191815C7.79563 0.392378 7.38599 0.738926 7.10795 1.18322L5.13221 4.33655C4.9306 4.65914 4.65843 4.93133 4.33586 5.13496L1.18274 7.11084C0.73924 7.38865 0.393222 7.79765 0.192716 8.28106C-0.00779016 8.76447 -0.0528394 9.29832 0.0638212 9.8085L0.896456 13.4377C0.981531 13.8085 0.981531 14.1938 0.896456 14.5647L0.0638212 18.1918C-0.0532928 18.7023 -0.00847028 19.2366 0.192058 19.7204C0.392585 20.2043 0.738856 20.6136 1.18274 20.8915L4.33586 22.8674C4.65843 23.069 4.9306 23.3412 5.13423 23.6638L7.10997 26.8171C7.6785 27.7264 8.76314 28.1761 9.80948 27.9361L13.4344 27.1034C13.8059 27.018 14.1919 27.018 14.5634 27.1034L18.1903 27.9361C18.7007 28.0532 19.235 28.0084 19.7188 27.8079C20.2026 27.6073 20.6119 27.261 20.8898 26.8171L22.8655 23.6638C23.0671 23.3412 23.3393 23.069 23.6619 22.8674L26.817 20.8915C27.2609 20.6132 27.607 20.2034 27.8072 19.7192C28.0074 19.235 28.0517 18.7004 27.9339 18.1898L27.1033 14.5647C27.0179 14.1932 27.0179 13.8072 27.1033 13.4356L27.9359 9.8085C28.0532 9.29824 28.0087 8.7641 27.8086 8.28029C27.6084 7.79649 27.2625 7.38704 26.819 7.10882L23.6639 5.13295C23.3418 4.93096 23.0695 4.65869 22.8675 4.33655L20.8898 1.18322ZM19.8757 9.50406C20.0004 9.27475 20.0313 9.00601 19.9619 8.75438C19.8925 8.50275 19.7282 8.28786 19.5036 8.15491C19.279 8.02196 19.0115 7.98132 18.7576 8.04155C18.5036 8.10177 18.2829 8.25816 18.1419 8.47781L12.8699 17.4015L9.6865 14.353C9.59206 14.256 9.47906 14.1791 9.35424 14.1267C9.22941 14.0744 9.09532 14.0477 8.95996 14.0483C8.82461 14.0489 8.69075 14.0767 8.56639 14.1302C8.44203 14.1836 8.3297 14.2615 8.23611 14.3593C8.14252 14.4571 8.06958 14.5728 8.02165 14.6994C7.97371 14.826 7.95177 14.9609 7.95711 15.0962C7.96246 15.2314 7.99499 15.3642 8.05277 15.4867C8.11054 15.6091 8.19238 15.7186 8.2934 15.8087L12.3941 19.7383C12.5038 19.8432 12.6359 19.922 12.7803 19.9688C12.9248 20.0155 13.078 20.029 13.2284 20.0083C13.3788 19.9876 13.5226 19.9331 13.6491 19.849C13.7755 19.7649 13.8813 19.6533 13.9585 19.5225L19.8757 9.50406Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "Verified Contact Data",
      description: "Get accurate emails, phone numbers, job titles, and company info  all validated by Cefer's 3-layer verification process."
    },
    {
      icon: (
       <div data-svg-wrapper data-layer="Vector" className="Vector">
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.1327 19.9931C17.3807 19.2743 18.471 18.3129 19.3387 17.1661C19.059 16.7329 18.86 16.253 18.7513 15.7494L18.7104 15.5608C18.5932 15.0223 18.3171 14.531 17.9177 14.1499C17.5182 13.7688 17.0135 13.5153 16.4684 13.4218C12.0102 12.6503 12.0102 6.2762 16.4684 5.50248C16.9949 5.4122 17.4841 5.17246 17.8772 4.81205C18.2703 4.45164 18.5507 3.98588 18.6846 3.47066C17.6362 2.33273 16.3533 1.43397 14.9238 0.835942C13.4942 0.237916 11.9518 -0.0452401 10.4022 0.00586979C8.85251 0.0569797 7.33226 0.441148 5.94555 1.13206C4.55885 1.82297 3.33845 2.80429 2.36797 4.00881C1.39749 5.21333 0.699856 6.61257 0.322858 8.11069C-0.0541406 9.6088 -0.101594 11.1704 0.183749 12.6885C0.469091 14.2066 1.08049 15.6453 1.97605 16.9061C2.87162 18.1668 4.03019 19.2199 5.37241 19.9931V22.4986C5.37241 23.067 5.5991 23.6121 6.00261 24.0141C6.40612 24.416 6.95339 24.6418 7.52404 24.6418H13.9789C14.5496 24.6418 15.0969 24.416 15.5004 24.0141C15.9039 23.6121 16.1306 23.067 16.1306 22.4986L16.1327 19.9931ZM5.37456 28.3926C5.37456 27.9662 5.54458 27.5574 5.84721 27.2559C6.14984 26.9545 6.5603 26.7851 6.98828 26.7851H14.519C14.947 26.7851 15.3574 26.9545 15.6601 27.2559C15.9627 27.5574 16.1327 27.9662 16.1327 28.3926C16.1327 28.8189 15.9627 29.2277 15.6601 29.5292C15.3574 29.8306 14.947 30 14.519 30H6.98828C6.5603 30 6.14984 29.8306 5.84721 29.5292C5.54458 29.2277 5.37456 28.8189 5.37456 28.3926ZM21.0384 3.67427C21.4322 1.8825 23.9926 1.87179 24.4015 3.65927L24.4208 3.745L24.4595 3.91218C24.6918 4.89119 25.2071 5.78088 25.9418 6.47115C26.6764 7.16142 27.5981 7.62196 28.5928 7.79577C30.4691 8.12155 30.4691 10.8049 28.5928 11.1307C27.5924 11.3053 26.6658 11.7699 25.9291 12.4664C25.1924 13.1629 24.6782 14.0603 24.4509 15.0464L24.4015 15.2651C23.9926 17.0547 21.43 17.044 21.0341 15.25L20.9933 15.0636C20.7763 14.0737 20.2684 13.1706 19.5342 12.4694C18.8 11.7682 17.8727 11.3006 16.8707 11.1264C14.9967 10.8028 14.9967 8.12369 16.8707 7.79792C17.8692 7.62495 18.7938 7.16074 19.5272 6.46407C20.2607 5.76739 20.7702 4.86958 20.9911 3.88431L21.0234 3.745L21.0384 3.67427Z" fill="#0E7BF5"/>
    </svg>
</div>
      ),
      title: "Instant Enrichment",
      description: "Automatically add missing details like company revenue, location, and tech stack as you browse."
    },
    {
      icon: (
       
    <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.88578 2.63194C10.1587 2.33526 10.3073 1.94287 10.3002 1.53742C10.2932 1.13197 10.131 0.745126 9.84792 0.458386C9.56483 0.171646 9.18292 0.00739749 8.78264 0.000243825C8.38237 -0.00690984 7.99497 0.14359 7.70208 0.420036L3.6437 4.53084L2.67546 3.55009C2.38256 3.27364 1.99517 3.12314 1.59489 3.1303C1.19462 3.13745 0.812705 3.3017 0.529622 3.58844C0.246538 3.87518 0.0843844 4.26202 0.077322 4.66747C0.0702596 5.07292 0.21884 5.46532 0.491761 5.76199L2.55185 7.84869C2.84155 8.14177 3.23426 8.30639 3.6437 8.30639C4.05314 8.30639 4.44585 8.14177 4.73555 7.84869L9.88578 2.63194ZM12.3991 3.61269C12.3991 3.19762 12.5619 2.79955 12.8516 2.50605C13.1414 2.21255 13.5344 2.04766 13.9442 2.04766H31.4549C31.8647 2.04766 32.2577 2.21255 32.5475 2.50605C32.8372 2.79955 33 3.19762 33 3.61269C33 4.02776 32.8372 4.42583 32.5475 4.71933C32.2577 5.01283 31.8647 5.17771 31.4549 5.17771H13.9442C13.5344 5.17771 13.1414 5.01283 12.8516 4.71933C12.5619 4.42583 12.3991 4.02776 12.3991 3.61269ZM12.3991 12.4812C12.3991 12.0661 12.5619 11.668 12.8516 11.3745C13.1414 11.081 13.5344 10.9161 13.9442 10.9161H31.4549C31.8647 10.9161 32.2577 11.081 32.5475 11.3745C32.8372 11.668 33 12.0661 33 12.4812C33 12.8962 32.8372 13.2943 32.5475 13.5878C32.2577 13.8813 31.8647 14.0462 31.4549 14.0462H13.9442C13.5344 14.0462 13.1414 13.8813 12.8516 13.5878C12.5619 13.2943 12.3991 12.8962 12.3991 12.4812ZM13.9442 19.7846C13.5344 19.7846 13.1414 19.9495 12.8516 20.243C12.5619 20.5365 12.3991 20.9346 12.3991 21.3497C12.3991 21.7647 12.5619 22.1628 12.8516 22.4563C13.1414 22.7498 13.5344 22.9147 13.9442 22.9147H31.4549C31.8647 22.9147 32.2577 22.7498 32.5475 22.4563C32.8372 22.1628 33 21.7647 33 21.3497C33 20.9346 32.8372 20.5365 32.5475 20.243C32.2577 19.9495 31.8647 19.7846 31.4549 19.7846H13.9442ZM9.88578 17.1136C10.1751 17.4071 10.3376 17.8049 10.3376 18.2196C10.3376 18.6343 10.1751 19.0321 9.88578 19.3256L4.73555 24.5423C4.44585 24.8354 4.05314 25 3.6437 25C3.23426 25 2.84155 24.8354 2.55185 24.5423L0.491761 22.4556C0.339959 22.3123 0.218203 22.1395 0.133756 21.9476C0.049309 21.7556 0.00390079 21.5484 0.000240456 21.3382C-0.00341988 21.1281 0.0347426 20.9194 0.112451 20.7245C0.19016 20.5296 0.305823 20.3526 0.45254 20.204C0.599257 20.0554 0.774023 19.9382 0.966411 19.8595C1.1588 19.7808 1.36487 19.7421 1.57232 19.7458C1.77978 19.7495 1.98438 19.7955 2.1739 19.8811C2.36343 19.9666 2.53401 20.0899 2.67546 20.2437L3.6437 21.2244L7.70208 17.1136C7.99178 16.8206 8.38448 16.656 8.79393 16.656C9.20337 16.656 9.59608 16.8206 9.88578 17.1136Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Smart List Management",
      description: "Save leads to your Cefer lists or export directly to your CRM, Google Sheets, or outreach platform."
    },
    {
      icon: (
        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.817 1.21156e-05H2.17998C0.97599 1.21156e-05 0 0.991521 0.00133332 2.21132L0 25.7887V25.7927C0 27.0125 0.977323 28 2.17998 28H29.8197C31.025 28 31.9997 27.0085 31.9997 25.7887V2.21132C32.021 1.00908 30.9864 -0.00404037 29.817 1.21156e-05ZM5.30528 1.68855C5.96127 1.00368 7.0106 2.06678 6.33194 2.73139C5.67728 3.41761 4.62795 2.35451 5.30528 1.6899V1.68855ZM2.39998 1.69395C3.07597 1.00638 4.10663 2.05192 3.4293 2.73544C2.77197 3.41356 1.73065 2.35721 2.39998 1.69395ZM31.333 25.79C31.349 26.6154 30.6344 27.3408 29.817 27.3246H2.17998C1.77838 27.3239 1.39346 27.1617 1.10974 26.8738C0.826013 26.5858 0.666659 26.1956 0.66666 25.7887L0.667993 4.42263H31.333V25.79ZM14.6665 19.6181L22.5944 13.4354C22.9078 13.1652 23.3624 13.6096 23.1131 13.9379L23.1104 13.9352L17.8625 22.5129C17.699 22.7846 17.4797 23.0173 17.2194 23.1952C16.9591 23.3732 16.664 23.4922 16.3542 23.5441C16.0444 23.596 15.7272 23.5797 15.4242 23.4961C15.1213 23.4126 14.8396 23.2638 14.5985 23.06C13.5519 22.1577 13.5172 20.5812 14.6652 19.6181H14.6665ZM21.0171 18.605C21.1371 18.378 23.6864 14.308 23.7638 14.0797C26.5051 16.5288 27.8024 19.999 27.6277 23.5706H22.5358C22.6331 21.693 22.1491 19.9531 21.0171 18.605ZM9.44524 23.5787H4.37062C3.89463 14.0932 13.9012 7.72675 22.2238 12.8802L17.6092 16.4166C13.2092 15.3873 9.12391 18.7266 9.44524 23.5787Z" fill="#0E7BF5"/>
</svg>
      ),
      title: "Works Wherever You Prospect",
      description: "Whether you're using Linkedln, Crunchbase, company websites, or online directories, Cefer captures and enriches contact instantly and effortlessly."
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
                Prospect Smarter<span className="text-gradient-cefer">Wherever You Work</span>
              </h1>
              <p className="text-lg text-gray-700 mb-4 max-w-5xl mx-auto">
                Bring Cefer's power to your browser.
              </p>
              <p className="text-base text-gray-700 max-w-5xl mx-auto">
                The Cefer Chrome Extension lets you find, verify, and save leads directly from LinkedIn and company websites - without ever switching tabs.
              </p>
              <p className="text-base text-gray-700 max-w-5xl mx-auto mt-4">
                Find and connect with verified decision-makers in just a few clicks.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/signup"
                  className="px-8 py-4 bg-cefer-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
                >
                  Try It Free
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border-2 border-[#1C1C1C] hover:border-[#1C1C1C] transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Chrome Extension */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What Is Cefer <span className="text-gradient-cefer">Chrome Extension?</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Cefer's Chrome Extension is your on-the-go sales companion.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            It helps SDRs, marketers, and founders capture real-time data from any website and instantly add it to their lead list or CRM verified, enriched, and ready for outreach No copy-pasting. No spreadsheets. Just seamless prospecting from your browser.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Key <span className="text-gradient-cefer">Features</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Prospect smarter, not harder</p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">AI-Powered Recommendations</h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              A sales representative finds 50 prospects on Linkedln using Cefer's Chrome Extension to save 50 verified HR Directors' emails in less than 10 minutes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              The leads are automatically synced to HubSpot  ready for outbound campaign that same day.
            </p>
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.8898 1.18322C20.6117 0.738926 20.2021 0.392378 19.7179 0.191815C19.2337 -0.00874697 18.699 -0.0533451 18.1882 0.0642304L14.5634 0.896919C14.1919 0.982308 13.8059 0.982308 13.4344 0.896919L9.80948 0.0642304C9.29874 -0.0533451 8.76405 -0.00874697 8.27984 0.191815C7.79563 0.392378 7.38599 0.738926 7.10795 1.18322L5.13221 4.33655C4.9306 4.65914 4.65843 4.93133 4.33586 5.13496L1.18274 7.11084C0.73924 7.38865 0.393222 7.79765 0.192716 8.28106C-0.00779016 8.76447 -0.0528394 9.29832 0.0638212 9.8085L0.896456 13.4377C0.981531 13.8085 0.981531 14.1938 0.896456 14.5647L0.0638212 18.1918C-0.0532928 18.7023 -0.00847028 19.2366 0.192058 19.7204C0.392585 20.2043 0.738856 20.6136 1.18274 20.8915L4.33586 22.8674C4.65843 23.069 4.9306 23.3412 5.13423 23.6638L7.10997 26.8171C7.6785 27.7264 8.76314 28.1761 9.80948 27.9361L13.4344 27.1034C13.8059 27.018 14.1919 27.018 14.5634 27.1034L18.1903 27.9361C18.7007 28.0532 19.235 28.0084 19.7188 27.8079C20.2026 27.6073 20.6119 27.261 20.8898 26.8171L22.8655 23.6638C23.0671 23.3412 23.3393 23.069 23.6619 22.8674L26.817 20.8915C27.2609 20.6132 27.607 20.2034 27.8072 19.7192C28.0074 19.235 28.0517 18.7004 27.9339 18.1898L27.1033 14.5647C27.0179 14.1932 27.0179 13.8072 27.1033 13.4356L27.9359 9.8085C28.0532 9.29824 28.0087 8.7641 27.8086 8.28029C27.6084 7.79649 27.2625 7.38704 26.819 7.10882L23.6639 5.13295C23.3418 4.93096 23.0695 4.65869 22.8675 4.33655L20.8898 1.18322ZM19.8757 9.50406C20.0004 9.27475 20.0313 9.00601 19.9619 8.75438C19.8925 8.50275 19.7282 8.28786 19.5036 8.15491C19.279 8.02196 19.0115 7.98132 18.7576 8.04155C18.5036 8.10177 18.2829 8.25816 18.1419 8.47781L12.8699 17.4015L9.6865 14.353C9.59206 14.256 9.47906 14.1791 9.35424 14.1267C9.22941 14.0744 9.09532 14.0477 8.95996 14.0483C8.82461 14.0489 8.69075 14.0767 8.56639 14.1302C8.44203 14.1836 8.3297 14.2615 8.23611 14.3593C8.14252 14.4571 8.06958 14.5728 8.02165 14.6994C7.97371 14.826 7.95177 14.9609 7.95711 15.0962C7.96246 15.2314 7.99499 15.3642 8.05277 15.4867C8.11054 15.6091 8.19238 15.7186 8.2934 15.8087L12.3941 19.7383C12.5038 19.8432 12.6359 19.922 12.7803 19.9688C12.9248 20.0155 13.078 20.029 13.2284 20.0083C13.3788 19.9876 13.5226 19.9331 13.6491 19.849C13.7755 19.7649 13.8813 19.6533 13.9585 19.5225L19.8757 9.50406Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">50</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Leads Saved</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                 <svg className="w-8 h-8" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M14 0C10.287 0 6.72601 1.475 4.1005 4.1005C1.475 6.72601 0 10.287 0 14C0 17.713 1.475 21.274 4.1005 23.8995C6.72601 26.525 10.287 28 14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM15 13.586V6H13V14.414L19.292 20.708L20.708 19.292L15 13.586Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">{"<10 min"}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Time to Company</div>
              </div>
              <div className="bg-white rounded-2xl p-7 text-center border border-[#e8f0fe] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-16 h-16 bg-[#eef5ff] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" width="37" height="29" viewBox="0 0 37 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.6 16.3125V12.6875H37V16.3125H29.6ZM31.82 29L25.9 24.65L28.12 21.75L34.04 26.1L31.82 29ZM28.12 7.25L25.9 4.35L31.82 0L34.04 2.9L28.12 7.25ZM5.55 27.1875V19.9375H3.7C2.6825 19.9375 1.81177 19.5829 1.0878 18.8736C0.363833 18.1643 0.00123333 17.3106 0 16.3125V12.6875C0 11.6906 0.3626 10.8375 1.0878 10.1283C1.813 9.41896 2.68373 9.06371 3.7 9.0625H11.1L20.35 3.625V25.375L11.1 19.9375H9.25V27.1875H5.55ZM22.2 20.5719V8.42812C23.0325 9.15312 23.7034 10.037 24.2128 11.0798C24.7222 12.1226 24.9762 13.2627 24.975 14.5C24.9738 15.7373 24.7191 16.878 24.211 17.922C23.7028 18.966 23.0325 19.8493 22.2 20.5719Z" fill="#0E7BF5"/>
</svg>
                  </div>
                <div className="text-4xl font-bold text-[#0e7bf5] mb-1">Same Day</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Campaign Ready</div>
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
          <p className="text-xl text-gray-600 mb-8">Your best prospects are online  don't lose them to manual effort.</p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Cefer's Chrome Extension helps you <span className="font-semibold">move faster, stay accurate, and spend more time connecting, not collecting.</span>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative overflow-hidden" style={{ backgroundImage: "url(/bgcase.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-4">
            Try the Chrome Extension
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Prospect faster right from your browser.
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
