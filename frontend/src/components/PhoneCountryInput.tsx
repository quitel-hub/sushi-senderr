import { useTranslation } from "react-i18next";
import SimpleCountrySelector from "./SimpleCountrySelector";
import SimplePhoneInput from "./SimplePhoneInput";

interface PhoneCountryInputProps {
  countryCode: string;
  phoneNumber: string;
  onCountryChange: (countryCode: string) => void;
  onPhoneChange: (phoneNumber: string) => void;
  className?: string;
  required?: boolean;
}

const PhoneCountryInput: React.FC<PhoneCountryInputProps> = ({
  countryCode,
  phoneNumber,
  onCountryChange,
  onPhoneChange,
  className = "",
  required = false
}) => {
  const { t } = useTranslation();

  return (
    <div className={`phone-country-input ${className}`}>
      <div className="phone-country-container">
        <SimpleCountrySelector
          value={countryCode}
          onChange={onCountryChange}
          placeholder={t("registration.placeholders.country")}
        />
        <SimplePhoneInput
          value={phoneNumber}
          onChange={onPhoneChange}
          countryCode={countryCode}
          placeholder={t("registration.placeholders.phone")}
          required={required}
        />
      </div>
    </div>
  );
};

export default PhoneCountryInput;
