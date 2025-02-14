import './App.css'

const display = [
  { "Amazon": "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png" },
  { "Fnac": "https://www.uni-ball.es/wp-content/uploads/2020/06/logo-fnac.png" },
  { "KingJouet": "https://images.weare365.io/filters:format(.webp)/1920x0/King_Jouet_9fd8f0dd9a.png" },
  { "Auchan": "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cd/Logo_Auchan_%282015%29.svg/1280px-Logo_Auchan_%282015%29.svg.png" },
  { "SmythsToys": "https://www.wearelevel.co.uk/wp-content/uploads/2019/02/Smyths-Logo-White-600x200.png" },
  { "Vinted": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Vinted_logo.png/1200px-Vinted_logo.png" },
  { "Leboncoin": "https://immo2.pro/images/wp-images/2018/02/leboncoin-e1561735918709.png" },
  { "Cultura": "https://ipj.eu/wp-content/uploads/2024/05/logo-cultura.png" },
]


function App() {

  return (
    <div className="h-[100dvh] gap-2 flex flex-col items-center justify-center select-none cursor-cell">
      <h1 className="text-6xl md:text-9xl font-display bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
        LebonAIO
      </h1>
      <p className="text-white/20 font-mono text-center text-xs md:text-sm">
        upcoming AIO bot, focused on collectibles in Europe
      </p>
      {/* className="relative overflow-hidden w-full h-12 bg-transparent" */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden h-12 absolute bottom-10">

        <div className="flex items-center gap-16 animate-slide hover:[animation-play-state:paused]">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0 text-white">
              {display.map((item) => {
                const [name, imageUrl] = Object.entries(item)[0];
                return (
                  <img
                    key={`${i}-${name}`}
                    src={imageUrl}
                    alt={name}
                    className="h-10 opacity-5 hover:opacity-20 transition-opacity brightness-0 invert"
                    aria-hidden={i > 0}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-neutral-900 via-black/0" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-neutral-900 via-black/0" />
      </div>

    </div >

  )
}

export default App
