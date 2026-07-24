import { framework } from '@/data/data'

export default function Framework() {
  return (
    <section className="px-4 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-2xl p-8 lg:p-10 text-center">
        {/* Section Header Centered */}
        <p className="text-xs font-bold tracking-wider text-slate-400 mb-8">
          THE INGLU FRAMEWORK
        </p>

        {/* 
          Flex container use kiya hai taaki mobile (grid is skewed) se lekar 
          desktop tak saare cards automatic center-align ho sakein 
        */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {framework.map((item) => (
            <div
              key={item.word}
              className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center w-[calc(50%-8px)] sm:w-[180px] lg:w-[200px]"
            >
              {/* Centered Letter */}
              <span className={`text-4xl lg:text-5xl font-black ${item.color} select-none`}>
                {item.letter}
              </span>
              
              {/* Centered Word */}
              <p className="text-xs font-bold tracking-wide text-inglu-ink mt-3">
                {item.word}
              </p>
              
              {/* Centered Description */}
              <p className="text-xs text-slate-400 mt-1.5 leading-snug max-w-[160px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}