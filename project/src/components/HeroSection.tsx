import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import axios from 'axios';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { auth } from '../firebase';

// Extend Window interface for recaptchaVerifier
declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    recaptchaWidgetId: number;
  }
}

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    educationLevel: '',
    careerPath: '',
    programType: '',
    campusVisitTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateStep1 = () => {
    if (!formData.educationLevel || !formData.careerPath) {
      alert('Please fill in all required fields');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.programType || !formData.campusVisitTime) {
      alert('Please fill in all required fields');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return false;
    }
    if (formData.phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }
    return true;
  };



  const sendOTP = async () => {
    if (!validateStep3()) {
      return;
    }
    
    setLoading(true);
    
    try {
      // Clear any existing recaptcha
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
      
      const existingRecaptcha = document.getElementById('recaptcha-container');
      if (existingRecaptcha) {
        existingRecaptcha.innerHTML = '';
      }

      // Wait a bit to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));

      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'normal',
        callback: () => {
          console.log('reCAPTCHA solved');
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
          window.recaptchaVerifier?.clear();
        }
      });

      const phoneNumber = `+91${formData.phoneNumber}`;
      console.log('Sending OTP to:', phoneNumber);
      
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      alert('OTP sent successfully!');
      
    } catch (error: any) {
      console.error('Error sending OTP:', error);
      
      if (error.code === 'auth/too-many-requests') {
        alert('Too many attempts. Please wait a few minutes and try again.');
      } else if (error.code === 'auth/invalid-phone-number') {
        alert('Invalid phone number format.');
      } else {
        alert(`Error sending OTP: ${error.message}`);
      }
      
      // Clear recaptcha on error
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    if (!confirmationResult) {
      alert('Please request OTP first');
      return;
    }
    
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    setLoading(true);
    
    try {
      const result = await confirmationResult.confirm(otp);
      console.log('OTP verified successfully', result);
      await submitForm();
    } catch (error: any) {
      console.error('Error verifying OTP:', error);
      
      if (error.code === 'auth/invalid-verification-code') {
        alert('Invalid OTP code. Please try again.');
      } else {
        alert(`Error verifying OTP: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const submitForm = async () => {
    try {
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        submittedDate: new Date().toLocaleDateString('en-IN')
      };
      const res = await axios.post("https://jd-655518493333.asia-south1.run.app", submissionData);
      if (res.status === 200) {
        alert("Congratulations, our team will get in touch with you soon");
        setIsFormOpen(false);
        setStep(1);
        setOtpSent(false);
        setOtp('');
        setConfirmationResult(null);
        setFormData({
          fullName: '',
          phoneNumber: '',
          educationLevel: '',
          careerPath: '',
          programType: '',
          campusVisitTime: '',
        });
        
        // Clear recaptcha
        if (window.recaptchaVerifier) {
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = null;
        }
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong with form submission");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 3 && !otpSent) {
      await sendOTP();
    } else if (step === 3 && otpSent) {
      await verifyOTP();
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setStep(1);
    setOtpSent(false);
    setOtp('');
    setConfirmationResult(null);
    
    // Clear recaptcha
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/bg.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          CLAIM YOUR SCHOLARSHIP
        </motion.h1>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-gradient-to-r from-[#EBB417] via-[#EBB417] to-[#EBB417] bg-clip-text mb-8">
          UP TO 75,000*
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
          Your talent can now fund your dream
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-red-400 mb-8 font-semibold">
          Only 7 Seats left
        </motion.p>

        <motion.button initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 170, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-[#EBB417] to-[#EBB417] text-black px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 relative overflow-hidden group cursor-pointer">
          <span className="relative z-10">Claim Now</span>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-r from-[#EBB417] to-[#EBB417] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer">
          <span className="text-white/70 text-sm mb-2">Scroll Down</span>
          <ChevronDown className="text-white/70 w-6 h-6" />
        </motion.div>
      </motion.div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <form onSubmit={handleSubmit} className="bg-white max-w-md w-full p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold mb-4">Claim Scholarship</h2>

            {/* STEP 1: Education + Career */}
            {step === 1 && (
              <>
                <select name="educationLevel" value={formData.educationLevel} onChange={handleChange}
                  className="w-full border px-3 py-2 rounded" required>
                  <option value="">What is your Highest level of education completed?</option>
                  <option value="10th pass">10th pass</option>
                  <option value="12th pass">12th pass</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Still studying">Still studying</option>
                </select>

                <select name="careerPath" value={formData.careerPath} onChange={handleChange}
                  className="w-full border px-3 py-2 rounded" required>
                  <option value="">Which career path are you interested in?</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Interior">Interior</option>
                </select>

                <div className="flex gap-2">
                  <button type="button" onClick={() => validateStep1() && setStep(2)} className="flex-1 bg-yellow-500 py-2 rounded font-semibold">Next</button>
                </div>
              </>
            )}

            {/* STEP 2: Program + Campus */}
            {step === 2 && (
              <>
                <select name="programType" value={formData.programType} onChange={handleChange}
                  className="w-full border px-3 py-2 rounded" required>
                  <option value="">What program type would you like to join?</option>
                  <option value="Degree">Degree</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Short course">Short course</option>
                </select>

                <select name="campusVisitTime" value={formData.campusVisitTime} onChange={handleChange}
                  className="w-full border px-3 py-2 rounded" required>
                  <option value="">When can you visit our campus?</option>
                  <option value="This week">This week</option>
                  <option value="Within 15 days">Within 15 days</option>
                  <option value="Prefer to connect on call">Prefer to connect on call</option>
                </select>

                <div className="flex gap-2">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border py-2 rounded">Back</button>
                  <button type="button" onClick={() => validateStep2() && setStep(3)} className="flex-1 bg-yellow-500 py-2 rounded font-semibold">Next</button>
                </div>
              </>
            )}

            {/* STEP 3: Name + Phone + OTP */}
            {step === 3 && (
              <>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                  placeholder="Full Name" className="w-full border px-3 py-2 rounded" required />

                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                  placeholder="Enter your phone number" className="w-full border px-3 py-2 rounded" 
                  disabled={otpSent} required />

                <div id="recaptcha-container"></div>

                {otpSent && (
                  <>
                    <div className="text-center mb-2">
                      <p className="text-gray-600 text-sm">OTP sent to +91{formData.phoneNumber}</p>
                    </div>
                    <input 
                      type="text" 
                      value={otp} 
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6-digit OTP" 
                      className="w-full border px-3 py-2 rounded text-center text-lg tracking-widest" 
                      maxLength={6}
                      required
                    />
                  </>
                )}

                <div className="flex gap-2">
                  <button 
                    type="button" 
                    onClick={() => setStep(2)} 
                    className="flex-1 border py-2 rounded" 
                    disabled={loading || otpSent}
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 bg-yellow-500 py-2 rounded font-semibold disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : otpSent ? 'Verify OTP' : 'Send OTP'}
                  </button>
                </div>
              </>
            )}

            <button type="button" onClick={closeForm} className="text-center text-sm underline w-full mt-2">
              Close
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default HeroSection;