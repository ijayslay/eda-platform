// High-Performance EDA Platform Application

class EDAApplication {
    constructor() {
        this.currentData = [];
        this.selectedColumns = [];
        this.currentPage = 1;
        this.rowsPerPage = 50;
        this.filteredData = [];
        this.charts = [];
        
        this.sampleDatasets = {
            sales: {
                name: "Sales Performance Dataset",
                description: "E-commerce sales data with numerical and categorical variables",
                data: [
                    {"Date": "2024-01-01", "Product": "Laptop", "Category": "Electronics", "Sales": 1200, "Profit": 240, "Quantity": 2, "Region": "North"},
                    {"Date": "2024-01-02", "Product": "Smartphone", "Category": "Electronics", "Sales": 800, "Profit": 120, "Quantity": 1, "Region": "South"},
                    {"Date": "2024-01-03", "Product": "Headphones", "Category": "Electronics", "Sales": 150, "Profit": 45, "Quantity": 3, "Region": "East"},
                    {"Date": "2024-01-04", "Product": "Book", "Category": "Education", "Sales": 25, "Profit": 8, "Quantity": 5, "Region": "West"},
                    {"Date": "2024-01-05", "Product": "Tablet", "Category": "Electronics", "Sales": 600, "Profit": 90, "Quantity": 1, "Region": "North"},
                    {"Date": "2024-01-06", "Product": "Chair", "Category": "Furniture", "Sales": 200, "Profit": 60, "Quantity": 2, "Region": "South"},
                    {"Date": "2024-01-07", "Product": "Laptop", "Category": "Electronics", "Sales": 1300, "Profit": 280, "Quantity": 2, "Region": "East"},
                    {"Date": "2024-01-08", "Product": "Smartphone", "Category": "Electronics", "Sales": 750, "Profit": 110, "Quantity": 1, "Region": "West"},
                    {"Date": "2024-01-09", "Product": "Desk", "Category": "Furniture", "Sales": 400, "Profit": 120, "Quantity": 1, "Region": "North"},
                    {"Date": "2024-01-10", "Product": "Monitor", "Category": "Electronics", "Sales": 350, "Profit": 70, "Quantity": 1, "Region": "South"},
                    {"Date": "2024-01-11", "Product": "Keyboard", "Category": "Electronics", "Sales": 80, "Profit": 20, "Quantity": 4, "Region": "East"},
                    {"Date": "2024-01-12", "Product": "Mouse", "Category": "Electronics", "Sales": 45, "Profit": 15, "Quantity": 6, "Region": "West"},
                    {"Date": "2024-01-13", "Product": "Laptop", "Category": "Electronics", "Sales": 1150, "Profit": 230, "Quantity": 2, "Region": "North"},
                    {"Date": "2024-01-14", "Product": "Tablet", "Category": "Electronics", "Sales": 650, "Profit": 95, "Quantity": 1, "Region": "South"},
                    {"Date": "2024-01-15", "Product": "Printer", "Category": "Electronics", "Sales": 300, "Profit": 75, "Quantity": 1, "Region": "East"},
                    {"Date": "2024-01-16", "Product": "Book", "Category": "Education", "Sales": 30, "Profit": 10, "Quantity": 4, "Region": "West"},
                    {"Date": "2024-01-17", "Product": "Chair", "Category": "Furniture", "Sales": 180, "Profit": 50, "Quantity": 2, "Region": "North"},
                    {"Date": "2024-01-18", "Product": "Smartphone", "Category": "Electronics", "Sales": 900, "Profit": 140, "Quantity": 1, "Region": "South"},
                    {"Date": "2024-01-19", "Product": "Headphones", "Category": "Electronics", "Sales": 120, "Profit": 35, "Quantity": 2, "Region": "East"},
                    {"Date": "2024-01-20", "Product": "Laptop", "Category": "Electronics", "Sales": 1400, "Profit": 300, "Quantity": 2, "Region": "West"}
                ]
            },
            financial: {
                name: "Financial Market Data",
                description: "Stock market data with price movements and trading volumes",
                data: [
                    {"Date": "2024-01-01", "Symbol": "AAPL", "Open": 185.23, "High": 188.45, "Low": 184.12, "Close": 187.29, "Volume": 45230000, "MarketCap": 2890000000000},
                    {"Date": "2024-01-02", "Symbol": "AAPL", "Open": 187.50, "High": 189.34, "Low": 186.78, "Close": 188.92, "Volume": 38560000, "MarketCap": 2915000000000},
                    {"Date": "2024-01-03", "Symbol": "AAPL", "Open": 188.80, "High": 191.25, "Low": 187.95, "Close": 190.78, "Volume": 42180000, "MarketCap": 2944000000000},
                    {"Date": "2024-01-04", "Symbol": "AAPL", "Open": 190.45, "High": 192.67, "Low": 189.23, "Close": 191.45, "Volume": 39720000, "MarketCap": 2954000000000},
                    {"Date": "2024-01-05", "Symbol": "AAPL", "Open": 191.20, "High": 193.45, "Low": 190.67, "Close": 192.89, "Volume": 41350000, "MarketCap": 2976000000000},
                    {"Date": "2024-01-08", "Symbol": "GOOGL", "Open": 142.35, "High": 145.23, "Low": 141.78, "Close": 144.67, "Volume": 28340000, "MarketCap": 1823000000000},
                    {"Date": "2024-01-09", "Symbol": "GOOGL", "Open": 144.50, "High": 146.89, "Low": 143.45, "Close": 145.92, "Volume": 31250000, "MarketCap": 1838000000000},
                    {"Date": "2024-01-10", "Symbol": "GOOGL", "Open": 145.80, "High": 148.23, "Low": 144.95, "Close": 147.34, "Volume": 29780000, "MarketCap": 1856000000000},
                    {"Date": "2024-01-11", "Symbol": "MSFT", "Open": 385.67, "High": 389.45, "Low": 384.23, "Close": 387.89, "Volume": 22150000, "MarketCap": 2876000000000},
                    {"Date": "2024-01-12", "Symbol": "MSFT", "Open": 387.20, "High": 391.78, "Low": 386.45, "Close": 390.23, "Volume": 24680000, "MarketCap": 2894000000000},
                    {"Date": "2024-01-15", "Symbol": "TSLA", "Open": 248.56, "High": 253.89, "Low": 246.78, "Close": 251.23, "Volume": 89450000, "MarketCap": 798000000000},
                    {"Date": "2024-01-16", "Symbol": "TSLA", "Open": 251.00, "High": 255.67, "Low": 249.34, "Close": 254.12, "Volume": 92780000, "MarketCap": 807000000000},
                    {"Date": "2024-01-17", "Symbol": "TSLA", "Open": 254.45, "High": 258.23, "Low": 252.89, "Close": 256.78, "Volume": 87230000, "MarketCap": 815000000000},
                    {"Date": "2024-01-18", "Symbol": "AMZN", "Open": 153.45, "High": 156.78, "Low": 152.34, "Close": 155.67, "Volume": 35670000, "MarketCap": 1612000000000},
                    {"Date": "2024-01-19", "Symbol": "AMZN", "Open": 155.20, "High": 158.45, "Low": 154.67, "Close": 157.23, "Volume": 38920000, "MarketCap": 1628000000000},
                    {"Date": "2024-01-22", "Symbol": "NVDA", "Open": 875.34, "High": 892.67, "Low": 871.23, "Close": 889.45, "Volume": 48350000, "MarketCap": 2189000000000},
                    {"Date": "2024-01-23", "Symbol": "NVDA", "Open": 889.00, "High": 905.78, "Low": 885.45, "Close": 901.23, "Volume": 52780000, "MarketCap": 2218000000000},
                    {"Date": "2024-01-24", "Symbol": "META", "Open": 456.78, "High": 462.34, "Low": 453.89, "Close": 459.67, "Volume": 18450000, "MarketCap": 1163000000000},
                    {"Date": "2024-01-25", "Symbol": "META", "Open": 459.20, "High": 465.89, "Low": 457.34, "Close": 463.45, "Volume": 19680000, "MarketCap": 1173000000000},
                    {"Date": "2024-01-26", "Symbol": "NFLX", "Open": 498.67, "High": 506.23, "Low": 495.34, "Close": 503.78, "Volume": 12340000, "MarketCap": 218000000000}
                ]
            },
            scientific: {
                name: "Scientific Measurements",
                description: "Laboratory experiment data with multiple measurement variables",
                data: [
                    {"SampleID": "S001", "Temperature": 23.5, "Pressure": 1013.25, "pH": 7.2, "Conductivity": 150.3, "Turbidity": 2.1, "Experiment": "Control"},
                    {"SampleID": "S002", "Temperature": 25.1, "Pressure": 1012.8, "pH": 7.4, "Conductivity": 145.7, "Turbidity": 1.8, "Experiment": "Control"},
                    {"SampleID": "S003", "Temperature": 24.3, "Pressure": 1014.1, "pH": 7.1, "Conductivity": 152.9, "Turbidity": 2.3, "Experiment": "Control"},
                    {"SampleID": "S004", "Temperature": 27.8, "Pressure": 1011.5, "pH": 6.8, "Conductivity": 168.4, "Turbidity": 3.2, "Experiment": "Treatment_A"},
                    {"SampleID": "S005", "Temperature": 28.2, "Pressure": 1010.9, "pH": 6.9, "Conductivity": 165.2, "Turbidity": 3.0, "Experiment": "Treatment_A"},
                    {"SampleID": "S006", "Temperature": 26.9, "Pressure": 1012.3, "pH": 7.0, "Conductivity": 170.1, "Turbidity": 3.4, "Experiment": "Treatment_A"},
                    {"SampleID": "S007", "Temperature": 30.5, "Pressure": 1009.7, "pH": 6.5, "Conductivity": 182.7, "Turbidity": 4.1, "Experiment": "Treatment_B"},
                    {"SampleID": "S008", "Temperature": 31.2, "Pressure": 1008.9, "pH": 6.4, "Conductivity": 185.3, "Turbidity": 4.3, "Experiment": "Treatment_B"},
                    {"SampleID": "S009", "Temperature": 29.8, "Pressure": 1010.2, "pH": 6.6, "Conductivity": 178.9, "Turbidity": 3.9, "Experiment": "Treatment_B"},
                    {"SampleID": "S010", "Temperature": 22.1, "Pressure": 1015.3, "pH": 7.6, "Conductivity": 142.8, "Turbidity": 1.5, "Experiment": "Control"},
                    {"SampleID": "S011", "Temperature": 23.8, "Pressure": 1013.7, "pH": 7.3, "Conductivity": 148.6, "Turbidity": 1.9, "Experiment": "Control"},
                    {"SampleID": "S012", "Temperature": 26.5, "Pressure": 1011.8, "pH": 6.9, "Conductivity": 163.4, "Turbidity": 2.8, "Experiment": "Treatment_A"},
                    {"SampleID": "S013", "Temperature": 28.7, "Pressure": 1010.4, "pH": 6.7, "Conductivity": 172.1, "Turbidity": 3.5, "Experiment": "Treatment_A"},
                    {"SampleID": "S014", "Temperature": 32.1, "Pressure": 1008.1, "pH": 6.2, "Conductivity": 189.7, "Turbidity": 4.6, "Experiment": "Treatment_B"},
                    {"SampleID": "S015", "Temperature": 30.9, "Pressure": 1009.3, "pH": 6.3, "Conductivity": 187.2, "Turbidity": 4.4, "Experiment": "Treatment_B"},
                    {"SampleID": "S016", "Temperature": 24.7, "Pressure": 1013.9, "pH": 7.2, "Conductivity": 151.5, "Turbidity": 2.0, "Experiment": "Control"},
                    {"SampleID": "S017", "Temperature": 27.3, "Pressure": 1011.2, "pH": 6.8, "Conductivity": 166.8, "Turbidity": 3.1, "Experiment": "Treatment_A"},
                    {"SampleID": "S018", "Temperature": 29.4, "Pressure": 1009.8, "pH": 6.5, "Conductivity": 180.3, "Turbidity": 4.0, "Experiment": "Treatment_B"},
                    {"SampleID": "S019", "Temperature": 25.6, "Pressure": 1012.6, "pH": 7.1, "Conductivity": 156.2, "Turbidity": 2.4, "Experiment": "Control"},
                    {"SampleID": "S020", "Temperature": 28.9, "Pressure": 1010.7, "pH": 6.6, "Conductivity": 174.5, "Turbidity": 3.7, "Experiment": "Treatment_A"}
                ]
            }
        };
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // File upload
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileUpload(files[0]);
            }
        });
        
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                this.handleFileUpload(e.target.files[0]);
            }
        });

        // Sample data buttons
        document.querySelectorAll('[data-sample]').forEach(button => {
            button.addEventListener('click', (e) => {
                const sampleType = e.target.dataset.sample;
                this.loadSampleData(sampleType);
            });
        });

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterData(e.target.value);
        });

        // Pagination
        document.getElementById('prevPage').addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.renderTable();
            }
        });
        
        document.getElementById('nextPage').addEventListener('click', () => {
            const totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.renderTable();
            }
        });

        // Column selection
        document.getElementById('clearSelection').addEventListener('click', () => {
            this.clearColumnSelection();
        });
        
        document.getElementById('analyzeBtn').addEventListener('click', () => {
            this.performAnalysis();
        });

        // Export functionality
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportData();
        });
    }

    async handleFileUpload(file) {
        if (!file.name.toLowerCase().endsWith('.csv')) {
            alert('Please upload a CSV file.');
            return;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            alert('File size exceeds 10MB limit.');
            return;
        }

        this.showLoading();
        
        try {
            const text = await file.text();
            const data = this.parseCSV(text);
            this.loadData(data, file.name, file.size);
        } catch (error) {
            console.error('Error processing file:', error);
            alert('Error processing CSV file. Please check the file format.');
        } finally {
            this.hideLoading();
        }
    }

    parseCSV(text) {
        const lines = text.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        const data = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
            if (values.length === headers.length) {
                const row = {};
                headers.forEach((header, index) => {
                    row[header] = values[index];
                });
                data.push(row);
            }
        }

        return data;
    }

    loadSampleData(sampleType) {
        const sample = this.sampleDatasets[sampleType];
        if (sample) {
            this.showLoading();
            setTimeout(() => {
                this.loadData(sample.data, sample.name, 'Sample Data');
                this.hideLoading();
            }, 500);
        }
    }

    loadData(data, filename, fileSize) {
        this.currentData = data;
        this.filteredData = [...data];
        this.selectedColumns = [];
        this.currentPage = 1;
        
        this.updateDatasetInfo(filename, fileSize);
        this.renderTable();
        this.renderColumnSelection();
        this.showDataSections();
    }

    updateDatasetInfo(filename, fileSize) {
        const rowCount = this.currentData.length;
        const columnCount = Object.keys(this.currentData[0] || {}).length;
        const dataTypes = this.analyzeDataTypes();
        
        document.getElementById('rowCount').textContent = rowCount.toLocaleString();
        document.getElementById('columnCount').textContent = columnCount;
        document.getElementById('fileSize').textContent = typeof fileSize === 'number' 
            ? (fileSize / 1024).toFixed(1) + ' KB' 
            : fileSize;
        document.getElementById('dataTypes').textContent = Object.keys(dataTypes).join(', ');
        
        document.getElementById('datasetInfo').classList.remove('hidden');
    }

    analyzeDataTypes() {
        if (this.currentData.length === 0) return {};
        
        const columns = Object.keys(this.currentData[0]);
        const dataTypes = {};
        
        columns.forEach(column => {
            const values = this.currentData.map(row => row[column]).filter(v => v !== '' && v !== null && v !== undefined);
            const sampleValues = values.slice(0, Math.min(100, values.length));
            
            let numericalCount = 0;
            let dateCount = 0;
            
            sampleValues.forEach(value => {
                if (!isNaN(value) && !isNaN(parseFloat(value))) {
                    numericalCount++;
                } else if (this.isDate(value)) {
                    dateCount++;
                }
            });
            
            const numericalRatio = numericalCount / sampleValues.length;
            const dateRatio = dateCount / sampleValues.length;
            
            if (numericalRatio > 0.8) {
                dataTypes[column] = 'numerical';
            } else if (dateRatio > 0.5) {
                dataTypes[column] = 'datetime';
            } else {
                const uniqueValues = new Set(values);
                if (uniqueValues.size / values.length < 0.5) {
                    dataTypes[column] = 'categorical';
                } else {
                    dataTypes[column] = 'text';
                }
            }
        });
        
        return dataTypes;
    }

    isDate(value) {
        const datePatterns = [
            /^\d{4}-\d{2}-\d{2}$/,
            /^\d{2}\/\d{2}\/\d{4}$/,
            /^\d{2}-\d{2}-\d{4}$/
        ];
        return datePatterns.some(pattern => pattern.test(value)) && !isNaN(Date.parse(value));
    }

    renderTable() {
        const tableHeader = document.getElementById('tableHeader');
        const tableBody = document.getElementById('tableBody');
        
        if (this.currentData.length === 0) return;
        
        // Render header
        const columns = Object.keys(this.currentData[0]);
        const dataTypes = this.analyzeDataTypes();
        
        tableHeader.innerHTML = columns.map(column => {
            const type = dataTypes[column];
            return `<th>${column} <span class="column-type-badge type-${type}">${type}</span></th>`;
        }).join('');
        
        // Render body with pagination
        const startIndex = (this.currentPage - 1) * this.rowsPerPage;
        const endIndex = Math.min(startIndex + this.rowsPerPage, this.filteredData.length);
        const pageData = this.filteredData.slice(startIndex, endIndex);
        
        tableBody.innerHTML = pageData.map(row => {
            return `<tr>${columns.map(column => `<td>${row[column] || ''}</td>`).join('')}</tr>`;
        }).join('');
        
        // Update pagination info
        const totalPages = Math.ceil(this.filteredData.length / this.rowsPerPage);
        document.getElementById('pageInfo').textContent = `Page ${this.currentPage} of ${totalPages}`;
        
        // Update pagination buttons
        document.getElementById('prevPage').disabled = this.currentPage === 1;
        document.getElementById('nextPage').disabled = this.currentPage === totalPages;
    }

    renderColumnSelection() {
        const columnGrid = document.getElementById('columnGrid');
        if (this.currentData.length === 0) return;
        
        const columns = Object.keys(this.currentData[0]);
        const dataTypes = this.analyzeDataTypes();
        
        columnGrid.innerHTML = columns.map(column => {
            const type = dataTypes[column];
            const stats = this.calculateColumnStats(column, type);
            
            return `
                <div class="column-item" data-column="${column}">
                    <input type="checkbox" id="col-${column}" value="${column}">
                    <div class="column-info">
                        <div class="column-name">${column}</div>
                        <div class="column-type type-${type}">${type}</div>
                        <div class="column-stats">${stats}</div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add event listeners
        columnGrid.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateColumnSelection();
            });
        });
        
        columnGrid.querySelectorAll('.column-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.type !== 'checkbox') {
                    const checkbox = item.querySelector('input[type="checkbox"]');
                    checkbox.checked = !checkbox.checked;
                    this.updateColumnSelection();
                }
            });
        });
    }

    calculateColumnStats(column, type) {
        const values = this.currentData.map(row => row[column]).filter(v => v !== '' && v !== null && v !== undefined);
        
        if (type === 'numerical') {
            const numbers = values.map(v => parseFloat(v)).filter(n => !isNaN(n));
            if (numbers.length > 0) {
                const min = Math.min(...numbers);
                const max = Math.max(...numbers);
                const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
                return `Range: ${min.toFixed(1)} - ${max.toFixed(1)}, Mean: ${mean.toFixed(1)}`;
            }
        } else if (type === 'categorical') {
            const unique = new Set(values);
            const mostCommon = this.getMostCommon(values);
            return `${unique.size} unique values, Most common: ${mostCommon}`;
        }
        
        return `${values.length} non-empty values`;
    }

    getMostCommon(values) {
        const counts = {};
        let maxCount = 0;
        let mostCommon = '';
        
        values.forEach(value => {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] > maxCount) {
                maxCount = counts[value];
                mostCommon = value;
            }
        });
        
        return mostCommon;
    }

    updateColumnSelection() {
        const checkboxes = document.querySelectorAll('#columnGrid input[type="checkbox"]:checked');
        this.selectedColumns = Array.from(checkboxes).map(cb => cb.value);
        
        // Update visual selection
        document.querySelectorAll('.column-item').forEach(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
        
        // Enable/disable analyze button
        const analyzeBtn = document.getElementById('analyzeBtn');
        analyzeBtn.disabled = this.selectedColumns.length < 2 || this.selectedColumns.length > 3;
        
        // Limit to 3 columns
        if (this.selectedColumns.length >= 3) {
            document.querySelectorAll('#columnGrid input[type="checkbox"]:not(:checked)').forEach(cb => {
                cb.disabled = true;
                cb.closest('.column-item').style.opacity = '0.5';
            });
        } else {
            document.querySelectorAll('#columnGrid input[type="checkbox"]').forEach(cb => {
                cb.disabled = false;
                cb.closest('.column-item').style.opacity = '1';
            });
        }
    }

    clearColumnSelection() {
        document.querySelectorAll('#columnGrid input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
            checkbox.disabled = false;
            checkbox.closest('.column-item').classList.remove('selected');
            checkbox.closest('.column-item').style.opacity = '1';
        });
        
        this.selectedColumns = [];
        document.getElementById('analyzeBtn').disabled = true;
    }

    performAnalysis() {
        if (this.selectedColumns.length < 2) return;
        
        this.showLoading();
        
        setTimeout(() => {
            this.generateStatisticalProfile();
            this.generateVisualizations();
            this.showAnalysisSections();
            this.hideLoading();
        }, 1000);
    }

    generateStatisticalProfile() {
        const statsGrid = document.getElementById('statsGrid');
        const dataTypes = this.analyzeDataTypes();
        
        statsGrid.innerHTML = this.selectedColumns.map(column => {
            const type = dataTypes[column];
            const stats = this.calculateDetailedStats(column, type);
            
            return `
                <div class="stat-card">
                    <h4>${column} <span class="column-type-badge type-${type}">${type}</span></h4>
                    <div class="stat-grid">
                        ${this.renderStatsForType(stats, type)}
                    </div>
                </div>
            `;
        }).join('');
    }

    calculateDetailedStats(column, type) {
        const values = this.currentData.map(row => row[column]).filter(v => v !== '' && v !== null && v !== undefined);
        
        if (type === 'numerical') {
            const numbers = values.map(v => parseFloat(v)).filter(n => !isNaN(n));
            numbers.sort((a, b) => a - b);
            
            const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
            const median = numbers[Math.floor(numbers.length / 2)];
            const q1 = numbers[Math.floor(numbers.length * 0.25)];
            const q3 = numbers[Math.floor(numbers.length * 0.75)];
            const variance = numbers.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) / numbers.length;
            const std = Math.sqrt(variance);
            const iqr = q3 - q1;
            const lowerFence = q1 - 1.5 * iqr;
            const upperFence = q3 + 1.5 * iqr;
            const outliers = numbers.filter(n => n < lowerFence || n > upperFence);
            
            const skewness = this.calculateSkewness(numbers, mean, std);
            const kurtosis = this.calculateKurtosis(numbers, mean, std);
            
            return {
                mean: mean.toFixed(2),
                median: median.toFixed(2),
                mode: this.calculateMode(numbers),
                std: std.toFixed(2),
                variance: variance.toFixed(2),
                min: Math.min(...numbers).toFixed(2),
                max: Math.max(...numbers).toFixed(2),
                q1: q1.toFixed(2),
                q3: q3.toFixed(2),
                skewness: skewness.toFixed(2),
                kurtosis: kurtosis.toFixed(2),
                outliers: outliers.length,
                missing: this.currentData.length - values.length
            };
        } else {
            const uniqueValues = [...new Set(values)];
            const counts = {};
            values.forEach(v => counts[v] = (counts[v] || 0) + 1);
            const mostFrequent = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
            
            return {
                unique: uniqueValues.length,
                mostFrequent: mostFrequent,
                frequency: counts[mostFrequent],
                missing: this.currentData.length - values.length,
                cardinality: (uniqueValues.length / values.length * 100).toFixed(1) + '%'
            };
        }
    }

    calculateSkewness(numbers, mean, std) {
        const n = numbers.length;
        const sum = numbers.reduce((acc, num) => acc + Math.pow((num - mean) / std, 3), 0);
        return (n / ((n - 1) * (n - 2))) * sum;
    }

    calculateKurtosis(numbers, mean, std) {
        const n = numbers.length;
        const sum = numbers.reduce((acc, num) => acc + Math.pow((num - mean) / std, 4), 0);
        return (n * (n + 1) / ((n - 1) * (n - 2) * (n - 3))) * sum - (3 * Math.pow(n - 1, 2) / ((n - 2) * (n - 3)));
    }

    calculateMode(numbers) {
        const counts = {};
        numbers.forEach(n => counts[n] = (counts[n] || 0) + 1);
        const maxCount = Math.max(...Object.values(counts));
        const modes = Object.keys(counts).filter(n => counts[n] === maxCount);
        return modes.length === numbers.length ? 'No mode' : modes[0];
    }

    renderStatsForType(stats, type) {
        if (type === 'numerical') {
            return `
                <div class="stat-item"><span class="stat-value">${stats.mean}</span><span class="stat-label">Mean</span></div>
                <div class="stat-item"><span class="stat-value">${stats.median}</span><span class="stat-label">Median</span></div>
                <div class="stat-item"><span class="stat-value">${stats.std}</span><span class="stat-label">Std Dev</span></div>
                <div class="stat-item"><span class="stat-value">${stats.min}</span><span class="stat-label">Min</span></div>
                <div class="stat-item"><span class="stat-value">${stats.max}</span><span class="stat-label">Max</span></div>
                <div class="stat-item"><span class="stat-value">${stats.q1}</span><span class="stat-label">Q1</span></div>
                <div class="stat-item"><span class="stat-value">${stats.q3}</span><span class="stat-label">Q3</span></div>
                <div class="stat-item"><span class="stat-value">${stats.skewness}</span><span class="stat-label">Skewness</span></div>
                <div class="stat-item"><span class="stat-value">${stats.kurtosis}</span><span class="stat-label">Kurtosis</span></div>
                <div class="stat-item"><span class="stat-value">${stats.outliers}</span><span class="stat-label">Outliers</span></div>
            `;
        } else {
            return `
                <div class="stat-item"><span class="stat-value">${stats.unique}</span><span class="stat-label">Unique</span></div>
                <div class="stat-item"><span class="stat-value">${stats.mostFrequent}</span><span class="stat-label">Most Frequent</span></div>
                <div class="stat-item"><span class="stat-value">${stats.frequency}</span><span class="stat-label">Frequency</span></div>
                <div class="stat-item"><span class="stat-value">${stats.cardinality}</span><span class="stat-label">Cardinality</span></div>
                <div class="stat-item"><span class="stat-value">${stats.missing}</span><span class="stat-label">Missing</span></div>
            `;
        }
    }

    generateVisualizations() {
        const chartsContainer = document.getElementById('chartsContainer');
        const dataTypes = this.analyzeDataTypes();
        
        // Clear existing charts
        this.charts.forEach(chart => chart.destroy());
        this.charts = [];
        
        chartsContainer.innerHTML = '';
        
        // Generate different chart types based on column selection
        if (this.selectedColumns.length === 2) {
            this.generate2ColumnCharts(chartsContainer, dataTypes);
        } else if (this.selectedColumns.length === 3) {
            this.generate3ColumnCharts(chartsContainer, dataTypes);
        }
    }

    generate2ColumnCharts(container, dataTypes) {
        const [col1, col2] = this.selectedColumns;
        const type1 = dataTypes[col1];
        const type2 = dataTypes[col2];
        
        if (type1 === 'numerical' && type2 === 'numerical') {
            this.createScatterPlot(container, col1, col2);
            this.createCorrelationHeatmap(container, [col1, col2]);
        } else if (type1 === 'categorical' || type2 === 'categorical') {
            this.createGroupedBoxPlot(container, col1, col2, type1, type2);
            this.createBarChart(container, col1, col2, type1, type2);
        }
        
        // Always create individual histograms
        this.selectedColumns.forEach(col => {
            if (dataTypes[col] === 'numerical') {
                this.createHistogram(container, col);
            }
        });
    }

    generate3ColumnCharts(container, dataTypes) {
        const numericalColumns = this.selectedColumns.filter(col => dataTypes[col] === 'numerical');
        
        if (numericalColumns.length >= 3) {
            this.createBubbleChart(container, numericalColumns[0], numericalColumns[1], numericalColumns[2]);
        }
        
        this.createCorrelationHeatmap(container, this.selectedColumns.filter(col => dataTypes[col] === 'numerical'));
        
        // Create individual charts for each column
        this.selectedColumns.forEach(col => {
            if (dataTypes[col] === 'numerical') {
                this.createBoxPlot(container, col);
            }
        });
    }

    createScatterPlot(container, xCol, yCol) {
        const chartId = `scatter-${xCol}-${yCol}`;
        const chartHTML = this.createChartHTML(chartId, `Scatter Plot: ${xCol} vs ${yCol}`, 'Correlation analysis with trend line');
        container.insertAdjacentHTML('beforeend', chartHTML);
        
        const ctx = document.getElementById(chartId).getContext('2d');
        
        const data = this.currentData.map(row => ({
            x: parseFloat(row[xCol]),
            y: parseFloat(row[yCol])
        })).filter(point => !isNaN(point.x) && !isNaN(point.y));
        
        // Calculate correlation
        const correlation = this.calculateCorrelation(data.map(d => d.x), data.map(d => d.y));
        
        const chart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: `${xCol} vs ${yCol}`,
                    data: data,
                    backgroundColor: '#1FB8CD',
                    borderColor: '#1FB8CD',
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { title: { display: true, text: xCol } },
                    y: { title: { display: true, text: yCol } }
                },
                plugins: {
                    title: {
                        display: true,
                        text: `Correlation: ${correlation.toFixed(3)}`
                    }
                }
            }
        });
        
        this.charts.push(chart);
    }

    createHistogram(container, column) {
        const chartId = `histogram-${column}`;
        const chartHTML = this.createChartHTML(chartId, `Distribution: ${column}`, 'Frequency distribution with statistical overlays');
        container.insertAdjacentHTML('beforeend', chartHTML);
        
        const ctx = document.getElementById(chartId).getContext('2d');
        
        const values = this.currentData.map(row => parseFloat(row[column])).filter(v => !isNaN(v));
        const bins = this.createHistogramBins(values, 20);
        
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: bins.map(bin => `${bin.min.toFixed(1)}-${bin.max.toFixed(1)}`),
                datasets: [{
                    label: 'Frequency',
                    data: bins.map(bin => bin.count),
                    backgroundColor: '#1FB8CD',
                    borderColor: '#1FB8CD',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { title: { display: true, text: column } },
                    y: { title: { display: true, text: 'Frequency' } }
                }
            }
        });
        
        this.charts.push(chart);
    }

    createBoxPlot(container, column) {
        const chartId = `box-${column}`;
        const chartHTML = this.createChartHTML(chartId, `Box Plot: ${column}`, 'Statistical summary with quartiles and outliers');
        container.insertAdjacentHTML('beforeend', chartHTML);
        
        const ctx = document.getElementById(chartId).getContext('2d');
        const values = this.currentData.map(row => parseFloat(row[column])).filter(v => !isNaN(v)).sort((a, b) => a - b);
        
        const q1 = this.calculateQuantile(values, 0.25);
        const median = this.calculateQuantile(values, 0.5);
        const q3 = this.calculateQuantile(values, 0.75);
        const min = values[0];
        const max = values[values.length - 1];
        
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [column],
                datasets: [{
                    label: 'Box Plot Data',
                    data: [{ min, q1, median, q3, max }],
                    backgroundColor: '#FFC185',
                    borderColor: '#FFC185'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const data = context.raw;
                                return [
                                    `Min: ${data.min?.toFixed(2)}`,
                                    `Q1: ${data.q1?.toFixed(2)}`,
                                    `Median: ${data.median?.toFixed(2)}`,
                                    `Q3: ${data.q3?.toFixed(2)}`,
                                    `Max: ${data.max?.toFixed(2)}`
                                ];
                            }
                        }
                    }
                }
            }
        });
        
        this.charts.push(chart);
    }

    createCorrelationHeatmap(container, columns) {
        const chartId = `heatmap-${columns.join('-')}`;
        const chartHTML = this.createChartHTML(chartId, 'Correlation Matrix', 'Correlation coefficients between selected variables');
        container.insertAdjacentHTML('beforeend', chartHTML);
        
        const ctx = document.getElementById(chartId).getContext('2d');
        const correlations = this.calculateCorrelationMatrix(columns);
        
        // Create a simple visualization of correlation matrix
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: columns.map((col, i) => columns.slice(i + 1).map(col2 => `${col}-${col2}`)).flat(),
                datasets: [{
                    label: 'Correlation',
                    data: correlations.flat().filter((val, i) => i < correlations.length * (correlations.length - 1) / 2),
                    backgroundColor: '#B4413C'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { min: -1, max: 1, title: { display: true, text: 'Correlation Coefficient' } }
                }
            }
        });
        
        this.charts.push(chart);
    }

    createBubbleChart(container, xCol, yCol, sizeCol) {
        const chartId = `bubble-${xCol}-${yCol}-${sizeCol}`;
        const chartHTML = this.createChartHTML(chartId, `Bubble Chart: ${xCol} vs ${yCol} (size: ${sizeCol})`, 'Three-dimensional relationship analysis');
        container.insertAdjacentHTML('beforeend', chartHTML);
        
        const ctx = document.getElementById(chartId).getContext('2d');
        
        const data = this.currentData.map(row => ({
            x: parseFloat(row[xCol]),
            y: parseFloat(row[yCol]),
            r: Math.max(5, parseFloat(row[sizeCol]) / 100) // Scale bubble size
        })).filter(point => !isNaN(point.x) && !isNaN(point.y) && !isNaN(point.r));
        
        const chart = new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Data Points',
                    data: data,
                    backgroundColor: '#ECEBD5',
                    borderColor: '#5D878F'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { title: { display: true, text: xCol } },
                    y: { title: { display: true, text: yCol } }
                }
            }
        });
        
        this.charts.push(chart);
    }

    createGroupedBoxPlot(container, col1, col2, type1, type2) {
        const chartId = `grouped-box-${col1}-${col2}`;
        const numCol = type1 === 'numerical' ? col1 : col2;
        const catCol = type1 === 'categorical' ? col1 : col2;
        
        const chartHTML = this.createChartHTML(chartId, `${numCol} by ${catCol}`, 'Comparative analysis across categories');
        container.insertAdjacentHTML('beforeend', chartHTML);
        
        const ctx = document.getElementById(chartId).getContext('2d');
        
        const groups = {};
        this.currentData.forEach(row => {
            const category = row[catCol];
            const value = parseFloat(row[numCol]);
            if (!isNaN(value)) {
                if (!groups[category]) groups[category] = [];
                groups[category].push(value);
            }
        });
        
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(groups),
                datasets: [{
                    label: `Mean ${numCol}`,
                    data: Object.values(groups).map(values => values.reduce((a, b) => a + b, 0) / values.length),
                    backgroundColor: '#DB4545'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { title: { display: true, text: catCol } },
                    y: { title: { display: true, text: numCol } }
                }
            }
        });
        
        this.charts.push(chart);
    }

    createBarChart(container, col1, col2, type1, type2) {
        const chartId = `bar-${col1}-${col2}`;
        const chartHTML = this.createChartHTML(chartId, `Bar Chart: ${col1} vs ${col2}`, 'Category distribution analysis');
        container.insertAdjacentHTML('beforeend', chartHTML);
        
        const ctx = document.getElementById(chartId).getContext('2d');
        
        const catCol = type1 === 'categorical' ? col1 : col2;
        const counts = {};
        this.currentData.forEach(row => {
            const category = row[catCol];
            counts[category] = (counts[category] || 0) + 1;
        });
        
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(counts),
                datasets: [{
                    label: 'Count',
                    data: Object.values(counts),
                    backgroundColor: '#D2BA4C'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { title: { display: true, text: catCol } },
                    y: { title: { display: true, text: 'Count' } }
                }
            }
        });
        
        this.charts.push(chart);
    }

    createChartHTML(chartId, title, description) {
        return `
            <div class="chart-card">
                <div class="chart-header">
                    <h3 class="chart-title">${title}</h3>
                    <div class="chart-actions">
                        <button class="btn btn--outline btn--sm" onclick="app.exportChart('${chartId}')">Export</button>
                    </div>
                </div>
                <div class="chart-container" style="position: relative; height: 400px;">
                    <canvas id="${chartId}"></canvas>
                </div>
                <div class="chart-info">${description}</div>
            </div>
        `;
    }

    // Utility methods
    createHistogramBins(values, numBins) {
        const min = Math.min(...values);
        const max = Math.max(...values);
        const binWidth = (max - min) / numBins;
        const bins = [];
        
        for (let i = 0; i < numBins; i++) {
            const binMin = min + i * binWidth;
            const binMax = min + (i + 1) * binWidth;
            const count = values.filter(v => v >= binMin && (i === numBins - 1 ? v <= binMax : v < binMax)).length;
            bins.push({ min: binMin, max: binMax, count });
        }
        
        return bins;
    }

    calculateQuantile(values, quantile) {
        const index = quantile * (values.length - 1);
        if (Math.floor(index) === index) {
            return values[index];
        } else {
            const lower = values[Math.floor(index)];
            const upper = values[Math.ceil(index)];
            return lower + (upper - lower) * (index - Math.floor(index));
        }
    }

    calculateCorrelation(x, y) {
        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((acc, xi, i) => acc + xi * y[i], 0);
        const sumX2 = x.reduce((acc, xi) => acc + xi * xi, 0);
        const sumY2 = y.reduce((acc, yi) => acc + yi * yi, 0);
        
        const numerator = n * sumXY - sumX * sumY;
        const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
        
        return denominator === 0 ? 0 : numerator / denominator;
    }

    calculateCorrelationMatrix(columns) {
        const matrix = [];
        const numericData = {};
        
        columns.forEach(col => {
            numericData[col] = this.currentData.map(row => parseFloat(row[col])).filter(v => !isNaN(v));
        });
        
        for (let i = 0; i < columns.length; i++) {
            matrix[i] = [];
            for (let j = 0; j < columns.length; j++) {
                if (i === j) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = this.calculateCorrelation(numericData[columns[i]], numericData[columns[j]]);
                }
            }
        }
        
        return matrix;
    }

    filterData(searchTerm) {
        if (!searchTerm) {
            this.filteredData = [...this.currentData];
        } else {
            const term = searchTerm.toLowerCase();
            this.filteredData = this.currentData.filter(row => {
                return Object.values(row).some(value => 
                    value.toString().toLowerCase().includes(term)
                );
            });
        }
        
        this.currentPage = 1;
        this.renderTable();
    }

    exportChart(chartId) {
        const canvas = document.getElementById(chartId);
        const link = document.createElement('a');
        link.download = `${chartId}.png`;
        link.href = canvas.toDataURL();
        link.click();
    }

    exportData() {
        const csv = this.arrayToCSV(this.filteredData);
        const blob = new Blob([csv], { type: 'text/csv' });
        const link = document.createElement('a');
        link.download = 'filtered_data.csv';
        link.href = URL.createObjectURL(blob);
        link.click();
    }

    arrayToCSV(array) {
        if (array.length === 0) return '';
        
        const headers = Object.keys(array[0]);
        const csvContent = [
            headers.join(','),
            ...array.map(row => headers.map(header => `"${row[header]}"`).join(','))
        ].join('\n');
        
        return csvContent;
    }

    showDataSections() {
        document.getElementById('dataSection').classList.remove('hidden');
        document.getElementById('columnSelection').classList.remove('hidden');
    }

    showAnalysisSections() {
        document.getElementById('statsDashboard').classList.remove('hidden');
        document.getElementById('visualizationSection').classList.remove('hidden');
    }

    showLoading() {
        document.getElementById('loadingOverlay').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }
}

// Initialize the application
const app = new EDAApplication();