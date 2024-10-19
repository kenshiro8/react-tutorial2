export default function branchWeightUnit(Enlang) {
  if(Enlang === "us") {
    return "pounds";
  } else {
    return "stones";
  }
}

export default function branchTemperatureUnit(Enlang) {
  if(Enlang === "us") {
    return "fahrenheit";
  } else {
    return "celsius";
  }
}