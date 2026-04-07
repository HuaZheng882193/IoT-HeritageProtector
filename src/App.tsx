import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ThermometerSun,
  Droplets,
  Sun,
  Cloud,
  User,
  BookOpen,
  Coffee,
  Cpu,
  Cloud as CloudIcon,
  Fan,
  Waves,
  AlertTriangle,
  ArrowDown,
  Activity
} from 'lucide-react';

export default function App() {
  // 状态：模拟传感器数据
  const [temperature, setTemperature] = useState(22);
  const [humidity, setHumidity] = useState(50);

  // 逻辑：判断是否超标
  const isFanOn = temperature > 25;
  const isHumidifierOn = humidity < 40;

  // 状态提示文字
  const getStatus = () => {
    if (isFanOn && isHumidifierOn) return { text: "环境恶劣，设备全开！", color: "text-red-600 bg-red-100 border-red-200" };
    if (isFanOn) return { text: "温度过高，正在降温...", color: "text-orange-600 bg-orange-100 border-orange-200" };
    if (isHumidifierOn) return { text: "过于干燥，正在加湿...", color: "text-blue-600 bg-blue-100 border-blue-200" };
    return { text: "环境适宜，文物安全", color: "text-emerald-600 bg-emerald-100 border-emerald-200" };
  };

  const status = getStatus();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-pink-50 p-4 md:p-8 font-sans text-slate-800 selection:bg-amber-200">
      {/* 顶部标题 */}
      <header className="text-center mb-8 md:mb-12">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-amber-800 tracking-wider drop-shadow-sm flex items-center justify-center gap-3">
            <span className="text-4xl">✨</span>
            智慧守护：物联网助力文物保护
            <span className="text-4xl">✨</span>
          </h1>
          <p className="mt-3 text-amber-700/80 font-medium text-lg">八年级信息科技演示程序</p>
        </motion.div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* 左侧：问题提出 (核心挑战 & 伤痕) */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          
          {/* 核心挑战 */}
          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-md rounded-[2rem] border-4 border-amber-900/10 shadow-xl p-6 md:p-8"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-bold mb-6">
              <AlertTriangle size={20} />
              核心挑战：环境对文物的威胁
            </div>
            <p className="text-slate-600 mb-6 font-medium leading-relaxed">
              剧烈的温度、湿度变化，以及光照和二氧化碳都会损害珍贵的文物。
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-red-50 rounded-2xl border border-red-100 transition-transform hover:scale-105">
                <ThermometerSun className="w-12 h-12 text-red-500 mb-2" />
                <span className="font-bold text-red-700">温度</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-2xl border border-blue-100 transition-transform hover:scale-105">
                <Droplets className="w-12 h-12 text-blue-500 mb-2" />
                <span className="font-bold text-blue-700">湿度</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-2xl border border-yellow-100 transition-transform hover:scale-105">
                <Sun className="w-12 h-12 text-yellow-500 mb-2" />
                <span className="font-bold text-yellow-700">光照</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-200 transition-transform hover:scale-105">
                <Cloud className="w-12 h-12 text-gray-500 mb-2" />
                <span className="font-bold text-gray-700">二氧化碳</span>
              </div>
            </div>
          </motion.section>

          {/* 文物的伤痕 */}
          <motion.section 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-md rounded-[2rem] border-4 border-amber-900/10 shadow-xl p-6 md:p-8"
          >
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full font-bold mb-6">
              <Activity size={20} />
              文物的“伤痕”
            </div>
            <div className="flex justify-between items-center gap-2 md:gap-4">
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-50 rounded-full flex items-center justify-center mb-3 border-2 border-orange-200 group-hover:bg-orange-100 transition-colors">
                  <User className="w-8 h-8 md:w-10 md:h-10 text-orange-600" />
                </div>
                <span className="text-sm font-bold text-slate-700">兵马俑褪色</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-50 rounded-full flex items-center justify-center mb-3 border-2 border-amber-200 group-hover:bg-amber-100 transition-colors">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-amber-700" />
                </div>
                <span className="text-sm font-bold text-slate-700">纸质文物发霉</span>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-stone-50 rounded-full flex items-center justify-center mb-3 border-2 border-stone-200 group-hover:bg-stone-100 transition-colors">
                  <Coffee className="w-8 h-8 md:w-10 md:h-10 text-stone-600" />
                </div>
                <span className="text-sm font-bold text-slate-700">瓷器产生裂纹</span>
              </div>
            </div>
          </motion.section>

        </div>

        {/* 右侧：解决方案 (物联网流程演示) */}
        <div className="lg:col-span-7">
          <motion.section 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/90 backdrop-blur-md rounded-[2rem] border-4 border-blue-900/10 shadow-2xl p-6 md:p-8 h-full flex flex-col"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h2 className="text-2xl font-extrabold text-blue-900 flex items-center gap-2">
                <Cpu className="text-blue-500 w-8 h-8" />
                物联网工作流程演示
              </h2>
              <div className={`px-4 py-2 rounded-full border-2 font-bold text-sm flex items-center gap-2 transition-colors ${status.color}`}>
                <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                {status.text}
              </div>
            </div>

            <div className="flex-1 flex flex-col relative">
              
              {/* 1. 感知与采集 */}
              <div className="bg-blue-50/50 rounded-2xl p-6 border-2 border-blue-100 relative z-10 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-bold text-blue-900">感知与采集</h3>
                </div>
                <p className="text-sm text-blue-700 mb-6 font-medium">教师操作：拖动下方滑块，模拟展柜内温湿度传感器的实时数据变化。</p>
                
                <div className="space-y-8">
                  {/* 温度滑块 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex justify-between mb-3">
                      <span className="font-bold flex items-center gap-2 text-red-600">
                        <ThermometerSun size={20} /> 温度传感器
                      </span>
                      <span className="font-black text-xl text-red-600">{temperature}°C</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" max="50" 
                      value={temperature} 
                      onChange={(e) => setTemperature(Number(e.target.value))}
                      className="w-full h-4 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                    <div className="flex justify-between text-xs font-medium text-slate-400 mt-2">
                      <span>0°C</span>
                      <span className="text-red-400 bg-red-50 px-2 py-1 rounded">阈值: 25°C</span>
                      <span>50°C</span>
                    </div>
                  </div>

                  {/* 湿度滑块 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex justify-between mb-3">
                      <span className="font-bold flex items-center gap-2 text-blue-600">
                        <Droplets size={20} /> 湿度传感器
                      </span>
                      <span className="font-black text-xl text-blue-600">{humidity}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" max="100" 
                      value={humidity} 
                      onChange={(e) => setHumidity(Number(e.target.value))}
                      className="w-full h-4 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-xs font-medium text-slate-400 mt-2">
                      <span>0%</span>
                      <span className="text-blue-400 bg-blue-50 px-2 py-1 rounded">阈值: 40%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. 传输与存储 (动画区域) */}
              <div className="flex flex-col items-center justify-center py-4 relative z-0">
                <div className="h-12 w-1 bg-indigo-100 rounded-full relative overflow-hidden my-2">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1/2 bg-indigo-400 rounded-full"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                <div className="bg-indigo-50 rounded-2xl p-4 border-2 border-indigo-100 flex items-center gap-4 z-10 shadow-sm hover:border-indigo-300 transition-colors w-full md:w-3/4 mx-auto">
                  <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center shrink-0">
                    <CloudIcon className="w-6 h-6 text-indigo-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full bg-indigo-200 text-indigo-800 flex items-center justify-center font-bold text-xs">2</div>
                      <h3 className="text-lg font-bold text-indigo-900">传输与存储</h3>
                    </div>
                    <p className="text-xs text-indigo-700 font-medium">数据通过网络发送并存入 MQTT 服务器</p>
                  </div>
                </div>

                <div className="h-12 w-1 bg-emerald-100 rounded-full relative overflow-hidden my-2">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1/2 bg-emerald-400 rounded-full"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* 3. 分析与控制 */}
              <div className="bg-emerald-50/50 rounded-2xl p-6 border-2 border-emerald-100 z-10 hover:border-emerald-300 transition-colors mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold">3</div>
                  <h3 className="text-xl font-bold text-emerald-900">分析与控制</h3>
                </div>
                <p className="text-sm text-emerald-700 mb-6 font-medium">系统自动判断数据，若超标则下发指令启动对应设备。</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 风扇 */}
                  <div className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${isFanOn ? 'bg-white border-2 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-white/50 border-2 border-transparent opacity-70 grayscale-[0.5]'}`}>
                    <div className="relative mb-4">
                      <motion.div
                        animate={{ rotate: isFanOn ? 360 : 0 }}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                        className={`p-4 rounded-full ${isFanOn ? 'bg-emerald-100' : 'bg-slate-100'}`}
                      >
                        <Fan className={`w-12 h-12 ${isFanOn ? 'text-emerald-600' : 'text-slate-400'}`} />
                      </motion.div>
                      {isFanOn && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full"
                        >
                          ON
                        </motion.div>
                      )}
                    </div>
                    <span className={`font-black text-lg ${isFanOn ? 'text-emerald-700' : 'text-slate-500'}`}>
                      降温风扇
                    </span>
                    <span className="text-sm font-medium text-slate-500 mt-1">
                      {isFanOn ? '正在运行中...' : '待机中'}
                    </span>
                  </div>

                  {/* 加湿器 */}
                  <div className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${isHumidifierOn ? 'bg-white border-2 border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.3)]' : 'bg-white/50 border-2 border-transparent opacity-70 grayscale-[0.5]'}`}>
                    <div className="relative mb-4">
                      <div className={`p-4 rounded-full ${isHumidifierOn ? 'bg-blue-100' : 'bg-slate-100'}`}>
                        <Waves className={`w-12 h-12 ${isHumidifierOn ? 'text-blue-600' : 'text-slate-400'}`} />
                      </div>
                      {isHumidifierOn && (
                        <>
                          <motion.div 
                            className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-400"
                            animate={{ y: [0, -15, 0], opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Cloud size={28} />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full"
                          >
                            ON
                          </motion.div>
                        </>
                      )}
                    </div>
                    <span className={`font-black text-lg ${isHumidifierOn ? 'text-blue-700' : 'text-slate-500'}`}>
                      补水加湿器
                    </span>
                    <span className="text-sm font-medium text-slate-500 mt-1">
                      {isHumidifierOn ? '正在喷雾中...' : '待机中'}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
