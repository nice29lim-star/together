
import { ProjectData } from '../types';

/**
 * Sends data to a specific Google Apps Script Web App URL.
 * The payload includes the current date and the user input content.
 */
export const submitToGas = async (data: ProjectData): Promise<boolean> => {
  // 사용자가 복사한 GAS 웹 앱 URL을 여기에 붙여넣습니다.
  const GAS_WEB_APP_URL = '[복사한 GAS 웹 앱 URL]';
  
  const payload = {
    date: new Date().toLocaleString('ko-KR'),
    content: data
  };

  try {
    // Note: Google Apps Script Web Apps often require mode: 'no-cors' 
    // if not handling preflight correctly, but standard POST is preferred if configured for CORS.
    const response = await fetch(GAS_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // Common for GAS redirects
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // With no-cors, we can't see the response body, but the request is sent.
    console.log('Submission sent to GAS:', payload);
    return true;
  } catch (error) {
    console.error('Error submitting to GAS:', error);
    return false;
  }
};
