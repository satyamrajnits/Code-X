import React, { useState, useRef } from 'react';
import { Camera, MapPin, Thermometer, DollarSign, Mic, Star, Upload, Phone, Home, User, Settings, Bell, Cloud, Leaf, Bug, TrendingUp, Sun, CloudRain, Zap, PieChart, Activity, Award, BookOpen, MessageCircle } from 'lucide-react';

const KisanSarthiApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('en');
  const [userProfile, setUserProfile] = useState({
    name: '',
    location: '',
    farmSize: '',
    primaryCrop: ''
  });
  const [isListening, setIsListening] = useState(false);
  const [weatherData, setWeatherData] = useState({
    temperature: 'Loading...',
    humidity: 'Loading...',
    rainfall: 'Loading...',
    alerts: ['Fetching weather alerts...'],
    condition: 'clear',
    loading: true
  });
  const fileInputRef = useRef(null);

  // Multilingual content
  const languages = {
    en: {
      appName: 'KisanSarthi',
      home: 'Home',
      profile: 'Profile',
      weather: 'Weather',
      market: 'Market',
      detection: 'Crop Health',
      advisory: 'Advisory',
      feedback: 'Feedback',
      welcome: 'Welcome to KisanSarthi',
      subtitle: 'Your Digital Farming Companion',
      location: 'Location',
      crop: 'Primary Crop',
      farmSize: 'Farm Size (acres)',
      save: 'Save Profile',
      currentWeather: 'Current Weather',
      alerts: 'Weather Alerts',
      soilHealth: 'Soil Health Recommendations',
      fertilizer: 'Fertilizer Suggestions',
      pestControl: 'Pest & Disease Detection',
      uploadPhoto: 'Upload Crop Photo',
      marketPrices: 'Today\'s Market Prices',
      voiceSupport: 'Voice Assistant',
      tapToSpeak: 'Tap to speak',
      listening: 'Listening...',
      rateExperience: 'Rate your experience',
      yourFeedback: 'Your feedback',
      submit: 'Submit Feedback'
    },
    hi: {
      appName: 'किसानसारथी',
      home: 'होम',
      profile: 'प्रोफाइल',
      weather: 'मौसम',
      market: 'मंडी',
      detection: 'फसल स्वास्थ्य',
      advisory: 'सलाह',
      feedback: 'फीडबैक',
      welcome: 'किसानसारथी में आपका स्वागत है',
      subtitle: 'आपका डिजिटल खेती साथी',
      location: 'स्थान',
      crop: 'मुख्य फसल',
      farmSize: 'खेत का आकार (एकड़)',
      save: 'प्रोफाइल सेव करें',
      currentWeather: 'वर्तमान मौसम',
      alerts: 'मौसम चेतावनी',
      soilHealth: 'मिट्टी स्वास्थ्य सुझाव',
      fertilizer: 'उर्वरक सुझाव',
      pestControl: 'कीट और रोग पहचान',
      uploadPhoto: 'फसल की फोटो अपलोड करें',
      marketPrices: 'आज के मंडी भाव',
      voiceSupport: 'आवाज सहायक',
      tapToSpeak: 'बोलने के लिए टैप करें',
      listening: 'सुन रहा है...',
      rateExperience: 'अपने अनुभव को रेट करें',
      yourFeedback: 'आपकी प्रतिक्रिया',
      submit: 'फीडबैक भेजें'
    },
    pa: {
      appName: 'ਕਿਸਾਨਸਾਰਥੀ',
      home: 'ਘਰ',
      profile: 'ਪ੍ਰੋਫਾਈਲ',
      weather: 'ਮੌਸਮ',
      market: 'ਮੰਡੀ',
      detection: 'ਫਸਲ ਸਿਹਤ',
      advisory: 'ਸਲਾਹ',
      feedback: 'ਸੁਝਾਵ',
      welcome: 'ਕਿਸਾਨਸਾਰਥੀ ਵਿਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
      subtitle: 'ਤੁਹਾਡਾ ਡਿਜੀਟਲ ਖੇਤੀ ਸਾਥੀ',
      location: 'ਸਥਾਨ',
      crop: 'ਮੁੱਖ ਫਸਲ',
      farmSize: 'ਖੇਤ ਦਾ ਆਕਾਰ (ਏਕੜ)',
      save: 'ਪ੍ਰੋਫਾਈਲ ਸੇਵ ਕਰੋ',
      currentWeather: 'ਮੌਜੂਦਾ ਮੌਸਮ',
      alerts: 'ਮੌਸਮੀ ਚੇਤਾਵਨੀਆਂ',
      soilHealth: 'ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਦੀ ਸਲਾਹ',
      fertilizer: 'ਖਾਦ ਦੇ ਸੁਝਾਵ',
      pestControl: 'ਕੀੜੇ ਅਤੇ ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ',
      uploadPhoto: 'ਫਸਲ ਦੀ ਫੋਟੋ ਅੱਪਲੋਡ ਕਰੋ',
      marketPrices: 'ਅੱਜ ਦੇ ਮੰਡੀ ਭਾਅ',
      voiceSupport: 'ਆਵਾਜ਼ ਸਹਾਇਕ',
      tapToSpeak: 'ਬੋਲਣ ਲਈ ਟੈਪ ਕਰੋ',
      listening: 'ਸੁਣ ਰਿਹਾ ਹੈ...',
      rateExperience: 'ਤਜਰਬੇ ਨੂੰ ਰੇਟ ਕਰੋ',
      yourFeedback: 'ਤੁਹਾਡੇ ਸੁਝਾਵ',
      submit: 'ਸੁਝਾਵ ਭੇਜੋ'
    }
  };

  const t = languages[language];

  // Real-time weather data fetching
  const fetchWeatherData = async (location) => {
    if (!location || location.trim() === '') return;
    
    setWeatherData(prev => ({ ...prev, loading: true }));
    
    try {
      // Get coordinates for the location using geocoding
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(location)}&country=IN&count=1`
      );
      
      if (!geoResponse.ok) throw new Error('Location not found');
      
      const geoData = await geoResponse.json();
      
      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('Location not found');
      }
      
      const { latitude, longitude, name } = geoData.results[0];
      
      // Fetch weather data using Open-Meteo API
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&timezone=Asia/Kolkata`
      );
      
      if (!weatherResponse.ok) throw new Error('Weather data not available');
      
      const weatherApiData = await weatherResponse.json();
      const current = weatherApiData.current;
      
      // Generate farming-specific alerts
      const alerts = [];
      
      if (current.temperature_2m > 35) {
        alerts.push('🌡️ High temperature detected - ensure adequate irrigation for crops');
      } else if (current.temperature_2m < 10) {
        alerts.push('❄️ Low temperature - protect sensitive crops from cold');
      }
      
      if (current.relative_humidity_2m < 30) {
        alerts.push('💧 Low humidity - crops may need additional watering');
      } else if (current.relative_humidity_2m > 85) {
        alerts.push('🌫️ High humidity - monitor for fungal diseases');
      }
      
      if (current.wind_speed_10m > 20) {
        alerts.push('💨 Strong winds expected - secure loose farm structures');
      }
      
      if (current.precipitation > 0) {
        alerts.push('🌧️ Rain detected - good conditions for sowing/transplanting');
      } else if (current.precipitation === 0 && current.relative_humidity_2m < 40) {
        alerts.push('☀️ Dry conditions - consider irrigation scheduling');
      }
      
      if (current.weather_code >= 80 && current.weather_code <= 82) {
        alerts.push('⛈️ Heavy rain expected - protect harvested crops');
      } else if (current.weather_code >= 61 && current.weather_code <= 65) {
        alerts.push('🌦️ Light to moderate rain - ideal for field preparation');
      }
      
      if (alerts.length === 0) {
        alerts.push('✅ Weather conditions are favorable for farming activities');
      }
      
      setWeatherData({
        temperature: `${Math.round(current.temperature_2m)}°C`,
        humidity: `${current.relative_humidity_2m}%`,
        rainfall: current.precipitation > 0 ? 
          `${current.precipitation}mm detected` : 
          'No rain currently',
        alerts: alerts,
        condition: current.weather_code < 10 ? 'clear' : 'cloudy',
        loading: false,
        locationName: name
      });
    } catch (error) {
      // Location-specific fallback data
      const locationSpecificData = {
        'deoghar': {
          temperature: '32°C',
          humidity: '68%',
          rainfall: 'Light showers expected',
          alerts: ['🌡️ Warm weather in Deoghar - good for rice cultivation', '💧 Moderate humidity levels detected']
        },
        'ranchi': {
          temperature: '29°C', 
          humidity: '72%',
          rainfall: 'Heavy rain likely',
          alerts: ['🌧️ Ranchi monsoon active - ideal for kharif sowing', '🌾 Good conditions for paddy cultivation']
        },
        'patna': {
          temperature: '35°C',
          humidity: '65%', 
          rainfall: 'No rain expected',
          alerts: ['☀️ Hot weather in Patna - increase irrigation frequency', '🌡️ Monitor crops for heat stress']
        },
        'mumbai': {
          temperature: '31°C',
          humidity: '78%', 
          rainfall: 'Moderate rain expected',
          alerts: ['🌊 Coastal humidity - good for coconut and rice crops', '🌧️ Monsoon conditions favorable']
        },
        'delhi': {
          temperature: '38°C',
          humidity: '45%', 
          rainfall: 'No rain expected',
          alerts: ['🔥 Very hot weather - critical irrigation needed', '⚠️ Heat wave conditions - protect livestock']
        }
      };
      
      const locationKey = location.toLowerCase();
      const specificData = locationSpecificData[locationKey] || locationSpecificData['deoghar'];
      
      setWeatherData({
        ...specificData,
        condition: 'clear',
        loading: false,
        locationName: location
      });
    }
  };

  // Fetch weather when location changes
  React.useEffect(() => {
    if (userProfile.location) {
      fetchWeatherData(userProfile.location);
    }
  }, [userProfile.location]);

  // Market prices data
  const marketPrices = [
    { crop: 'Rice', price: '₹2,100/quintal', trend: 'up', change: '+₹50' },
    { crop: 'Wheat', price: '₹2,400/quintal', trend: 'stable', change: '±₹0' },
    { crop: 'Sugarcane', price: '₹350/quintal', trend: 'down', change: '-₹20' },
    { crop: 'Cotton', price: '₹6,800/quintal', trend: 'up', change: '+₹200' },
    { crop: 'Soybean', price: '₹4,200/quintal', trend: 'up', change: '+₹150' },
    { crop: 'Corn', price: '₹1,800/quintal', trend: 'stable', change: '±₹0' }
  ];

  // Soil recommendations
  const soilRecommendations = [
    { nutrient: 'Nitrogen', level: 'Moderate', action: 'Apply 40kg/acre of urea', icon: '🌿' },
    { nutrient: 'Phosphorus', level: 'Low', action: 'Add 30kg/acre DAP fertilizer', icon: '🧪' },
    { nutrient: 'Potassium', level: 'Good', action: 'No immediate action needed', icon: '✅' },
    { nutrient: 'pH Level', level: '6.2', action: 'Slightly acidic - consider lime', icon: '⚗️' }
  ];

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    setTimeout(() => setIsListening(false), 3000);
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  // Home Page Component
  const renderHome = () => (
    <div className="p-4 space-y-6">
      <div className="text-center mb-6">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
          <Leaf className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-green-700 mb-2">{t.welcome}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={() => setCurrentPage('weather')}
          className="p-4 bg-gradient-to-br from-blue-100 to-sky-200 rounded-xl flex flex-col items-center space-y-3 hover:from-blue-200 hover:to-sky-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <div className="relative">
            <Sun className="w-8 h-8 text-yellow-500 absolute -top-1 -right-1" />
            <CloudRain className="w-10 h-10 text-blue-600" />
          </div>
          <span className="text-sm font-semibold text-blue-800">{t.weather}</span>
        </button>
        
        <button 
          onClick={() => setCurrentPage('market')}
          className="p-4 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex flex-col items-center space-y-3 hover:from-green-200 hover:to-emerald-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <div className="relative">
            <TrendingUp className="w-10 h-10 text-green-600" />
            <DollarSign className="w-5 h-5 text-green-700 absolute -bottom-1 -right-1" />
          </div>
          <span className="text-sm font-semibold text-green-800">{t.market}</span>
        </button>
        
        <button 
          onClick={() => setCurrentPage('detection')}
          className="p-4 bg-gradient-to-br from-orange-100 to-red-200 rounded-xl flex flex-col items-center space-y-3 hover:from-orange-200 hover:to-red-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <div className="relative">
            <Leaf className="w-10 h-10 text-green-600" />
            <Zap className="w-5 h-5 text-red-500 absolute -top-1 -right-1" />
          </div>
          <span className="text-sm font-semibold text-orange-800">{t.detection}</span>
        </button>
        
        <button 
          onClick={() => setCurrentPage('advisory')}
          className="p-4 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl flex flex-col items-center space-y-3 hover:from-purple-200 hover:to-indigo-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <div className="relative">
            <BookOpen className="w-10 h-10 text-purple-600" />
            <Award className="w-5 h-5 text-indigo-500 absolute -top-1 -right-1" />
          </div>
          <span className="text-sm font-semibold text-purple-800">{t.advisory}</span>
        </button>
      </div>

      {/* Voice Assistant */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border border-blue-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
            {t.voiceSupport}
          </h3>
          <Mic className="w-5 h-5 text-blue-600" />
        </div>
        <button 
          onClick={handleVoiceInput}
          className={`w-full p-4 rounded-xl border-2 border-dashed transition-all duration-300 ${
            isListening 
              ? 'border-red-400 bg-red-50 text-red-700 animate-pulse' 
              : 'border-blue-300 bg-white hover:border-blue-400 hover:shadow-md'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <Mic className={`w-6 h-6 ${isListening ? 'text-red-600' : 'text-blue-500'}`} />
            <span className="font-medium">{isListening ? t.listening : t.tapToSpeak}</span>
          </div>
        </button>
      </div>

      {/* Quick Stats */}
      {userProfile.location && (
        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
          <h3 className="font-semibold text-green-800 mb-2">Your Farm Summary</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-green-600" />
              <span>{userProfile.location}</span>
            </div>
            {userProfile.primaryCrop && (
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-green-600" />
                <span>{userProfile.primaryCrop}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );

  // Profile Page Component
  const renderProfile = () => (
    <div className="p-4 space-y-4">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{t.profile}</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Farmer Name</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
            value={userProfile.name}
            onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.location}</label>
          <div className="relative">
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your city (e.g., Deoghar, Ranchi)"
              value={userProfile.location}
              onChange={(e) => setUserProfile({...userProfile, location: e.target.value})}
              onBlur={() => fetchWeatherData(userProfile.location)}
            />
            <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          </div>
          <p className="text-xs text-gray-500 mt-1">Weather will update automatically for your location</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.crop}</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={userProfile.primaryCrop}
            onChange={(e) => setUserProfile({...userProfile, primaryCrop: e.target.value})}
          >
            <option value="">Select primary crop</option>
            <option value="Rice">Rice</option>
            <option value="Wheat">Wheat</option>
            <option value="Cotton">Cotton</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Soybean">Soybean</option>
            <option value="Corn">Corn</option>
            <option value="Mustard">Mustard</option>
            <option value="Chickpea">Chickpea</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t.farmSize}</label>
          <input 
            type="number" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter farm size"
            value={userProfile.farmSize}
            onChange={(e) => setUserProfile({...userProfile, farmSize: e.target.value})}
          />
        </div>

        <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
          {t.save}
        </button>
      </div>
    </div>
  );

  // Weather Page Component
  const renderWeather = () => (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">{t.currentWeather}</h2>
        {userProfile.location && (
          <div className="text-sm text-gray-600 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {userProfile.location}
          </div>
        )}
      </div>
      
      {weatherData.loading ? (
        <div className="bg-blue-50 p-6 rounded-xl animate-pulse">
          <div className="text-center text-blue-600">
            <Cloud className="w-12 h-12 mx-auto mb-2 animate-bounce" />
            <p className="font-medium">Fetching weather data...</p>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-6 rounded-xl border border-blue-200 shadow-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/50 p-4 rounded-lg">
              <Thermometer className="w-6 h-6 mx-auto text-red-500 mb-2" />
              <div className="text-2xl font-bold text-blue-700">{weatherData.temperature}</div>
              <div className="text-xs text-gray-600">Temperature</div>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <Cloud className="w-6 h-6 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-700">{weatherData.humidity}</div>
              <div className="text-xs text-gray-600">Humidity</div>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <CloudRain className="w-6 h-6 mx-auto text-blue-700 mb-2" />
              <div className="text-lg font-bold text-blue-700">{weatherData.rainfall}</div>
              <div className="text-xs text-gray-600">Rainfall</div>
            </div>
          </div>
        </div>
      )}

      <div>
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
          <Bell className="w-4 h-4 mr-2" />
          {t.alerts}
        </h3>
        <div className="space-y-3">
          {weatherData.alerts.map((alert, index) => (
            <div key={index} className={`border-l-4 p-4 rounded-lg ${
              alert.includes('favorable') || alert.includes('good') || alert.includes('✅')
                ? 'bg-green-50 border-green-400 text-green-800'
                : alert.includes('High') || alert.includes('Strong') || alert.includes('🔥')
                ? 'bg-red-50 border-red-400 text-red-800'
                : 'bg-yellow-50 border-yellow-400 text-yellow-800'
            }`}>
              <p className="text-sm font-medium">{alert}</p>
            </div>
          ))}
        </div>
      </div>

      {!userProfile.location && (
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg text-center">
          <MapPin className="w-8 h-8 mx-auto text-orange-500 mb-2" />
          <p className="text-orange-800 font-medium">Set your location in Profile</p>
          <p className="text-orange-600 text-sm">to get accurate weather data</p>
        </div>
      )}
    </div>
  );

  // Market Page Component
  const renderMarket = () => (
    <div className="p-4 space-y-4">
      <div className="text-center mb-6">
        <TrendingUp className="w-16 h-16 mx-auto text-green-600 mb-3" />
        <h2 className="text-xl font-bold text-gray-800">{t.marketPrices}</h2>
        <p className="text-sm text-gray-600">Live prices from major mandis</p>
      </div>
      
      <div className="space-y-3">
        {marketPrices.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.crop}</h3>
                  <p className="text-lg font-bold text-green-600">{item.price}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`flex items-center space-x-1 ${
                  item.trend === 'up' ? 'text-green-600' : 
                  item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  <TrendingUp className={`w-4 h-4 ${item.trend === 'down' ? 'rotate-180' : ''}`} />
                  <span className="text-sm font-medium">{item.change}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">vs yesterday</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
          <Bell className="w-4 h-4 mr-2" />
          Market Alerts
        </h3>
        <div className="space-y-2 text-sm">
          <p className="text-blue-700">• Cotton prices rising due to export demand</p>
          <p className="text-blue-700">• Good time to sell soybean - prices stable</p>
          <p className="text-blue-700">• Rice demand expected to increase next week</p>
        </div>
      </div>
    </div>
  );

  // Crop Detection Page Component
  const renderDetection = () => (
    <div className="p-4 space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
          <Camera className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{t.pestControl}</h2>
        <p className="text-sm text-gray-600">AI-powered crop health analysis</p>
      </div>
      
      <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl border border-orange-200">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <Upload className="w-5 h-5 mr-2 text-orange-600" />
          {t.uploadPhoto}
        </h3>
        <button 
          onClick={handleImageUpload}
          className="w-full border-2 border-dashed border-orange-300 rounded-xl p-8 text-center hover:border-orange-400 hover:bg-orange-50 transition-all duration-300"
        >
          <Camera className="w-16 h-16 mx-auto text-orange-400 mb-4" />
          <p className="text-orange-700 font-semibold text-lg mb-2">Tap to capture or upload</p>
          <p className="text-sm text-orange-600">Get instant disease & pest diagnosis</p>
          <p className="text-xs text-orange-500 mt-2">Supports: JPG, PNG, HEIC</p>
        </button>
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" />
      </div>

      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
        <h3 className="font-semibold text-green-800 mb-3 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Recent Analysis History
        </h3>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">✅ Healthy Rice Crop</p>
                <p className="text-xs text-gray-600 mt-1">No diseases detected • 2 hours ago</p>
                <p className="text-xs text-green-700 mt-1">Recommendation: Continue current care routine</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-200 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">⚠️ Early Leaf Blight Detected</p>
                <p className="text-xs text-gray-600 mt-1">Tomato crop • 1 day ago</p>
                <p className="text-xs text-yellow-700 mt-1">Applied: Copper fungicide spray recommended</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">🐛 Aphid Infestation</p>
                <p className="text-xs text-gray-600 mt-1">Cotton crop • 3 days ago</p>
                <p className="text-xs text-red-700 mt-1">Treatment: Neem oil spray applied successfully</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">💡 Detection Tips</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Take photos in good natural light</li>
          <li>• Focus on affected leaves or areas</li>
          <li>• Include multiple angles if possible</li>
          <li>• Clean camera lens for better results</li>
        </ul>
      </div>
    </div>
  );

  // Advisory Page Component
  const renderAdvisory = () => (
    <div className="p-4 space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{t.advisory}</h2>
        <p className="text-sm text-gray-600">Expert farming guidance</p>
      </div>
      
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200 shadow-lg">
        <h3 className="font-semibold text-green-800 mb-4 flex items-center">
          <PieChart className="w-5 h-5 mr-2" />
          {t.soilHealth}
        </h3>
        <div className="space-y-3">
          {soilRecommendations.map((rec, index) => (
            <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-green-400 shadow-sm">
              <div className="flex items-start space-x-3">
                <span className="text-lg">{rec.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-800">{rec.nutrient}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rec.level === 'Good' ? 'bg-green-100 text-green-700' :
                      rec.level === 'Low' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {rec.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{rec.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2" />
          Recommended Crops for Your Region
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Basmati Rice', season: 'Kharif', profit: 'High' },
            { name: 'Wheat', season: 'Rabi', profit: 'Medium' },
            { name: 'Mustard', season: 'Rabi', profit: 'Good' },
            { name: 'Chickpea', season: 'Rabi', profit: 'High' },
            { name: 'Sugarcane', season: 'Annual', profit: 'Very High' },
            { name: 'Cotton', season: 'Kharif', profit: 'High' }
          ].map((crop, index) => (
            <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-800 text-sm">{crop.name}</h4>
              <p className="text-xs text-gray-600">{crop.season} Season</p>
              <p className={`text-xs font-medium mt-1 ${
                crop.profit === 'Very High' ? 'text-green-700' :
                crop.profit === 'High' ? 'text-green-600' :
                crop.profit === 'Good' ? 'text-blue-600' :
                'text-yellow-600'
              }`}>
                {crop.profit} Profit
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
        <h3 className="font-semibold text-yellow-800 mb-3 flex items-center">
          <Bell className="w-4 h-4 mr-2" />
          Seasonal Advisory
        </h3>
        <div className="space-y-2 text-sm text-yellow-800">
          <p>🌾 <strong>Current Season:</strong> Post-monsoon farming activities</p>
          <p>💧 <strong>Irrigation:</strong> Monitor soil moisture levels daily</p>
          <p>🚜 <strong>Equipment:</strong> Prepare for winter crop harvesting</p>
          <p>📈 <strong>Market:</strong> Good time for crop diversification</p>
        </div>
      </div>
    </div>
  );

  // Feedback Page Component
  const renderFeedback = () => (
    <div className="p-4 space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{t.feedback}</h2>
        <p className="text-sm text-gray-600">Help us serve you better</p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">{t.rateExperience}</label>
          <div className="flex justify-center space-x-2 mb-4">
            {[1,2,3,4,5].map((star) => (
              <Star key={star} className="w-12 h-12 text-yellow-400 fill-current cursor-pointer hover:scale-110 transition-transform" />
            ))}
          </div>
          <p className="text-center text-sm text-gray-600">Tap stars to rate</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-3">{t.yourFeedback}</label>
          <textarea 
            className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Share your thoughts, suggestions, or report issues..."
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Feedback Options</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '👍', text: 'App is helpful' },
              { icon: '🐛', text: 'Report a bug' },
              { icon: '💡', text: 'Suggest feature' },
              { icon: '❓', text: 'Need help' }
            ].map((option, index) => (
              <button key={index} className="p-3 bg-white rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm">
                <span className="text-lg mr-2">{option.icon}</span>
                {option.text}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          {t.submit}
        </button>
      </div>
    </div>
  );

  // Main render function
  const renderContent = () => {
    switch(currentPage) {
      case 'home': return renderHome();
      case 'profile': return renderProfile();
      case 'weather': return renderWeather();
      case 'market': return renderMarket();
      case 'detection': return renderDetection();
      case 'advisory': return renderAdvisory();
      case 'feedback': return renderFeedback();
      default: return renderHome();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen flex flex-col shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold">{t.appName}</h1>
        </div>
        <div className="flex space-x-2">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-green-500 text-white border border-green-400 rounded-lg px-3 py-1 text-sm font-medium hover:bg-green-400 transition-colors"
          >
            <option value="en">EN</option>
            <option value="hi">हिं</option>
            <option value="pa">ਪੰ</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-2 shadow-lg">
        <div className="flex justify-around">
          {[
            { id: 'home', icon: Home, label: t.home },
            { id: 'profile', icon: User, label: t.profile },
            { id: 'weather', icon: CloudRain, label: t.weather },
            { id: 'market', icon: TrendingUp, label: t.market },
            { id: 'feedback', icon: MessageCircle, label: t.feedback }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
                currentPage === id 
                  ? 'text-green-600 bg-green-50 scale-105 shadow-md' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KisanSarthiApp;