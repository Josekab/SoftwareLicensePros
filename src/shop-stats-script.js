document.addEventListener('DOMContentLoaded', function() {
    fetch('stats.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo CSV');
            }
            return response.text();
        })
        .then(csvData => {
            processCSVData(csvData);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function processCSVData(csvData) {
    const rows = csvData.split('\n');
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = ''; // Limpiar tabla
    let totalMonto = 0;

    rows.forEach((row, index) => {
        if (row.trim() !== '') {
            const columns = row.split(',');
            const correo = columns[0].trim();
            const monto = parseFloat(columns[1].trim());

            if (!isNaN(monto)) {
                totalMonto += monto;
            }

            if (index > 0) { // Saltar encabezado
                const newRow = document.createElement('tr');
                const correoCell = document.createElement('td');
                const montoCell = document.createElement('td');
                correoCell.textContent = correo;
                montoCell.textContent = `$${monto.toFixed(2)}`;
                newRow.appendChild(correoCell);
                newRow.appendChild(montoCell);
                tableBody.appendChild(newRow);
            }
        }
    });

    document.getElementById('totalMonto').textContent = `Total Acumulado: $${totalMonto.toFixed(2)}`;
}
