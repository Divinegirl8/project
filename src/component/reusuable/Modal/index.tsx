import React from "react";
import style from "./index.module.css"
import gmail from "../../../asset/contact/gmail-removebg-preview.png"
import whatsapp from "../../../asset/contact/whatsappLogo-removebg-preview.png"
import resume from "../../../asset/contact/resume-logo-removebg-preview.png"


interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleGotoWhatsapp = () => {
    const phoneNumber = '+2349062346551'; 
    const message = 'Hello DivineMercy, '; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappLink
  }

  const handleGotoGmail = () => {    
    const gmailLink = `mailto:divinemercy601@gmail.com`;
    window.location.href = gmailLink
  }


  const handleDownloadResume = () => {
    const link = document.getElementById('myLink');
    if (link) {
      link.click();
    } else {
      console.error("Element not found");
    }
  }
  
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div
        className={`relative w-[90%] max-w-lg mx-auto ${style.animateSketch}`}
      >
        <button
          className="absolute top-2 right-2 text-black hover:text-red-700"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex flex-row gap-2 justify-center border-gray-500 border w-[10rem] h-[30px] rounded-[20px] pt-1">
            <i
              className="fa-solid fa-phone"
              style={{ color: "#000", paddingTop: "3px", fontSize: "13px" }}
            ></i>
            <p className="font-normal text-black font-fontInter uppercase text-[13px]">
              Contact
            </p>
          </div>
          <div className="pt-10">

             <div className="flex flex-row gap-5 justify-center">
                                
                <div>
                    <img 
                    src={gmail} 
                    className="w-28 h-28 transform hover:scale-110 transition-all duration-300 cursor-pointer"
                    onClick={handleGotoGmail}
                    />
                </div>

                <div>
                <a href="src/asset/pdf/My_Resume (1).pdf" download="James_DivineMercy_Resume.pdf" className="hidden" id="myLink">
                </a>
                    <img 
                    src={resume}  
                    className="w-28 h-28 transform hover:scale-110 transition-all duration-300 cursor-pointer"
                    onClick={handleDownloadResume}
                    />
                </div>
                
                <div>
                    <img 
                    src={whatsapp}  
                    className="w-20 h-20 mt-4 transform hover:scale-110 transition-all duration-300 cursor-pointer"
                    onClick={handleGotoWhatsapp}
                    />
                </div>
           </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
