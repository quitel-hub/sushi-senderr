import React, { useState, useEffect } from 'react';
import { getDatabaseStats } from '../data/netherlandsPostalCodesComplete';

export const PostalCodeStats: React.FC = () => {
  const [stats, setStats] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const databaseStats = getDatabaseStats();
    setStats(databaseStats);
  }, []);

  if (!stats) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      background: 'rgba(0, 0, 0, 0.8)', 
      color: 'white', 
      padding: '15px', 
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 1000,
      maxWidth: '300px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ margin: 0, color: '#4ade80' }}>База данных почтовых кодов</h3>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          style={{ 
            background: 'transparent', 
            border: '1px solid #4ade80', 
            color: '#4ade80', 
            padding: '5px 10px', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isVisible ? 'Скрыть' : 'Показать'}
        </button>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Всего кодов:</strong> {stats.totalCodes.toLocaleString()}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Городов:</strong> {stats.totalCities}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Провинций:</strong> {stats.totalProvinces}
      </div>

      {isVisible && (
        <div style={{ marginTop: '15px', maxHeight: '200px', overflowY: 'auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <strong>Города:</strong>
            <div style={{ fontSize: '11px', marginTop: '5px' }}>
              {stats.cities.slice(0, 10).join(', ')}
              {stats.cities.length > 10 && ` и еще ${stats.cities.length - 10}...`}
            </div>
          </div>
          
          <div>
            <strong>Провинции:</strong>
            <div style={{ fontSize: '11px', marginTop: '5px' }}>
              {stats.provinces.join(', ')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostalCodeStats;
