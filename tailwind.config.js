/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{

      },
      colors:{
        primary:{
          50:"#fffbe6",
          100:"#fff3b0",
          200:"#ffed8a",
          300:"#ffe454",
          400:"#ffdf33",
          500:"#ffd700",
          600:"#e8c400",
          700:"#b59900",
          800:"#8c7600",
          900:"#6b5a00",
        },
        secondary:{
          50:"#ebeff4",
          100:"#c2cfdb",
          200:"#a4b7ca",
          300:"#7b96b2",
          400:"#6182a3",
          500:"#3a638c",
          600:"#355a7f",
          700:"#294663",
          800:"#20364d",
          900:"#182a3b",
        },
        accent:{
          50:"#f7ebf3",
          100:"#e5c0d9",
          200:"#d8a1c6",
          300:"#c676ac",
          400:"#bb5c9c",
          500:"#aa3383",
          600:"#9b2e77",
          700:"#79245d",
          800:"#5e1c48",
          900:"#471537",
        },
        success:{
          50:"#edf7ee",
          100:"#c8e6c9",
          200:"#addaaf",
          300:"#87c98a",
          400:"#70bf73",
          500:"#4caf50",
          600:"#459f49",
          700:"#367c39",
          800:"#2a602c",
          900:"#204a22",
        },
        warning:{
          50:"#fff9e6",
          100:"#ffecb2",
          200:"#ffe28d",
          300:"#ffd559",
          400:"#ffcd39",
          500:"#ffc107",
          600:"#e8b006",
          700:"#b58905",
          800:"#8c6a04",
          900:"#6b5103",
        },
        danger:{
          50:"#ffeeee",
          100:"#ffc9c9",
          200:"#ffafaf",
          300:"#ff8b8b",
          400:"#ff7575",
          500:"#ff5252",
          600:"#e84b4b",
          700:"#b53a3a",
          800:"#8c2d2d",
          900:"#6b2222",
        },
        dark:{
          100:"#151515"
        },
        gradient:{
          orange:"#E3A32B",
          peach:"#C56A5B",
          lightBlue:'#97A8BA',
          lightPeach:'#B98C87',
          green:'#A3956F',
          green2:'#9A9379'
        },
      },
      backgroundImage: {
        'moon': "url('././Icons/Moon.svg')",
        'sun': "url('././Icons/sun.svg')",
        'cardOne':"url('././Images/ProjectImage.jpg')",
        'cardTwo':"url('././Images/Bakery Website Image.jpg')",
      },
      fontFamily:{
        'primary':"Montserrat",
        'accent':'Playfair Display'
      },
      gridTemplateColumns:{
        'rows':'1fr 1fr 1fr',
      },
      boxShadow:{
        "buttonShadow":'0 0 0 8px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
