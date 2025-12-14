import resume from "../public/XamidulloBaxtiyorovResume.pdf";

function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm tracking-wider">
                Welcome to my universe
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                Hello
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                I'm{" "}
                <span className="text-cyan-400 px-2 sm:px-4 py-1 block sm:inline">
                  Xamidullo Baxtiyorov
                </span>
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-cyan-300">
              Frontend Developer
            </p>

            <p className="text-gray-400 text-base sm:text-lg">
              JavaScript lover | Problem Solver | Crafting frameworks and coding
              the future
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Xamidullo07"
              className="px-6 sm:px-8 py-3 rounded-lg border-2 border-cyan-500 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-semibold transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            >
              Learn More
            </a>
            <a
              href={resume}
              download="XamidulloBaxtiyorovResume.pdf"
              className="px-6 sm:px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 font-semibold transition-all"
            >
              Get Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Badge text="UI Magic" />
            <Badge text="Clean Code" />
            <Badge text="Innovation" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="rounded-2xl border-2 border-cyan-500/50 bg-slate-900/50 backdrop-blur-md overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.3)]">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-cyan-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-cyan-400 text-sm">developer.js</span>
            </div>

            <div className="p-6 sm:p-10 lg:p-20 font-mono text-sm sm:text-lg lg:text-xl leading-relaxed">
              <div className="space-y-1">
                <span className="text-pink-400">const</span>{" "}
                <span className="text-cyan-300">profile</span>{" "}
                <span className="text-white">= {"{"}</span>
                <div className="pl-4">
                  <div>
                    <span className="text-cyan-300">name:</span>{" "}
                    <span className="text-green-400">
                      'Xamidullo Baxtiyorov'
                    </span>
                    ,
                  </div>
                  <div>
                    <span className="text-cyan-300">title:</span>{" "}
                    <span className="text-green-400">'Frontend Developer'</span>
                    ,
                  </div>
                  <div>
                    <span className="text-cyan-300">skills:</span> [
                  </div>
                  <div className="pl-4 text-green-400">
                    'HTML', 'SCSS', 'JavaScript',
                    <br />
                    'React', 'Next.js', 'TypeScript',
                  </div>
                  <div>],</div>
                  <div>
                    <span className="text-cyan-300">hardWorker:</span>{" "}
                    <span className="text-orange-400">true</span>,
                  </div>
                  <div>
                    <span className="text-cyan-300">problemSolver:</span>{" "}
                    <span className="text-orange-400">true</span>,
                  </div>
                  <div>
                    <span className="text-cyan-300">yearsOfExperience:</span>{" "}
                    <span className="text-purple-400">1</span>
                  </div>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm">
      {text}
    </span>
  );
}

export default Home;
