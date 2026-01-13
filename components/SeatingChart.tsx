"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { ANIMATION_VARIANTS } from "@/lib/theme";

interface Table {
  id: string;
  name: string;
  type: "vip" | "regular" | "family";
  guests: number;
  maxGuests: number;
  position: { x: number; y: number };
  guestList?: string[];
}

const mockTables: Table[] = [
  // VIP Tables - Gần sân khấu (bên trái sảnh)
  { id: "vip1", name: "Bàn VIP 1", type: "vip", guests: 8, maxGuests: 10, position: { x: 15, y: 25 } },
  { id: "vip2", name: "Bàn VIP 2", type: "vip", guests: 6, maxGuests: 10, position: { x: 15, y: 50 } },
  { id: "vip3", name: "Bàn VIP 3", type: "vip", guests: 9, maxGuests: 10, position: { x: 15, y: 75 } },
  
  // VIP Tables - Gần sân khấu (bên phải sảnh)
  { id: "vip4", name: "Bàn VIP 4", type: "vip", guests: 8, maxGuests: 10, position: { x: 85, y: 25 } },
  { id: "vip5", name: "Bàn VIP 5", type: "vip", guests: 6, maxGuests: 10, position: { x: 85, y: 50 } },
  { id: "vip6", name: "Bàn VIP 6", type: "vip", guests: 9, maxGuests: 10, position: { x: 85, y: 75 } },
  
  // Family Tables - Gia đình (bên trái sảnh)
  { id: "family1", name: "Nhà trai", type: "family", guests: 12, maxGuests: 12, position: { x: 30, y: 25 } },
  { id: "family2", name: "Nhà gái", type: "family", guests: 10, maxGuests: 12, position: { x: 70, y: 25 } },
  
  // Regular Tables - Bạn bè (hai bên sảnh)
  { id: "table1", name: "Bàn 1", type: "regular", guests: 7, maxGuests: 10, position: { x: 30, y: 50 } },
  { id: "table2", name: "Bàn 2", type: "regular", guests: 9, maxGuests: 10, position: { x: 30, y: 75 } },
  { id: "table3", name: "Bàn 3", type: "regular", guests: 6, maxGuests: 10, position: { x: 70, y: 50 } },
  { id: "table4", name: "Bàn 4", type: "regular", guests: 8, maxGuests: 10, position: { x: 70, y: 75 } },
];

export default function SeatingChart() {

  const getTableColor = (type: Table["type"]) => {
    // Tất cả bàn dùng cùng màu gradient đẹp
    return "bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)]";
  };

  const getTableIcon = () => {
    return <Users className="w-4 h-4" />;
  };

  return (
    <section id="seating-chart" className="py-20 md:py-32 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl md:text-5xl text-[var(--color-primary)] mb-4">
            Sơ Đồ Bàn Tiệc
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Bố trí bàn tiệc cho ngày trọng đại. Vui lòng tìm tên bàn của bạn trên thiệp mời để xác định vị trí ngồi.
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-primary-light)] mx-auto mt-6" />
        </motion.div>

        {/* Legend */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-accent-light)] to-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Bàn VIP</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Gia đình</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-secondary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Bạn bè</span>
          </div>
        </motion.div>

        {/* Seating Chart */}
        <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-border-light)] p-8 md:p-12">
          {/* Stage */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeInDown}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] rounded-xl p-6 text-center text-white shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">🎭 SÂN KHẤU 🎭</h3>
              <p className="text-sm opacity-90">Chương trình tiệc cưới</p>
            </div>
          </motion.div>

          {/* Tables Grid */}
          <div className="relative h-[350px] md:h-[500px] bg-[var(--color-bg-tertiary)] rounded-xl p-2 md:p-4 overflow-hidden">
            {/* Center Aisle - Đường sảnh cô dâu */}
            <div className="absolute left-1/2 top-0 bottom-0 w-12 md:w-20 transform -translate-x-1/2 bg-gradient-to-b from-[var(--color-accent-light)] via-white to-[var(--color-primary-lighter)] opacity-60 z-0">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-0.5 h-full bg-[var(--color-primary-light)] opacity-50" />
              </div>
            </div>
            <div className="absolute left-1/2 bottom-2 md:bottom-4 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded-full shadow-md z-10">
              <span className="text-[10px] md:text-xs font-medium text-[var(--color-primary)]">💐 Lối đi cô dâu 💐</span>
            </div>

            <div className="relative w-full h-full">
              {mockTables.map((table, index) => (
                <motion.div
                  key={table.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.15, zIndex: 20 }}
                  className={`absolute rounded-full shadow-lg transition-all ${getTableColor(table.type)} group`}
                  style={{
                    left: `${table.position.x}%`,
                    top: `${table.position.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Table Circle - Responsive size */}
                  <div className="w-8 h-8 md:w-12 md:h-12 flex flex-col items-center justify-center text-white rounded-full">
                    {getTableIcon()}
                  </div>
                  {/* Table Name Label - Desktop: always show, Mobile: show on hover */}
                  <div className="absolute -bottom-5 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-1 md:px-2 py-0.5 rounded shadow-md border border-[var(--color-border-light)] opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity z-10">
                    <span className="text-[8px] md:text-[10px] font-medium text-[var(--color-text-primary)] whitespace-nowrap">
                      {table.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-[var(--color-text-muted)] text-sm">
            💡 Tên bàn của bạn được ghi trên thiệp mời. Vui lòng tìm vị trí bàn tương ứng.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
