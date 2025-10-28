import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface DataExporterProps {
  ownerEmail: string;
  customerCount: number;
}

type ExportFormat = 'csv' | 'json' | 'google-sheets';

export const DataExporter: React.FC<DataExporterProps> = ({ ownerEmail, customerCount }) => {
  const { t } = useTranslation();
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleExport = async (format: ExportFormat) => {
    setIsExporting(true);
    setExportStatus(null);

    try {
      if (format === 'csv') {
        // Экспорт в CSV
        const response = await fetch('/api/export/customers', {
          headers: {
            'x-owner-token': ownerEmail,
          },
        });

        if (!response.ok) {
          throw new Error('Ошибка при экспорте данных');
        }

        // Создаем blob и скачиваем файл
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sushi_customers_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setExportStatus({ type: 'success', message: 'Данные успешно экспортированы в CSV файл' });
      } else if (format === 'json') {
        // Экспорт в JSON для Google Sheets
        const response = await fetch('/api/export/customers/json', {
          headers: {
            'x-owner-token': ownerEmail,
          },
        });

        if (!response.ok) {
          throw new Error('Ошибка при экспорте данных');
        }

        const data = await response.json();
        
        // Создаем JSON файл для скачивания
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sushi_customers_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setExportStatus({ type: 'success', message: `Данные экспортированы в JSON (${data.total} записей)` });
      } else if (format === 'google-sheets') {
        // Создаем инструкции для Google Sheets
        const instructions = `
ИНСТРУКЦИЯ ПО ИМПОРТУ В GOOGLE ТАБЛИЦЫ:

1. Скачайте данные в CSV формате (кнопка "Экспорт CSV")
2. Откройте Google Sheets (sheets.google.com)
3. Создайте новую таблицу
4. Нажмите "Файл" → "Импорт"
5. Выберите "Загрузить" и загрузите CSV файл
6. В настройках импорта выберите:
   - Разделитель: Запятая
   - Кодировка: UTF-8
   - Заменить текущий лист
7. Нажмите "Импортировать данные"

АЛЬТЕРНАТИВНЫЙ СПОСОБ:
1. Скачайте JSON файл (кнопка "Экспорт JSON")
2. Используйте онлайн конвертер JSON в CSV
3. Импортируйте полученный CSV в Google Sheets

ДОСТУПНЫЕ ДАННЫЕ:
- ID клиента
- Имя и фамилия
- Страна
- Телефон и email
- Дата рождения
- Адрес (город, улица, почтовый индекс)
- Предпочтения в еде
- Отзывы
- Промокоды
- Даты регистрации

Всего записей: ${customerCount}
Дата экспорта: ${new Date().toLocaleString('ru-RU')}
        `;

        // Создаем текстовый файл с инструкциями
        const blob = new Blob([instructions], { type: 'text/plain; charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `google_sheets_import_instructions_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setExportStatus({ type: 'success', message: 'Инструкции для Google Sheets скачаны' });
      }
    } catch (error) {
      console.error('Export error:', error);
      setExportStatus({ type: 'error', message: 'Ошибка при экспорте данных' });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="data-exporter">
      <h4 className="data-exporter__title">📊 {t("owner.export.title")}</h4>
      <p className="data-exporter__subtitle">
        {t("owner.export.subtitle")}
      </p>
      
      <div className="data-exporter__formats">
        <div className="export-format">
          <h5>📄 {t("owner.export.formats.csv.title")}</h5>
          <p>{t("owner.export.formats.csv.description")}</p>
          <button 
            className="button button--turquoise"
            onClick={() => handleExport('csv')}
            disabled={isExporting || customerCount === 0}
          >
            {isExporting ? t("owner.export.status.exporting") : t("owner.export.formats.csv.button")}
          </button>
        </div>

        <div className="export-format">
          <h5>📋 {t("owner.export.formats.json.title")}</h5>
          <p>{t("owner.export.formats.json.description")}</p>
          <button 
            className="button button--purple"
            onClick={() => handleExport('json')}
            disabled={isExporting || customerCount === 0}
          >
            {isExporting ? t("owner.export.status.exporting") : t("owner.export.formats.json.button")}
          </button>
        </div>

        <div className="export-format">
          <h5>📊 {t("owner.export.formats.googleSheets.title")}</h5>
          <p>{t("owner.export.formats.googleSheets.description")}</p>
          <button 
            className="button button--green"
            onClick={() => handleExport('google-sheets')}
            disabled={isExporting || customerCount === 0}
          >
            {isExporting ? t("owner.export.status.preparing") : t("owner.export.formats.googleSheets.button")}
          </button>
        </div>
      </div>

      {exportStatus && (
        <div className={`status status--${exportStatus.type}`}>
          <span className="status__message">{exportStatus.message}</span>
        </div>
      )}

      {customerCount === 0 && (
        <div className="data-exporter__empty">
          <p>⚠️ {t("owner.export.empty")}</p>
        </div>
      )}

      <div className="data-exporter__info">
        <h5>💡 {t("owner.export.tips.title")}</h5>
        <ul>
          <li>{t("owner.export.tips.csv")}</li>
          <li>{t("owner.export.tips.googleSheets")}</li>
          <li>{t("owner.export.tips.json")}</li>
          <li>{t("owner.export.tips.fullData")}</li>
          <li>{t("owner.export.tips.encoding")}</li>
        </ul>
      </div>
    </div>
  );
};
