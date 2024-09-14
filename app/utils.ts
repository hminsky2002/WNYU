function trimSpinitronDescriptionString(s: string) {
  try {
    const val = s.slice(3, -4);
    return val;
  } catch (err) {
    return '';
  }
}

export { trimSpinitronDescriptionString };
