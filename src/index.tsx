import React, { useState } from 'react';

const Audacity: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [recording, setRecording] = useState(false);
  const [selectedTool, setSelectedTool] = useState('select');

  const tools = [
    { id: 'select', icon: '↔️', name: 'Selection' },
    { id: 'envelope', icon: '📈', name: 'Envelope' },
    { id: 'draw', icon: '✏️', name: 'Draw' },
    { id: 'zoom', icon: '🔍', name: 'Zoom' },
    { id: 'timeshift', icon: '⏱️', name: 'Time Shift' },
  ];

  return (
    <div className="h-full flex flex-col bg-[#c0c0c0]">
      {/* Menu */}
      <div className="h-6 bg-[#e0e0e0] flex items-center px-4 gap-4 text-sm border-b">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Transport</span>
        <span>Tracks</span>
        <span>Generate</span>
        <span>Effect</span>
        <span>Analyze</span>
      </div>

      {/* Toolbar */}
      <div className="h-12 bg-[#d0d0d0] flex items-center px-4 gap-2 border-b">
        {/* Transport */}
        <div className="flex gap-1 mr-4">
          <button className="w-8 h-8 bg-[#e0e0e0] rounded flex items-center justify-center border hover:bg-[#f0f0f0]">
            ⏮️
          </button>
          <button 
            onClick={() => setPlaying(!playing)}
            className={`w-8 h-8 rounded flex items-center justify-center border ${playing ? 'bg-green-200' : 'bg-[#e0e0e0] hover:bg-[#f0f0f0]'}`}
          >
            {playing ? '⏸️' : '▶️'}
          </button>
          <button className="w-8 h-8 bg-[#e0e0e0] rounded flex items-center justify-center border hover:bg-[#f0f0f0]">
            ⏹️
          </button>
          <button className="w-8 h-8 bg-[#e0e0e0] rounded flex items-center justify-center border hover:bg-[#f0f0f0]">
            ⏭️
          </button>
          <button 
            onClick={() => setRecording(!recording)}
            className={`w-8 h-8 rounded flex items-center justify-center border ${recording ? 'bg-red-300' : 'bg-[#e0e0e0] hover:bg-[#f0f0f0]'}`}
          >
            ⏺️
          </button>
        </div>

        {/* Tools */}
        <div className="flex gap-1">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setSelectedTool(tool.id)}
              className={`w-8 h-8 rounded flex items-center justify-center border ${
                selectedTool === tool.id ? 'bg-blue-200 border-blue-400' : 'bg-[#e0e0e0] hover:bg-[#f0f0f0]'
              }`}
              title={tool.name}
            >
              {tool.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Tracks Area */}
      <div className="flex-1 flex flex-col overflow-auto bg-[#a0a0a0]">
        {/* Timeline */}
        <div className="h-8 bg-[#d0d0d0] border-b flex">
          <div className="w-40" />
          <div className="flex-1 flex items-end">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="flex-1 border-l border-gray-400 text-xs pl-1">
                {i}s
              </div>
            ))}
          </div>
        </div>

        {/* Audio Track */}
        <div className="flex border-b bg-[#b0b0b0]">
          <div className="w-40 bg-[#c0c0c0] p-2 border-r">
            <div className="text-sm font-semibold">Audio Track</div>
            <div className="flex gap-1 mt-1">
              <button className="text-xs px-1 bg-[#d0d0d0] rounded">Mute</button>
              <button className="text-xs px-1 bg-[#d0d0d0] rounded">Solo</button>
            </div>
            <div className="mt-2">
              <input type="range" className="w-full" defaultValue="75" />
            </div>
          </div>
          <div className="flex-1 h-24 relative bg-[#e0e0e0]">
            {/* Waveform */}
            <div className="absolute inset-2 bg-[#63b8ff] opacity-80 rounded flex items-center justify-center text-blue-800">
              <span className="font-mono text-sm">
                ▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁▂▃▄▅▆▇█▇▆▅▄▃▂▁
              </span>
            </div>
          </div>
        </div>

        {/* Stereo Track */}
        <div className="flex border-b bg-[#b0b0b0]">
          <div className="w-40 bg-[#c0c0c0] p-2 border-r">
            <div className="text-sm font-semibold">Stereo Track</div>
          </div>
          <div className="flex-1 h-32 bg-[#e0e0e0] flex flex-col">
            <div className="flex-1 relative">
              <div className="absolute inset-x-2 top-2 bottom-0 bg-[#90ee90] opacity-80" />
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-x-2 top-0 bottom-2 bg-[#90ee90] opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="h-6 bg-[#d0d0d0] flex items-center px-4 text-xs border-t">
        <span>44100 Hz • 32-bit float • Stereo</span>
        <span className="ml-auto">Selection: 0.000s - 0.000s</span>
      </div>
    </div>
  );
};

export default Audacity;
