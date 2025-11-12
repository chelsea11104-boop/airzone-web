import { useState, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function App() {
  const [section, setSection] = useState("home");
  const petaRef = useRef(null);

  const scrollToPeta = () => {
    petaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Data statis grafik AQI
  const dataAQI = [
    { name: "Cibinong", aqi: 85 },
    { name: "Cikarang", aqi: 90 },
    { name: "Depok", aqi: 95 },
    { name: "Bekasi", aqi: 100 },
    { name: "Pabuaran", aqi: 112 },
    { name: "Bogor", aqi: 108 },
  ];

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(to bottom, #e0f7ff, #ffffff)",
        minHeight: "100vh",
        color: "#333",
        overflowX: "hidden",
      }}
    >
      {/* === Header === */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 40px",
          backgroundColor: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo-airzone.png"
            alt="AirZone Logo"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
          <h1
            style={{
              color: "#0284c7",
              fontWeight: "700",
              fontSize: "1.6rem",
              letterSpacing: "0.5px",
            }}
          >
            AirZone
          </h1>
        </div>

        {/* Navigasi */}
        <nav style={{ display: "flex", gap: "24px" }}>
          <button onClick={() => setSection("home")} style={navButton}>
            Beranda
          </button>
          <button onClick={() => setSection("about")} style={navButton}>
            Tentang
          </button>
          <button onClick={() => setSection("features")} style={navButton}>
            Fitur Utama
          </button>
        </nav>
      </header>

      {/* === BERANDA === */}
      {section === "home" && (
        <section
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "60px 60px 80px",
          }}
        >
          {/* Gambar background kanan tengah */}
          <div
            style={{
              position: "absolute",
              right: "70px",
              top: "43%",
              transform: "translateY(-50%)",
            }}
          >
            <img
              src="/map-bg.png"
              alt="Peta Indonesia"
              style={{
                width: "420px",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
              }}
            />
          </div>

          {/* Konten kiri */}
          <div style={{ maxWidth: "650px", zIndex: 5, textAlign: "left" }}>
            <h2
              style={{
                fontSize: "2.8rem",
                color: "#0369a1",
                fontWeight: "800",
                marginBottom: "16px",
                lineHeight: "1.3",
              }}
            >
              Udara Tak Terlihat, Kini Terukur 🌤️
            </h2>
            <p
              style={{
                color: "#475569",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                marginBottom: "28px",
              }}
            >
              Lindungi dirimu dan orang terdekat dengan memahami kualitas udara
              sekitar. Dengan AirZone, kamu bisa bernapas lebih tenang dan hidup
              lebih sehat.
            </p>

            {/* Tombol */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <a href="https://airzone.rf.gd/" target="_blank" rel="noreferrer">
                <button style={primaryButton}>Cek Udara Sekitarmu</button>
              </a>
              <button onClick={() => setSection("about")} style={outlineButton}>
                Tentang Kami
              </button>
            </div>
          </div>

          {/* Teks tengah */}
          <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
            <h3
              style={{
                color: "#0369a1",
                fontWeight: "700",
                fontSize: "1.5rem",
              }}
            >
              Data nyata dari berbagai titik di Jawa Barat dan sekitarnya
            </h3>
          </div>
        </section>
      )}

      {/* === TENTANG KAMI === */}
      {section === "about" && (
        <section style={{ backgroundColor: "white", minHeight: "100vh" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "40px 80px",
              gap: "60px",
              flexWrap: "wrap",
            }}
          >
            {/* Kiri */}
            <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  color: "#0284c7",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Tentang Kami
              </h2>
              <p
                style={{
                  color: "#444",
                  lineHeight: "1.8",
                  fontSize: "1rem",
                  textAlign: "justify",
                  maxWidth: "600px",
                }}
              >
                AirZone hadir sebagai inisiatif penting yang didedikasikan untuk
                peningkatan kualitas hidup melalui informasi yang akurat mengenai
                udara yang kita hirup sehari-hari. Sebagai platform pemantauan
                kualitas udara terkemuka, kami berfokus pada penyediaan data dan
                analisis komprehensif bagi masyarakat di wilayah Jawa Barat dan DKI
                Jakarta. Kami percaya bahwa dengan memahami kondisi udara di sekitar
                kita, setiap individu dapat membuat keputusan yang lebih baik untuk
                kesehatan diri, keluarga, dan komunitas. AirZone berkomitmen untuk
                transparansi data dan edukasi publik sebagai langkah awal menuju
                lingkungan yang lebih bersih dan sehat.
              </p>
              {/* 🔹 Tambahan grafik di bawah teks */}
              <div
                style={{
                  marginTop: "40px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{
                    textAlign: "center",
                    color: "#0284c7",
                    fontWeight: "700",
                    marginBottom: "16px",
                  }}
                >
                  Tren Kualitas Udara (AQI)
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={dataAQI} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="aqi"
                      stroke="#0284c7"
                      strokeWidth={3}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Kanan */}
            <div
              style={{
                flex: "1 1 40%",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                minWidth: "300px",
              }}
            >
              {infoList.map((item, index) => (
                <div key={index} style={infoBox}>
                  <div style={iconBox}>{item.icon}</div>
                  <div>
                    <h3 style={infoTitle}>{item.title}</h3>
                    <p style={infoText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === FITUR UTAMA === */}
      {section === "features" && (
        <section
          style={{
            backgroundColor: "#e0f4ff",
            padding: "60px 80px",
            minHeight: "100vh",
          }}
        >
          {/* (lanjutan kode fitur-mu tetap sama persis seperti aslinya) */}
        </section>
      )}
    </div>
  );
}

/* === STYLE REUSABLE === */
const navButton = {
  border: "none",
  background: "none",
  color: "#0284c7",
  cursor: "pointer",
  fontWeight: "500",
  fontSize: "1rem",
};
const primaryButton = {
  backgroundColor: "#0284c7",
  color: "white",
  border: "none",
  padding: "10px 24px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
};
const outlineButton = {
  border: "2px solid #0284c7",
  color: "#0284c7",
  background: "white",
  padding: "10px 24px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "600",
};
const infoBox = {
  display: "flex",
  gap: "14px",
  backgroundColor: "#f8fafc",
  borderRadius: "10px",
  padding: "14px 18px",
  alignItems: "flex-start",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
};
const iconBox = { fontSize: "1.6rem", color: "#0284c7" };
const infoTitle = { fontWeight: "600", color: "#111", fontSize: "1.05rem" };
const infoText = { color: "#555", fontSize: "0.95rem", lineHeight: "1.5" };

const infoList = [
  { icon: "📈", title: "Data yang Terperinci dan Terpercaya", text: "Kami menyediakan Indeks Kualitas Udara (AQI) dan konsentrasi polutan utama (terutama PM2.5) dengan analisis yang mendalam." },
  { icon: "📍", title: "Fokus Regional: Jawa Barat dan DKI Jakarta", text: "AirZone secara khusus memantau dan menganalisis kualitas udara dari berbagai titik di wilayah yang sangat padat ini." },
  { icon: "💡", title: "Edukasi dan Rekomendasi Kesehatan", text: "Kami menerjemahkan data polusi udara yang kompleks ke dalam kategori yang mudah dipahami (seperti Baik, Sedang, Tidak Sehat)." },
];
