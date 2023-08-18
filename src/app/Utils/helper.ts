export const getError = (
  minTemperature: number,
  maxTemperature: number,
  targetTemperature: number
): string | null => {
  if (minTemperature > maxTemperature)
    return `Min temperature (${minTemperature}) cannot be greater than max temperature (${maxTemperature})`;
  else if (minTemperature > targetTemperature)
    return `Min temperature (${minTemperature}) cannot be greater than target temperature (${targetTemperature})`;
  else if (targetTemperature > maxTemperature)
    return `Target temperature (${targetTemperature}) cannot be greater than max temperature (${maxTemperature})`;
  return null;
};

export const getKnobPosition = (
  min: number,
  max: number,
  target: number
): number => {
  const tempDiff = max - min;
  const normalizedTarget = target - min;
  const percentage = (normalizedTarget * 100) / tempDiff;
  const position = (280 * percentage) / 100;
  return position + 40;
};
