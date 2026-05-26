"use client";
import Image from "next/image";

export default function AboutGCXPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 to-white text-gray-800 px-6 py-12">
      
      {/* LOGO + TITLE */}
      <section className="text-center mb-12">
        <Image
          src="/favicon/GCX.png"
          alt="GCX Logo"
          width={110}
          height={110}
          className="mx-auto rounded-full shadow-xl"
        />

        <h1 className="text-4xl sm:text-5xl font-bold mt-5 text-cyan-700">
          Góc Cá Xinh <span className="text-cyan-500">(GCX)</span>
        </h1>

        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          🐠 GCX là token điểm thưởng dành cho khách hàng của cửa hàng
          Góc Cá Xinh.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-3xl mx-auto text-center mb-16 leading-relaxed text-lg">
        <p>
          <strong>GCX (Góc Cá Xinh)</strong> được tạo ra nhằm xây dựng hệ thống
          tích điểm hiện đại, minh bạch và dễ sử dụng cho khách hàng của cửa hàng.
          Khách hàng có thể nhận GCX khi mua sắm, tham gia sự kiện hoặc hoạt động
          cộng đồng.
        </p>

        <p className="mt-6">
          GCX có thể dùng để đổi sản phẩm, ưu đãi, quà tặng hoặc nhận các quyền
          lợi đặc biệt tại hệ sinh thái Góc Cá Xinh.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-8 text-center">
          🌍 Sứ Mệnh & Tầm Nhìn
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <h3 className="font-bold text-xl mb-3 text-cyan-600">
              🎯 Sứ Mệnh
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Mang đến hệ thống tích điểm thông minh giúp khách hàng nhận được
              nhiều giá trị hơn khi mua sắm tại Góc Cá Xinh.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
            <h3 className="font-bold text-xl mb-3 text-cyan-600">
              🚀 Tầm Nhìn
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Xây dựng cộng đồng yêu cá cảnh hiện đại, nơi khách hàng có thể vừa
              mua sắm vừa tích lũy giá trị thông qua GCX.
            </p>
          </div>

        </div>
      </section>

      {/* TOKEN UTILITY */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-8 text-center">
          💎 Công Dụng Của GCX
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            🎁 Nhận GCX khi mua hàng tại cửa hàng.
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            🐠 Dùng GCX để đổi cá, phụ kiện hoặc sản phẩm.
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            🎉 Đổi quà, voucher hoặc ưu đãi đặc biệt.
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            🌟 Tích lũy điểm thưởng cho khách hàng thân thiết.
          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-8">
          ✨ Vì Sao Chọn GCX?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-3 text-cyan-600">
              ⚡ Nhanh Chóng
            </h3>

            <p>
              Hệ thống điểm thưởng hoạt động nhanh và minh bạch trên blockchain.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-3 text-cyan-600">
              🔒 Minh Bạch
            </h3>

            <p>
              Mọi giao dịch GCX đều được lưu trữ công khai và an toàn.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-3 text-cyan-600">
              🎁 Nhiều Ưu Đãi
            </h3>

            <p>
              Khách hàng có thể tích điểm và đổi nhiều phần quà hấp dẫn.
            </p>
          </div>

        </div>
      </section>

      {/* ROADMAP */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-8">
          🗓 Lộ Trình Phát Triển
        </h2>

        <div className="bg-white rounded-2xl shadow-md p-8 inline-block text-left max-w-xl">
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>2026:</strong> Ra mắt hệ thống điểm thưởng GCX.
            </li>

            <li>
              <strong>2026:</strong> Tích hợp đổi quà và ưu đãi tại cửa hàng.
            </li>

            <li>
              <strong>2027:</strong> Mở rộng hệ thống khách hàng thân thiết.
            </li>

            <li>
              <strong>Tương Lai:</strong> Phát triển cộng đồng cá cảnh kết nối bằng GCX.
            </li>
          </ul>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-5xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-semibold text-cyan-700 mb-8">
          🧑‍💻 Đội Ngũ
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="font-bold text-xl text-cyan-600">
              🐡 Cá Nóc Mít
            </p>

            <p className="mt-2 text-gray-700">
              Blockchain Developer
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="font-bold text-xl text-cyan-600">
              🐱 Mèo Mập
            </p>

            <p className="mt-2 text-gray-700">
              Founder & Community
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 border-t pt-6">
        © {new Date().getFullYear()} Góc Cá Xinh — Tích Điểm, Đổi Quà, Kết Nối Đam Mê 🐠
      </footer>
    </main>
  );
}
