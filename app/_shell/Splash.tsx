const LETTERS = ["s1", "e", "f", "a", "s2"];
const STRIPS = 5;

export function Splash() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "try{if(sessionStorage.getItem('sefas-splash'))document.documentElement.classList.add('splash-seen');else sessionStorage.setItem('sefas-splash','1')}catch(e){}",
        }}
      />
      <div aria-hidden className="splash">
        {[0.14, 0].map((lag) => (
          <div key={lag} className={lag ? "splash-strips splash-strips-dark" : "splash-strips"}>
            {Array.from({ length: STRIPS }, (_, i) => (
              <span key={i} className="splash-strip" style={{ animationDelay: `${2.05 + lag + i * 0.07}s` }} />
            ))}
          </div>
        ))}
        <div className="splash-content">
          <div className="splash-logo">
            <div className="splash-logo-inner">
              <img src="/images/brand/splash/img-splash-hand-a.webp" alt="" className="splash-piece splash-hand-a" />
              <img src="/images/brand/splash/img-splash-hand-b.webp" alt="" className="splash-piece splash-hand-b" />
              {LETTERS.map((l, i) => (
                <img
                  key={l}
                  src={`/images/brand/splash/img-splash-letter-${l}.webp`}
                  alt=""
                  className="splash-piece splash-letter"
                  style={{ animationDelay: `${0.55 + i * 0.07}s` }}
                />
              ))}
            </div>
          </div>
          <div className="splash-meta splash-meta-bottom label-mono">
            <span className="splash-count" />
          </div>
          <span className="splash-line" />
        </div>
      </div>
    </>
  );
}
