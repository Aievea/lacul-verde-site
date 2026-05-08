"use client"

const RegulationItem = ({ icon, title, desc }: any) => (
  <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-surface border border-outline-variant/30 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-container text-white shrink-0">
      {icon}
    </div>
    <h4 className="font-sans font-bold text-primary text-sm tracking-wide uppercase">{title}</h4>
    <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{desc}</p>
  </div>
);

export default RegulationItem;
