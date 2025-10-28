import React from 'react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

type AccessDeniedProps = {
  onBack: () => void;
};

const AccessDenied: React.FC<AccessDeniedProps> = ({ onBack }) => {
  return (
    <div className="app" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '640px',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        border: '1px solid rgba(255,255,255,0.6)'
      }}>
        <div style={{
          padding: '28px 28px 0 28px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '56px',
            lineHeight: 1,
            marginBottom: '8px'
          }}>⛔️</div>
          <h1 style={{
            margin: 0,
            fontSize: '28px',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ff4b1f 0%, #ff9068 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 6px rgba(0,0,0,0.08)'
          }}>
            Доступ заблокирован
          </h1>
          <p style={{
            margin: '10px 0 0 0',
            color: '#333',
            fontSize: '16px',
            fontWeight: 600
          }}>
            Эта страница доступна только администраторам
          </p>
        </div>

        <div style={{ padding: '0 28px 24px 28px' }}>
          <div style={{
            marginTop: '20px',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeeba',
            color: '#856404',
            borderRadius: '10px',
            padding: '14px 16px',
            fontSize: '14px',
            fontWeight: 600
          }}>
            По правилам доступа вход на эту страницу разрешён только администратору.
          </div>

          <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'center' }}>
            <InteractiveHoverButton
              text="← Назад к анкете"
              className="button button--primary"
              onClick={onBack}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;


