import React, { useState, useRef, useEffect } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import AmerikaIcon from "/assets/AmerikaIcon.png";
import JapanIcon from "/assets/JapanIcon.png";
import IndonesiaIcon from "/assets/IndonesiaIcon.png";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(JapanIcon);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  // Fungsi untuk mengganti bahasa
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false); // Menutup dropdown setelah memilih bahasa
  };

  // Menutup modal ketika klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className='relative flex flex-col items-center w-[60px] rounded-lg'
      ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='bg-black-300 text-neutral-400 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
        <img src={selectedLang} alt='picture' className='w-8 h-8' />
        {isOpen ? (
          <AiOutlineCaretDown className='h-4 w-4' />
        ) : (
          <AiOutlineCaretUp className='h-4 w-4' />
        )}
      </button>
      {isOpen && (
        <div className='bg-black-300 text-neutral-400 absolute top-10 flex flex-col items-start rounded-lg p-2 w-full'>
          <button
            onClick={() => {
              setSelectedLang(AmerikaIcon);
              changeLanguage("en"); // Mengubah bahasa ke bahasa Inggris
            }}
            className='flex items-center space-x-2 w-full'>
            <img
              src={AmerikaIcon}
              alt='Amerika'
              className='h-8 w-8'
            />
          </button>
          <button
            onClick={() => {
              setSelectedLang(JapanIcon);
              changeLanguage("jp"); // Mengubah bahasa ke bahasa Jepang
            }}
            className='flex items-center space-x-2 w-full'>
            <img src={JapanIcon} alt='Japan' className='h-8 w-8' />
          </button>
          <button
            onClick={() => {
              setSelectedLang(IndonesiaIcon);
              changeLanguage("id"); // Mengubah bahasa ke bahasa Indonesia
            }}
            className='flex items-center space-x-2 w-full'>
            <img
              src={IndonesiaIcon}
              alt='Indonesia'
              className='h-8 w-8'
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
