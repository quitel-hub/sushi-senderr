import React, { useMemo, useState, useEffect, useCallback, type FormEvent } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import "./App.css";
import "./i18n/config";
import { ParticleTextEffect } from "./components/ParticleTextEffect";
import { LavaLamp } from "./components/ui/fluid-blob";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import SimpleCountrySelector from "./components/SimpleCountrySelector";
import SimplePhoneInput from "./components/SimplePhoneInput";
import DatePicker from "./components/DatePicker";
import NetherlandsAddressValidator from "./components/NetherlandsAddressValidator";
import { InteractiveHoverButton } from "./components/ui/interactive-hover-button";
import ThankYouPage from "./components/ThankYouPage";
import { DataExporter } from "./components/DataExporter";
import { EnhancedAdminPanel } from "./components/EnhancedAdminPanel";

type TabKey = "registration" | "owner";

type RegistrationFormState = {
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
  discountCode: string;
};

type BroadcastFormState = {
  title: string;
  body: string;
};

type StatusState = {
  type: "success" | "error";
  message: string;
  details?: string;
};

type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  country?: string | null;
  phoneNumber: string;
  email?: string | null;
  birthDate?: string | null;
  city?: string | null;
  street?: string | null;
  postalCode?: string | null;
  preferredFood?: string | null;
  feedback?: string | null;
  discountCode: string;
  createdAt: string;
};

type LoginSession = {
  id: string;
  loginAt: string;
  isSuccessful: boolean;
  ipAddress?: string | null;
  location?: string | null;
  userAgent?: string | null;
  browser?: string | null;
  os?: string | null;
  device?: string | null;
  country?: string | null;
  city?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  timezone?: string | null;
  isp?: string | null;
  region?: string | null;
  deviceType?: string | null;
  deviceModel?: string | null;
  browserName?: string | null;
  browserVersion?: string | null;
  osName?: string | null;
  osVersion?: string | null;
  countryCode?: string | null;
  regionCode?: string | null;
  postal?: string | null;
  currency?: string | null;
  currencyName?: string | null;
  languages?: string | null;
  countryPopulation?: number | null;
  countryArea?: number | null;
  countryCapital?: string | null;
  continent?: string | null;
  isEu?: boolean | null;
  callingCode?: string | null;
  utcOffset?: string | null;
};

type OwnerAuthState = {
  email: string;
  accessCode: string;
  password: string;
};

type OwnerProfile = {
  id: string;
  email: string;
  name: string;
  accessCode: string;
  isActive: boolean;
  lastLogin?: string | null;
  createdAt: string;
  updatedAt: string;
};

type DeviceInfo = {
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
  latitude?: number | null;
  longitude?: number | null;
  location: string;
  timezone: string;
  isp: string;
  countryCode?: string | null;
  regionCode?: string | null;
  postal?: string | null;
  currency?: string | null;
  currencyName?: string | null;
  languages?: string | null;
  countryPopulation?: number | null;
  countryArea?: number | null;
  countryCapital?: string | null;
  continent?: string | null;
  isEu?: boolean | null;
  callingCode?: string | null;
  utcOffset?: string | null;
};

const defaultRegistrationFormState: RegistrationFormState = {
  firstName: "",
  lastName: "",
  country: "",
  phoneNumber: "",
  email: "",
  birthDate: "",
  city: "",
  street: "",
  postalCode: "",
  preferredFood: "",
  feedback: "",
  discountCode: "",
};

const defaultBroadcastFormState: BroadcastFormState = {
  title: "",
  body: "",
};

const defaultOwnerAuthState: OwnerAuthState = {
  email: "",
  accessCode: "",
  password: "",
};

const validCredentials = {
  email: "sushi.master.admin.2024@secure-icon.com",
  accessCode: "SUSHI-MASTER-2024-X9K7",
  password: "SushiMaster2024!@#$%^&*()_+{}|:<>?[]\\;',./",
};

export default function App() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>("registration");
  const [formState, setFormState] = useState(defaultRegistrationFormState);
  const [broadcastState, setBroadcastState] = useState(defaultBroadcastFormState);
  const [ownerAuthState, setOwnerAuthState] = useState(defaultOwnerAuthState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOwnerAuthenticating, setIsOwnerAuthenticating] = useState(false);
  const [ownerAuthStatus, setOwnerAuthStatus] = useState<StatusState | null>(null);
  const [broadcastStatus, setBroadcastStatus] = useState<StatusState | null>(null);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showUnauthorizedPage, setShowUnauthorizedPage] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loginSessions, setLoginSessions] = useState<LoginSession[]>([]);
  const [currentDeviceInfo, setCurrentDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isLoadingCustomers, setIsLoadingCustomers] = useState(false);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);
  const [isAutoSyncing, setIsAutoSyncing] = useState(false);
  const [ownerProfile, setOwnerProfile] = useState<OwnerProfile | null>(null);

  const isOwnerAuthed = useMemo(() => ownerProfile !== null, [ownerProfile]);

  // Загрузка данных при аутентификации
  useEffect(() => {
    if (isOwnerAuthed && ownerProfile?.email) {
      loadCustomers(ownerProfile.email);
      loadLoginSessions(ownerProfile.email);
      loadCurrentDeviceInfo();
    }
  }, [isOwnerAuthed, ownerProfile?.email]);

  // Автоматическая синхронизация
  useEffect(() => {
    if (isOwnerAuthed && ownerProfile?.email && !isAutoSyncing) {
      const interval = setInterval(() => {
        loadCustomers(ownerProfile.email);
        loadLoginSessions(ownerProfile.email);
        loadCurrentDeviceInfo();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isOwnerAuthed, ownerProfile?.email, isAutoSyncing]);

  function handleFormChange<K extends keyof RegistrationFormState>(key: K, value: RegistrationFormState[K]) {
    setFormState((prev) => ({ ...prev, [key]: value }));
  }

  function handleOwnerAuthChange<K extends keyof OwnerAuthState>(key: K, value: OwnerAuthState[K]) {
    setOwnerAuthState((prev) => ({ ...prev, [key]: value }));
  }

  async function handleOwnerLogin() {
    setIsOwnerAuthenticating(true);
    setOwnerAuthStatus(null);

    // Проверка учетных данных
    if (
      ownerAuthState.email !== validCredentials.email ||
      ownerAuthState.accessCode !== validCredentials.accessCode ||
      ownerAuthState.password !== validCredentials.password
    ) {
      setOwnerAuthStatus({ type: "error", message: "Невірні облікові дані" });
      setOwnerAuthState(defaultOwnerAuthState);
      setIsOwnerAuthenticating(false);
      return;
    }

    try {
      const response = await fetch("/api/owner/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: ownerAuthState.email,
          accessCode: ownerAuthState.accessCode,
          password: ownerAuthState.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("ownerEmail", ownerAuthState.email);
        setOwnerAuthStatus({ type: "success", message: result.message });
        setOwnerAuthState(defaultOwnerAuthState);
        await loadCustomers(ownerAuthState.email);
        await loadLoginSessions(ownerAuthState.email);
        await loadCurrentDeviceInfo();
        setOwnerProfile({
          id: "admin-001",
          email: ownerAuthState.email,
          name: "Адміністратор",
          accessCode: ownerAuthState.accessCode,
          isActive: true,
          lastLogin: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } else {
        setOwnerAuthStatus({ type: "error", message: result.message });
        setOwnerAuthState(defaultOwnerAuthState);
      }
    } catch (error) {
      setOwnerAuthStatus({ type: "error", message: "Помилка підключення до сервера" });
      setOwnerAuthState(defaultOwnerAuthState);
    } finally {
      setIsOwnerAuthenticating(false);
    }
  }

  function handleOwnerLogout() {
    setOwnerProfile(null);
    setOwnerAuthState(defaultOwnerAuthState);
    setOwnerAuthStatus(null);
    setCustomers([]);
    setLoginSessions([]);
    setCurrentDeviceInfo(null);
    localStorage.removeItem("ownerEmail");
  }

  function handleBackToGuestForm() {
    setShowUnauthorizedPage(false);
    setActiveTab("registration");
  }

  async function loadCustomers(ownerEmail: string) {
    if (isLoadingCustomers) return;
    setIsLoadingCustomers(true);
    try {
      const response = await fetch("/api/customers", {
        headers: {
          'x-owner-token': ownerEmail
        }
      });
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      }
    } catch (error) {
      console.error("Ошибка при загрузке клиентов:", error);
    } finally {
      setIsLoadingCustomers(false);
    }
  }

  async function loadLoginSessions(ownerEmail: string) {
    if (isLoadingSessions) return;
    setIsLoadingSessions(true);
    try {
      const response = await fetch("/api/owner/login-sessions", {
        headers: {
          'x-owner-token': ownerEmail
        }
      });
      if (response.ok) {
        const data = await response.json();
        setLoginSessions(data);
      }
    } catch (error) {
      console.error("Ошибка при загрузке сессий:", error);
    } finally {
      setIsLoadingSessions(false);
    }
  }

  async function loadCurrentDeviceInfo() {
    try {
      const adminEmail = 'sushi.master.admin.2024@secure-icon.com';
      const response = await fetch("/api/owner/current-device", {
        headers: {
          'x-owner-token': adminEmail
        }
      });
      if (response.ok) {
        const data = await response.json();
        setCurrentDeviceInfo(data);
      }
    } catch (error) {
      console.error("Ошибка при загрузке информации об устройстве:", error);
    }
  }

  async function handleBroadcastSubmit(event: FormEvent) {
    event.preventDefault();
    if (isBroadcasting) return;

    setIsBroadcasting(true);
    setBroadcastStatus(null);

    try {
      const response = await fetch("/api/owner/broadcast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(broadcastState),
      });

      const result = await response.json();

      if (response.ok) {
        setBroadcastStatus({ type: "success", message: result.message });
        setBroadcastState(defaultBroadcastFormState);
      } else {
        setBroadcastStatus({ type: "error", message: result.message });
      }
    } catch (err) {
      setBroadcastStatus({ type: "error", message: "Помилка підключення до сервера" });
    } finally {
      setIsBroadcasting(false);
    }
  }

  async function handleRegistrationSubmit(event: FormEvent) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok) {
        setShowThankYou(true);
        setFormState(defaultRegistrationFormState);
      } else {
        console.error("Ошибка при регистрации:", result.message);
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (showThankYou) {
    return <ThankYouPage customerData={formState} onClose={() => setShowThankYou(false)} />;
  }

  return (
    <div className="app">
      <div className="app__background">
        <LavaLamp />
      </div>
      
      <div className="app__content">
        <header className="app__header">
          <div className="header__content">
            <div className="header__logo">
              <img src="/src/assets/sushi-icon-logo.svg" alt="Sushi Logo" className="logo" />
              <h1 className="header__title">
                <ParticleTextEffect words = {["SUSHI ICON"]} />
              </h1>
            </div>
            <LanguageSwitcher />
          </div>
        </header>

        <main className="app__main">
          <div className="container">
            <div className="tabs">
              <button
                className={`tab ${activeTab === "registration" ? "tab--active" : ""}`}
                onClick={() => setActiveTab("registration")}
              >
                {t("tabs.registration")}
              </button>
              <button className={`tab ${activeTab === "owner" ? "tab--active" : ""}`} onClick={() => {
                setActiveTab("owner");
                setShowUnauthorizedPage(false);
              }}>
                {t("tabs.owner")}
              </button>
            </div>

            {activeTab === "registration" ? (
              <section className="card card--registration">
                <h2 className="card__title">{t("registration.cardTitle")}</h2>

                <form className="form" onSubmit={handleRegistrationSubmit}>
                  <div className="form__split">
                    <div className="form__row">
                      <label className="form__label" htmlFor="firstName">
                        {t("registration.fields.firstName")}
                      </label>
                      <input
                        id="firstName"
                        className="form__input"
                        type="text"
                        placeholder={t("registration.placeholders.firstName")}
                        value={formState.firstName}
                        onChange={(event) => handleFormChange("firstName", event.target.value)}
                        required
                      />
                    </div>

                    <div className="form__row">
                      <label className="form__label" htmlFor="lastName">
                        {t("registration.fields.lastName")}
                      </label>
                      <input
                        id="lastName"
                        className="form__input"
                        type="text"
                        placeholder={t("registration.placeholders.lastName")}
                        value={formState.lastName}
                        onChange={(event) => handleFormChange("lastName", event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="country">
                      {t("registration.fields.country")}
                    </label>
                    <SimpleCountrySelector
                      value={formState.country}
                      onChange={(value) => handleFormChange("country", value)}
                    />
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="phoneNumber">
                      {t("registration.fields.phone")}
                    </label>
                    <SimplePhoneInput
                      value={formState.phoneNumber}
                      onChange={(value) => handleFormChange("phoneNumber", value)}
                      countryCode={formState.country}
                    />
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="email">
                      {t("registration.fields.email")}
                    </label>
                    <input
                      id="email"
                      className="form__input"
                      type="email"
                      placeholder={t("registration.placeholders.email")}
                      value={formState.email}
                      onChange={(event) => handleFormChange("email", event.target.value)}
                      required
                    />
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="birthDate">
                      {t("registration.fields.birthDate")}
                    </label>
                    <DatePicker
                      value={formState.birthDate}
                      onChange={(value) => handleFormChange("birthDate", value)}
                    />
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="city">
                      {t("registration.fields.city")}
                    </label>
                    <input
                      id="city"
                      className="form__input"
                      type="text"
                      placeholder={t("registration.placeholders.city")}
                      value={formState.city}
                      onChange={(event) => handleFormChange("city", event.target.value)}
                    />
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="street">
                      {t("registration.fields.street")}
                    </label>
                    <input
                      id="street"
                      className="form__input"
                      type="text"
                      placeholder={t("registration.placeholders.street")}
                      value={formState.street}
                      onChange={(event) => handleFormChange("street", event.target.value)}
                    />
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="postalCode">
                      {t("registration.fields.postalCode")}
                    </label>
                    <input
                      id="postalCode"
                      className="form__input"
                      type="text"
                      placeholder={t("registration.placeholders.postalCode")}
                      value={formState.postalCode}
                      onChange={(event) => handleFormChange("postalCode", event.target.value)}
                    />
                  </div>

                  <div className="form__row">
                    <label className="form__label" htmlFor="preferredFood">
                      {t("registration.fields.preferredFood")}
                    </label>
                    <textarea
                      id="preferredFood"
                      className="form__textarea"
                      placeholder={t("registration.placeholders.preferredFood")}
                      value={formState.preferredFood || formState.feedback}
                      onChange={(event) => {
                        const v = event.target.value;
                        handleFormChange("preferredFood", v);
                        handleFormChange("feedback", v);
                      }}
                      rows={4}
                    />
                  </div>

                  <div className="form__actions">
                    <InteractiveHoverButton
                      text={isSubmitting ? t("registration.actions.submitting") : t("registration.actions.submit")}
                      className="button button--primary"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              </section>
            ) : (
              <section className="owner-section">
                {ownerProfile ? (
                  <EnhancedAdminPanel adminToken={ownerProfile.email} onLogout={handleOwnerLogout} />
                ) : showUnauthorizedPage ? (
                  <div className="card card--unauthorized">
                    <div className="unauthorized-page">
                      <div className="unauthorized-icon">🚫</div>
                      <h2 className="card__title">{t("owner.unauthorized.title")}</h2>
                      <p className="unauthorized-message">
                        {t("owner.unauthorized.message")}
                      </p>
                      <p className="unauthorized-subtitle">
                        {t("owner.unauthorized.subtitle")}
                      </p>
                      <div className="unauthorized-actions">
                        <InteractiveHoverButton 
                          text={t("owner.unauthorized.backToForm")}
                          className="button button--purple"
                          onClick={handleBackToGuestForm}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="card card--owner">
                    <h2 className="card__title">{t("owner.auth.title")}</h2>
                    
                    <div className="owner-auth">
                      <form className="form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form__row">
                          <label className="form__label" htmlFor="ownerEmail">
                            {t("owner.auth.fields.email")}
                          </label>
                          <input
                            id="ownerEmail"
                            className="form__input"
                            type="email"
                            placeholder={t("owner.auth.placeholders.email")}
                            value={ownerAuthState.email}
                            onChange={(event) => handleOwnerAuthChange("email", event.target.value)}
                            required
                          />
                        </div>

                        <div className="form__row">
                          <label className="form__label" htmlFor="ownerAccessCode">
                            {t("owner.auth.fields.accessCode")}
                          </label>
                          <input
                            id="ownerAccessCode"
                            className="form__input"
                            type="text"
                            placeholder={t("owner.auth.placeholders.accessCode")}
                            value={ownerAuthState.accessCode}
                            onChange={(event) => handleOwnerAuthChange("accessCode", event.target.value)}
                            required
                          />
                        </div>

                        <div className="form__row">
                          <label className="form__label" htmlFor="ownerPassword">
                            {t("owner.auth.fields.password")}
                          </label>
                          <input
                            id="ownerPassword"
                            className="form__input"
                            type="password"
                            placeholder={t("owner.auth.placeholders.password")}
                            value={ownerAuthState.password}
                            onChange={(event) => handleOwnerAuthChange("password", event.target.value)}
                            required
                          />
                        </div>

                        {ownerAuthStatus && (
                          <div className={`status status--${ownerAuthStatus.type}`}>
                            <span className="status__message">{ownerAuthStatus.message}</span>
                          </div>
                        )}

                        <div className="form__actions">
                          <InteractiveHoverButton 
                            text={isOwnerAuthenticating ? t("owner.auth.actions.logging") : t("owner.auth.actions.login")}
                            className="button button--purple"
                            onClick={handleOwnerLogin}
                            disabled={isOwnerAuthenticating}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
