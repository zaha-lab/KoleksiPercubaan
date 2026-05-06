import React, { useState, useEffect } from 'react';
import { ShoppingCart, Package, Download, CheckCircle, ArrowLeft, Star, Search, Menu, X, Trash2, CreditCard, FileText, Award, GraduationCap, Languages, Calculator, Beaker, Globe, Zap, Dna, Laptop, Briefcase, HeartHandshake, Library, BookOpenText, MessageCircle, ChevronDown, Loader2, Landmark, Wallet, ShieldCheck } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800";

// --- DATA PALSU (MOCK DATA) ---
const PRODUCTS = [
  {
    id: 1,
    title: "Koleksi Percubaan SPM: Bahasa Melayu",
    subjectCode: "BAHASA MELAYU",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.9,
    reviews: 415,
    icon: <Award />,
    bgGradient: "from-rose-500 to-rose-700",
    imageUrl: "https://focusmalaysia.my/wp-content/uploads/bahasa-melayu.jpg",
    description: "Koleksi soalan percubaan Bahasa Melayu Kertas 1 & 2. Termasuk pelbagai tema karangan ramalan dan soalan tatabahasa yang kerap keluar.",
    features: ["Format PDF Berkualiti Tinggi", "Contoh Karangan & Skema Pemarkahan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 2,
    title: "Koleksi Percubaan SPM: Bahasa Inggeris",
    subjectCode: "BAHASA INGGERIS",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.8,
    reviews: 382,
    icon: <Languages />,
    bgGradient: "from-blue-500 to-blue-700",
    imageUrl: "https://images.unsplash.com/photo-1555431189-0afba288c529?auto=format&fit=crop&q=80&w=600",
    description: "Koleksi soalan percubaan Bahasa Inggeris SPM (1119). Latih tubi mantap untuk Kertas 1 hingga 4 termasuk format CEFR terkini.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 3,
    title: "Koleksi Percubaan SPM: Sains",
    subjectCode: "SAINS",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.7,
    reviews: 256,
    icon: <Beaker />,
    bgGradient: "from-amber-500 to-amber-700",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aUU_-wkSj27H5_2Sl-IW91O8POxZuU3Vfw&s",
    description: "Himpunan soalan percubaan Sains SPM. Latih tubi soalan eksperimen dan teori untuk memastikan anda mendapat markah maksimum dalam peperiksaan.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 4,
    title: "Koleksi Percubaan SPM: Matematik",
    subjectCode: "MATEMATIK",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.8,
    reviews: 329,
    icon: <Calculator />,
    bgGradient: "from-teal-500 to-teal-700",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
    description: "Himpunan soalan percubaan SPM Matematik. Kuasai teknik menjawab dan formula dengan membuat latihan dari pelbagai tahap kesukaran dari negeri berbeza.",
    features: ["Format PDF Berkualiti Tinggi", "Jalan Kira & Skema Jawapan Lengkap", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 5,
    title: "Koleksi Percubaan SPM: Sejarah",
    subjectCode: "SEJARAH",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.9,
    reviews: 342,
    icon: <Library />,
    bgGradient: "from-orange-500 to-orange-700",
    imageUrl: "https://cdn.store-assets.com/s/1334679/f/13751133.jpg",
    description: "Koleksi lengkap kertas soalan percubaan SPM Sejarah dari pelbagai negeri. Sangat sesuai untuk latih tubi dan membiasakan diri dengan format KBAT.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 6,
    title: "Koleksi Percubaan SPM: Pendidikan Islam",
    subjectCode: "PENDIDIKAN ISLAM",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.9,
    reviews: 218,
    icon: <BookOpenText />,
    bgGradient: "from-emerald-500 to-emerald-700",
    imageUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=600",
    description: "Set soalan percubaan Pendidikan Islam berserta skema. Fokus kepada hafazan, tajwid, sirah, dan pemahaman ayat untuk skor cemerlang.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 7,
    title: "Koleksi Percubaan SPM: Prinsip Perakaunan",
    subjectCode: "PRINSIP PERAKAUNAN",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.7,
    reviews: 194,
    icon: <Briefcase />,
    bgGradient: "from-slate-600 to-slate-800",
    imageUrl: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=600",
    description: "Latih tubi format penyata kewangan, lejar, dan perekodan. Kertas soalan percubaan berserta langkah jalan kira yang komprehensif.",
    features: ["Format PDF Berkualiti Tinggi", "Jalan Kira & Skema Jawapan Lengkap", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 8,
    title: "Koleksi Percubaan SPM: Geografi",
    subjectCode: "GEOGRAFI",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.6,
    reviews: 112,
    icon: <Globe />,
    bgGradient: "from-green-500 to-green-700",
    imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600",
    description: "Koleksi soalan pemahaman peta, graf, dan esei Geografi. Himpunan kertas soalan percubaan terbaik untuk persiapan mantap.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 9,
    title: "Koleksi Percubaan SPM: Matematik Tambahan",
    subjectCode: "MATEMATIK TAMBAHAN",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.8,
    reviews: 275,
    icon: <FileText />,
    bgGradient: "from-indigo-500 to-indigo-700",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
    description: "Cabaran soalan KBAT Add Math dari pelbagai negeri. Jalan kira penuh disediakan untuk membantu anda faham setiap langkah penyelesaian.",
    features: ["Format PDF Berkualiti Tinggi", "Jalan Kira & Skema Jawapan Lengkap", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 10,
    title: "Koleksi Percubaan SPM: Fizik",
    subjectCode: "FIZIK",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.7,
    reviews: 231,
    icon: <Zap />,
    bgGradient: "from-yellow-500 to-amber-600",
    imageUrl: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=600",
    description: "Kertas soalan percubaan Fizik yang merangkumi pengiraan dan konsep. Sesuai untuk persediaan Kertas 1, 2, dan amali sains.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 11,
    title: "Koleksi Percubaan SPM: Kimia",
    subjectCode: "KIMIA",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.8,
    reviews: 245,
    icon: <Package />,
    bgGradient: "from-cyan-500 to-cyan-700",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600",
    description: "Latih tubi persamaan kimia, eksperimen, dan konsep. Himpunan kertas soalan terbaik untuk membantu anda skor A+ dalam Kimia SPM.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 12,
    title: "Koleksi Percubaan SPM: Biologi",
    subjectCode: "BIOLOGI",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.9,
    reviews: 267,
    icon: <Dna />,
    bgGradient: "from-lime-500 to-green-600",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600",
    description: "Soalan percubaan Biologi yang menguji pemahaman proses kehidupan dan anatomi. Skema jawapan padat dan tepat disertakan untuk rujukan.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 13,
    title: "Koleksi Percubaan SPM: Sains Komputer",
    subjectCode: "SAINS KOMPUTER",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.6,
    reviews: 134,
    icon: <Laptop />,
    bgGradient: "from-gray-700 to-gray-900",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    description: "Kuasai pengaturcaraan dan pangkalan data melalui set soalan percubaan Sains Komputer yang menepati format DSKP terkini.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 14,
    title: "Koleksi Percubaan SPM: Perniagaan",
    subjectCode: "PERNIAGAAN",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.7,
    reviews: 156,
    icon: <CheckCircle />,
    bgGradient: "from-amber-600 to-orange-800",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600",
    description: "Koleksi soalan esei dan objektif Perniagaan. Latih teknik menjawab soalan kajian kes dan fakta perniagaan dengan berkesan.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  },
  {
    id: 15,
    title: "Koleksi Percubaan SPM: Pendidikan Moral",
    subjectCode: "PEND. MORAL",
    category: "Kertas Soalan",
    price: 19.00,
    rating: 4.5,
    reviews: 98,
    icon: <HeartHandshake />,
    bgGradient: "from-pink-500 to-pink-700",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600",
    description: "Kertas soalan percubaan Pendidikan Moral yang fokus kepada nilai murni, isu semasa dan teknik menjawab esei yang betul.",
    features: ["Format PDF Berkualiti Tinggi", "Skema Jawapan Lengkap Disertakan", "Set Soalan Semua Negeri (Kecuali Sabah & Sarawak)", "Sedia Untuk Dicetak"]
  }
];

// --- KOMPONEN REKAAN KULIT KERTAS SOALAN (MOCKUP) ---
// Dipindahkan ke luar komponen utama untuk mengelakkan isu render berulang
const ProductCover = ({ product, size = "normal", className = "" }) => {
  const isXS = size === "xs";
  const isSmall = size === "small";
  const isLarge = size === "large";
  
  return (
    <div className={`relative flex flex-col justify-between overflow-hidden bg-gradient-to-br ${product.bgGradient} text-white shadow-inner ${className}`}>
      {/* Latar Belakang Gambar Tempatan */}
      <div className="absolute inset-0">
        <img 
          src={product.imageUrl} 
          alt={product.subjectCode}
          onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }} 
          className="w-full h-full object-cover mix-blend-overlay opacity-60 hover:opacity-90 transition-opacity duration-700" 
        />
      </div>

      <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white opacity-10 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-32 h-32 bg-black opacity-30 rounded-full blur-xl pointer-events-none"></div>
      
      <div className="relative z-10 flex justify-end items-start">
        <div className={`${isXS ? 'p-0.5' : (isSmall ? 'p-1' : 'p-2')} bg-white/20 rounded-lg backdrop-blur-md border border-white/20 shadow-sm`}>
          {React.cloneElement(product.icon, { className: `${isXS ? 'w-3 h-3' : (isSmall ? 'w-4 h-4' : (isLarge ? 'w-8 h-8' : 'w-6 h-6'))} text-white drop-shadow-md` })}
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        {(!isSmall && !isXS) && <p className="text-[9px] sm:text-[10px] font-semibold text-white/90 tracking-[0.2em] mb-1 drop-shadow-md">KERTAS PERCUBAAN</p>}
        <h3 className={`${isXS ? 'text-[8px]' : (isSmall ? 'text-xs' : (isLarge ? 'text-3xl md:text-4xl' : 'text-xl sm:text-2xl'))} font-black leading-tight drop-shadow-lg ${isXS ? 'mb-0' : 'mb-2'}`}>
          {product.subjectCode}
        </h3>
        {(!isSmall && !isXS) && (
          <div className={`pt-2 border-t border-white/30 flex items-center justify-between ${isLarge ? 'mt-4' : 'mt-2'}`}>
            <p className="text-[9px] text-white/90 uppercase tracking-wider font-bold flex items-center drop-shadow-md">
              <CheckCircle className="w-3 h-3 mr-1" /> Skema Jawapan Lengkap
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  // --- STATE PENGURUSAN ---
  const [currentView, setCurrentView] = useState('home'); // 'home', 'product', 'cart', 'checkout', 'success'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false); // State baru untuk dropdown carian
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);
  const [isMobileSubjectsOpen, setIsMobileSubjectsOpen] = useState(false);

  // --- STATE PEMBAYARAN ---
  const [paymentMethod, setPaymentMethod] = useState('fpx');
  const [showGateway, setShowGateway] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // --- PENGURUSAN SEJARAH BROWSER (BACK BUTTON) ---
  useEffect(() => {
    // Tetapkan state awal dalam sejarah brauser jika kosong masa mula-mula buka
    if (!window.history.state) {
      window.history.replaceState({ view: 'home', productId: null }, '', '#home');
    }

    // Dengar jika pengguna tekan butang "Back" atau "Forward" pada telefon bimbit/PC
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentView(event.state.view);
        if (event.state.productId) {
          const product = PRODUCTS.find(p => p.id === event.state.productId);
          setSelectedProduct(product || null);
        } else {
          setSelectedProduct(null);
        }
      } else {
        // Jika tiada rekod, kembali ke home
        setCurrentView('home');
        setSelectedProduct(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- FUNGSI TROLI ---
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  // --- NAVIGASI ---
  const navigateTo = (view, product = null, addToHistory = true) => {
    setCurrentView(view);
    if (product) setSelectedProduct(product);
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);

    // Tambah ke sejarah brauser supaya butang 'Back' pada telefon / PC berfungsi
    if (addToHistory) {
      window.history.pushState({ view, productId: product ? product.id : null }, '', `#${view}`);
    }
  };

  // --- KOMPONEN: NAVIGATION BAR ---
  const renderNavbar = () => (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-2 shadow-md shadow-blue-200">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">Cikgu<span className="text-blue-600">Digital</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setCurrentView('home');
                setIsSearchFocused(false);
                setTimeout(() => document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="relative"
            >
              <input 
                type="text" 
                placeholder="Cari subjek..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 transition-all"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
              <button type="submit" className="absolute left-3 top-2.5 p-0.5 text-gray-400 hover:text-blue-600 transition-colors">
                <Search className="w-4 h-4" />
              </button>

              {/* Cadangan Carian (Search Suggestions) Dropdown - Desktop */}
              {isSearchFocused && searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden">
                  {PRODUCTS.filter(p => 
                    p.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    p.title.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length > 0 ? (
                    PRODUCTS.filter(p => 
                      p.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      p.title.toLowerCase().includes(searchQuery.toLowerCase())
                    ).slice(0, 5).map(product => (
                      <div 
                        key={product.id}
                        onClick={() => {
                          setSearchQuery('');
                          setIsSearchFocused(false);
                          navigateTo('product', product);
                        }}
                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center gap-3 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.bgGradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                          {React.cloneElement(product.icon, { className: "w-4 h-4 text-white" })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-gray-900 truncate">{product.subjectCode}</div>
                          <div className="text-xs text-gray-500 truncate">{product.category}</div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-4 text-sm text-gray-500 text-center flex flex-col items-center">
                      <Search className="w-5 h-5 text-gray-300 mb-1" />
                      Tiada subjek ditemui
                    </div>
                  )}
                </div>
              )}
            </form>
            
            <div className="relative">
              <button 
                onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)} 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
              >
                Senarai Subjek
                <ChevronDown className={`w-4 h-4 transition-transform ${isSubjectDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isSubjectDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsSubjectDropdownOpen(false)}></div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div className="px-5 pb-2 mb-2 border-b border-gray-50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Pilih Subjek (PDF)
                    </div>
                    {PRODUCTS.map((product) => (
                      <button 
                        key={product.id}
                        onClick={() => {
                          navigateTo('product', product);
                          setIsSubjectDropdownOpen(false);
                        }}
                        className="w-full text-left px-5 py-2.5 hover:bg-blue-50 transition-colors flex items-center gap-4 group"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${product.bgGradient} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                          {React.cloneElement(product.icon, { className: "w-5 h-5 text-white" })}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 leading-tight">{product.subjectCode}</div>
                          <div className="text-xs text-gray-500 mt-0.5">Kertas Percubaan SPM</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <button 
              onClick={() => navigateTo('cart')} 
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => navigateTo('cart')} 
              className="relative p-2 mr-4 text-gray-600"
            >
              <ShoppingCart className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 focus:outline-none">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
           <form 
             onSubmit={(e) => {
               e.preventDefault();
               setCurrentView('home');
               setIsMobileMenuOpen(false);
               setIsSearchFocused(false);
               setTimeout(() => document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' }), 100);
             }}
             className="relative mt-2 mb-4"
           >
              <input 
                type="text" 
                placeholder="Cari subjek..." 
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
              <button type="submit" className="absolute left-2 top-2 p-1 text-gray-400 hover:text-blue-600 transition-colors">
                <Search className="w-4 h-4" />
              </button>

              {/* Cadangan Carian (Search Suggestions) Dropdown - Mobile */}
              {isSearchFocused && searchQuery.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                  {PRODUCTS.filter(p => 
                    p.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    p.title.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length > 0 ? (
                    PRODUCTS.filter(p => 
                      p.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      p.title.toLowerCase().includes(searchQuery.toLowerCase())
                    ).slice(0, 4).map(product => (
                      <div 
                        key={product.id}
                        onClick={() => {
                          setSearchQuery('');
                          setIsSearchFocused(false);
                          navigateTo('product', product);
                        }}
                        className="px-3 py-2 hover:bg-blue-50 cursor-pointer flex items-center gap-3 border-b border-gray-50 last:border-0"
                      >
                        <div className={`w-6 h-6 rounded bg-gradient-to-br ${product.bgGradient} flex items-center justify-center flex-shrink-0`}>
                          {React.cloneElement(product.icon, { className: "w-3 h-3 text-white" })}
                        </div>
                        <div className="text-sm font-semibold text-gray-900 truncate">{product.subjectCode}</div>
                      </div>
                    ))
                  ) : (
                    <div className="px-3 py-3 text-sm text-gray-500 text-center">Tiada padanan</div>
                  )}
                </div>
              )}
            </form>
          
          <button 
            onClick={() => setIsMobileSubjectsOpen(!isMobileSubjectsOpen)} 
            className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
          >
            Senarai Subjek
            <ChevronDown className={`w-5 h-5 transition-transform ${isMobileSubjectsOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isMobileSubjectsOpen && (
            <div className="pl-4 pr-2 pb-2 space-y-1 max-h-60 overflow-y-auto custom-scrollbar border-l-2 border-blue-100 ml-4 mb-4 mt-2">
              {PRODUCTS.map((product) => (
                <button 
                  key={product.id}
                  onClick={() => {
                    navigateTo('product', product);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg flex items-center gap-3"
                >
                  <div className={`w-6 h-6 rounded-md bg-gradient-to-br ${product.bgGradient} flex items-center justify-center flex-shrink-0`}>
                    {React.cloneElement(product.icon, { className: "w-3 h-3 text-white" })}
                  </div>
                  <span className="font-semibold">{product.subjectCode}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  );

  // --- KOMPONEN: FOOTER ---
  const renderFooter = () => (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Lajur 1: Info Jenama */}
          <div>
             <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-2">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">CikguDigital</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Platform pendidikan digital pilihan pelajar dan guru untuk mendapatkan bahan ulang kaji dan kertas soalan percubaan SPM berkualiti tinggi.
            </p>
          </div>

          {/* Lajur 2: Pautan Pantas */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-100">Pautan Pantas</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-blue-400 transition-colors flex items-center">
                  <ChevronDown className="w-3 h-3 mr-2 -rotate-90" /> Laman Utama
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    if (currentView !== 'home') {
                      navigateTo('home');
                      setTimeout(() => document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' }), 100);
                    } else {
                      document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} 
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  <ChevronDown className="w-3 h-3 mr-2 -rotate-90" /> Senarai Subjek
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('terms')} className="hover:text-blue-400 transition-colors flex items-center">
                  <ChevronDown className="w-3 h-3 mr-2 -rotate-90" /> Terma & Syarat
                </button>
              </li>
            </ul>
          </div>

          {/* Lajur 3: Bantuan */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-slate-100">Perlukan Bantuan?</h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Hubungi pasukan sokongan kami melalui WhatsApp jika anda mempunyai sebarang masalah muat turun fail PDF atau pertanyaan lanjut.
            </p>
            <a 
              href="https://wa.me/60123456789?text=Hai%20Cikgu%20Digital,%20saya%20ada%20pertanyaan." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-green-900/50 transform hover:-translate-y-1 w-max"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Kami
            </a>
          </div>

        </div>

        {/* Bahagian Bawah Footer */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col items-center justify-center text-slate-500 text-sm gap-4 text-center">
          <div>&copy; {new Date().getFullYear()} Cikgu Digital Malaysia. Hak cipta terpelihara.</div>
        </div>
      </div>
    </footer>
  );

  // --- PANDANGAN: TERMA DAN SYARAT ---
  const renderTerms = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-[60vh]">
      <button 
        onClick={() => navigateTo('home')} 
        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-8 font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Laman Utama
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-12">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-4">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">Terma & Syarat</h1>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Pengenalan</h2>
            <p>
              Selamat datang ke Cikgu Digital. Dengan membuat pembelian produk digital (Kertas Soalan Percubaan SPM berformat PDF) di laman web ini, anda bersetuju untuk terikat dengan Terma dan Syarat yang telah ditetapkan. Sila baca dengan teliti sebelum membuat sebarang transaksi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Hak Cipta & Penggunaan Terhad (Sangat Penting)</h2>
            <p className="mb-3">
              Semua produk digital yang disediakan adalah tertakluk di bawah undang-undang hak cipta. Pembelian anda memberikan anda <strong>lesen peribadi dan bukan komersial</strong> sahaja.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
              <h3 className="font-bold text-red-800 mb-2 flex items-center">
                <X className="w-5 h-5 mr-1" /> Larangan Keras Penjualan Semula
              </h3>
              <ul className="list-disc pl-5 text-red-700 space-y-1">
                <li>Anda <strong>DILARANG SAMA SEKALI</strong> menjual semula (resell) mana-mana fail PDF yang dibeli daripada platform ini.</li>
                <li>Anda tidak dibenarkan memuat naik, berkongsi di platform awam (seperti grup Telegram/Facebook), atau mengedarkan fail ini kepada pihak ketiga secara percuma mahupun berbayar.</li>
                <li>Mencetak fail untuk dijual semula dalam bentuk fizikal (buku/kertas) kepada pelajar atau sekolah untuk tujuan keuntungan juga adalah dilarang.</li>
              </ul>
              <p className="text-sm mt-3 text-red-600 italic">
                *Tindakan undang-undang akan diambil serta-merta ke atas mana-mana individu atau entiti yang didapati melanggar larangan penjualan semula ini.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Polisi Pemulangan Wang (Refund Policy)</h2>
            <p>
              Memandangkan sifat produk kami adalah digital dan boleh diakses/dimuat turun serta-merta selepas pembayaran berjaya disahkan, <strong>semua jualan adalah muktamad</strong>. Kami tidak menawarkan pemulangan wang (refund), pertukaran, atau pembatalan selepas pautan muat turun dihantar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Penghantaran Produk Digital</h2>
            <p>
              Setelah pembayaran anda berjaya, pautan eksklusif untuk memuat turun set soalan berformat PDF akan dipaparkan di skrin kejayaan dan juga dihantar ke alamat e-mel yang anda berikan semasa pembayaran. Sila pastikan e-mel yang dimasukkan adalah tepat.
            </p>
          </section>
        </div>
      </div>
    </div>
  );

  // --- PANDANGAN: HALAMAN UTAMA ---
  const renderProductGrid = () => {
    const filteredProducts = PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subjectCode.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Koleksi Kertas Soalan</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 text-lg">Pilih subjek pilihan anda. Set lengkap merangkumi semua negeri.</p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Tiada subjek ditemui untuk carian "{searchQuery}".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group cursor-pointer" onClick={() => navigateTo('product', product)}>
                {/* Digital Cover Page */}
                <div className="h-56 w-full relative border-b border-gray-100">
                  <ProductCover product={product} className="absolute inset-0 p-5" />
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm font-medium ml-1 text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-400 ml-1">({product.reviews} ulasan)</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">{product.title}</h3>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                    <span className="text-sm text-gray-500 font-medium">Format PDF</span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className={`p-2 rounded-full transition-colors ${cart.find(i => i.id === product.id) ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'}`}
                      title={cart.find(i => i.id === product.id) ? "Telah ditambah" : "Tambah ke Troli"}
                    >
                      {cart.find(i => i.id === product.id) ? <CheckCircle className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  const renderHome = () => {
    return (
      <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900 text-white py-24 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-cyan-300 blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-block px-4 py-1 bg-blue-800/50 border border-blue-400/30 text-blue-200 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Sedia Untuk SPM 2026
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Kuasai SPM Dengan <br className="hidden md:block"/> Koleksi Soalan Percubaan Terbaik
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Akses segera kepada himpunan kertas soalan percubaan dari seluruh negeri. Dilengkapi skema jawapan penuh. Muat turun, cetak, dan mula ulang kaji sekarang.
            </p>
            <button 
              onClick={() => {
                if (currentView !== 'home') {
                  navigateTo('home');
                  setTimeout(() => document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' }), 100);
                } else {
                  document.getElementById('katalog')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              <FileText className="w-5 h-5 mr-2" />
              Lihat Katalog Subjek
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div id="katalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {renderProductGrid()}
        </div>
        
        {/* Features Section */}
        <div className="bg-white border-t border-gray-100 py-20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Soalan Berkualiti</h3>
                  <p className="text-gray-500 leading-relaxed">Himpunan set soalan percubaan tahun-tahun lepas yang sebenar. Sangat sesuai digunakan untuk latih tubi secara berterusan membiasakan diri dengan format peperiksaan.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Skema Lengkap</h3>
                  <p className="text-gray-500 leading-relaxed">Setiap set disertakan dengan panduan pemarkahan dan jalan kira yang lengkap untuk memudahkan rujukan pelajar.</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                    <Download className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Muat Turun Segera</h3>
                  <p className="text-gray-500 leading-relaxed">Tidak perlu tunggu posmen. Terus dapat pautan fail PDF sebaik sahaja pembayaran disahkan dan sedia untuk dicetak.</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    );
  };

  // --- PANDANGAN: BUTIRAN PRODUK ---
  const renderProductDetails = () => {
    if (!selectedProduct) return null;
    const isAdded = cart.find(i => i.id === selectedProduct.id);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
        <button 
          onClick={() => navigateTo('home')} 
          className="flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Senarai Subjek
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Visual Section */}
            <div className="relative min-h-[400px] flex items-center justify-center bg-slate-50 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/5 pattern-dots"></div>
              <div className="w-full max-w-sm aspect-[3/4] relative transform hover:scale-105 transition-transform duration-500 shadow-2xl rounded-2xl overflow-hidden rotate-1 hover:rotate-0">
                <ProductCover product={selectedProduct} size="large" className="absolute inset-0 p-8 md:p-10" />
              </div>
            </div>

            {/* Details Section */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 font-semibold text-sm rounded-full mb-4 w-max">
                <FileText className="w-4 h-4 mr-1" />
                {selectedProduct.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {selectedProduct.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="ml-2 font-bold text-gray-700">{selectedProduct.rating}</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-500">{selectedProduct.reviews} Ulasan</span>
              </div>

              <div className="text-4xl font-black text-blue-600 mb-6">
                RM {selectedProduct.price.toFixed(2)}
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-gray-900">Kelebihan set ini:</h3>
                <ul className="space-y-3">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => addToCart(selectedProduct)}
                  disabled={isAdded}
                  className={`flex-1 py-4 px-8 rounded-xl font-bold text-lg transition-all shadow-md flex justify-center items-center ${
                    isAdded 
                    ? 'bg-green-500 text-white cursor-default shadow-green-200' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200 hover:shadow-lg transform hover:-translate-y-1'
                  }`}
                >
                  {isAdded ? (
                    <><CheckCircle className="w-5 h-5 mr-2" /> Telah Ditambah</>
                  ) : (
                    <><ShoppingCart className="w-5 h-5 mr-2" /> Tambah ke Troli</>
                  )}
                </button>
                {!isAdded && (
                  <button 
                    onClick={() => {
                      addToCart(selectedProduct);
                      navigateTo('checkout');
                    }}
                    className="flex-1 py-4 px-8 rounded-xl font-bold text-lg bg-gray-900 text-white hover:bg-black transition-all shadow-md"
                  >
                    Beli Terus
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- PANDANGAN: TROLI (CART) ---
  const renderCart = () => {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in min-h-[60vh]">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Troli Beli-Belah Anda</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-200">
            <ShoppingCart className="w-20 h-20 text-gray-200 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Troli anda kosong</h2>
            <p className="text-gray-500 mb-8">Sila pilih kertas soalan dari senarai subjek untuk mula ulang kaji.</p>
            <button 
              onClick={() => navigateTo('home')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
            >
              Lihat Subjek
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl flex-shrink-0 relative shadow-md transform -rotate-2">
                    <ProductCover product={item} size="small" className="absolute inset-0 rounded-xl p-3" />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2 inline-block">{item.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">Muat Turun Digital (PDF)</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-4 sm:mt-0">
                    <div className="text-xl font-black text-gray-900 sm:mb-4">RM {item.price.toFixed(2)}</div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors flex items-center"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ringkasan Pesanan</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subjumlah ({cart.length} subjek)</span>
                    <span>RM {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Cukai (0%)</span>
                    <span>RM 0.00</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Jumlah Besar</span>
                    <span className="text-2xl font-black text-blue-600">RM {cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigateTo('checkout')}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-200 flex justify-center items-center"
                >
                  Teruskan Pembayaran
                </button>
                <button 
                  onClick={() => navigateTo('home')}
                  className="w-full mt-3 bg-gray-50 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                >
                  Tambah Subjek Lain
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // --- PANDANGAN: PEMBAYARAN (CHECKOUT) ---
  const renderCheckout = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in relative">
        
        {/* Modal Payment Gateway Simulation */}
        {showGateway && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
              <div className="bg-slate-50 border-b border-gray-100 p-6 text-center">
                <ShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-2" />
                <h3 className="font-bold text-gray-900 text-lg">Gateway Pembayaran Selamat</h3>
                <p className="text-sm text-gray-500">Cikgu Digital Sdn Bhd</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">Jumlah Perlu Dibayar:</span>
                  <span className="text-2xl font-black text-blue-600">RM {cartTotal.toFixed(2)}</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">
                  Sila sahkan pembayaran anda melalui kaedah <strong className="uppercase text-gray-900">{paymentMethod}</strong>. <br/><br/>
                  <span className="text-xs text-gray-400">Dalam sistem sebenar, pengguna akan dilencongkan (redirect) ke perbankan internet, halaman kad, atau e-wallet pilihan mereka.</span>
                </p>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      setShowGateway(false);
                      setCart([]); // Kosongkan troli
                      navigateTo('success');
                    }}
                    className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-md flex justify-center items-center"
                  >
                    Simulasi: Bayaran Berjaya
                  </button>
                  <button 
                    onClick={() => setShowGateway(false)}
                    className="w-full bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all"
                  >
                    Batal Transaksi
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <button 
          onClick={() => navigateTo('cart')} 
          className="flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Troli
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Form Section */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Butiran Pelanggan & Pembayaran</h2>
              
              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                setIsProcessing(true);
                // Simulasi melencong ke Payment Gateway
                setTimeout(() => {
                  setIsProcessing(false);
                  setShowGateway(true);
                }, 1500);
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Penuh</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-gray-50 focus:bg-white" placeholder="Cth: Ahmad Bin Ali" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Emel <span className="text-xs text-gray-500 font-normal">(Fail PDF akan dihantar ke sini)</span></label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-gray-50 focus:bg-white" placeholder="Cth: ahmad@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">No. Telefon (WhatsApp)</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none bg-gray-50 focus:bg-white" placeholder="Cth: 0123456789" />
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <label className="block text-sm font-bold text-gray-900 mb-4">Pilih Kaedah Pembayaran</label>
                  <div className="space-y-3">
                    {/* FPX Option */}
                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'fpx' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
                      <input type="radio" name="payment" value="fpx" checked={paymentMethod === 'fpx'} onChange={() => setPaymentMethod('fpx')} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-4 ${paymentMethod === 'fpx' ? 'border-blue-500' : 'border-gray-300'}`}>
                        {paymentMethod === 'fpx' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
                      </div>
                      <Landmark className={`w-6 h-6 mr-3 ${paymentMethod === 'fpx' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <div>
                        <div className="font-bold text-gray-900 text-sm">FPX (Perbankan Internet)</div>
                        <div className="text-xs text-gray-500">Maybank2u, CIMB Clicks, dll</div>
                      </div>
                    </label>
                    
                    {/* Card Option */}
                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
                      <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-4 ${paymentMethod === 'card' ? 'border-blue-500' : 'border-gray-300'}`}>
                        {paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
                      </div>
                      <CreditCard className={`w-6 h-6 mr-3 ${paymentMethod === 'card' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Kad Kredit / Debit</div>
                        <div className="text-xs text-gray-500">Visa & Mastercard</div>
                      </div>
                    </label>
                    
                    {/* E-Wallet Option */}
                    <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'ewallet' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:border-blue-300'}`}>
                      <input type="radio" name="payment" value="ewallet" checked={paymentMethod === 'ewallet'} onChange={() => setPaymentMethod('ewallet')} className="hidden" />
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-4 ${paymentMethod === 'ewallet' ? 'border-blue-500' : 'border-gray-300'}`}>
                        {paymentMethod === 'ewallet' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>}
                      </div>
                      <Wallet className={`w-6 h-6 mr-3 ${paymentMethod === 'ewallet' ? 'text-blue-600' : 'text-gray-400'}`} />
                      <div>
                        <div className="font-bold text-gray-900 text-sm">E-Wallet</div>
                        <div className="text-xs text-gray-500">TNG, Boost, GrabPay</div>
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-200 mt-6 flex justify-center items-center disabled:opacity-70"
                >
                  {isProcessing ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Menyambung ke sistem...</>
                  ) : (
                    <>Teruskan ke Pembayaran (RM {cartTotal.toFixed(2)})</>
                  )}
                </button>
                <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 mr-1 text-green-500" /> Transaksi Dilindungi dengan Sulit 256-bit
                </p>
              </form>
            </div>

            {/* Summary Section */}
            <div className="p-8 md:p-10 bg-slate-50">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Pesanan Anda</h3>
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-12 h-16 rounded overflow-hidden flex-shrink-0 shadow-sm border border-gray-200">
                      <ProductCover product={item} size="xs" className="w-full h-full p-2" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-900 text-sm line-clamp-2">{item.title}</h4>
                      <p className="text-blue-600 font-semibold text-sm">RM {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Subjumlah</span>
                  <span>RM {cartTotal.toFixed(2)}</span>
                </div>
                 <div className="flex justify-between text-gray-600 text-sm">
                  <span>Penghantaran (Emel & Muat Turun)</span>
                  <span className="text-green-600 font-medium">Percuma</span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-2 border-t border-gray-200">
                  <span className="font-bold text-gray-900">Jumlah Keseluruhan</span>
                  <span className="font-black text-3xl text-blue-600">RM {cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- PANDANGAN: KEJAYAAN (SUCCESS) ---
  const renderSuccess = () => (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center animate-fade-in">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Pembayaran Berjaya!</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
        Terima kasih! Resit dan pautan untuk memuat turun kertas soalan percubaan telah pun dihantar ke alamat e-mel anda. Selamat mengulang kaji!
      </p>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8 inline-block text-left w-full max-w-md">
        <p className="text-sm text-gray-500 mb-1">Nombor Pesanan:</p>
        <p className="font-mono font-bold text-gray-900 mb-4">#CD-{Math.floor(100000 + Math.random() * 900000)}</p>
        <p className="text-sm text-gray-500 mb-1">Status Penghantaran:</p>
        <p className="font-bold text-green-600 flex items-center"><CheckCircle className="w-4 h-4 mr-1" /> Emel Telah Dihantar</p>
      </div>
      <br/>
      <button 
        onClick={() => navigateTo('home')}
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
      >
        Kembali ke Halaman Utama
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-bounce-slow { animation: bounceSlow 3s infinite ease-in-out; }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0) scale(1.5); } 50% { transform: translateY(-10px) scale(1.5); } }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 10px; }
      `}} />
      
      {renderNavbar()}
      
      <main className="flex-grow">
        {currentView === 'home' && renderHome()}
        {currentView === 'product' && renderProductDetails()}
        {currentView === 'cart' && renderCart()}
        {currentView === 'checkout' && renderCheckout()}
        {currentView === 'success' && renderSuccess()}
        {currentView === 'terms' && renderTerms()}
      </main>
      
      {renderFooter()}
    </div>
  );
}
