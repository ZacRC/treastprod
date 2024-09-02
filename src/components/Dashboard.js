import {
  LogOutIcon,
  SettingsIcon,
  FileTextIcon,
  MessageSquareIcon,
  MicIcon,
  UploadIcon,
  BotIcon,
  PlayIcon,
  UserIcon,
  CreditCardIcon,
  HelpCircleIcon,
  BookOpenIcon,
  SpeakerIcon,
  HeadphonesIcon,
  ImageIcon,
  SaveIcon,
} from "lucide-react";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [assistantResponse, setAssistantResponse] = useState(null);
  const fileInputRef = useRef(null);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await fetch('http://157.230.234.50/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (response.ok) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        if (navigate) {
          navigate('/login');
        } else {
          window.location.href = '/login';
        }
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  const handleStartProcessing = async () => {
    setIsProcessing(true);
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file`, file);  // Use 'file' as the key for each file
    });

    try {
      const uploadResponse = await fetch('http://157.230.234.50/api/upload/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: formData,
      });

      if (uploadResponse.ok) {
        const processResponse = await fetch('http://157.230.234.50/api/process/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
          },
        });

        if (processResponse.ok) {
          const data = await processResponse.json();
          setAssistantResponse(data.response);
        } else {
          console.error('Processing failed');
        }
      } else {
        console.error('Upload failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsProcessing(false);
      setFiles([]); // Clear the files after processing
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-6 flex flex-col">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex-grow flex justify-center space-x-4">
          <a href="/" className="flex items-center space-x-2 hover:text-green-400">
            <FileTextIcon className="w-5 h-5" />
            <span>Saved Documents</span>
          </a>
          <a href="/" className="flex items-center space-x-2 hover:text-green-400">
            <MessageSquareIcon className="w-5 h-5" />
            <span>Smart Chat</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <div className="relative">
            <button
              className="p-2 hover:bg-gray-800 rounded-full"
              onMouseEnter={() => setIsSettingsOpen(true)}
              onMouseLeave={() => setIsSettingsOpen(false)}
            >
              <SettingsIcon className="w-6 h-6" />
            </button>
            <AnimatePresence>
              {isSettingsOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-lg p-4 z-10"
                  onMouseEnter={() => setIsSettingsOpen(true)}
                  onMouseLeave={() => setIsSettingsOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <UserIcon className="w-6 h-4 text-green-400" />
                        <span className="font-semibold whitespace-nowrap">
                          Account Info
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">Manage your profile</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <CreditCardIcon className="w-6 h-4 text-green-400" />
                        <span className="font-semibold whitespace-nowrap">
                          Subscription
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">Billing details</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <HelpCircleIcon className="w-6 h-4 text-green-400" />
                        <span className="font-semibold whitespace-nowrap">
                          Support
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">Get help</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <BookOpenIcon className="w-6 h-4 text-green-400" />
                        <span className="font-semibold whitespace-nowrap">
                          How to Use
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">Learn more</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className="p-2 hover:bg-gray-800 rounded-full"
            onClick={handleLogout}
          >
            <LogOutIcon className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <button
              className="absolute -top-10 left-0 px-4 py-2 bg-green-500 text-black rounded-full text-sm hover:bg-green-400 transition-colors"
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              Advanced
            </button>
            <div className="flex space-x-6">
              <div
                className="w-64 bg-gray-800 hover:bg-gray-700 rounded-lg p-6 text-center cursor-pointer border-2 border-dashed border-green-400 flex flex-col items-center justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current.click()}
              >
                <UploadIcon className="w-12 h-12 text-green-400 mb-4" />
                <p className="text-sm text-gray-400 mb-2">
                  Drag and drop files here
                </p>
                <p className="text-xs text-gray-500">or</p>
                <button className="mt-2 px-4 py-2 bg-green-500 text-black rounded-full text-sm hover:bg-green-400 transition-colors">
                  Browse Files
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  multiple
                  accept="audio/*,video/*"
                  className="hidden"
                />
              </div>
              <div className="w-64 h-64 bg-gray-800 rounded-lg p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Chat</span>
                  <BotIcon className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-center text-gray-400">Ask me anything...</div>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-gray-700 rounded p-2 text-sm"
                />
              </div>
            </div>
          </div>
          {files.length > 0 && (
            <div className="text-sm text-gray-400">
              {files.length} file(s) selected
            </div>
          )}
        </div>

        <div className="flex space-x-4 items-center">
          <div className="relative">
            <button
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full"
              onMouseEnter={() => setActiveTooltip("headphones")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <HeadphonesIcon className="w-8 h-8 text-green-400" />
            </button>
            <AnimatePresence>
              {activeTooltip === "headphones" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-x-0 mt-2 px-2 py-1 bg-gray-700 text-white text-xs rounded text-center"
                >
                  Record Device and Microphone Audio
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full"
              onMouseEnter={() => setActiveTooltip("speaker")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <SpeakerIcon className="w-8 h-8 text-green-400" />
            </button>
            <AnimatePresence>
              {activeTooltip === "speaker" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-x-0 mt-2 px-2 py-1 bg-gray-700 text-white text-xs rounded text-center"
                >
                  Record Device Audio
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button
              className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full"
              onMouseEnter={() => setActiveTooltip("mic")}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <MicIcon className="w-8 h-8 text-green-400" />
            </button>
            <AnimatePresence>
              {activeTooltip === "mic" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-x-0 mt-2 px-2 py-1 bg-gray-700 text-white text-xs rounded text-center"
                >
                  Record Microphone Audio
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className="px-8 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors flex items-center space-x-2"
            onClick={handleStartProcessing}
            disabled={isProcessing || files.length === 0}
          >
            {isProcessing ? (
              <span>Processing...</span>
            ) : (
              <>
                <PlayIcon className="w-5 h-5" />
                <span>Start</span>
              </>
            )}
          </button>
        </div>
      </main>

      {assistantResponse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg w-3/4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Assistant Response</h2>
            <p className="text-gray-300">{assistantResponse}</p>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-black rounded-full text-sm hover:bg-green-400 transition-colors"
              onClick={() => setAssistantResponse(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showAdvanced && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg w-3/4 max-w-4xl">
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-green-400 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600">
                  <FileTextIcon className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">
                    Drag and drop documents here
                  </p>
                  <p className="text-xs text-gray-500 mt-1">or</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-black rounded-full text-sm hover:bg-green-400 transition-colors">
                    Browse Documents
                  </button>
                </div>
                <div className="border-2 border-dashed border-green-400 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600">
                  <ImageIcon className="w-12 h-12 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">
                    Drag and drop images here
                  </p>
                  <p className="text-xs text-gray-500 mt-1">or</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-black rounded-full text-sm hover:bg-green-400 transition-colors">
                    Browse Images
                  </button>
                </div>
                <div className="col-span-2">
                  <textarea
                    className="w-full h-32 bg-gray-600 rounded-lg p-2 text-sm resize-none"
                    placeholder="Add notes or other miscellaneous text here..."
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <button className="px-6 py-2 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors flex items-center space-x-2">
                <SaveIcon className="w-5 h-5" />
                <span>Save</span>
              </button>
              <button
                className="px-6 py-2 bg-gray-600 text-white font-bold rounded-full hover:bg-gray-500 transition-colors"
                onClick={() => setShowAdvanced(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
