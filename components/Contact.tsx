export default function Contact() {
  return (
    <section id="contact" className="pb-20">
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-border">let&apos;s connect</h2>
      <p className="text-base mb-6 text-muted-foreground">
        i&apos;m always open to interesting conversations and collaborations. feel free to reach out!

      </p>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">email:</span>{" "}
          <a target="_blank" href="mailto:siddhantkurmi620@gmail.com" className="underline hover:text-muted-foreground transition">
            siddhantkurmi620@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold">github:</span>{" "}
          <a target="_blank" href="https://github.com/sidxxo" className="underline hover:text-muted-foreground transition">
            github.com/sidxxo
          </a>
        </p>
        <p>
          <span className="font-semibold">linkedin:</span>{" "}
          <a target="_blank" href="https://www.linkedin.com/in/shiddhant-kurmi-a67996312/" className="underline hover:text-muted-foreground transition">
            linkedin.com/in/shiddhant-kurmi-a67996312
          </a>
        </p>
        <p>
          <span className="font-semibold">discord:</span>{" "}
          <span>siddhant6641</span>
        </p>
        
      </div>
    </section>
  )
}

