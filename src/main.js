const form = document.querySelector('#browser-form');
const input = document.querySelector('#url-input');
const frame = document.querySelector('#browser-frame');
const status = document.querySelector('#status');

function normalizeUrl(rawValue) {
  const trimmed = rawValue.trim();

  if (!trimmed) {
    throw new Error('URL cannot be empty.');
  }

  const hasProtocol = /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(trimmed);
  let candidate = trimmed;

  if (!hasProtocol) {
    candidate = `https://${trimmed}`;
  }

  try {
    const url = new URL(candidate);

    if (!['http:', 'https:'].includes(url.protocol)) {
      throw new Error('Only http and https URLs are allowed.');
    }

    return url.toString();
  } catch {
    throw new Error('Please enter a valid http or https URL.');
  }
}

function safeSetUrl(rawValue) {
  try {
    const safeUrl = normalizeUrl(rawValue);
    frame.src = safeUrl;
    input.value = safeUrl;
    status.textContent = `Navigating to ${safeUrl}`;
    return safeUrl;
  } catch (error) {
    status.textContent = error.message;
    input.focus();
    return null;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  safeSetUrl(input.value);
});

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    safeSetUrl(input.value);
  }
});

window.addEventListener('load', () => {
  status.textContent = 'Secure browser ready';
});
