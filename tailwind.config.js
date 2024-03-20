/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        ethizo_primary: '#3bc9b0',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      colors: {
        
        bgGreen: "#74ABB1",
        ["ethizo_primary"]: "#3bc9b0",
        ["bg-primary"]: "#6b46c1",
        ["chat-bg-color"]: "#f7fafc",
        ["secondary-color"]: "#d6bcfa",
        ["bgGreen"]: "#74ABB1",
        ["light-gray-f1"]: "#F1F2F4",
        ["light-gray-dd"]: "#ddd",
        ["light-gray-f5"]: "#F5F6F8",
        ["green-80"]: "#80B174",
        ["green-c-150"]: "#F2FFF4",
        [`brown-c-200`]: "#f49b9d",
        [`black-300`]: "#333333",
        [`black-400`]: "#404040",
        [`green-300`]: "#B3D099",
        [`red-c-f9`]: "#FF9892",
        [`pink-c-400`]: "#defdef",
        [`danger-hover`]: "#FF7E77",
        [`success-hover`]: "#4A8187",
        [`primary-hover`]: "#4A8187",        
        [`secondary-hover`]: "#90b272",        
        [`popup-footer`]: "#EFEFEF",  
        [`green-1b`]: "#1BF93E",  
        [`skyBlue-e`]: "#ECFBF7",        
        [`table-logs`]: "#f8f3a7",
        [`cc-tab`]: "#fbf4d8",
        [`teal-57`]: "#57B0A0",
        [`gray-c3`]: "#C3C3C3",
        [`green-8f`]: "#8FBC67",
        [`gray-89`]: "#898989",
        [`green-b3`]: "#b3d09969",
        [`blue-ecf`]: "#ecfdf5",
        [`black-39`]: "#393939",
        [`gray-f3`]: "#F3F3F3",
        [`gray-f8`]: "#F8FAFC",
        [`gray-e5`]: "#E5E7E8",
        [`gray-ec`]: "#ececec",
        [`gray-d2`]: "#D2D5DA",
        [`gray-6c`]: "#6C727F",
        [`green-1e`]: "#1E7401",
        [`teal-21`]: "#217479",
        [`highLight`]:"#feffd7",
        [`blue-f2`]:"#F2FBFD",
        [`green-af`]:"#AFF6AE",
        [`red-d1`]:"#D15555",
        [`blue-22`]:"#227DAF",
        [`yellow-f7`]:"#F7EFAE",
        [`red-f6`]:"#F6AEAE",
        
      },
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
    },
  },
  plugins: [],
}

