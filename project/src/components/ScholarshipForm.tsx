import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

interface FormData {
  fullName: string;
  phoneNumber: string;
  education: string;
  careerPath: string;
  programType: string;
  visitTime: string;
}

interface ScholarshipFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScholarshipForm: React.FC<ScholarshipFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    education: '',
    careerPath: '',
    programType: '',
    visitTime: ''
  });

  const educationOptions = [
    '10th Pass',
    '12th Pass', 
    'Graduate',
    'Postgraduate',
    'Still Studying'
  ];

  const careerOptions = [
    'Fashion',
    'Interior'
  ];

  const programOptions = [
    'Degree',
    'Diploma',
    'Short Course'
  ];

  const visitOptions = [
    'This Week',
    'Within 15 Days',
    'Prefer to Connect on Call'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === 'phoneNumber') {
      // Only allow digits and limit to 10 characters
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [field]: numericValue }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        education: '',
        careerPath: '',
        programType: '',
        visitTime: ''
      });
      setCurrentStep(1);
    }, 3000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim() && formData.phoneNumber.length === 10;
      case 2:
        return formData.education && formData.careerPath;
      case 3:
        return formData.programType && formData.visitTime;
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EBB417]/20 to-transparent" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            Claim Your Scholarship
          </h2>
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${
                  step <= currentStep ? 'bg-[#EBB417]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-300 text-sm">Step {currentStep} of 3</p>
        </div>

        {/* Form Steps */}
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence mode="wait" custom={currentStep}>
            {showSuccess ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Congratulations!</h3>
                <p className="text-gray-300">Our team will get in touch with you shortly.</p>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                custom={currentStep}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 flex flex-col justify-center space-y-6"
              >
              {currentStep === 1 && (
                <>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#EBB417] focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#EBB417] focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Highest Level of Education Completed *
                    </label>
                    <select
                      value={formData.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#EBB417] focus:outline-none transition-colors"
                    >
                      <option value="">Select your education level</option>
                      {educationOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Which Career Path Are You Interested In? *
                    </label>
                    <select
                      value={formData.careerPath}
                      onChange={(e) => handleInputChange('careerPath', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#EBB417] focus:outline-none transition-colors"
                    >
                      <option value="">Select career path</option>
                      {careerOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      What Program Type Would You Like to Join? *
                    </label>
                    <select
                      value={formData.programType}
                      onChange={(e) => handleInputChange('programType', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#EBB417] focus:outline-none transition-colors"
                    >
                      <option value="">Select program type</option>
                      {programOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      When Can You Visit Our Campus? *
                    </label>
                    <select
                      value={formData.visitTime}
                      onChange={(e) => handleInputChange('visitTime', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#EBB417] focus:outline-none transition-colors"
                    >
                      <option value="">Select visit time</option>
                      {visitOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {!showSuccess && (
        <div className="flex justify-between items-center mt-8 relative z-10">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
              currentStep === 1
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-white hover:bg-gray-800'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          {currentStep < 3 ? (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                canProceed()
                  ? 'bg-gradient-to-r from-[#EBB417] to-[#EBB417] text-black hover:shadow-lg hover:shadow-[#EBB417]/25'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                canProceed()
                  ? 'bg-gradient-to-r from-[#EBB417] to-[#EBB417] text-black hover:shadow-lg hover:shadow-[#EBB417]/25'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              Submit Application
            </button>
          )}
        </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ScholarshipForm;