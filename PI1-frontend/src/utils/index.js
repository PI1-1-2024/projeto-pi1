export function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
}

export function isMobileDevice() {
  const agent = navigator.userAgent;
  return agent.match(/Android/);
}
