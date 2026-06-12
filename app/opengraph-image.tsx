import { ImageResponse } from 'next/og';
import { WEDDING_CONFIG } from '@/lib/constants';

export const runtime = 'edge';

export const alt = `Thiệp Cưới ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        {/* Decorative border */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: '3px solid rgba(255, 215, 0, 0.6)',
            borderRadius: 20,
            display: 'flex',
          }}
        />

        {/* Inner decorative border */}
        <div
          style={{
            position: 'absolute',
            top: 35,
            left: 35,
            right: 35,
            bottom: 35,
            border: '1px solid rgba(255, 215, 0, 0.4)',
            borderRadius: 15,
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 60,
          }}
        >
          {/* Headline */}
          <div
            style={{
              fontSize: 28,
              color: '#FFD700',
              letterSpacing: '0.3em',
              marginBottom: 20,
              textTransform: 'uppercase',
            }}
          >
            Thiệp Mời Cưới
          </div>

          {/* Double Happiness Symbol */}
          <div
            style={{
              fontSize: 48,
              color: '#FF6B6B',
              marginBottom: 20,
            }}
          >
            囍
          </div>

          {/* Couple Names */}
          <div
            style={{
              fontSize: 72,
              color: '#FFFFFF',
              fontStyle: 'italic',
              marginBottom: 10,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {WEDDING_CONFIG.groom.shortName}
          </div>

          <div
            style={{
              fontSize: 36,
              color: '#FFD700',
              margin: '10px 0',
            }}
          >
            ❤
          </div>

          <div
            style={{
              fontSize: 72,
              color: '#FFFFFF',
              fontStyle: 'italic',
              marginBottom: 30,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {WEDDING_CONFIG.bride.shortName}
          </div>

          {/* Wedding Date */}
          <div
            style={{
              fontSize: 32,
              color: '#FFF8DC',
              marginBottom: 30,
            }}
          >
            {WEDDING_CONFIG.weddingDateDisplay}
          </div>

          {/* CTA Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '15px 40px',
              background: 'rgba(255, 215, 0, 0.9)',
              borderRadius: 30,
              color: '#8B4513',
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            Xem Thiệp Mời →
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
