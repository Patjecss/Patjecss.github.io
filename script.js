document.addEventListener('DOMContentLoaded', function() {
    loadCSV('data1.csv', 'table-body1');
    loadCSV('data2.csv', 'table-body2');
    loadCSV('data1.csv', 'table-body3');  // Voor de herhaling van de tabel
    loadCSV('data2.csv', 'table-body4');  // Voor de herhaling van de tabel
    loadCSV('data1.csv', 'table-body5');  // Voor de herhaling van de tabel
    loadCSV('data2.csv', 'table-body6');
});

function loadCSV(file, tableBodyId) {
    Papa.parse(file, {
        download: true,
        header: true,
        complete: function(results) {
            const tableBody = document.getElementById(tableBodyId);
            results.data.forEach(row => {
                const tr = document.createElement('tr');
                for (const cell in row) {
                    const td = document.createElement('td');
                    td.textContent = row[cell];
                    tr.appendChild(td);
                }
                tableBody.appendChild(tr);
            });
        }
    });
}

