import { useState, useMemo, useRef, useEffect } from "react";

/* ------------------------------------------------------------
   SELF-CONTAINED ICON SET
   No external icon package — plain inline SVGs, so the app has
   zero third-party runtime dependency for icons and never fails
   to load because a CDN package couldn't resolve.
   ------------------------------------------------------------ */
const mkIcon = (children) => ({ size = 20, className = "", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    {children}
  </svg>
);

const Home = mkIcon(<><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /><path d="M9.5 20v-6h5v6" /></>);
const Package = mkIcon(<><path d="M21 8 12 3 3 8v8l9 5 9-5V8z" /><path d="M3 8l9 5 9-5" /><path d="M12 13v8" /></>);
const TrendingUp = mkIcon(<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 6h6v6" /></>);
const CalcIcon = mkIcon(<><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M8 6h8" /><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01" /></>);
const Truck = mkIcon(<><path d="M2 7h11v8H2z" /><path d="M13 10h4l4 3v2h-8z" /><circle cx="6.5" cy="18" r="1.8" /><circle cx="17.5" cy="18" r="1.8" /></>);
const MapPin = mkIcon(<><path d="M12 21s7-7.1 7-12a7 7 0 10-14 0c0 4.9 7 12 7 12z" /><circle cx="12" cy="9" r="2.3" /></>);
const Bell = mkIcon(<><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 01-3.4 0" /></>);
const HistoryIcon = mkIcon(<><path d="M3 12a9 9 0 109-9 9 9 0 00-7 3.4" /><path d="M3 4v4.4h4.4" /><path d="M12 7v5l3.5 2" /></>);
const User = mkIcon(<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></>);
const Mic = mkIcon(<><rect x="9" y="1" width="6" height="12" rx="3" /><path d="M5 10a7 7 0 0014 0" /><path d="M12 17v4" /><path d="M8 21h8" /></>);
const Send = mkIcon(<><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" /></>);
const ChevronRight = mkIcon(<path d="M9 18l6-6-6-6" />);
const Check = mkIcon(<path d="M20 6 9 17l-5-5" />);
const Circle = ({ size = 20, fill = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill={fill} /></svg>
);
const X = mkIcon(<><path d="M18 6 6 18" /><path d="M6 6l12 12" /></>);
const LogOut = mkIcon(<><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><path d="M16 17l5-5-5-5" /><path d="M21 12H9" /></>);
const Phone = mkIcon(<path d="M22 16.9v3a2 2 0 01-2.2 2 19.7 19.7 0 01-8.6-3 19.4 19.4 0 01-6-6 19.7 19.7 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.1z" />);
const Navigation = mkIcon(<path d="M3 11 21 3l-8 18-2-8-8-2z" />);
const Wheat = mkIcon(<><path d="M12 2c0 5.5-3.5 7.5-3.5 11.5a3.5 3.5 0 007 0C15.5 9.5 12 7.5 12 2z" /><path d="M8.7 12c-1.8.6-3.2 2-3.7 3.8" /><path d="M15.3 12c1.8.6 3.2 2 3.7 3.8" /><path d="M12 17v5" /></>);
const IndianRupee = mkIcon(<><path d="M6 3h12" /><path d="M6 8h12" /><path d="M6 3c4.5 0 7.5 1.8 7.5 5S10.5 13 6 13" /><path d="M6 13l8 8" /></>);
const Clock = mkIcon(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.2 2" /></>);
const AlertCircle = mkIcon(<><circle cx="12" cy="12" r="9" /><path d="M12 8v5" /><path d="M12 16h.01" /></>);
const CheckCircle2 = mkIcon(<><circle cx="12" cy="12" r="9" /><path d="M8.5 12.3l2.4 2.4 4.6-4.9" /></>);
const Loader2 = mkIcon(<path d="M21 12a9 9 0 11-4.2-7.6" />);
const ArrowRight = mkIcon(<><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></>);
const Globe = mkIcon(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15.3 15.3 0 010 18" /><path d="M12 3a15.3 15.3 0 000 18" /></>);
const ShieldCheck = mkIcon(<><path d="M12 2l8 3.5V11c0 5.2-3.4 8.9-8 10-4.6-1.1-8-4.8-8-10V5.5z" /><path d="M8.8 12l2.2 2.2 4.2-4.4" /></>);
const Sparkles = mkIcon(<><path d="M12 2l1.6 4.9L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.1z" /><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>);
const ArrowLeft = mkIcon(<><path d="M19 12H5" /><path d="M11 5l-7 7 7 7" /></>);
const Sprout = mkIcon(<><path d="M12 22v-9" /><path d="M12 13C7 13 5 10 5 6c4 0 7 2 7 7z" /><path d="M12 13c5 0 7-3 7-7-4 0-7 2-7 7z" /></>);
const FlaskConical = mkIcon(<><path d="M9 2v6.5L4 18a2 2 0 001.8 3h12.4a2 2 0 001.8-3l-5-9.5V2" /><path d="M9 2h6" /><path d="M6.5 15h11" /></>);
const Wrench = mkIcon(<path d="M14.7 6.3a4 4 0 01-5 5L4 18l2 2 6.7-5.7a4 4 0 005-5L14.5 12l-2.5-2.5z" />);
const Store = mkIcon(<><path d="M3 9.5 4.5 4h15L21 9.5" /><path d="M4 9.5V20h16V9.5" /><path d="M9.5 20v-6h5v6" /></>);
const Warehouse = mkIcon(<><path d="M3 21V9.5L12 4l9 5.5V21" /><path d="M8 21v-6h8v6" /></>);
const Lock = mkIcon(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></>);
const Fingerprint = mkIcon(<><path d="M12 3a7 7 0 00-7 7c0 3 .8 5 2 7" /><path d="M12 3a7 7 0 017 7c0 1.6-.2 3-.6 4.2" /><path d="M8.5 20c-1.3-2-2-4.5-2-7a5.5 5.5 0 0111 0c0 .8-.1 1.5-.2 2.2" /><path d="M12 21c-.8-1.4-1.3-2.8-1.5-4.3" /><path d="M15.5 19a13 13 0 01-1-3.8" /></>);

/* ------------------------------------------------------------
   SELF-CONTAINED CHARTS
   No charting library — small hand-built SVG line and donut
   charts, so charts always render even fully offline.
   ------------------------------------------------------------ */
function MiniLineChart({ data, series, height = 220 }) {
  const width = 560, padL = 40, padR = 10, padT = 10, padB = 24;
  const innerW = width - padL - padR, innerH = height - padT - padB;
  const allVals = series.flatMap((s) => data.map((d) => d[s.key]));
  const max = Math.max(...allVals, 0), min = Math.min(...allVals, 0);
  const x = (i) => padL + (i / (data.length - 1)) * innerW;
  const y = (v) => padT + innerH - ((v - min) / (max - min || 1)) * innerH;
  const zeroY = y(0);
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="xMidYMid meet">
      {[0, 0.25, 0.5, 0.75, 1].map((t) => (
        <line key={t} x1={padL} x2={width - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="#E4E1D6" strokeWidth={1} />
      ))}
      <line x1={padL} x2={width - padR} y1={zeroY} y2={zeroY} stroke="#C9C5B6" strokeWidth={1} />
      {series.map((s) => (
        <polyline key={s.key} fill="none" stroke={s.color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
          points={data.map((d, i) => `${x(i)},${y(d[s.key])}`).join(" ")} />
      ))}
      {data.map((d, i) => (
        <text key={i} x={x(i)} y={height - 4} fontSize="11" fill="#5B6B60" textAnchor="middle">{d.month}</text>
      ))}
    </svg>
  );
}

function MiniDonut({ data, size = 140, thickness = 18 }) {
  const total = data.reduce((a, d) => a + d.value, 0);
  const r = (size - thickness) / 2;
  const cx = size / 2, cy = size / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#EDEBE1" strokeWidth={thickness} />
      {data.map((d, i) => {
        const frac = d.value / total;
        const dash = frac * circumference;
        const el = (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={d.color} strokeWidth={thickness}
            strokeDasharray={`${dash} ${circumference - dash}`} strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`} strokeLinecap="butt" />
        );
        offset += dash;
        return el;
      })}
    </svg>
  );
}

/* ============================================================
   DESIGN TOKENS
   ============================================================ */
const C = {
  bg: "#F6F5F0",
  surface: "#FFFFFF",
  border: "#E4E1D6",
  ink: "#16241C",
  inkSoft: "#5B6B60",
  pine: "#1E3A2F",
  pineDeep: "#122720",
  sage: "#4C7C59",
  sageLight: "#DCE8DE",
  gold: "#B8863B",
  goldLight: "#F3E6CC",
  amber: "#C2731A",
  amberLight: "#FBEBD8",
  red: "#B4483A",
  redLight: "#F7E1DD",
};

const heading = { fontFamily: "'Fraunces', serif" };
const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
    * { font-family: 'Inter', sans-serif; }
    .serif { font-family: 'Fraunces', serif; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-thumb { background: #D8D4C6; border-radius: 3px; }
    @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(76,124,89,0.35); } 100% { box-shadow: 0 0 0 16px rgba(76,124,89,0); } }
    .listening { animation: pulseRing 1.4s ease-out infinite; }
    @keyframes riseIn { from { opacity:0; transform: translateY(6px);} to {opacity:1; transform:translateY(0);} }
    .rise { animation: riseIn 0.35s ease-out; }
  `}</style>
);

/* ============================================================
   MOCK DATA
   ============================================================ */
const FARMER = {
  name: "Ramesh Kumar",
  farmerId: "FRM-10293",
  aadhaarMasked: "XXXX XXXX 4821",
  mobile: "+91 XXXXX 43210",
  village: "Rampur",
  district: "Supaul",
  state: "Bihar",
  language: "Hindi",
  crops: ["Wheat", "Maize"],
};

const LANGUAGES = ["Hindi", "English", "Maithili", "Bengali", "Punjabi", "Marathi"];

const ORDERS = [
  {
    id: "PRC10293",
    crop: "Wheat",
    quantity: 25,
    unit: "Quintal",
    centre: "Supaul Procurement Centre",
    address: "NH-57, Near Grain Market, Supaul",
    date: "18 Sept 2026",
    time: "10:00 AM – 12:00 PM",
    status: "Awaiting Procurement",
    pricePerUnit: 2350,
    expectedPayment: 58750,
    paymentStatus: "Pending",
    waitTime: "35 minutes",
    isCurrent: true,
    steps: [
      "Application Submitted", "Verification Completed", "Slot Assigned",
      "Awaiting Procurement", "Weighing", "Procurement Completed", "Payment Processing", "Payment Completed",
    ],
    activeStep: 3,
  },
  {
    id: "PRC10182",
    crop: "Maize",
    quantity: 18,
    unit: "Quintal",
    centre: "Supaul Procurement Centre",
    address: "NH-57, Near Grain Market, Supaul",
    date: "2 Aug 2026",
    time: "9:00 AM – 11:00 AM",
    status: "Payment Completed",
    pricePerUnit: 1962,
    expectedPayment: 35316,
    paymentStatus: "Completed",
    isCurrent: false,
    steps: [
      "Application Submitted", "Verification Completed", "Slot Assigned",
      "Awaiting Procurement", "Weighing", "Procurement Completed", "Payment Processing", "Payment Completed",
    ],
    activeStep: 7,
  },
  {
    id: "PRC10057",
    crop: "Wheat",
    quantity: 22,
    unit: "Quintal",
    centre: "Pratapganj Procurement Centre",
    address: "Station Road, Pratapganj",
    date: "14 Apr 2026",
    time: "11:00 AM – 1:00 PM",
    status: "Payment Completed",
    pricePerUnit: 2275,
    expectedPayment: 50050,
    paymentStatus: "Completed",
    isCurrent: false,
    steps: [
      "Application Submitted", "Verification Completed", "Slot Assigned",
      "Awaiting Procurement", "Weighing", "Procurement Completed", "Payment Processing", "Payment Completed",
    ],
    activeStep: 7,
  },
];

const NOTIFICATIONS = [
  { id: 1, type: "reminder", title: "Procurement tomorrow", body: "Your wheat procurement is scheduled tomorrow at 10:00 AM at Supaul Procurement Centre.", time: "2h ago", read: false },
  { id: 2, type: "transport", title: "Shared transport reminder", body: "Your shared ride to Supaul Procurement Centre leaves at 8:30 AM tomorrow.", time: "3h ago", read: false },
  { id: 3, type: "delay", title: "Procurement centre delay", body: "Supaul Procurement Centre is running about 30 minutes behind schedule today.", time: "5h ago", read: false },
  { id: 4, type: "payment", title: "Payment processed", body: "Your payment of ₹35,316 for Maize (PRC10182) has been credited.", time: "1d ago", read: true },
  { id: 5, type: "centre", title: "Centre detail updated", body: "Your procurement centre timing for 18 Sept has been confirmed. No change to location.", time: "2d ago", read: true },
];

const TRANSPORT_GROUPS = [
  { id: "T1", village: "Rampur", destination: "Supaul Procurement Centre", farmers: 6, capacity: 100, available: 35, costPerFarmer: 320, pickupTime: "8:30 AM", pickup: "Rampur Chowk" },
  { id: "T2", village: "Rampur", destination: "Supaul Procurement Centre", farmers: 3, capacity: 60, available: 40, costPerFarmer: 260, pickupTime: "9:15 AM", pickup: "Rampur Bus Stand" },
  { id: "T3", village: "Bhagwanpur", destination: "Pratapganj Procurement Centre", farmers: 5, capacity: 80, available: 20, costPerFarmer: 300, pickupTime: "7:45 AM", pickup: "Bhagwanpur Market" },
];

const NEARBY = {
  seeds: [{ name: "Rampur Seed Bhandar", distance: "0.8 km", open: true, address: "Main Road, Rampur", phone: "+91 98XXX XX210" }],
  fertilizer: [{ name: "Krishi Seva Kendra", distance: "1.2 km", open: true, address: "Station Road, Supaul", phone: "+91 97XXX XX554" }, { name: "Annapurna Agro Store", distance: "2.4 km", open: false, address: "NH-57, Supaul", phone: "+91 96XXX XX887" }],
  equipment: [{ name: "Bihar Tractor Rentals", distance: "3.1 km", open: true, address: "Industrial Area, Supaul", phone: "+91 95XXX XX102" }],
  shops: [{ name: "Kisan Hardware & Tools", distance: "1.6 km", open: true, address: "Bazar Road, Rampur", phone: "+91 94XXX XX441" }],
  procurement: [{ name: "Supaul Procurement Centre", distance: "4.2 km", open: true, address: "NH-57, Near Grain Market, Supaul", phone: "+91 93XXX XX009" }, { name: "Pratapganj Procurement Centre", distance: "11 km", open: true, address: "Station Road, Pratapganj", phone: "+91 92XXX XX330" }],
  transport: [{ name: "Rampur Shared Transport Group", distance: "0.5 km", open: true, address: "Rampur Chowk", phone: "+91 91XXX XX221" }],
};

const CATEGORY_META = {
  seeds: { label: "Seeds", icon: Sprout },
  fertilizer: { label: "Fertilizer", icon: FlaskConical },
  equipment: { label: "Equipment", icon: Wrench },
  shops: { label: "Shops", icon: Store },
  procurement: { label: "Procurement", icon: Warehouse },
  transport: { label: "Transport", icon: Truck },
};

const REVENUE_TREND = [
  { month: "Apr", revenue: 50050, expenses: 11200, profit: 38850 },
  { month: "May", revenue: 0, expenses: 2400, profit: -2400 },
  { month: "Jun", revenue: 0, expenses: 3100, profit: -3100 },
  { month: "Jul", revenue: 0, expenses: 1800, profit: -1800 },
  { month: "Aug", revenue: 35316, expenses: 8100, profit: 27216 },
  { month: "Sep", revenue: 58750, expenses: 13500, profit: 45250 },
];

const EXPENSE_BREAKDOWN = [
  { name: "Transport", value: 3200, color: C.sage },
  { name: "Seeds", value: 2600, color: C.gold },
  { name: "Fertilizer", value: 4800, color: C.amber },
  { name: "Labour", value: 2200, color: C.pine },
  { name: "Other", value: 700, color: C.inkSoft },
];

const CROP_BREAKDOWN = [
  { crop: "Wheat", quantity: 25, unit: "Quintal", revenue: 58750, expenses: 13500, profit: 45250 },
  { crop: "Maize", quantity: 18, unit: "Quintal", revenue: 35316, expenses: 8100, profit: 27216 },
  { crop: "Wheat", quantity: 22, unit: "Quintal", revenue: 50050, expenses: 11200, profit: 38850 },
];

const CROP_PRICES = { Wheat: 2350, Maize: 1962, Paddy: 2183, Mustard: 5650 };

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

/* ============================================================
   SMALL UI PRIMITIVES
   ============================================================ */
const Card = ({ children, className = "", style = {} }) => (
  <div
    className={`rounded-2xl bg-white ${className}`}
    style={{ border: `1px solid ${C.border}`, ...style }}
  >
    {children}
  </div>
);

const Badge = ({ children, tone = "sage" }) => {
  const tones = {
    sage: { bg: C.sageLight, fg: C.pineDeep },
    gold: { bg: C.goldLight, fg: "#7A5A1E" },
    amber: { bg: C.amberLight, fg: "#8A4A0E" },
    red: { bg: C.redLight, fg: "#7C3226" },
  };
  const t = tones[tone];
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ background: t.bg, color: t.fg }}
    >
      {children}
    </span>
  );
};

const IconBubble = ({ icon: Icon, tone = "sage", size = 40 }) => {
  const tones = {
    sage: { bg: C.sageLight, fg: C.pine },
    gold: { bg: C.goldLight, fg: C.gold },
    amber: { bg: C.amberLight, fg: C.amber },
    red: { bg: C.redLight, fg: C.red },
    pine: { bg: C.pine, fg: "#fff" },
  };
  const t = tones[tone];
  return (
    <div
      className="flex items-center justify-center rounded-xl shrink-0"
      style={{ width: size, height: size, background: t.bg, color: t.fg }}
    >
      <Icon size={size * 0.5} />
    </div>
  );
};

const PrimaryButton = ({ children, onClick, className = "", disabled, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition active:scale-[0.98] disabled:opacity-50 ${className}`}
    style={{ background: C.pine, color: "#fff" }}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold transition active:scale-[0.98] ${className}`}
    style={{ background: "#fff", color: C.pine, border: `1.5px solid ${C.pine}` }}
  >
    {children}
  </button>
);

const StatusStep = ({ label, state }) => (
  <div className="flex items-start gap-3">
    <div className="flex flex-col items-center">
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
        style={{
          background: state === "done" ? C.pine : state === "current" ? C.gold : "#EDEBE1",
          color: state === "upcoming" ? C.inkSoft : "#fff",
        }}
      >
        {state === "done" ? <Check size={14} /> : state === "current" ? <Circle size={9} fill="#fff" /> : <Circle size={8} fill={C.inkSoft} stroke="none" />}
      </div>
    </div>
    <div className="pb-6 -mt-0.5">
      <p
        className="text-[14px]"
        style={{ color: state === "upcoming" ? C.inkSoft : C.ink, fontWeight: state === "current" ? 600 : 500 }}
      >
        {label}
      </p>
      {state === "current" && <p className="text-xs mt-0.5" style={{ color: C.gold }}>In progress</p>}
    </div>
  </div>
);

const VerticalTimeline = ({ steps, activeStep }) => (
  <div className="relative pl-1">
    <div className="absolute left-[11px] top-2 bottom-6 w-[2px]" style={{ background: C.border }} />
    <div className="relative">
      {steps.map((s, i) => (
        <StatusStep key={s} label={s} state={i < activeStep ? "done" : i === activeStep ? "current" : "upcoming"} />
      ))}
    </div>
  </div>
);

/* ============================================================
   NAV CONFIG
   ============================================================ */
const NAV = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "profit", label: "Profit", icon: TrendingUp },
  { id: "calculator", label: "Calculator", icon: CalcIcon },
  { id: "transport", label: "Transport", icon: Truck },
  { id: "nearby", label: "Nearby", icon: MapPin },
  { id: "assistant", label: "AI Assistant", icon: Sparkles },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "history", label: "History", icon: HistoryIcon },
  { id: "profile", label: "Profile", icon: User },
];
const MOBILE_NAV = ["dashboard", "orders", "assistant", "transport", "profile"];

/* ============================================================
   LANDING PAGE
   ============================================================ */
function LandingPage({ onStart }) {
  const features = [
    { icon: Package, title: "Smart Procurement Tracking", body: "Know exactly when and where your produce will be procured, step by step." },
    { icon: Sparkles, title: "AI Kisan Saathi", body: "Get answers through voice, in your preferred language." },
    { icon: Truck, title: "Smart Transport", body: "Share transportation costs with farmers from your village." },
    { icon: TrendingUp, title: "Profit Insights", body: "Understand your revenue, expenses and profit at a glance." },
    { icon: MapPin, title: "Nearby Services", body: "Find seeds, fertilizer, equipment and procurement centres near you." },
    { icon: Bell, title: "Smart Alerts", body: "Never miss a procurement slot or a payment update." },
  ];
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <FontImport />
      <header className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <IconBubble icon={Wheat} tone="pine" size={36} />
          <span className="serif text-lg font-semibold" style={{ color: C.pineDeep }}>GenZ Kisan</span>
        </div>
        <SecondaryButton onClick={onStart} className="!px-4 !py-2 text-sm">Log in</SecondaryButton>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="serif text-[42px] md:text-[54px] leading-[1.08] font-semibold" style={{ color: C.pineDeep }}>
            Your harvest.<br />Your schedule.<br />Your money.<br />All in one place.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed max-w-md" style={{ color: C.inkSoft }}>
            Track procurement, calculate your earnings, find transport, and get help in your own language.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton onClick={onStart} className="!px-7 !py-3.5 text-base">
              Get started <ArrowRight size={18} />
            </PrimaryButton>
            <SecondaryButton onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="!px-7 !py-3.5 text-base">
              Explore features
            </SecondaryButton>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm" style={{ color: C.inkSoft }}>
            <ShieldCheck size={16} style={{ color: C.sage }} /> Built for the Ministry of Consumer Affairs, Food &amp; Public Distribution — prototype for SIH26032
          </div>
        </div>

        <Card className="p-5 rise" style={{ boxShadow: "0 20px 50px -20px rgba(18,39,32,0.25)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm" style={{ color: C.inkSoft }}>Good morning, Ramesh 👋</p>
            <Badge tone="gold">Slot Confirmed</Badge>
          </div>
          <div className="rounded-xl p-4 mb-4" style={{ background: C.pine, color: "#fff" }}>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs opacity-75 uppercase tracking-wide">Wheat · 25 Quintal</p>
                <p className="serif text-xl mt-1">Supaul Procurement Centre</p>
                <p className="text-sm opacity-80 mt-1">18 Sept 2026 · 10:00–12:00 AM</p>
              </div>
              <Wheat size={28} className="opacity-70" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[["Expected", "₹58,750"], ["Wait", "35 min"], ["Status", "On track"]].map(([k, v]) => (
              <div key={k} className="rounded-lg py-2" style={{ background: C.bg }}>
                <p className="text-[11px]" style={{ color: C.inkSoft }}>{k}</p>
                <p className="text-sm font-semibold" style={{ color: C.pineDeep }}>{v}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <Card key={f.title} className="p-6">
            <IconBubble icon={f.icon} />
            <p className="serif text-lg mt-4" style={{ color: C.pineDeep }}>{f.title}</p>
            <p className="text-sm mt-2 leading-relaxed" style={{ color: C.inkSoft }}>{f.body}</p>
          </Card>
        ))}
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 text-xs text-center" style={{ color: C.inkSoft }}>
        Prototype built for Smart India Hackathon · PS Code SIH26032 · All data shown is demo data.
      </footer>
    </div>
  );
}

/* ============================================================
   AUTH FLOW — Aadhaar + OTP
   ============================================================ */
function AuthFlow({ onComplete }) {
  const [step, setStep] = useState("aadhaar"); // aadhaar -> aadhaarLoading -> otp -> otpLoading -> success
  const [aadhaar, setAadhaar] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendIn, setResendIn] = useState(30);

  useEffect(() => {
    if (step !== "otp") return;
    if (resendIn <= 0) return;
    const t = setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [step, resendIn]);

  // Mock authService abstraction
  const authService = {
    verifyAadhaar: (value) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const digits = value.replace(/\s/g, "");
          if (digits.length === 12) resolve({ maskedAadhaar: "XXXX XXXX " + digits.slice(-4) });
          else reject(new Error("invalid"));
        }, 1200);
      }),
    verifyOTP: (value) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (value.length === 6) resolve({ verified: true });
          else reject(new Error("invalid"));
        }, 1000);
      }),
  };

  const formatAadhaar = (v) => {
    const digits = v.replace(/\D/g, "").slice(0, 12);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
  };

  const handleVerifyAadhaar = async () => {
    setError("");
    setStep("aadhaarLoading");
    try {
      await authService.verifyAadhaar(aadhaar);
      setStep("otp");
      setResendIn(30);
    } catch {
      setError("Please check the details and try again.");
      setStep("aadhaar");
    }
  };

  const handleVerifyOtp = async () => {
    setError("");
    setStep("otpLoading");
    try {
      await authService.verifyOTP(otp);
      setStep("success");
      setTimeout(onComplete, 1100);
    } catch {
      setError("Incorrect OTP. Please try again.");
      setStep("otp");
    }
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }} className="flex">
      <FontImport />
      <div
        className="hidden md:flex flex-col justify-between w-[42%] p-12"
        style={{ background: C.pine, color: "#fff" }}
      >
        <div className="flex items-center gap-2">
          <IconBubble icon={Wheat} tone="gold" size={36} />
          <span className="serif text-lg font-semibold">GenZ Kisan</span>
        </div>
        <div>
          <p className="serif text-3xl leading-tight">One secure identity.<br />Everything you need to manage your procurement.</p>
          <div className="mt-8 space-y-3 text-sm opacity-85">
            <div className="flex items-center gap-2"><ShieldCheck size={16} /> Bank-grade encrypted verification</div>
            <div className="flex items-center gap-2"><Lock size={16} /> Your Aadhaar number is never stored</div>
          </div>
        </div>
        <p className="text-xs opacity-60">Demo authentication for a Smart India Hackathon prototype.</p>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-sm p-7 rise">
          <div className="md:hidden flex items-center gap-2 mb-6">
            <IconBubble icon={Wheat} tone="pine" size={32} />
            <span className="serif text-base font-semibold" style={{ color: C.pineDeep }}>GenZ Kisan</span>
          </div>

          {(step === "aadhaar" || step === "aadhaarLoading") && (
            <>
              <p className="serif text-xl" style={{ color: C.pineDeep }}>Secure farmer login</p>
              <p className="text-sm mt-1" style={{ color: C.inkSoft }}>Verify your identity to access your procurement dashboard.</p>
              <label className="block text-xs font-medium mt-6 mb-2" style={{ color: C.inkSoft }}>Aadhaar number</label>
              <div className="flex items-center gap-2 rounded-xl px-3.5 py-3" style={{ border: `1.5px solid ${C.border}` }}>
                <Fingerprint size={18} style={{ color: C.sage }} />
                <input
                  value={aadhaar}
                  onChange={(e) => setAadhaar(formatAadhaar(e.target.value))}
                  placeholder="XXXX XXXX XXXX"
                  className="w-full outline-none text-[15px] tracking-wider bg-transparent"
                  inputMode="numeric"
                />
              </div>
              {error && <p className="text-xs mt-2 flex items-center gap-1" style={{ color: C.red }}><AlertCircle size={13} /> {error}</p>}
              <p className="text-xs mt-3 leading-relaxed" style={{ color: C.inkSoft }}>
                Your Aadhaar information is securely verified and is not stored by this application.
              </p>
              <PrimaryButton
                onClick={handleVerifyAadhaar}
                disabled={aadhaar.replace(/\s/g, "").length !== 12 || step === "aadhaarLoading"}
                className="w-full mt-5"
              >
                {step === "aadhaarLoading" ? (<><Loader2 size={17} className="animate-spin" /> Verifying identity…</>) : ("Verify Aadhaar")}
              </PrimaryButton>
              <p className="text-xs mt-4 flex items-center gap-1.5 justify-center" style={{ color: C.inkSoft }}>
                <Lock size={12} /> Secure &amp; encrypted verification
              </p>
            </>
          )}

          {(step === "otp" || step === "otpLoading") && (
            <>
              <button onClick={() => setStep("aadhaar")} className="flex items-center gap-1 text-xs mb-4" style={{ color: C.inkSoft }}>
                <ArrowLeft size={14} /> Back
              </button>
              <div className="flex items-center gap-2 text-sm mb-1" style={{ color: C.sage }}>
                <CheckCircle2 size={16} /> Aadhaar verified
              </div>
              <p className="serif text-xl mt-2" style={{ color: C.pineDeep }}>OTP verification</p>
              <p className="text-sm mt-1" style={{ color: C.inkSoft }}>We've sent an OTP to your registered mobile number ending in 3210.</p>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="• • • • • •"
                className="w-full mt-6 outline-none text-center text-2xl tracking-[0.5em] rounded-xl py-3 bg-transparent"
                style={{ border: `1.5px solid ${C.border}` }}
                inputMode="numeric"
              />
              {error && <p className="text-xs mt-2 flex items-center gap-1 justify-center" style={{ color: C.red }}><AlertCircle size={13} /> {error}</p>}
              <PrimaryButton onClick={handleVerifyOtp} disabled={otp.length !== 6 || step === "otpLoading"} className="w-full mt-5">
                {step === "otpLoading" ? (<><Loader2 size={17} className="animate-spin" /> Verifying…</>) : "Verify OTP"}
              </PrimaryButton>
              <button
                onClick={() => resendIn === 0 && setResendIn(30)}
                disabled={resendIn > 0}
                className="w-full text-center text-xs mt-4 disabled:opacity-50"
                style={{ color: C.pine }}
              >
                {resendIn > 0 ? `Resend OTP in ${resendIn}s` : "Resend OTP"}
              </button>
            </>
          )}

          {step === "success" && (
            <div className="text-center py-6 rise">
              <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: C.sageLight }}>
                <CheckCircle2 size={30} style={{ color: C.sage }} />
              </div>
              <p className="serif text-xl" style={{ color: C.pineDeep }}>Identity verified</p>
              <p className="text-sm mt-1" style={{ color: C.inkSoft }}>Welcome, {FARMER.name}</p>
            </div>
          )}

          <p className="text-[11px] text-center mt-6" style={{ color: C.inkSoft }}>
            By continuing, you agree to the Terms &amp; Privacy Policy.
          </p>
        </Card>
      </div>
    </div>
  );
}

/* ============================================================
   APP SHELL — Sidebar + TopBar + Mobile Bottom Nav
   ============================================================ */
function Sidebar({ tab, setTab, onLogout }) {
  return (
    <aside className="hidden md:flex flex-col w-[236px] shrink-0 h-screen sticky top-0 px-4 py-6" style={{ background: C.pine }}>
      <div className="flex items-center gap-2 px-2 mb-8">
        <IconBubble icon={Wheat} tone="gold" size={34} />
        <span className="serif text-[17px] font-semibold text-white">GenZ Kisan</span>
      </div>
      <nav className="flex-1 space-y-1">
        {NAV.map((n) => {
          const active = tab === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setTab(n.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] transition"
              style={{
                background: active ? "rgba(255,255,255,0.12)" : "transparent",
                color: active ? "#fff" : "rgba(255,255,255,0.65)",
                fontWeight: active ? 600 : 500,
              }}
            >
              <n.icon size={18} /> {n.label}
              {n.id === "notifications" && NOTIFICATIONS.some((x) => !x.read) && (
                <span className="ml-auto w-2 h-2 rounded-full" style={{ background: C.gold }} />
              )}
            </button>
          );
        })}
      </nav>
      <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>
        <LogOut size={18} /> Log out
      </button>
    </aside>
  );
}

function TopBar({ title, onOpenNotif }) {
  const unread = NOTIFICATIONS.filter((n) => !n.read).length;
  return (
    <div className="flex items-center justify-between px-5 md:px-8 py-5 sticky top-0 z-10" style={{ background: C.bg }}>
      <div>
        <p className="text-xs" style={{ color: C.inkSoft }}>{new Date().toDateString()}</p>
        <p className="serif text-xl md:text-2xl" style={{ color: C.pineDeep }}>{title}</p>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={onOpenNotif} className="relative w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#fff", border: `1px solid ${C.border}` }}>
          <Bell size={17} style={{ color: C.pine }} />
          {unread > 0 && <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full" style={{ background: C.red }} />}
        </button>
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white" style={{ background: C.sage }}>
          {FARMER.name.split(" ").map((s) => s[0]).join("")}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ tab, setTab }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-20 flex justify-around items-center py-2 px-1" style={{ background: "#fff", borderTop: `1px solid ${C.border}` }}>
      {MOBILE_NAV.map((id) => {
        const n = NAV.find((x) => x.id === id);
        const active = tab === id;
        return (
          <button key={id} onClick={() => setTab(id)} className="flex flex-col items-center gap-1 px-2 py-1">
            <n.icon size={20} style={{ color: active ? C.pine : C.inkSoft }} />
            <span className="text-[10px]" style={{ color: active ? C.pine : C.inkSoft, fontWeight: active ? 600 : 400 }}>{n.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function Dashboard({ setTab, openOrder }) {
  const current = ORDERS.find((o) => o.isCurrent);
  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-6">
      <p className="serif text-2xl" style={{ color: C.pineDeep }}>Good morning, Ramesh 👋</p>

      <Card className="p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium" style={{ color: C.inkSoft }}>Current procurement</p>
          <Badge tone="gold">{current.status}</Badge>
        </div>
        <div className="rounded-xl p-5 text-white mb-5" style={{ background: `linear-gradient(135deg, ${C.pine}, ${C.pineDeep})` }}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-wide opacity-75">{current.crop} · {current.quantity} {current.unit}</p>
              <p className="serif text-2xl mt-1">{current.centre}</p>
              <p className="text-sm opacity-85 mt-2 flex items-center gap-1.5"><Clock size={14} /> {current.date} · {current.time}</p>
            </div>
            <Wheat size={30} className="opacity-70 shrink-0" />
          </div>
        </div>
        <VerticalTimeline steps={current.steps} activeStep={current.activeStep} />
        <div className="grid grid-cols-2 gap-3 mt-2">
          <PrimaryButton onClick={() => openOrder(current.id)}>Track order</PrimaryButton>
          <SecondaryButton onClick={() => setTab("calculator")}>Calculate profit</SecondaryButton>
          <SecondaryButton onClick={() => setTab("transport")}>Find transport</SecondaryButton>
          <SecondaryButton onClick={() => setTab("assistant")}>Ask AI</SecondaryButton>
        </div>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-5">
          <IconBubble icon={IndianRupee} tone="gold" size={36} />
          <p className="text-xs mt-3" style={{ color: C.inkSoft }}>Expected payment</p>
          <p className="serif text-xl mt-1" style={{ color: C.pineDeep }}>{inr(current.expectedPayment)}</p>
        </Card>
        <Card className="p-5">
          <IconBubble icon={Clock} tone="amber" size={36} />
          <p className="text-xs mt-3" style={{ color: C.inkSoft }}>Estimated wait</p>
          <p className="serif text-xl mt-1" style={{ color: C.pineDeep }}>{current.waitTime}</p>
        </Card>
        <Card className="p-5">
          <IconBubble icon={TrendingUp} tone="sage" size={36} />
          <p className="text-xs mt-3" style={{ color: C.inkSoft }}>Season profit so far</p>
          <p className="serif text-xl mt-1" style={{ color: C.pineDeep }}>{inr(45250 + 27216 + 38850)}</p>
        </Card>
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium" style={{ color: C.inkSoft }}>Recent notifications</p>
          <button onClick={() => setTab("notifications")} className="text-xs font-medium flex items-center gap-1" style={{ color: C.pine }}>View all <ChevronRight size={13} /></button>
        </div>
        {NOTIFICATIONS.slice(0, 2).map((n) => (
          <div key={n.id} className="flex items-start gap-3 py-3" style={{ borderTop: `1px solid ${C.border}` }}>
            <NotifIcon type={n.type} />
            <div>
              <p className="text-sm font-medium" style={{ color: C.ink }}>{n.title}</p>
              <p className="text-xs mt-0.5" style={{ color: C.inkSoft }}>{n.body}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

const NotifIcon = ({ type }) => {
  const map = {
    reminder: [Bell, "gold"], delay: [AlertCircle, "amber"], payment: [IndianRupee, "sage"],
    transport: [Truck, "sage"], centre: [MapPin, "gold"],
  };
  const [Icon, tone] = map[type] || [Bell, "sage"];
  return <IconBubble icon={Icon} tone={tone} size={34} />;
};

/* ============================================================
   ORDERS / TRACKING
   ============================================================ */
function OrdersScreen({ openOrder }) {
  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-4">
      <p className="text-sm" style={{ color: C.inkSoft }}>All active and upcoming procurement orders.</p>
      {ORDERS.map((o) => (
        <Card key={o.id} className="p-5 cursor-pointer hover:shadow-sm transition" onClick={() => openOrder(o.id)}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <IconBubble icon={Wheat} />
              <div>
                <p className="font-medium" style={{ color: C.ink }}>{o.crop} · {o.quantity} {o.unit}</p>
                <p className="text-xs mt-0.5" style={{ color: C.inkSoft }}>Order #{o.id} · {o.centre}</p>
              </div>
            </div>
            <Badge tone={o.paymentStatus === "Completed" ? "sage" : "gold"}>{o.status}</Badge>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
            <p className="text-xs flex items-center gap-1.5" style={{ color: C.inkSoft }}><Clock size={13} /> {o.date} · {o.time}</p>
            <p className="text-sm font-semibold flex items-center gap-1" style={{ color: C.pineDeep }}>
              {inr(o.expectedPayment)} <ChevronRight size={14} />
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

function OrderDetailModal({ order, onClose }) {
  if (!order) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center" style={{ background: "rgba(18,39,32,0.45)" }} onClick={onClose}>
      <div className="w-full md:max-w-lg bg-white rounded-t-2xl md:rounded-2xl p-6 max-h-[88vh] overflow-y-auto rise" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs" style={{ color: C.inkSoft }}>Order #{order.id}</p>
            <p className="serif text-xl" style={{ color: C.pineDeep }}>{order.crop} · {order.quantity} {order.unit}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: C.bg }}><X size={16} /></button>
        </div>

        <div className="rounded-xl p-4 mb-5 space-y-2" style={{ background: C.bg }}>
          <div className="flex justify-between text-sm"><span style={{ color: C.inkSoft }}>Procurement centre</span><span className="font-medium text-right" style={{ color: C.ink }}>{order.centre}</span></div>
          <div className="flex justify-between text-sm"><span style={{ color: C.inkSoft }}>Address</span><span className="font-medium text-right max-w-[60%]" style={{ color: C.ink }}>{order.address}</span></div>
          <div className="flex justify-between text-sm"><span style={{ color: C.inkSoft }}>Scheduled</span><span className="font-medium text-right" style={{ color: C.ink }}>{order.date}, {order.time}</span></div>
          <div className="flex justify-between text-sm"><span style={{ color: C.inkSoft }}>Rate</span><span className="font-medium" style={{ color: C.ink }}>{inr(order.pricePerUnit)}/{order.unit}</span></div>
          <div className="flex justify-between text-sm"><span style={{ color: C.inkSoft }}>Expected payment</span><span className="font-semibold" style={{ color: C.pineDeep }}>{inr(order.expectedPayment)}</span></div>
          <div className="flex justify-between text-sm"><span style={{ color: C.inkSoft }}>Payment status</span><Badge tone={order.paymentStatus === "Completed" ? "sage" : "gold"}>{order.paymentStatus}</Badge></div>
        </div>

        {order.waitTime && (
          <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-5 text-sm" style={{ background: C.amberLight, color: "#8A4A0E" }}>
            <Clock size={16} /> Estimated waiting time: {order.waitTime}
          </div>
        )}

        <p className="text-sm font-medium mb-3" style={{ color: C.ink }}>Procurement progress</p>
        <VerticalTimeline steps={order.steps} activeStep={order.activeStep} />

        <div className="rounded-xl px-4 py-3 text-xs leading-relaxed" style={{ background: C.sageLight, color: C.pineDeep }}>
          Please bring your required documents and arrive 15 minutes before your scheduled slot.
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PROFIT DASHBOARD
   ============================================================ */
function ProfitScreen() {
  const totalRevenue = CROP_BREAKDOWN.reduce((a, c) => a + c.revenue, 0);
  const totalExpenses = CROP_BREAKDOWN.reduce((a, c) => a + c.expenses, 0);
  const totalProfit = totalRevenue - totalExpenses;
  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-5"><p className="text-xs" style={{ color: C.inkSoft }}>Revenue</p><p className="serif text-2xl mt-1" style={{ color: C.pineDeep }}>{inr(totalRevenue)}</p></Card>
        <Card className="p-5"><p className="text-xs" style={{ color: C.inkSoft }}>Expenses</p><p className="serif text-2xl mt-1" style={{ color: C.amber }}>{inr(totalExpenses)}</p></Card>
        <Card className="p-5" style={{ background: C.sageLight, border: "none" }}><p className="text-xs" style={{ color: C.pineDeep }}>Estimated profit</p><p className="serif text-2xl mt-1" style={{ color: C.pineDeep }}>{inr(totalProfit)}</p></Card>
      </div>

      <Card className="p-5">
        <p className="text-sm font-medium mb-4" style={{ color: C.ink }}>Revenue vs expenses vs profit</p>
        <MiniLineChart
          data={REVENUE_TREND}
          series={[
            { key: "revenue", color: C.pine },
            { key: "expenses", color: C.amber },
            { key: "profit", color: C.gold },
          ]}
        />
        <div className="flex gap-4 text-xs mt-2 justify-center">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full" style={{ background: C.pine }} /> Revenue</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full" style={{ background: C.amber }} /> Expenses</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full" style={{ background: C.gold }} /> Profit</span>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-5">
        <Card className="p-5">
          <p className="text-sm font-medium mb-4" style={{ color: C.ink }}>Expense categories</p>
          <div className="flex items-center gap-6">
            <MiniDonut data={EXPENSE_BREAKDOWN} />
            <div className="space-y-1.5 text-xs">
              {EXPENSE_BREAKDOWN.map((e) => (
                <div key={e.name} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: e.color }} />
                  <span style={{ color: C.inkSoft }}>{e.name}</span>
                  <span className="font-medium" style={{ color: C.ink }}>{inr(e.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-sm font-medium mb-4" style={{ color: C.ink }}>Crop-wise breakdown</p>
          <div className="space-y-3">
            {CROP_BREAKDOWN.map((c, i) => (
              <div key={i} className="flex items-center justify-between pb-3" style={{ borderBottom: i < CROP_BREAKDOWN.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div className="flex items-center gap-3">
                  <IconBubble icon={Wheat} size={32} />
                  <div>
                    <p className="text-sm font-medium" style={{ color: C.ink }}>{c.crop}</p>
                    <p className="text-xs" style={{ color: C.inkSoft }}>{c.quantity} {c.unit}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: C.pineDeep }}>{inr(c.profit)}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <p className="text-xs text-center" style={{ color: C.inkSoft }}>Demo data shown for prototype purposes — figures will reflect live procurement data once connected to the backend.</p>
    </div>
  );
}

/* ============================================================
   CALCULATOR
   ============================================================ */
function CalculatorScreen() {
  const [crop, setCrop] = useState("Wheat");
  const [qty, setQty] = useState(25);
  const [unit] = useState("Quintal");
  const [price, setPrice] = useState(CROP_PRICES.Wheat);
  const [transport, setTransport] = useState(1200);
  const [labour, setLabour] = useState(2000);
  const [fertilizer, setFertilizer] = useState(4800);
  const [other, setOther] = useState(700);

  useEffect(() => setPrice(CROP_PRICES[crop] || 0), [crop]);

  const grossRevenue = qty * price;
  const totalExpenses = Number(transport) + Number(labour) + Number(fertilizer) + Number(other);
  const netProfit = grossRevenue - totalExpenses;
  const profitPerUnit = qty ? netProfit / qty : 0;
  const margin = grossRevenue ? (netProfit / grossRevenue) * 100 : 0;

  const Field = ({ label, value, onChange, prefix }) => (
    <div>
      <label className="text-xs font-medium block mb-1.5" style={{ color: C.inkSoft }}>{label}</label>
      <div className="flex items-center gap-1.5 rounded-xl px-3.5 py-2.5" style={{ border: `1.5px solid ${C.border}` }}>
        {prefix && <span className="text-sm" style={{ color: C.inkSoft }}>{prefix}</span>}
        <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full outline-none text-[15px] bg-transparent" />
      </div>
    </div>
  );

  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 grid lg:grid-cols-2 gap-6">
      <Card className="p-5 space-y-4">
        <p className="text-sm font-medium" style={{ color: C.ink }}>Crop &amp; quantity</p>
        <div>
          <label className="text-xs font-medium block mb-1.5" style={{ color: C.inkSoft }}>Crop</label>
          <select value={crop} onChange={(e) => setCrop(e.target.value)} className="w-full rounded-xl px-3.5 py-2.5 text-[15px] outline-none" style={{ border: `1.5px solid ${C.border}` }}>
            {Object.keys(CROP_PRICES).map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label={`Quantity (${unit})`} value={qty} onChange={setQty} />
          <Field label="Price per unit" value={price} onChange={setPrice} prefix="₹" />
        </div>
        <p className="text-sm font-medium pt-2" style={{ color: C.ink }}>Expenses</p>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Transport cost" value={transport} onChange={setTransport} prefix="₹" />
          <Field label="Labour cost" value={labour} onChange={setLabour} prefix="₹" />
          <Field label="Fertilizer cost" value={fertilizer} onChange={setFertilizer} prefix="₹" />
          <Field label="Other expenses" value={other} onChange={setOther} prefix="₹" />
        </div>
      </Card>

      <Card className="p-5" style={{ background: C.pine, color: "#fff", border: "none" }}>
        <p className="text-sm font-medium opacity-80 mb-4">Profit summary</p>
        <div className="space-y-3">
          <div className="flex justify-between"><span className="text-sm opacity-80">Gross revenue</span><span className="font-semibold">{inr(grossRevenue)}</span></div>
          <div className="flex justify-between"><span className="text-sm opacity-80">Total expenses</span><span className="font-semibold">{inr(totalExpenses)}</span></div>
          <div className="h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Estimated profit</span>
            <span className="serif text-3xl" style={{ color: C.gold === C.gold ? "#F4D58D" : "#fff" }}>{inr(netProfit)}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.1)" }}>
            <p className="text-xs opacity-70">Profit per {unit}</p>
            <p className="text-lg font-semibold mt-1">{inr(profitPerUnit)}</p>
          </div>
          <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.1)" }}>
            <p className="text-xs opacity-70">Profit margin</p>
            <p className="text-lg font-semibold mt-1">{margin.toFixed(1)}%</p>
          </div>
        </div>
        <div className="w-full h-3 rounded-full mt-6 overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div className="h-full rounded-full" style={{ width: `${Math.max(0, Math.min(100, margin))}%`, background: "#F4D58D" }} />
        </div>
        <p className="text-xs opacity-70 mt-2">Updates instantly as you change the numbers.</p>
      </Card>
    </div>
  );
}

/* ============================================================
   TRANSPORT
   ============================================================ */
function TransportScreen() {
  const [groups, setGroups] = useState(TRANSPORT_GROUPS.map((g) => ({ ...g, joined: false })));
  const [showCreate, setShowCreate] = useState(false);

  const join = (id) => setGroups((gs) => gs.map((g) => g.id === id ? { ...g, joined: !g.joined, available: g.joined ? g.available + 5 : g.available - 5 } : g));

  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm" style={{ color: C.inkSoft }}>Share transport costs with farmers heading to the same centre.</p>
        <SecondaryButton onClick={() => setShowCreate(true)} className="!px-4 !py-2 text-sm shrink-0">+ Create ride</SecondaryButton>
      </div>

      {groups.map((g) => (
        <Card key={g.id} className="p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <IconBubble icon={Truck} tone={g.joined ? "sage" : "gold"} />
              <div>
                <p className="font-medium" style={{ color: C.ink }}>{g.village} → {g.destination}</p>
                <p className="text-xs mt-0.5" style={{ color: C.inkSoft }}>Pickup: {g.pickup} · {g.pickupTime}</p>
              </div>
            </div>
            {g.joined && <Badge tone="sage">Joined</Badge>}
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 text-center">
            <div className="rounded-lg py-2" style={{ background: C.bg }}><p className="text-[11px]" style={{ color: C.inkSoft }}>Farmers</p><p className="text-sm font-semibold" style={{ color: C.pineDeep }}>{g.farmers}</p></div>
            <div className="rounded-lg py-2" style={{ background: C.bg }}><p className="text-[11px]" style={{ color: C.inkSoft }}>Available</p><p className="text-sm font-semibold" style={{ color: C.pineDeep }}>{g.available} Qtl</p></div>
            <div className="rounded-lg py-2" style={{ background: C.bg }}><p className="text-[11px]" style={{ color: C.inkSoft }}>Cost/farmer</p><p className="text-sm font-semibold" style={{ color: C.pineDeep }}>{inr(g.costPerFarmer)}</p></div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {g.joined ? (
              <SecondaryButton onClick={() => join(g.id)} className="col-span-2">Leave ride</SecondaryButton>
            ) : (
              <PrimaryButton onClick={() => join(g.id)} className="col-span-2">Join ride</PrimaryButton>
            )}
          </div>
        </Card>
      ))}

      {showCreate && (
        <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center" style={{ background: "rgba(18,39,32,0.45)" }} onClick={() => setShowCreate(false)}>
          <Card className="w-full md:max-w-md p-6 rise" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <p className="serif text-lg" style={{ color: C.pineDeep }}>Create transport request</p>
              <button onClick={() => setShowCreate(false)}><X size={18} /></button>
            </div>
            <div className="space-y-3">
              {["Pickup location", "Destination centre", "Quantity (Quintal)"].map((l) => (
                <div key={l}>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: C.inkSoft }}>{l}</label>
                  <input className="w-full rounded-xl px-3.5 py-2.5 text-[15px] outline-none" style={{ border: `1.5px solid ${C.border}` }} placeholder={l} />
                </div>
              ))}
            </div>
            <PrimaryButton className="w-full mt-5" onClick={() => setShowCreate(false)}>Post request</PrimaryButton>
          </Card>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   AI ASSISTANT — KISAN SAATHI
   ============================================================ */
const SUGGESTED = ["When is my procurement?", "Where is my procurement centre?", "Why is my payment pending?", "Find transport for me", "How much profit will I make?"];

function aiRespond(question) {
  const q = question.toLowerCase();
  const current = ORDERS.find((o) => o.isCurrent);
  if (q.includes("when") && q.includes("procur")) return `Your ${current.crop.toLowerCase()} procurement is scheduled on ${current.date} at ${current.time} at ${current.centre}.`;
  if (q.includes("where")) return `Your procurement centre is ${current.centre}, located at ${current.address}.`;
  if (q.includes("payment")) return `Your payment status for order #${current.id} is currently "${current.paymentStatus}". Expected payment is ${inr(current.expectedPayment)} once procurement and weighing are completed.`;
  if (q.includes("transport")) return `There's a shared transport group from Rampur to ${current.centre} leaving at 8:30 AM, with space for 35 more quintals at ₹320 per farmer. Want me to open Transport for you?`;
  if (q.includes("profit")) return `Based on ${current.quantity} ${current.unit} of ${current.crop} at ${inr(current.pricePerUnit)}/${current.unit}, your estimated profit after typical expenses is around ${inr(45250)}. Open the Calculator for an exact figure.`;
  if (q.includes("status")) return `Order #${current.id} is currently at the "${current.status}" stage. Estimated waiting time is ${current.waitTime}.`;
  return `I can help with your procurement status, payment, transport, and profit questions — based only on your actual order data. Try asking "When is my procurement?" or "Why is my payment pending?".`;
}

function AIAssistant() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Namaste Ramesh! I'm Kisan Saathi. Ask me about your procurement, payment, transport, or profit — I'll answer using your real order data." },
  ]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const [thinking, setThinking] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, thinking]);

  const send = (text) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [...m, { from: "user", text: t }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setThinking(false);
      setMessages((m) => [...m, { from: "ai", text: aiRespond(t) }]);
    }, 900);
  };

  const handleMic = () => {
    setListening(true);
    setTimeout(() => {
      setListening(false);
      send("Mera gehu kab liya jayega?");
    }, 1600);
  };

  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 flex flex-col h-[calc(100vh-96px)] md:h-[calc(100vh-110px)]">
      <Card className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: `1px solid ${C.border}`, background: C.pine, color: "#fff" }}>
          <IconBubble icon={Sparkles} tone="gold" size={38} />
          <div>
            <p className="serif text-base">Kisan Saathi</p>
            <p className="text-xs opacity-75 flex items-center gap-1"><Globe size={11} /> Hindi · English · and more</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className="max-w-[80%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed rise"
                style={{
                  background: m.from === "user" ? C.pine : C.bg,
                  color: m.from === "user" ? "#fff" : C.ink,
                  borderBottomRightRadius: m.from === "user" ? 4 : 16,
                  borderBottomLeftRadius: m.from === "user" ? 16 : 4,
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
          {thinking && (
            <div className="flex justify-start">
              <div className="rounded-2xl px-4 py-2.5 text-sm flex items-center gap-2" style={{ background: C.bg, color: C.inkSoft }}>
                <Loader2 size={14} className="animate-spin" /> Thinking…
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="px-5 py-3 flex gap-2 flex-wrap" style={{ borderTop: `1px solid ${C.border}` }}>
          {SUGGESTED.map((s) => (
            <button key={s} onClick={() => send(s)} className="text-xs px-3 py-1.5 rounded-full" style={{ background: C.sageLight, color: C.pineDeep }}>{s}</button>
          ))}
        </div>

        <div className="px-5 py-4 flex items-center gap-3" style={{ borderTop: `1px solid ${C.border}` }}>
          <button
            onClick={handleMic}
            className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${listening ? "listening" : ""}`}
            style={{ background: listening ? C.gold : C.sageLight, color: listening ? "#fff" : C.pine }}
          >
            <Mic size={19} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={listening ? "Listening…" : "Type your question…"}
            className="flex-1 rounded-full px-4 py-2.5 text-[14px] outline-none"
            style={{ border: `1.5px solid ${C.border}` }}
          />
          <button onClick={() => send()} className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: C.pine, color: "#fff" }}>
            <Send size={17} />
          </button>
        </div>
      </Card>
    </div>
  );
}

/* ============================================================
   NOTIFICATIONS
   ============================================================ */
function NotificationsScreen() {
  const [items, setItems] = useState(NOTIFICATIONS);
  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-3">
      {items.map((n) => (
        <Card
          key={n.id}
          className="p-4 flex items-start gap-3 cursor-pointer"
          style={{ background: n.read ? "#fff" : C.goldLight, borderColor: n.read ? C.border : "transparent" }}
          onClick={() => setItems((its) => its.map((x) => x.id === n.id ? { ...x, read: true } : x))}
        >
          <NotifIcon type={n.type} />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium" style={{ color: C.ink }}>{n.title}</p>
              <span className="text-[11px]" style={{ color: C.inkSoft }}>{n.time}</span>
            </div>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: C.inkSoft }}>{n.body}</p>
          </div>
          {!n.read && <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: C.gold }} />}
        </Card>
      ))}
    </div>
  );
}

/* ============================================================
   NEARBY SERVICES
   ============================================================ */
function NearbyScreen() {
  const [cat, setCat] = useState("procurement");
  const list = NEARBY[cat];
  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-5">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {Object.entries(CATEGORY_META).map(([key, m]) => (
          <button
            key={key}
            onClick={() => setCat(key)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm shrink-0"
            style={{ background: cat === key ? C.pine : "#fff", color: cat === key ? "#fff" : C.ink, border: `1px solid ${cat === key ? C.pine : C.border}` }}
          >
            <m.icon size={16} /> {m.label}
          </button>
        ))}
      </div>

      <Card className="p-8 flex flex-col items-center justify-center text-center" style={{ background: C.sageLight, border: "none" }}>
        <MapPin size={26} style={{ color: C.pine }} />
        <p className="text-xs mt-2" style={{ color: C.pineDeep }}>Map view placeholder — live location results appear once a maps provider is connected.</p>
      </Card>

      <div className="space-y-3">
        {list.map((s, i) => (
          <Card key={i} className="p-4 flex items-start gap-3">
            <IconBubble icon={CATEGORY_META[cat].icon} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium" style={{ color: C.ink }}>{s.name}</p>
                <Badge tone={s.open ? "sage" : "red"}>{s.open ? "Open now" : "Closed"}</Badge>
              </div>
              <p className="text-xs mt-1" style={{ color: C.inkSoft }}>{s.distance} · {s.address}</p>
              <div className="flex gap-2 mt-3">
                <SecondaryButton className="!px-3 !py-1.5 text-xs"><Phone size={13} /> Call</SecondaryButton>
                <SecondaryButton className="!px-3 !py-1.5 text-xs"><Navigation size={13} /> Directions</SecondaryButton>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   HISTORY
   ============================================================ */
function HistoryScreen({ openOrder }) {
  const [filter, setFilter] = useState("All");
  const crops = ["All", ...new Set(ORDERS.map((o) => o.crop))];
  const filtered = filter === "All" ? ORDERS : ORDERS.filter((o) => o.crop === filter);
  const totals = {
    produce: ORDERS.reduce((a, o) => a + o.quantity, 0),
    revenue: ORDERS.reduce((a, o) => a + o.expectedPayment, 0),
    profit: 45250 + 27216 + 38850,
  };
  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-5">
      <Card className="p-5 grid grid-cols-3 gap-3 text-center" style={{ background: C.pine, color: "#fff", border: "none" }}>
        <div><p className="text-[11px] opacity-70">Total produce</p><p className="serif text-lg mt-1">{totals.produce} Qtl</p></div>
        <div><p className="text-[11px] opacity-70">Total revenue</p><p className="serif text-lg mt-1">{inr(totals.revenue)}</p></div>
        <div><p className="text-[11px] opacity-70">Total profit</p><p className="serif text-lg mt-1">{inr(totals.profit)}</p></div>
      </Card>

      <div className="flex gap-2 overflow-x-auto">
        {crops.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className="px-3.5 py-1.5 rounded-full text-xs shrink-0" style={{ background: filter === c ? C.pine : "#fff", color: filter === c ? "#fff" : C.ink, border: `1px solid ${filter === c ? C.pine : C.border}` }}>{c}</button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((o) => (
          <Card key={o.id} className="p-4 flex items-center justify-between cursor-pointer" onClick={() => openOrder(o.id)}>
            <div className="flex items-center gap-3">
              <IconBubble icon={Wheat} />
              <div>
                <p className="text-sm font-medium" style={{ color: C.ink }}>Order #{o.id} · {o.crop}</p>
                <p className="text-xs mt-0.5" style={{ color: C.inkSoft }}>{o.quantity} {o.unit} · {o.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold" style={{ color: C.pineDeep }}>{inr(o.expectedPayment)}</p>
              <p className="text-[11px] flex items-center gap-1 justify-end mt-0.5" style={{ color: o.paymentStatus === "Completed" ? C.sage : C.gold }}>
                {o.paymentStatus === "Completed" && <CheckCircle2 size={12} />} {o.status}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   PROFILE
   ============================================================ */
function ProfileScreen({ onLogout }) {
  const [lang, setLang] = useState(FARMER.language);
  const [toggles, setToggles] = useState({ notifications: true, voice: true, accessibility: false });
  const Toggle = ({ label, k }) => (
    <div className="flex items-center justify-between py-3" style={{ borderBottom: `1px solid ${C.border}` }}>
      <span className="text-sm" style={{ color: C.ink }}>{label}</span>
      <button
        onClick={() => setToggles((t) => ({ ...t, [k]: !t[k] }))}
        className="w-11 h-6 rounded-full relative transition"
        style={{ background: toggles[k] ? C.sage : "#D8D4C6" }}
      >
        <span className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all" style={{ left: toggles[k] ? 22 : 2 }} />
      </button>
    </div>
  );
  const row = (label, value) => (
    <div className="flex justify-between py-2.5 text-sm">
      <span style={{ color: C.inkSoft }}>{label}</span>
      <span className="font-medium" style={{ color: C.ink }}>{value}</span>
    </div>
  );
  return (
    <div className="px-5 md:px-8 pb-24 md:pb-10 space-y-5 max-w-lg">
      <Card className="p-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-semibold text-white" style={{ background: C.sage }}>
          {FARMER.name.split(" ").map((s) => s[0]).join("")}
        </div>
        <div>
          <p className="serif text-lg" style={{ color: C.pineDeep }}>{FARMER.name}</p>
          <p className="text-xs" style={{ color: C.inkSoft }}>Farmer ID: {FARMER.farmerId}</p>
          <span className="inline-flex items-center gap-1 text-xs mt-1" style={{ color: C.sage }}><ShieldCheck size={12} /> Identity verified</span>
        </div>
      </Card>

      <Card className="p-5">
        {row("Aadhaar", FARMER.aadhaarMasked)}
        {row("Mobile", FARMER.mobile)}
        {row("Village", FARMER.village)}
        {row("District", FARMER.district)}
        {row("State", FARMER.state)}
        {row("Main crops", FARMER.crops.join(", "))}
      </Card>

      <Card className="p-5">
        <p className="text-sm font-medium mb-2" style={{ color: C.ink }}>Preferred language</p>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="w-full rounded-xl px-3.5 py-2.5 text-[15px] outline-none" style={{ border: `1.5px solid ${C.border}` }}>
          {LANGUAGES.map((l) => <option key={l}>{l}</option>)}
        </select>
      </Card>

      <Card className="p-5">
        <p className="text-sm font-medium mb-1" style={{ color: C.ink }}>Settings</p>
        <Toggle label="Notifications" k="notifications" />
        <Toggle label="Voice assistant" k="voice" />
        <Toggle label="Accessibility mode" k="accessibility" />
      </Card>

      <SecondaryButton onClick={onLogout} className="w-full"><LogOut size={16} /> Log out</SecondaryButton>
    </div>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */
function App() {
  const [stage, setStage] = useState("landing"); // landing | auth | app
  const [tab, setTab] = useState("dashboard");
  const [orderId, setOrderId] = useState(null);
  const [notifOpen, setNotifOpen] = useState(false);

  const titles = {
    dashboard: "Dashboard", orders: "My orders", profit: "Profit dashboard", calculator: "Price & profit calculator",
    transport: "Shared transport", nearby: "Nearby services", assistant: "AI Assistant", notifications: "Notifications",
    history: "Order history", profile: "Profile & settings",
  };

  if (stage === "landing") return <LandingPage onStart={() => setStage("auth")} />;
  if (stage === "auth") return <AuthFlow onComplete={() => setStage("app")} />;

  const openOrder = (id) => { setOrderId(id); setTab("orders"); };
  const selectedOrder = ORDERS.find((o) => o.id === orderId);

  const screens = {
    dashboard: <Dashboard setTab={setTab} openOrder={openOrder} />,
    orders: <OrdersScreen openOrder={(id) => setOrderId(id)} />,
    profit: <ProfitScreen />,
    calculator: <CalculatorScreen />,
    transport: <TransportScreen />,
    nearby: <NearbyScreen />,
    assistant: <AIAssistant />,
    notifications: <NotificationsScreen />,
    history: <HistoryScreen openOrder={(id) => setOrderId(id)} />,
    profile: <ProfileScreen onLogout={() => setStage("landing")} />,
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <FontImport />
      <div className="flex">
        <Sidebar tab={tab} setTab={setTab} onLogout={() => setStage("landing")} />
        <div className="flex-1 min-w-0">
          <TopBar title={titles[tab]} onOpenNotif={() => setTab("notifications")} />
          {screens[tab]}
        </div>
      </div>
      <MobileNav tab={tab} setTab={setTab} />
      <OrderDetailModal order={selectedOrder} onClose={() => setOrderId(null)} />
    </div>
  );
}
export default App;
