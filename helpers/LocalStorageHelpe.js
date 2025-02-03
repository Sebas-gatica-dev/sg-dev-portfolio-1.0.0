const LocalStorageHelper = {
    setItem(key, value) {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    },
  
    getItem(key) {
      const stringValue = localStorage.getItem(key);
      return stringValue ? JSON.parse(stringValue) : null;
    },
  
    removeItem(key) {
      localStorage.removeItem(key);
    },
  
    clear() {
      localStorage.clear();
    }
  };
  
  export default LocalStorageHelper;