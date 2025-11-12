import { useState, useRef } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App() {
  const [section, setSection] = useState("home");
  const petaRef = useRef(null);

  const scrollToPeta = () => {
    petaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        <section style={{ backgroundColor: "white", minHeight: "100vh", overflowY: "auto", padding: "40px 20px" }}>
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

              {/* Grafik Garis Kualitas Udara */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginTop: "40px",
                  backgroundColor: "#f0f9ff",
                  borderRadius: "12px",
                  padding: "20px 30px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                }}
              >
                {/* Grafik di kiri */}
                <div style={{ flex: "1 1 60%", minWidth: "400px" }}>
                  <h3
                    style={{
                      color: "#0284c7",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      marginBottom: "10px",
                    }}
                  >
                    Kota dengan polusi udara tinggi (AirZone +)
                  </h3>
                  <div style={{ width: "100%", height: "320px" }}>
                    <ResponsiveContainer>
                      <LineChart
                        data={chartData}
                        margin={{ top: 50, right: 20, left: 0, bottom: 60 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                          dataKey="lokasi"
                          tick={{ fontSize: 10 }}
                          interval={0}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis
                          domain={[0, 120]}
                          ticks={[0, 20, 40, 60, 80, 100, 120]}
                          tick={{ fontSize: 12 }}
                          interval={0}
                          allowDecimals={false}
                        />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="nilai"
                          stroke="#0284c7"
                          strokeWidth={3}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              
                {/* Penjelasan di kanan */}
                <div style={{ flex: "1 1 35%", minWidth: "250px", marginTop: "-10px" }}>
                  <p
                    style={{
                      color: "#444",
                      lineHeight: "1.7",
                      fontSize: "1rem",
                      textAlign: "justify",
                    }}
                  >
                    Grafik <b>“Kota dengan Polusi Udara Tinggi (AirZone +)”</b> menunjukkan bahwa Pabuaran memiliki tingkat polusi 
                    udara tertinggi, diikuti oleh Pamanukan dan Lembang dengan nilai yang juga cukup tinggi. Sementara itu, 
                    daerah lain seperti Pamulang, Cikupa, dan Cileunyi menunjukkan tingkat polusi yang sedikit lebih rendah namun 
                    tetap signifikan. Secara keseluruhan, grafik ini menggambarkan bahwa wilayah Jawa Barat dan sekitarnya masih 
                    mendominasi kategori daerah dengan polusi udara tinggi, yang kemungkinan dipengaruhi oleh aktivitas kendaraan, 
                    industri, serta kepadatan penduduk yang tinggi.
                  </p>
                </div>
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#0284c7" }}>
              Fitur Utama AirZone
            </h2>
            <button onClick={scrollToPeta} style={primaryButton}>
              Mulai
            </button>
          </div>

          <p style={{ lineHeight: "1.5", maxWidth: "650px", marginTop: "10px", color: "#333" }}>
            Lindungi kesehatan Anda dan keluarga! AirZone membantu Anda membuat
            keputusan yang lebih baik setiap hari dengan data kualitas udara yang
            terperinci di wilayah Anda.
          </p>

          {/* Dua fitur emoji */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <div style={fiturBox}>
              <div style={{ fontSize: "3rem" }}>🗺️</div>
              <h3 style={fiturTitle}>Peta Udara Regional</h3>
              <p style={fiturText}>
                Menampilkan peta interaktif kualitas udara di Jawa Barat dan DKI
                Jakarta dengan warna berdasarkan tingkat AQI.
              </p>
            </div>

            <div style={fiturBox}>
              <div style={{ fontSize: "3rem" }}>💨</div>
              <h3 style={fiturTitle}>Detail dan Rekomendasi Kesehatan</h3>
              <p style={fiturText}>
                Menampilkan data kualitas udara tiap kota (seperti kadar PM2.5 dan
                tingkat polusi) beserta saran kesehatan dan aktivitas sesuai kondisi
                udara saat itu.
              </p>
            </div>
          </div>

          {/* PETA UDARA REGIONAL */}
          <div
            ref={petaRef}
            style={{
              marginTop: "60px",
              display: "flex",
              alignItems: "center", // 🔹 sejajarkan vertikal tengah
              justifyContent: "space-between",
              gap: "24px", // 🔹 jarak antar kolom lebih rapat
              flexWrap: "wrap",
            }}
          >
            {/* Kiri: Gambar Peta */}
            <div style={{ flex: "1 1 55%", minWidth: "320px" }}>
              <h2
                style={{
                  color: "#0284c7",
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Peta Udara Regional
              </h2>
              <a
                href="https://airzone.rf.gd/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-block" }}
              >
                <img
                  src="/map-sample.png"
                  alt="Peta Udara"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    transition: "transform 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </a>
            </div>

            {/* Kanan: 3 Poin Informasi */}
            <div
              style={{
                flex: "1 1 38%",
                minWidth: "260px",
                display: "flex",
                flexDirection: "column",
                gap: "10px", // 🔹 jarak antar poin lebih rapat
                justifyContent: "center", // 🔹 sejajar tengah
              }}
            >
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ fontSize: "1.8rem" }}></div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#111",
                      marginBottom: "2px",
                    }}
                  >
                    Edukasi Lingkungan
                  </h3>
                  <p style={{ color: "#333", lineHeight: "1.4", fontSize: "0.9rem" }}>
                    Kami menyediakan informasi singkat dan tips untuk membantu Anda menjaga
                    kualitas udara lebih baik, baik di rumah maupun di lingkungan sekitar.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ fontSize: "1.8rem" }}></div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#111",
                      marginBottom: "2px",
                    }}
                  >
                    Cakupan Wilayah Luas
                  </h3>
                  <p style={{ color: "#333", lineHeight: "1.4", fontSize: "0.9rem" }}>
                    Menjangkau berbagai kota dan kabupaten di Jawa Barat serta DKI Jakarta,
                    memberikan gambaran menyeluruh tentang kondisi udara.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ fontSize: "1.8rem" }}></div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#111",
                      marginBottom: "2px",
                    }}
                  >
                    Partisipasi Publik
                  </h3>
                  <p style={{ color: "#333", lineHeight: "1.4", fontSize: "0.9rem" }}>
                    Laporkan kondisi lingkungan sekitar Anda untuk membantu memperluas jangkauan pemantauan AirZone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === DETAIL DAN REKOMENDASI KESEHATAN === */}
          <div
            style={{
              marginTop: "80px",
              backgroundColor: "#f0faff",
              borderRadius: "20px",
              padding: "40px 50px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ color: "#0284c7", fontSize: "1.8rem", fontWeight: "700", marginBottom: "16px" }}>
              Detail dan Rekomendasi Kesehatan
            </h2>
            <p style={{ color: "#334155", fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px", maxWidth: "900px" }}>
              Mulai perubahan kecil hari ini untuk hidup lebih sehat dan menghirup udara yang lebih bersih bersama lingkungan sekitar.
            </p>

            {/* Grid 3 box informasi */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "space-between" }}>
              <div style={fiturBox}>
                <div style={{ fontSize: "2.3rem" }}>🛵</div>
                <h3 style={fiturTitle}>Kurangi Emisi Kendaraan</h3>
                <p style={fiturText}>
                  Batasi penggunaan kendaraan bermotor dan beralih ke transportasi umum, bersepeda, atau berjalan kaki untuk mengurangi sumber utama polusi udara.
                </p>
              </div>
              <div style={fiturBox}>
                <div style={{ fontSize: "2.3rem" }}>🌳</div>
                <h3 style={fiturTitle}>Jaga Kualitas Udara di Rumah</h3>
                <p style={fiturText}>
                  Tanam tanaman penyaring udara, kurangi penggunaan parfum ruangan berbahan kimia, dan pastikan sirkulasi udara di rumah tetap baik.
                </p>
              </div>
              <div style={fiturBox}>
                <div style={{ fontSize: "2.3rem" }}>🧘‍♀️</div>
                <h3 style={fiturTitle}>Kebiasaan Sehat di Kondisi Udara Buruk</h3>
                <p style={fiturText}>
                  Gunakan masker saat beraktivitas di luar ruangan, hindari olahraga berat di area berpolusi, dan pastikan ruangan memiliki ventilasi yang baik.
                  Perbanyak minum air putih dan konsumsi buah serta sayur untuk menjaga daya tahan tubuh.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/* === STYLE REUSABLE === */
const chartData = [
  { lokasi: "Pabuaran", nilai: 112.0 },
  { lokasi: "Pamanukan", nilai: 108.0 },
  { lokasi: "Lembang", nilai: 105.0 },
  { lokasi: "Pamulang", nilai: 89.0 },
  { lokasi: "Cikupa", nilai: 89.0 },
  { lokasi: "Cileunyi", nilai: 88.0 },
  { lokasi: "Lebak Bulus", nilai: 79.0 },
  { lokasi: "Cikampek", nilai: 77.0 },
  { lokasi: "Rawa Buntu", nilai: 77.0 },
  { lokasi: "Banjaran", nilai: 76.0 },
];
  
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
const fiturBox = {
  flex: "1 1 300px",
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "24px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};
const fiturTitle = { fontSize: "1.1rem", fontWeight: "700", marginTop: "10px" };
const fiturText = { color: "#333", marginTop: "8px", lineHeight: "1.5" };

const infoList = [
  { icon: "📈", title: "Data yang Terperinci dan Terpercaya", text: "Kami menyediakan Indeks Kualitas Udara (AQI) dan konsentrasi polutan utama (terutama PM2.5) dengan analisis yang mendalam." },
  { icon: "📍", title: "Fokus Regional: Jawa Barat dan DKI Jakarta", text: "AirZone secara khusus memantau dan menganalisis kualitas udara dari berbagai titik di wilayah yang sangat padat ini." },
  { icon: "💡", title: "Edukasi dan Rekomendasi Kesehatan", text: "Kami menerjemahkan data polusi udara yang kompleks ke dalam kategori yang mudah dipahami (seperti Baik, Sedang, Tidak Sehat)." },
];
