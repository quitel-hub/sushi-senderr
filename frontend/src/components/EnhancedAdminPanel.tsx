import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import AdminLogin from './AdminLogin';

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  country?: string;
  city?: string;
  street?: string;
  postalCode?: string;
  birthDate?: string;
  preferredFood?: string;
  feedback?: string;
  discountCode: string;
  createdAt: string;
}

interface LoginSession {
  id: string;
  loginAt: string;
  isSuccessful: boolean;
  ipAddress?: string;
  location?: string;
  browser?: string;
  os?: string;
  device?: string;
  country?: string;
  city?: string;
  timezone?: string;
  isp?: string;
  region?: string;
  deviceType?: string;
  deviceModel?: string;
  browserName?: string;
  browserVersion?: string;
  osName?: string;
  osVersion?: string;
  countryCode?: string;
  regionCode?: string;
  postal?: string;
  currency?: string;
  currencyName?: string;
  languages?: string;
  countryPopulation?: number;
  countryArea?: number;
  countryCapital?: string;
  continent?: string;
  isEu?: boolean;
  callingCode?: string;
  utcOffset?: string;
}

interface SyncedFormData {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  city: string;
  street: string;
  postalCode: string;
  preferredFood: string;
  feedback: string;
  timestamp: string;
  isDraft: boolean;
}

interface DeviceInfo {
  userAgent: string;
  ipAddress: string;
  browser: string;
  browserName: string;
  browserVersion: string;
  os: string;
  osName: string;
  osVersion: string;
  device: string;
  deviceType: string;
  deviceModel: string;
  country: string;
  city: string;
  region: string;
  latitude?: number;
  longitude?: number;
  location: string;
  timezone: string;
  isp: string;
  countryCode?: string;
  regionCode?: string;
  postal?: string;
  currency?: string;
  currencyName?: string;
  languages?: string;
  countryPopulation?: number;
  countryArea?: number;
  countryCapital?: string;
  continent?: string;
  isEu?: boolean;
  callingCode?: string;
  utcOffset?: string;
}

export const EnhancedAdminPanel: React.FC = () => {
  const { t } = useTranslation();
  const BRAND_IMAGE_URL = (typeof window !== 'undefined' && window.localStorage?.getItem('brandImageUrl')) || '/src/assets/sushi-icon-logo.svg';
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loginSessions, setLoginSessions] = useState<LoginSession[]>([]);
  const [currentDeviceInfo, setCurrentDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [lastSync, setLastSync] = useState<Date>(new Date());
  const [autoSync, setAutoSync] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'customers' | 'sessions' | 'device' | 'broadcast' | 'synced'>('customers');
  const [broadcastMessage, setBroadcastMessage] = useState({ title: '', body: '' });
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [syncedFormData, setSyncedFormData] = useState<SyncedFormData[]>([]);
  const [broadcastChannel, setBroadcastChannel] = useState<'sms' | 'email' | 'whatsapp'>('sms');
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);
  
  // Проверка аутентификации при загрузке
  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem('adminAuthenticated');
      const loginTime = localStorage.getItem('adminLoginTime');
      
      console.log('Checking auth:', { authStatus, loginTime });
      
      if (authStatus === 'true' && loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);
        
        console.log('Session check:', { loginDate, now, hoursDiff });
        
        // Сессия действительна 24 часа
        if (hoursDiff < 24) {
          console.log('Session valid, setting authenticated to true');
          setIsAuthenticated(true);
        } else {
          // Сессия истекла
          console.log('Session expired, clearing auth');
          localStorage.removeItem('adminAuthenticated');
          localStorage.removeItem('adminLoginTime');
          setIsAuthenticated(false);
        }
      } else {
        console.log('No valid session found');
        setIsAuthenticated(false);
      }
    };
    
    checkAuth();
  }, []);
  
  // Фильтры и поиск
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'failed'>('all');
  const [countryFilter, setCountryFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  
  // Автоматическая синхронизация каждые 1 секунду, без визуального мерцания
  useEffect(() => {
    if (!autoSync) return;

    const interval = setInterval(() => {
      // Мягкое обновление: не трогаем глобальные лоадеры, просто подменяем данные
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, [autoSync]);

  const fetchData = useCallback(async () => {
    try {
      const adminEmail = 'sushi.master.admin.2024@secure-icon.com';
      const headers = {
        'x-owner-token': adminEmail
      };
 
  

      const [customersRes, sessionsRes, deviceRes, syncedRes] = await Promise.all([
        fetch('/api/customers', { headers }),
        fetch('/api/owner/login-sessions', { headers }),
        fetch('/api/owner/current-device', { headers }),
        fetch('/api/sync/form-data', { headers })
      ]);

      if (customersRes.ok) {
        const customersData = await customersRes.json();
        setCustomers(customersData);
      }

      if (sessionsRes.ok) {
        const sessionsData = await sessionsRes.json();
        setLoginSessions(sessionsData);
      }

      if (deviceRes.ok) {
        const deviceData = await deviceRes.json();
        setCurrentDeviceInfo(deviceData);
      }

      if (syncedRes.ok) {
        const syncedData = await syncedRes.json();
        setSyncedFormData(syncedData);
      }

      setLastSync(new Date());
    } catch (error) {
      console.error(t('admin.sync.error', { error: error instanceof Error ? error.message : String(error) }));
    } finally {
      setIsLoading(false);
    }
  }, [t]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleBroadcast = async () => {
    if (!broadcastMessage.title.trim() || !broadcastMessage.body.trim()) return;
    if (selectedRecipients.length === 0) return;

    setIsBroadcasting(true);
    try {
      const adminEmail = 'sushi.master.admin.2024@secure-icon.com';
      const apiEndpoints = {
        sms: '/api/owner/broadcast/sms',
        email: '/api/owner/broadcast/email',
        whatsapp: '/api/owner/broadcast/whatsapp'
      };
      const url = apiEndpoints[broadcastChannel];
      const response = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-owner-token': adminEmail
        },
        body: JSON.stringify({
          title: broadcastMessage.title,
          body: broadcastMessage.body,
          recipientIds: selectedRecipients,
        })
      });

      const result = await response.json();
      if (response.ok) {
        setBroadcastMessage({ title: '', body: '' });
        setSelectedRecipients([]);
        alert(result.message || t('admin.broadcast.success'));
      } else {
        alert(result.message || t('admin.broadcast.error'));
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      alert(t('admin.broadcast.error'));
    } finally {
      setIsBroadcasting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    setIsAuthenticated(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getStatusBadge = (isSuccessful: boolean) => {
    return (
      <span className={`badge ${isSuccessful ? 'badge--success' : 'badge--error'}`}>
        {isSuccessful ? t('admin.sessions.status.successful') : t('admin.sessions.status.failed')}
      </span>
    );
  };

  // Функции фильтрации
  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = searchTerm === '' || 
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phoneNumber.includes(searchTerm) ||
      customer.country?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCountry = countryFilter === 'all' || customer.country === countryFilter;
    
    return matchesSearch && matchesCountry;
  });

  const filteredSessions = loginSessions.filter(session => {
    const matchesSearch = searchTerm === '' || 
      session.ipAddress?.includes(searchTerm) ||
      session.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.browser?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || 
      (statusFilter === 'success' && session.isSuccessful) ||
      (statusFilter === 'failed' && !session.isSuccessful);
    
    return matchesSearch && matchesStatus;
  });

  const filteredSyncedData = syncedFormData.filter(data => {
    const matchesSearch = searchTerm === '' || 
      data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.phoneNumber.includes(searchTerm);
    
    return matchesSearch;
  });

  // Получаем уникальные страны для фильтра
  const uniqueCountries = Array.from(new Set(customers.map(c => c.country).filter(Boolean)));

  // Статистика
  const stats = {
    totalCustomers: customers.length,
    totalSessions: loginSessions.length,
    successfulSessions: loginSessions.filter(s => s.isSuccessful).length,
    failedSessions: loginSessions.filter(s => !s.isSuccessful).length,
    totalSyncedData: syncedFormData.length,
    draftData: syncedFormData.filter(d => d.isDraft).length,
    completedData: syncedFormData.filter(d => !d.isDraft).length
  };

  // Если пользователь не аутентифицирован, показываем форму входа
  if (!isAuthenticated) {
    return <AdminLogin onLogin={setIsAuthenticated} />;
  }

  return (
    <div className="enhanced-admin-panel">
      {/* Заголовок с брендингом и синхронизацией */}
      <div className="admin-header">
        <div className="admin-header__main">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 12, // не круг — показываем фото как есть
                overflow: 'hidden',
                boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
                border: '2px solid rgba(255,255,255,0.35)'
              }}>
                <img src={BRAND_IMAGE_URL} alt="Sushi Icon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: 2,
                  background: 'linear-gradient(90deg,#ff5858 0%,#f857a6 35%,#7b2ff7 70%,#00c6ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 3px 12px rgba(255, 80, 120, 0.35)'
                }}>SUSHI ICON</div>
                <div style={{
                  marginTop: 2,
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.95)',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>THE SUSHI AND ROLLS</div>
              </div>
            </div>
            <h2 className="admin-header__title" style={{ margin: 0, color: 'rgba(255,255,255,0.95)', textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}>{t('admin.title')}</h2>
          </div>
          <div className="admin-header__actions">
            <button 
              className="admin-logout-btn"
              onClick={handleLogout}
              title={t('admin.auth.logout')}
            >
              🚪 {t('admin.auth.logout')}
            </button>
          </div>
          <div className="sync-controls">
            <button 
              className={`sync-toggle ${autoSync ? 'active' : ''}`}
              onClick={() => setAutoSync(!autoSync)}
            >
              {autoSync ? t('admin.sync.autoSync') : t('admin.sync.syncStopped')}
            </button>
            <button className="sync-now" onClick={fetchData}>
              {t('admin.sync.syncNow')}
            </button>
            <span className="last-sync">
              {t('admin.sync.lastSync', { time: lastSync.toLocaleTimeString() })}
            </span>
          </div>
        </div>
      </div>

      {/* Панель статистики */}
      <div className="stats-panel">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <div className="stat-number">{stats.totalCustomers}</div>
              <div className="stat-label">{t('admin.stats.customers')}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔐</div>
            <div className="stat-content">
              <div className="stat-number">{stats.totalSessions}</div>
              <div className="stat-label">{t('admin.stats.sessions')}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <div className="stat-number">{stats.successfulSessions}</div>
              <div className="stat-label">{t('admin.stats.successful')}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">❌</div>
            <div className="stat-content">
              <div className="stat-number">{stats.failedSessions}</div>
              <div className="stat-label">{t('admin.stats.failed')}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <div className="stat-content">
              <div className="stat-number">{stats.totalSyncedData}</div>
              <div className="stat-label">{t('admin.stats.synced')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Панель фильтров и поиска */}
      <div className="filters-panel">
        <div className="search-box">
          <input
            type="text"
            placeholder={t('admin.filters.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters-row">
          {selectedTab === 'customers' && (
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">{t('admin.filters.allCountries')}</option>
              {uniqueCountries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          )}
          
          {selectedTab === 'sessions' && (
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | 'success' | 'failed')}
              className="filter-select"
            >
              <option value="all">{t('admin.filters.allStatuses')}</option>
              <option value="success">{t('admin.filters.successful')}</option>
              <option value="failed">{t('admin.filters.failed')}</option>
            </select>
          )}
          
          <button
            onClick={() => {
              setSearchTerm('');
              setStatusFilter('all');
              setCountryFilter('all');
              setDateFilter('all');
            }}
            className="clear-filters-btn"
          >
            {t('admin.filters.clearFilters')}
          </button>
        </div>
      </div>

      {/* Навигационные вкладки */}
      <div className="admin-tabs">
        <button 
          className={`admin-tab ${selectedTab === 'customers' ? 'active' : ''}`}
          onClick={() => setSelectedTab('customers')}
        >
          {t('admin.tabs.customers', { filtered: filteredCustomers.length, total: customers.length })}
        </button>
        <button 
          className={`admin-tab ${selectedTab === 'sessions' ? 'active' : ''}`}
          onClick={() => setSelectedTab('sessions')}
        >
          {t('admin.tabs.sessions', { filtered: filteredSessions.length, total: loginSessions.length })}
        </button>
        <button 
          className={`admin-tab ${selectedTab === 'device' ? 'active' : ''}`}
          onClick={() => setSelectedTab('device')}
        >
          {t('admin.tabs.device')}
        </button>
        <button 
          className={`admin-tab ${selectedTab === 'broadcast' ? 'active' : ''}`}
          onClick={() => setSelectedTab('broadcast')}
        >
          {t('admin.tabs.broadcast')}
        </button>
        <button 
          className={`admin-tab ${selectedTab === 'synced' ? 'active' : ''}`}
          onClick={() => setSelectedTab('synced')}
        >
          {t('admin.tabs.synced', { filtered: filteredSyncedData.length, total: syncedFormData.length })}
        </button>
      </div>

      {/* Контент вкладок */}
      <div className="admin-content">
        {selectedTab === 'customers' && (
          <div className="customers-section">
            {/* Текст "Программа лояльности" в начале секции */}
            <div className="loyalty-program-section">
              <h2 className="loyalty-program-title">{t('sushi.animation.loyaltyProgram')}</h2>
            </div>
            
            <div className="section-header">
              <h3>{t('admin.customers.title')}</h3>
            </div>
            
            <div className="export-buttons">
              <button className="button button--green" onClick={() => window.open('/api/export/customers', '_blank')}>
                {t('admin.customers.exportCsv')}
              </button>
              <button className="button button--blue" onClick={() => window.open('/api/export/customers/json', '_blank')}>
                {t('admin.customers.exportJson')}
              </button>
            </div>
            
            <div className="table-container">
              <table className="enhanced-table">
                <thead>
                  <tr>
                    <th>{t('admin.customers.table.id')}</th>
                    <th>{t('admin.customers.table.name')}</th>
                    <th>{t('admin.customers.table.phone')}</th>
                    <th>{t('admin.customers.table.email')}</th>
                    <th>{t('admin.customers.table.country')}</th>
                    <th>{t('admin.customers.table.city')}</th>
                    <th>{t('admin.customers.table.address')}</th>
                    <th>{t('admin.customers.table.birthDate')}</th>
                    <th>{t('admin.customers.table.preferences')}</th>
                    <th>{t('admin.customers.table.feedback')}</th>
                    <th>{t('admin.customers.table.promoCode')}</th>
                    <th>{t('admin.customers.table.registrationDate')}</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: '#6495ED' }}>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="customer-id">{customer.id.slice(-8)}</td>
                      <td className="customer-name">
                        <strong>{customer.firstName} {customer.lastName}</strong>
                      </td>
                      <td className="customer-phone">{customer.phoneNumber}</td>
                      <td className="customer-email">{customer.email || '-'}</td>
                      <td className="customer-country">{customer.country || '-'}</td>
                      <td className="customer-city">{customer.city || '-'}</td>
                      <td className="customer-address">
                        {customer.street && customer.postalCode 
                          ? `${customer.street}, ${customer.postalCode}` 
                          : '-'}
                      </td>
                      <td className="customer-birthdate">
                        {customer.birthDate ? formatDate(customer.birthDate) : '-'}
                      </td>
                      <td className="customer-preferences">{customer.preferredFood || '-'}</td>
                      <td className="customer-feedback">{customer.feedback || '-'}</td>
                      <td className="customer-promo">
                        <span className="badge badge--promo">{customer.discountCode}</span>
                      </td>
                      <td className="customer-date">{formatDate(customer.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'sessions' && (
          <div className="sessions-section">
            <h3>{t('admin.sessions.title')}</h3>
            <div className="table-container">
              <table className="enhanced-table">
                <thead>
                  <tr>
                    <th>{t('admin.sessions.table.loginTime')}</th>
                    <th>{t('admin.sessions.table.status')}</th>
                    <th>{t('admin.sessions.table.ipAddress')}</th>
                    <th>{t('admin.sessions.table.location')}</th>
                    <th>{t('admin.sessions.table.browser')}</th>
                    <th>{t('admin.sessions.table.os')}</th>
                    <th>{t('admin.sessions.table.device')}</th>
                    <th>{t('admin.sessions.table.timezone')}</th>
                    <th>{t('admin.sessions.table.isp')}</th>
                    <th>{t('admin.sessions.table.details')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions.map((session) => (
                    <tr key={session.id}>
                      <td className="session-time">{formatDate(session.loginAt)}</td>
                      <td className="session-status">{getStatusBadge(session.isSuccessful)}</td>
                      <td className="session-ip">{session.ipAddress || '-'}</td>
                      <td className="session-location">
                        {session.city && session.country 
                          ? `${session.city}, ${session.country}` 
                          : session.location || '-'}
                      </td>
                      <td className="session-browser">
                        {session.browserName && session.browserVersion
                          ? `${session.browserName} ${session.browserVersion}`
                          : session.browser || '-'}
                      </td>
                      <td className="session-os">
                        {session.osName && session.osVersion
                          ? `${session.osName} ${session.osVersion}`
                          : session.os || '-'}
                      </td>
                      <td className="session-device">
                        {session.deviceType && session.deviceModel
                          ? `${session.deviceType} (${session.deviceModel})`
                          : session.device || '-'}
                      </td>
                      <td className="session-timezone">{session.timezone || '-'}</td>
                      <td className="session-isp">{session.isp || '-'}</td>
                      <td className="session-details">
                        <details className="session-details-dropdown">
                          <summary>{t('admin.sessions.details.title')}</summary>
                          <div className="session-details-content">
                            <p><strong>{t('admin.sessions.details.region')}:</strong> {session.region || '-'}</p>
                            <p><strong>{t('admin.sessions.details.countryCode')}:</strong> {session.countryCode || '-'}</p>
                            <p><strong>{t('admin.sessions.details.postal')}:</strong> {session.postal || '-'}</p>
                            <p><strong>{t('admin.sessions.details.currency')}:</strong> {session.currency || '-'}</p>
                            <p><strong>{t('admin.sessions.details.languages')}:</strong> {session.languages || '-'}</p>
                            <p><strong>{t('admin.sessions.details.population')}:</strong> {session.countryPopulation?.toLocaleString() || '-'}</p>
                            <p><strong>{t('admin.sessions.details.capital')}:</strong> {session.countryCapital || '-'}</p>
                            <p><strong>{t('admin.sessions.details.continent')}:</strong> {session.continent || '-'}</p>
                            <p><strong>{t('admin.sessions.details.eu')}:</strong> {session.isEu ? t('admin.sessions.details.yes') : t('admin.sessions.details.no')}</p>
                            <p><strong>{t('admin.sessions.details.callingCode')}:</strong> {session.callingCode || '-'}</p>
                            <p><strong>{t('admin.sessions.details.utcOffset')}:</strong> {session.utcOffset || '-'}</p>
                          </div>
                        </details>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'device' && currentDeviceInfo && (
          <div className="device-section">
            <h3>{t('admin.device.title')}</h3>
            <div className="device-info-grid">
              <div className="device-info-card">
                <h4>{t('admin.device.location.title')}</h4>
                <div className="device-info-content">
                  <p><strong>{t('admin.device.location.country')}:</strong> {currentDeviceInfo.country}</p>
                  <p><strong>{t('admin.device.location.city')}:</strong> {currentDeviceInfo.city}</p>
                  <p><strong>{t('admin.device.location.region')}:</strong> {currentDeviceInfo.region}</p>
                  <p><strong>{t('admin.device.location.address')}:</strong> {currentDeviceInfo.location}</p>
                  <p><strong>{t('admin.device.location.ip')}:</strong> {currentDeviceInfo.ipAddress}</p>
                  <p><strong>{t('admin.device.location.isp')}:</strong> {currentDeviceInfo.isp}</p>
                  {currentDeviceInfo.latitude && currentDeviceInfo.longitude && (
                    <p><strong>{t('admin.device.location.coordinates')}:</strong> {currentDeviceInfo.latitude}, {currentDeviceInfo.longitude}</p>
                  )}
                </div>
              </div>

              <div className="device-info-card">
                <h4>{t('admin.device.device.title')}</h4>
                <div className="device-info-content">
                  <p><strong>{t('admin.device.device.type')}:</strong> {currentDeviceInfo.deviceType}</p>
                  <p><strong>{t('admin.device.device.model')}:</strong> {currentDeviceInfo.deviceModel}</p>
                  <p><strong>{t('admin.device.device.browser')}:</strong> {currentDeviceInfo.browserName} {currentDeviceInfo.browserVersion}</p>
                  <p><strong>{t('admin.device.device.os')}:</strong> {currentDeviceInfo.osName} {currentDeviceInfo.osVersion}</p>
                </div>
              </div>

              <div className="device-info-card">
                <h4>{t('admin.device.network.title')}</h4>
                <div className="device-info-content">
                  <p><strong>{t('admin.device.network.timezone')}:</strong> {currentDeviceInfo.timezone}</p>
                  <p><strong>{t('admin.device.network.utcOffset')}:</strong> {currentDeviceInfo.utcOffset}</p>
                  <p><strong>{t('admin.device.network.countryCode')}:</strong> {currentDeviceInfo.countryCode}</p>
                  <p><strong>{t('admin.device.network.regionCode')}:</strong> {currentDeviceInfo.regionCode}</p>
                  <p><strong>{t('admin.device.network.postal')}:</strong> {currentDeviceInfo.postal}</p>
                </div>
              </div>

              <div className="device-info-card">
                <h4>{t('admin.device.economy.title')}</h4>
                <div className="device-info-content">
                  <p><strong>{t('admin.device.economy.currency')}:</strong> {currentDeviceInfo.currency} ({currentDeviceInfo.currencyName})</p>
                  <p><strong>{t('admin.device.economy.languages')}:</strong> {currentDeviceInfo.languages}</p>
                  <p><strong>{t('admin.device.economy.population')}:</strong> {currentDeviceInfo.countryPopulation?.toLocaleString()}</p>
                  <p><strong>{t('admin.device.economy.area')}:</strong> {currentDeviceInfo.countryArea?.toLocaleString()} км²</p>
                  <p><strong>{t('admin.device.economy.capital')}:</strong> {currentDeviceInfo.countryCapital}</p>
                  <p><strong>{t('admin.device.economy.continent')}:</strong> {currentDeviceInfo.continent}</p>
                  <p><strong>{t('admin.device.economy.eu')}:</strong> {currentDeviceInfo.isEu ? t('admin.sessions.details.yes') : t('admin.sessions.details.no')}</p>
                  <p><strong>{t('admin.device.economy.callingCode')}:</strong> {currentDeviceInfo.callingCode}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'broadcast' && (
          <div className="broadcast-section">
            <h3>{t('admin.broadcast.title')}</h3>
            <div className="broadcast-form">
            <div className="form-group">
              <label>{t('change broadcast')}</label>
              <div className="channel-toggle">
                <label>
                  <input type="radio" name="channel" checked={broadcastChannel==='sms'} onChange={() => setBroadcastChannel('sms')} /> SMS
                </label>
                <label style={{ marginLeft: 12 }}>
                  <input type="radio" name="channel" checked={broadcastChannel==='email'} onChange={() => setBroadcastChannel('email')} /> Email
                </label>
                <label style={{ marginLeft: 12 }}>
                  <input type="radio" name="channel" checked={broadcastChannel === 'whatsapp'} onChange={() => setBroadcastChannel('whatsapp')} /> WhatsApp
                </label>
              </div>
            </div>
              <div className="form-group">
                <label htmlFor="broadcast-title">{t('admin.broadcast.titleLabel')}</label>
                <input
                  id="broadcast-title"
                  type="text"
                  value={broadcastMessage.title}
                  onChange={(e) => setBroadcastMessage(prev => ({ ...prev, title: e.target.value }))}
                  placeholder={t('admin.broadcast.titlePlaceholder')}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="broadcast-body">{t('admin.broadcast.bodyLabel')}</label>
                <textarea
                  id="broadcast-body"
                  value={broadcastMessage.body}
                  onChange={(e) => setBroadcastMessage(prev => ({ ...prev, body: e.target.value }))}
                  placeholder={t('admin.broadcast.bodyPlaceholder')}
                  className="form-textarea"
                  rows={6}
                />
              </div>

            <div className="form-group">
              <label>{t('recipients')}</label>
              <div className="recipients-list" style={{ maxHeight: 240, overflow: 'auto', border: '1px solid #e5e7eb', borderRadius: 8, padding: 10 }}>
                {customers.map(c => {
                  const disabled = (broadcastChannel==='email' && !c.email) || (broadcastChannel==='sms' && !c.phoneNumber);
                  const checked = selectedRecipients.includes(c.id);
                  return (
                    <label key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 4px', opacity: disabled ? 0.5 : 1 }}>
                      <input
                        type="checkbox"
                        disabled={disabled}
                        checked={checked}
                        onChange={(e) => {
                          setSelectedRecipients(prev => e.target.checked ? [...prev, c.id] : prev.filter(id => id !== c.id));
                        }}
                      />
                      <span>{c.firstName} {c.lastName} — {broadcastChannel==='email' ? (c.email || '-') : c.phoneNumber}</span>
                    </label>
                  );
                })}
              </div>
              <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                <button className="button button--blue" onClick={() => setSelectedRecipients(customers.filter(c => (broadcastChannel==='email' ? !!c.email : !!c.phoneNumber)).map(c => c.id))}>{t('Select All')}</button>
                <button className="button" onClick={() => setSelectedRecipients([])}>{t('Clear Selection')}</button>
              </div>
            </div>
              
              {/* Текст "Программа лояльности" перед кнопкой рассылки */}
              <div className="loyalty-program-section">
                <h2 className="loyalty-program-title">{t('sushi.animation.loyaltyProgram')}</h2>
              </div>
              
            <button
                className="button button--primary"
                onClick={handleBroadcast}
              disabled={isBroadcasting || !broadcastMessage.title.trim() || !broadcastMessage.body.trim() || selectedRecipients.length===0}
              >
                {isBroadcasting ? t('admin.broadcast.sending') : t('admin.broadcast.sendButton')}
              </button>
            </div>
          </div>
        )}

        {selectedTab === 'synced' && (
          <div className="synced-data-section">
            <div className="section-header">
              <h3>{t('admin.synced.title')}</h3>
              <p>{t('admin.synced.description')}</p>
            </div>

            {filteredSyncedData.length === 0 ? (
              <div className="no-data">
                <p>{t('admin.synced.noData')}</p>
              </div>
            ) : (
              <div className="synced-data-list">
                {filteredSyncedData.map((data, index) => (
                  <div key={data.id || index} className="synced-data-item">
                    <div className="synced-data-header">
                      <h4>{data.firstName} {data.lastName}</h4>
                      <div className="synced-data-meta">
                        <span className={`status-badge ${data.isDraft ? 'draft' : 'completed'}`}>
                          {data.isDraft ? t('admin.synced.status.draft') : t('admin.synced.status.completed')}
                        </span>
                        <span className="timestamp">
                          {new Date(data.timestamp).toLocaleString('ru-RU')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="synced-data-content">
                      <div className="data-grid">
                        <div className="data-item">
                          <label>{t('admin.synced.fields.phone')}:</label>
                          <span>{data.phoneNumber}</span>
                        </div>
                        <div className="data-item">
                          <label>{t('admin.synced.fields.email')}:</label>
                          <span>{data.email}</span>
                        </div>
                        <div className="data-item">
                          <label>{t('admin.synced.fields.country')}:</label>
                          <span>{data.country}</span>
                        </div>
                        <div className="data-item">
                          <label>{t('admin.synced.fields.city')}:</label>
                          <span>{data.city}</span>
                        </div>
                        <div className="data-item">
                          <label>{t('admin.synced.fields.birthDate')}:</label>
                          <span>{data.birthDate}</span>
                        </div>
                        <div className="data-item">
                          <label>{t('admin.synced.fields.preferredFood')}:</label>
                          <span>{data.preferredFood}</span>
                        </div>
                      </div>
                      
                      {data.feedback && (
                        <div className="data-item full-width">
                          <label>{t('admin.synced.fields.feedback')}:</label>
                          <span>{data.feedback}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};



