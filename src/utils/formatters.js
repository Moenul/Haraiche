// Key Formatter: converts camelCase to "Camel Case"
export const keyFormatter = (key) => {
  return key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^./, (str) => str.toUpperCase());
};

// Date Time Formatter: formats date and time
export const dateTimeFormatter = (
  dateStr,
  options = { date: true, time: true, locale: "en-US" }
) => {
  const { date, time, locale } = options;
  const formatOptions = {};

  if (date) {
    Object.assign(formatOptions, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  if (time) {
    Object.assign(formatOptions, {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return new Date(dateStr).toLocaleString(locale, formatOptions);
};
