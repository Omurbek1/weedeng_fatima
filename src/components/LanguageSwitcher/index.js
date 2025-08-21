import React from 'react';
import { useTranslation } from 'react-i18next';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <select onChange={handleLanguageChange} defaultValue="en" style={styles.select}>
        <option value="">Choose a language</option>
        <option value="en">English</option>
        <option value="kg">Kyrgyz</option>
        <option value="ru">Russian</option>
        <option value="kor">Korean</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
