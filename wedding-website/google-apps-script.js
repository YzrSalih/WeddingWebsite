/**
 * Google Apps Script - RSVP Form Handler
 *
 * KURULUM ADIMLARI:
 * 1. Google Drive'da yeni bir Google Sheets oluşturun.
 * 2. Uzantılar > Apps Script menüsüne gidin.
 * 3. Bu dosyanın tüm içeriğini oraya yapıştırın.
 * 4. Kaydedin (Ctrl+S).
 * 5. Üstten "Dağıt" > "Yeni dağıtım" seçin.
 * 6. Tür: "Web uygulaması" seçin.
 * 7. Şu olarak çalıştır: "Ben (e-posta)" seçin.
 * 8. Erişim: "Herkes" seçin.
 * 9. "Dağıt" tıklayın ve oluşan URL'yi kopyalayın.
 * 10. Projedeki .env dosyasına VITE_GOOGLE_SCRIPT_URL=<URL> olarak ekleyin.
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Başlık satırı yoksa ekle
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Zaman', 'İsim Soyisim', 'Kaç Kişi', 'Notlar']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.guests || '',
      data.notes || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('RSVP endpoint çalışıyor ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}
