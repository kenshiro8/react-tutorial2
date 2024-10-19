export function branchWeightUnit(Enlang) {
  if(Enlang === "us") {
    return "pounds";
  } else {
    return "stones";
  }
}

export function branchTemperatureUnit(Enlang) {
  if(Enlang === "us") {
    return "fahrenheit";
  } else {
    return "celsius";
  }
}