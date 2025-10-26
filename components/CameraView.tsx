import React, { useState, useRef } from 'react';
import { analyzeLitterImage } from '../services/geminiService';
import type { AnalysisResult } from '../types';

interface CameraViewProps {
  onAnalysisComplete: (result: AnalysisResult) => void;
  setIsLoading: (loading: boolean) => void;
}

const CameraView: React.FC<CameraViewProps> = ({ onAnalysisComplete, setIsLoading }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setAnalysisResult(null);

    // remove data:image/jpeg;base64,
    const base64Image = selectedImage.split(',')[1];
    const result = await analyzeLitterImage(base64Image);
    
    setAnalysisResult(result);
    onAnalysisComplete(result);
    
    setIsLoading(false);
    setSelectedImage(null); // Clear image after submission
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const messageBgColor = analysisResult?.isValid ? 'bg-emerald-100 border-emerald-500 text-emerald-800' : 'bg-red-100 border-red-500 text-red-800';

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center flex-grow justify-center">
       <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      {selectedImage ? (
        <div className="w-full flex flex-col items-center">
            <img src={selectedImage} alt="Selected litter" className="w-48 h-48 object-cover rounded-lg mb-4 border-4 border-slate-200" />
            <div className="flex w-full space-x-2">
                 <button 
                    onClick={() => setSelectedImage(null)} 
                    className="flex-1 bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl hover:bg-slate-300 transition-colors"
                 >
                    Cancel
                </button>
                <button 
                    onClick={handleSubmit} 
                    className="flex-1 bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-emerald-600 transition-colors"
                >
                    Submit for Points
                </button>
            </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Ready to clean up?</h3>
            <p className="text-slate-500 mb-4">Take a photo of litter in your hand to earn points.</p>
            <button
                onClick={triggerFileInput}
                className="w-full bg-emerald-500 text-white font-bold py-4 px-4 rounded-xl hover:bg-emerald-600 transition-transform transform hover:scale-105 shadow-md flex items-center justify-center space-x-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Scan Litter</span>
            </button>
        </div>
      )}
      {analysisResult && (
        <div className={`w-full mt-4 p-4 border-l-4 rounded-r-lg ${messageBgColor}`}>
          <p className="font-semibold">{analysisResult.reason}</p>
          {analysisResult.isValid && (
            <p>You earned {analysisResult.points} points!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CameraView;
