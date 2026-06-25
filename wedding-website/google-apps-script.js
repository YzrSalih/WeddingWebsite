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
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp ? new Date(data.timestamp) : new Date(),
      data.name || '',
      data.guests || '',
      data.notes || '',
    ]);

    formatSheet_(sheet);

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
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Zaman', 'İsim Soyisim', 'Kaç Kişi', 'Notlar']);
  }

  formatSheet_(sheet);

  return ContentService
    .createTextOutput('RSVP endpoint çalışıyor ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}

function formatSheet_(sheet) {
  const lastRow = Math.max(sheet.getLastRow(), 1);
  const lastColumn = 4;

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, lastColumn)
    .setValues([['Zaman', 'İsim Soyisim', 'Kaç Kişi', 'Notlar']])
    .setBackground('#5C3040')
    .setFontColor('#FFF8F8')
    .setFontWeight('bold')
    .setHorizontalAlignment('center');

  sheet.getRange(1, 1, lastRow, lastColumn)
    .setFontFamily('Lato')
    .setFontSize(11)
    .setVerticalAlignment('middle')
    .setBorder(true, true, true, true, true, true, '#E9D6DA', SpreadsheetApp.BorderStyle.SOLID);

  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, lastColumn)
      .setBackground('#FFF9FA')
      .setFontColor('#3A1E28');
    sheet.getRange(2, 1, lastRow - 1, 1)
      .setNumberFormat('dd.MM.yyyy HH:mm')
      .setHorizontalAlignment('center');
    sheet.getRange(2, 3, lastRow - 1, 1)
      .setHorizontalAlignment('center');
    sheet.getRange(2, 4, lastRow - 1, 1)
      .setWrap(true);
  }

  sheet.setColumnWidth(1, 150);
  sheet.setColumnWidth(2, 190);
  sheet.setColumnWidth(3, 95);
  sheet.setColumnWidth(4, 280);
  sheet.setRowHeights(1, lastRow, 34);
}
