import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Tên không được để trống" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing Telegram configuration");
      return NextResponse.json(
        { error: "Cấu hình server chưa hoàn tất" },
        { status: 500 }
      );
    }

    // Format message for Telegram
    const telegramMessage = `
🎊 *XÁC NHẬN THAM DỰ ĐÁM CƯỚI* 🎊

👤 *Tên:* ${name.trim()}
${message?.trim() ? `💬 *Lời nhắn:* ${message.trim()}` : ""}

📅 _Gửi lúc: ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}_
    `.trim();

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Không thể gửi tin nhắn" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RSVP API error:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra, vui lòng thử lại" },
      { status: 500 }
    );
  }
}
